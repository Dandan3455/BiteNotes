const SIMPLIFIED_MARKERS = /[营养钙钠饱纤维装参]/u;
const TRADITIONAL_MARKERS = /[營養鈣鈉飽纖維裝參]/u;
const FRENCH_MARKERS = /\b(valeur nutritive|lipides|glucides|fibres|sucres|protéines|proteines|pour|portion|énergie|energie)\b/iu;
const ENGLISH_MARKERS = /\b(nutrition facts|serving size|servings per|total fat|carbohydrate|dietary (?:fibre|fiber)|daily value|protein)\b/iu;

export function normalizeCharacters(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .replace(/[\u00a0\u2007\u202f]/gu, ' ')
    .replace(/[：﹕]/gu, ':')
    .replace(/[／]/gu, '/')
    .replace(/[％]/gu, '%')
    .replace(/[≤]/gu, '≤')
    .replace(/\s+/gu, ' ')
    .trim();
}

export function normalizeForMatch(value) {
  return normalizeCharacters(value)
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/gu, '')
    .replace(/\s+/gu, '')
    .trim();
}

export function detectLanguages(value) {
  const text = normalizeCharacters(value);
  const languages = [];

  if (ENGLISH_MARKERS.test(text)) languages.push('en');
  if (FRENCH_MARKERS.test(text)) languages.push('fr');
  if (SIMPLIFIED_MARKERS.test(text)) languages.push('zh-Hans');
  if (TRADITIONAL_MARKERS.test(text)) languages.push('zh-Hant');

  if (/\p{Script=Han}/u.test(text) && !languages.some(language => language.startsWith('zh-'))) {
    languages.push('zh-Hans');
  }

  const meaningfulLatinWords = text.match(/\b[A-Za-zÀ-ÿ]{3,}\b/gu)
    ?.filter(word => !['nrv', 'kcal'].includes(word.toLocaleLowerCase())) || [];
  if (meaningfulLatinWords.length && !languages.includes('en') && !languages.includes('fr')) {
    languages.push('en');
  }

  return languages;
}

function safeBox(box = {}) {
  const x0 = Number(box.x0) || 0;
  const y0 = Number(box.y0) || 0;
  const x1 = Number(box.x1) || x0;
  const y1 = Number(box.y1) || y0;
  return { x0, y0, x1, y1 };
}

function relativeBox(box, width, height) {
  const safeWidth = Math.max(Number(width) || box.x1 || 1, 1);
  const safeHeight = Math.max(Number(height) || box.y1 || 1, 1);
  return {
    x: box.x0 / safeWidth,
    y: box.y0 / safeHeight,
    width: Math.max(box.x1 - box.x0, 0) / safeWidth,
    height: Math.max(box.y1 - box.y0, 0) / safeHeight,
  };
}

function normalizeWord(word, width, height) {
  const bbox = safeBox(word?.bbox);
  return {
    text: normalizeCharacters(word?.text),
    confidence: Number.isFinite(Number(word?.confidence)) ? Number(word.confidence) : 0,
    bbox,
    relativeBox: relativeBox(bbox, width, height),
  };
}

function normalizeLine(line, width, height, index) {
  const words = Array.isArray(line?.words)
    ? line.words.map(word => normalizeWord(word, width, height)).filter(word => word.text)
    : [];
  const bbox = safeBox(line?.bbox);
  const text = normalizeCharacters(words.length ? words.map(word => word.text).join(' ') : line?.text);
  return {
    id: String(line?.id ?? `line-${index}`),
    text,
    confidence: Number.isFinite(Number(line?.confidence)) ? Number(line.confidence) : 0,
    bbox,
    relativeBox: relativeBox(bbox, width, height),
    words,
  };
}

function boxHeight(line) {
  return Math.max(line.bbox.y1 - line.bbox.y0, 0);
}

function centerY(line) {
  return (line.bbox.y0 + line.bbox.y1) / 2;
}

function sharesVisualRow(left, right) {
  const leftHeight = boxHeight(left);
  const rightHeight = boxHeight(right);
  if (!leftHeight || !rightHeight) return false;

  const overlap = Math.max(
    0,
    Math.min(left.bbox.y1, right.bbox.y1) - Math.max(left.bbox.y0, right.bbox.y0),
  );
  const overlapRatio = overlap / Math.max(Math.min(leftHeight, rightHeight), 1);
  const centerDistance = Math.abs(centerY(left) - centerY(right));
  return overlapRatio >= 0.35
    || centerDistance <= Math.max(5, Math.min(leftHeight, rightHeight) * 0.55);
}

function mergeVisualRow(rowLines, width, height, index) {
  const sortedLines = [...rowLines].sort((left, right) => left.bbox.x0 - right.bbox.x0);
  const words = sortedLines.flatMap(line => (
    line.words.length
      ? line.words
      : [{
        text: line.text,
        confidence: line.confidence,
        bbox: line.bbox,
        relativeBox: line.relativeBox,
      }]
  )).filter(word => word.text)
    .sort((left, right) => left.bbox.x0 - right.bbox.x0);

  const bbox = {
    x0: Math.min(...sortedLines.map(line => line.bbox.x0)),
    y0: Math.min(...sortedLines.map(line => line.bbox.y0)),
    x1: Math.max(...sortedLines.map(line => line.bbox.x1)),
    y1: Math.max(...sortedLines.map(line => line.bbox.y1)),
  };
  const confidence = sortedLines.reduce((sum, line) => sum + line.confidence, 0)
    / Math.max(sortedLines.length, 1);

  return {
    id: `visual-row-${index}`,
    text: normalizeCharacters(words.map(word => word.text).join(' ')),
    confidence,
    bbox,
    relativeBox: relativeBox(bbox, width, height),
    words,
    sourceLineIds: sortedLines.map(line => line.id),
  };
}

export function buildLogicalRows(lines = [], width = 0, height = 0) {
  const sortedLines = lines.filter(line => line?.text)
    .slice()
    .sort((left, right) => left.bbox.y0 - right.bbox.y0 || left.bbox.x0 - right.bbox.x0);
  const rowGroups = [];

  sortedLines.forEach(line => {
    const matchingGroup = rowGroups
      .map(group => ({
        group,
        distance: Math.min(...group.map(item => Math.abs(centerY(item) - centerY(line)))),
      }))
      .filter(item => item.group.some(groupLine => sharesVisualRow(groupLine, line)))
      .sort((left, right) => left.distance - right.distance)[0]?.group;

    if (matchingGroup) matchingGroup.push(line);
    else rowGroups.push([line]);
  });

  const effectiveWidth = width || Math.max(...sortedLines.map(line => line.bbox.x1), 1);
  const effectiveHeight = height || Math.max(...sortedLines.map(line => line.bbox.y1), 1);
  return rowGroups
    .map((group, index) => mergeVisualRow(group, effectiveWidth, effectiveHeight, index))
    .sort((left, right) => left.bbox.y0 - right.bbox.y0 || left.bbox.x0 - right.bbox.x0);
}

function textFallbackLines(text, width, height) {
  const values = String(text ?? '').split(/\r?\n/u).map(normalizeCharacters).filter(Boolean);
  return values.map((value, index) => {
    const y0 = index * 24;
    return normalizeLine({
      id: `fallback-${index}`,
      text: value,
      confidence: 0,
      bbox: { x0: 0, y0, x1: width || 1000, y1: y0 + 20 },
      words: [],
    }, width || 1000, height || Math.max(values.length * 24, 1), index);
  });
}

function linesFromTesseractBlocks(blocks, width, height) {
  const lines = [];
  const normalizedBlocks = [];

  (blocks || []).forEach((block, blockIndex) => {
    const blockLines = [];
    (block.paragraphs || []).forEach(paragraph => {
      (paragraph.lines || []).forEach(line => {
        const normalized = normalizeLine(line, width, height, lines.length);
        if (!normalized.text) return;
        lines.push(normalized);
        blockLines.push(normalized);
      });
    });
    const bbox = safeBox(block.bbox);
    normalizedBlocks.push({
      id: `block-${blockIndex}`,
      text: normalizeCharacters(block.text),
      confidence: Number(block.confidence) || 0,
      bbox,
      relativeBox: relativeBox(bbox, width, height),
      lines: blockLines,
    });
  });

  return { lines, blocks: normalizedBlocks };
}

export function normalizeOcrResult(input = {}) {
  const page = input.data || input;
  const width = Number(page.width || input.width) || 0;
  const height = Number(page.height || input.height) || 0;
  let lines = [];
  let blocks = [];

  if (Array.isArray(page.lines)) {
    lines = page.lines.map((line, index) => normalizeLine(line, width, height, index));
  } else if (Array.isArray(page.blocks)) {
    ({ lines, blocks } = linesFromTesseractBlocks(page.blocks, width, height));
  }

  if (!lines.length) lines = textFallbackLines(page.text, width, height);
  lines.sort((left, right) => left.bbox.y0 - right.bbox.y0 || left.bbox.x0 - right.bbox.x0);

  const text = normalizeCharacters(page.text || lines.map(line => line.text).join('\n'));
  const confidence = Number.isFinite(Number(page.confidence))
    ? Number(page.confidence)
    : (lines.reduce((sum, line) => sum + line.confidence, 0) / Math.max(lines.length, 1));

  return {
    text,
    confidence,
    width,
    height,
    lines,
    blocks,
    detectedLanguages: detectLanguages(text),
    rotationRadians: Number(page.rotateRadians) || 0,
  };
}
