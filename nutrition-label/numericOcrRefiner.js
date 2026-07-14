import {
  CORE_NUTRITION_FIELDS,
  NUTRITION_FIELD_DEFINITIONS,
  SORTED_FIELD_ENTRIES,
} from './fieldAliases.js';
import { NumericImagePreprocessor } from './numericImagePreprocessor.js';
import { deriveNutrientsPer100g } from './nutritionParser.js';
import { normalizeCharacters, normalizeForMatch } from './ocrTextNormalizer.js';

const TOKEN_WHITELIST = '0123456789.,gGmMkKjJcCaAlL千焦卡大克公毫升';
const NUMBER_WHITELIST = '0123456789.,';
const UNIT_PATTERN = /^(?:g|mg|kj|kcal|cal|克|公克|毫克|千焦|千卡|大卡)$/iu;

function confidenceRatio(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(number > 1 ? number / 100 : number, 1));
}

function rounded(value) {
  return Math.round(Number(value) * 1000) / 1000;
}

function validBox(box) {
  return box
    && [box.x0, box.y0, box.x1, box.y1].every(value => Number.isFinite(Number(value)))
    && Number(box.x1) > Number(box.x0)
    && Number(box.y1) > Number(box.y0);
}

function sameValue(left, right) {
  if (!Number.isFinite(Number(left)) || !Number.isFinite(Number(right))) return false;
  const tolerance = Math.max(0.015, Math.abs(Number(left)) * 0.002);
  return Math.abs(Number(left) - Number(right)) <= tolerance;
}

function fieldForRow(row) {
  return SORTED_FIELD_ENTRIES.find(([, definition]) => (
    definition.aliases.some(alias => normalizeForMatch(row.text).includes(normalizeForMatch(alias)))
  ))?.[0] || '';
}

function rowForField(parsed, fieldKey, preferredBox = null) {
  const rows = parsed?.ocr?.logicalRows?.length
    ? parsed.ocr.logicalRows
    : (parsed?.ocr?.lines || []);
  const matches = rows.filter(row => fieldForRow(row) === fieldKey);
  if (!matches.length || !validBox(preferredBox)) return matches[0] || null;
  const preferredY = (Number(preferredBox.y0) + Number(preferredBox.y1)) / 2;
  return matches.reduce((closest, row) => {
    const rowY = (Number(row.bbox.y0) + Number(row.bbox.y1)) / 2;
    const closestY = (Number(closest.bbox.y0) + Number(closest.bbox.y1)) / 2;
    return Math.abs(rowY - preferredY) < Math.abs(closestY - preferredY) ? row : closest;
  }, matches[0]);
}

function isPercentageWord(words, index) {
  const text = normalizeCharacters(words[index]?.text);
  if (text.includes('%')) return true;
  const next = normalizeCharacters(words[index + 1]?.text);
  return next === '%' || next.startsWith('%');
}

function fallbackValueBox(row, columnX = 0) {
  const words = [...(row?.words || [])].sort((left, right) => left.bbox.x0 - right.bbox.x0);
  const numericWords = words.filter((word, index) => (
    /[0-9]/u.test(normalizeCharacters(word.text)) && !isPercentageWord(words, index)
  ));
  if (!numericWords.length) {
    if (!validBox(row?.bbox)) return null;
    const rowHeight = Math.max(row.bbox.y1 - row.bbox.y0, 1);
    const rowWidth = Math.max(row.bbox.x1 - row.bbox.x0, 1);
    const targetX = Number(columnX) > 0
      ? Number(columnX)
      : row.bbox.x0 + rowWidth * 0.64;
    const halfWidth = Math.min(rowHeight * 2.4, rowWidth * 0.2);
    return {
      x0: Math.max(row.bbox.x0, targetX - halfWidth),
      y0: row.bbox.y0,
      x1: Math.min(row.bbox.x1, targetX + halfWidth),
      y1: row.bbox.y1,
    };
  }
  if (!Number.isFinite(Number(columnX)) || Number(columnX) <= 0) return { ...numericWords[0].bbox };
  return {
    ...numericWords.reduce((closest, word) => {
      const center = (word.bbox.x0 + word.bbox.x1) / 2;
      const closestCenter = (closest.bbox.x0 + closest.bbox.x1) / 2;
      return Math.abs(center - columnX) < Math.abs(closestCenter - columnX) ? word : closest;
    }, numericWords[0]).bbox,
  };
}

function includeAdjacentUnit(row, bbox) {
  if (!validBox(bbox)) return bbox;
  const height = Number(bbox.y1) - Number(bbox.y0);
  const nextUnit = [...(row?.words || [])]
    .filter(word => word.bbox.x0 >= bbox.x1 - 1)
    .sort((left, right) => left.bbox.x0 - right.bbox.x0)
    .find(word => (
      word.bbox.x0 - bbox.x1 <= height * 1.2
      && UNIT_PATTERN.test(normalizeCharacters(word.text).replace(/\s+/gu, ''))
    ));
  if (!nextUnit) return { ...bbox };
  return {
    x0: bbox.x0,
    y0: Math.min(bbox.y0, nextUnit.bbox.y0),
    x1: nextUnit.bbox.x1,
    y1: Math.max(bbox.y1, nextUnit.bbox.y1),
  };
}

export function locateNumericRegion(parsed, group, fieldKey) {
  const nutrient = group?.nutrients?.[fieldKey];
  const row = rowForField(parsed, fieldKey, nutrient?.valueBbox);
  if (!row) return null;
  const box = validBox(nutrient?.valueBbox)
    ? nutrient.valueBbox
    : fallbackValueBox(row, nutrient?.columnX ?? group?.columnX);
  return validBox(box) ? includeAdjacentUnit(row, box) : null;
}

function normalizedExpectedUnit(fieldKey, value) {
  const unit = normalizeForMatch(value);
  if (fieldKey === 'calories_kcal') {
    if (unit.includes('kj') || unit.includes('千焦')) return 'kJ';
    return 'kcal';
  }
  if (unit.includes('mg') || unit.includes('毫克')) return 'mg';
  return 'g';
}

function detectedUnit(text, fieldKey) {
  const normalized = normalizeForMatch(text);
  if (fieldKey === 'calories_kcal') {
    if (normalized.includes('kcal') || normalized.includes('千卡') || normalized.includes('大卡')) {
      return 'kcal';
    }
    if (normalized.includes('kj') || normalized.includes('千焦')) return 'kJ';
    return '';
  }
  if (normalized.includes('mg') || normalized.includes('毫克')) return 'mg';
  if (/(?:g|克|公克)/u.test(normalized)) return 'g';
  return '';
}

export function parseNumericOcrText(
  text,
  fieldKey,
  { confidence = 0, expectedUnit = '', passId = '', trimRightRatio = 0 } = {},
) {
  const compact = normalizeCharacters(text).replace(/\s+/gu, '');
  const match = compact.match(/(?:[0-9]+(?:[.,][0-9]+)?|[.,][0-9]+)/u);
  if (!match) return null;
  const originalValue = Number(match[0].replace(',', '.'));
  if (!Number.isFinite(originalValue)) return null;

  const explicitUnit = detectedUnit(compact.slice(match.index + match[0].length), fieldKey);
  const unit = explicitUnit || normalizedExpectedUnit(fieldKey, expectedUnit);
  let value = originalValue;
  if (fieldKey === 'calories_kcal' && unit === 'kJ') value /= 4.184;
  if (fieldKey !== 'calories_kcal' && unit === 'mg') value /= 1000;

  return {
    value: rounded(value),
    originalValue,
    originalUnit: unit,
    explicitUnit: Boolean(explicitUnit),
    hasDecimal: /[.,]/u.test(match[0]),
    confidence: confidenceRatio(confidence),
    rawText: compact,
    passId,
    trimRightRatio,
    initial: false,
  };
}

function clusterCandidates(candidates) {
  const clusters = [];
  candidates.filter(candidate => Number.isFinite(Number(candidate?.value))).forEach(candidate => {
    const cluster = clusters.find(item => sameValue(item.value, candidate.value));
    if (cluster) cluster.candidates.push(candidate);
    else clusters.push({ value: candidate.value, candidates: [candidate] });
  });

  return clusters.map(cluster => {
    const sortedValues = cluster.candidates.map(candidate => candidate.value).sort((a, b) => a - b);
    const value = sortedValues[Math.floor(sortedValues.length / 2)];
    const refined = cluster.candidates.filter(candidate => !candidate.initial);
    const confidence = refined.reduce((sum, candidate) => sum + candidate.confidence, 0)
      / Math.max(refined.length, 1);
    const explicitUnits = refined.filter(candidate => candidate.explicitUnit).length;
    const decimals = refined.filter(candidate => candidate.hasDecimal).length;
    const trimmed = refined.filter(candidate => candidate.trimRightRatio > 0).length;
    const hasInitial = cluster.candidates.some(candidate => candidate.initial);
    const evidence = refined.length + (hasInitial ? 0.35 : 0);
    const representative = [...cluster.candidates]
      .sort((left, right) => (
        Number(right.explicitUnit) - Number(left.explicitUnit)
        || right.confidence - left.confidence
      ))[0];
    return {
      value,
      candidates: cluster.candidates,
      refinedSupport: new Set(refined.map(candidate => candidate.passId)).size,
      confidence,
      representative,
      score: evidence * 2
        + confidence * 0.8
        + explicitUnits * 0.18
        + decimals * 0.08
        - trimmed * 0.04,
    };
  });
}

function massLimitFor(group, serving) {
  if (group?.basis === 'per_100g') return 100;
  if (group?.basis === 'per_serving' && Number(serving?.weightG) > 0) {
    return Number(serving.weightG);
  }
  return null;
}

function plausibilityPenalty(fieldKey, value, group, serving, context = {}) {
  if (!Number.isFinite(Number(value)) || Number(value) < 0) return 100;
  let penalty = 0;
  const massLimit = massLimitFor(group, serving);
  if (fieldKey !== 'calories_kcal' && massLimit && value > massLimit * 1.08) {
    penalty += 3 + Math.min((value / massLimit - 1.08) * 2, 12);
  }
  if (fieldKey === 'calories_kcal' && value > 1600) penalty += Math.min((value - 1600) / 200, 4);

  const values = {
    calories_kcal: context.calories_kcal,
    carbohydrates_g: context.carbohydrates_g,
    protein_g: context.protein_g,
    fat_g: context.fat_g,
    [fieldKey]: value,
  };
  if (Object.values(values).every(item => Number.isFinite(Number(item)))) {
    const estimated = values.carbohydrates_g * 4 + values.protein_g * 4 + values.fat_g * 9;
    const relativeDifference = Math.abs(estimated - values.calories_kcal)
      / Math.max(values.calories_kcal, 40);
    penalty += Math.min(relativeDifference * 1.4, 1.8);
  }
  return penalty;
}

export function selectNumericConsensus({
  fieldKey,
  candidates,
  currentNutrient = null,
  group = {},
  serving = {},
  context = {},
}) {
  const currentValue = currentNutrient?.value;
  const allCandidates = [...candidates];
  if (Number.isFinite(Number(currentValue))) {
    allCandidates.push({
      value: Number(currentValue),
      confidence: confidenceRatio(currentNutrient.confidence),
      explicitUnit: Boolean(currentNutrient.originalUnit),
      hasDecimal: /[.,]/u.test(String(currentNutrient.ocrRawValue ?? currentValue)),
      passId: 'initial',
      initial: true,
      trimRightRatio: 0,
      originalValue: currentNutrient.originalValue ?? currentValue,
      originalUnit: currentNutrient.originalUnit || NUTRITION_FIELD_DEFINITIONS[fieldKey].storageUnit,
      rawText: String(currentNutrient.ocrRawValue ?? currentValue),
    });
  }

  const clusters = clusterCandidates(allCandidates).map(cluster => {
    const penalty = plausibilityPenalty(fieldKey, cluster.value, group, serving, context);
    return { ...cluster, penalty, adjustedScore: cluster.score - penalty };
  }).sort((left, right) => right.adjustedScore - left.adjustedScore);
  const winner = clusters[0] || null;
  if (!winner) return { status: 'unresolved', winner: null, clusters: [] };

  const currentCluster = clusters.find(cluster => sameValue(cluster.value, currentValue));
  const scoreMargin = winner.adjustedScore - (currentCluster?.adjustedScore ?? 0);
  const warnings = currentNutrient?.warnings || [];
  const suspiciousCurrent = warnings.some(code => (
    code.includes('g_9')
    || code.includes('decimal')
    || code === 'missing_nutrient_unit'
    || code === 'conflicting_ocr_values'
  )) || Boolean(currentNutrient?.ocrCorrection);

  let status = 'conflict';
  if (currentValue == null) {
    status = winner.refinedSupport >= 2 && winner.penalty < 2 ? 'recovered' : 'unresolved';
  } else if (sameValue(winner.value, currentValue)) {
    status = winner.refinedSupport >= 2 && winner.penalty < 2 ? 'confirmed' : 'conflict';
  } else if (
    winner.penalty < 2
    && scoreMargin >= 0.45
    && (winner.refinedSupport >= 3 || (suspiciousCurrent && winner.refinedSupport >= 2))
  ) {
    status = 'replaced';
  }

  return { status, winner, clusters };
}

function expectedUnitFor(group, fieldKey) {
  const nutrient = group.nutrients[fieldKey];
  if (fieldKey === 'calories_kcal') {
    return nutrient?.originalUnit || group.originalEnergyValues?.[0]?.unit || 'kcal';
  }
  return nutrient?.originalUnit || NUTRITION_FIELD_DEFINITIONS[fieldKey].storageUnit;
}

function suffixTrimRatio(nutrient) {
  const raw = String(nutrient?.ocrRawValue || '');
  const suspicious = /9$/u.test(raw) && (
    !nutrient?.originalUnit
    || nutrient?.warnings?.some(code => code.includes('g_9'))
    || nutrient?.ocrCorrection?.type === 'unit_g_read_as_9'
  );
  if (!suspicious) return 0;
  return Math.max(0.16, Math.min(0.3, 0.75 / Math.max(raw.length, 2)));
}

function refinementConfidence(winner) {
  return Math.min(0.96, 0.66 + winner.refinedSupport * 0.07 + winner.confidence * 0.12);
}

function candidateSummaries(clusters) {
  return clusters.slice(0, 5).map(cluster => ({
    value: cluster.value,
    support: cluster.refinedSupport,
    confidence: Math.round(cluster.confidence * 1000) / 1000,
    score: Math.round(cluster.adjustedScore * 1000) / 1000,
  }));
}

function applySelection(group, fieldKey, selection) {
  const current = group.nutrients[fieldKey] || null;
  const summaries = candidateSummaries(selection.clusters);
  if (!['confirmed', 'replaced', 'recovered'].includes(selection.status)) {
    if (current && selection.clusters.length > 1) {
      current.warnings = [...new Set([...(current.warnings || []), 'numeric_refinement_conflict'])];
      current.numericRefinement = { status: selection.status, candidates: summaries };
    }
    return;
  }

  const winner = selection.winner;
  const representative = winner.representative;
  const value = rounded(winner.value);
  const confidence = refinementConfidence(winner);
  const previousValue = current?.value ?? null;
  const next = {
    ...(current || {}),
    value,
    unit: NUTRITION_FIELD_DEFINITIONS[fieldKey].storageUnit,
    originalValue: representative.originalValue ?? value,
    originalUnit: representative.originalUnit || expectedUnitFor(group, fieldKey),
    qualifier: current?.qualifier || '',
    confidence: Math.max(Number(current?.confidence) || 0, confidence),
    warnings: (current?.warnings || []).filter(code => ![
      'possible_g_9_confusion',
      'ocr_g_9_auto_corrected',
      'missing_nutrient_unit',
      'conflicting_ocr_values',
      'numeric_refinement_conflict',
    ].includes(code)),
    ocrRawValue: representative.rawText || current?.ocrRawValue || '',
    ocrAlternatives: [...new Set(selection.clusters.map(cluster => cluster.value))],
    numericRefinement: {
      status: selection.status,
      support: winner.refinedSupport,
      candidates: summaries,
    },
  };

  if (selection.status === 'replaced' || selection.status === 'recovered') {
    if (previousValue != null && !sameValue(previousValue, value)) {
      next.ocrCorrection = {
        type: 'numeric_multi_pass_consensus',
        originalValue: previousValue,
        correctedValue: value,
        support: winner.refinedSupport,
      };
    }
  } else if (next.ocrCorrection) {
    next.ocrCorrection = { ...next.ocrCorrection, confirmedBy: 'numeric_multi_pass' };
  }
  group.nutrients[fieldKey] = next;

  if (fieldKey === 'calories_kcal' && representative.originalUnit) {
    const refinedEnergy = {
      value: representative.originalValue,
      unit: representative.originalUnit,
      qualifier: next.qualifier,
      source: 'numeric_multi_pass',
    };
    group.originalEnergyValues = [
      refinedEnergy,
      ...(group.originalEnergyValues || []).filter(item => (
        normalizeForMatch(item.unit) !== normalizeForMatch(refinedEnergy.unit)
      )),
    ];
  }
}

async function recognizeVariants({ ocrEngine, variants, fieldKey, expectedUnit, trimRightRatio }) {
  const modes = {
    grayscale: 'single_word',
    otsu: 'single_word',
    adaptive: 'raw_line',
  };
  const candidates = [];
  for (const variant of variants) {
    const passId = `${variant.name}:${modes[variant.name]}:${trimRightRatio || 0}`;
    const result = await ocrEngine.recognize(variant.blob, {
      width: variant.width,
      height: variant.height,
      pageSegmentation: modes[variant.name],
      characterWhitelist: trimRightRatio > 0 ? NUMBER_WHITELIST : TOKEN_WHITELIST,
      rotateAuto: false,
      includeBlocks: false,
      onProgress: () => {},
    });
    const candidate = parseNumericOcrText(result.text, fieldKey, {
      confidence: result.confidence,
      expectedUnit,
      passId,
      trimRightRatio,
    });
    if (candidate) candidates.push(candidate);
  }
  return candidates;
}

function refreshDerivedGroups(parsed) {
  parsed.groups.filter(group => group.derived && group.derivedFrom === 'per_serving')
    .forEach(derived => {
      const source = parsed.groups.find(group => group.basis === 'per_serving' && !group.derived);
      if (!source || !parsed.serving?.weightG) return;
      derived.nutrients = deriveNutrientsPer100g(source.nutrients, parsed.serving.weightG);
    });
}

/**
 * @param {{
 *   image?: any,
 *   parsed?: any,
 *   ocrEngine?: any,
 *   onProgress?: (progress: any) => void,
 *   preprocessor?: any,
 * }} [options]
 */
export async function refineNutritionValues(options = {}) {
  const {
    image,
    parsed,
    ocrEngine,
    onProgress = () => {},
    preprocessor = null,
  } = options;
  if (!image || !parsed?.groups?.length || !ocrEngine?.recognize) return parsed;
  const source = preprocessor || new NumericImagePreprocessor(image);
  const groups = parsed.groups.filter(group => !group.derived);
  const tasks = groups.flatMap(group => CORE_NUTRITION_FIELDS.map(fieldKey => ({
    group,
    fieldKey,
    region: locateNumericRegion(parsed, group, fieldKey),
  }))).filter(task => task.region);
  let completed = 0;

  try {
    await source.initialize?.();
    for (const task of tasks) {
      const { group, fieldKey, region } = task;
      const nutrient = group.nutrients[fieldKey] || null;
      const expectedUnit = expectedUnitFor(group, fieldKey);
      let candidates = [];
      try {
        const variants = await source.createVariants(region);
        candidates = await recognizeVariants({
          ocrEngine,
          variants,
          fieldKey,
          expectedUnit,
          trimRightRatio: 0,
        });

        const trimRightRatio = suffixTrimRatio(nutrient);
        if (trimRightRatio > 0) {
          const trimmedVariants = (await source.createVariants(region, { trimRightRatio }))
            .filter(variant => variant.name !== 'otsu');
          candidates.push(...await recognizeVariants({
            ocrEngine,
            variants: trimmedVariants,
            fieldKey,
            expectedUnit,
            trimRightRatio,
          }));
        }

        const context = Object.fromEntries(CORE_NUTRITION_FIELDS.map(key => [
          key,
          group.nutrients[key]?.value ?? null,
        ]));
        const selection = selectNumericConsensus({
          fieldKey,
          candidates,
          currentNutrient: nutrient,
          group,
          serving: parsed.serving,
          context,
        });
        applySelection(group, fieldKey, selection);
      } catch (error) {
        console.warn(`数值精修失败 (${fieldKey})：`, error);
        if (nutrient) {
          nutrient.warnings = [...new Set([...(nutrient.warnings || []), 'numeric_refinement_failed'])];
        }
      }

      completed += 1;
      onProgress({
        completed,
        total: tasks.length,
        fieldKey,
        label: NUTRITION_FIELD_DEFINITIONS[fieldKey].label,
      });
    }
  } finally {
    source.destroy?.();
  }

  refreshDerivedGroups(parsed);
  groups.forEach(group => {
    const confidences = Object.values(group.nutrients)
      .map(nutrient => Number(nutrient.confidence))
      .filter(Number.isFinite);
    if (confidences.length) {
      group.confidence = confidences.reduce((sum, value) => sum + value, 0) / confidences.length;
    }
  });
  return parsed;
}
