import {
  BASIS_LABELS,
  LABEL_STRUCTURE_ALIASES,
  NUTRITION_BASIS_ALIASES,
  NUTRITION_FIELD_DEFINITIONS,
  SORTED_FIELD_ENTRIES,
  UNIT_ALIASES,
} from './fieldAliases.js';
import {
  buildLogicalRows,
  normalizeCharacters,
  normalizeForMatch,
  normalizeOcrResult,
} from './ocrTextNormalizer.js';

const VALUE_PATTERN = /([<≤]?)\s*([0-9]+(?:\s*[.,]\s*[0-9]+)?|[oOilI])\s*(k\s*cal|k\s*j|千\s*卡|大\s*卡|千\s*焦|m\s*g|毫\s*克|g|公\s*克|克|m\s*l|毫\s*升|%)?/giu;
const SERVING_VALUE_PATTERN = /([0-9]+(?:\s*[.,]\s*[0-9]+)?)\s*(g|公\s*克|克|m\s*g|毫\s*克|m\s*l|毫\s*升|servings?|portions?|cups?|slices?|pieces?|bags?|bottles?|份|片|个|個|杯|袋|瓶|包装|包裝)/iu;
const GRAM_NUTRIENT_FIELDS = Object.freeze([
  'carbohydrates_g',
  'protein_g',
  'fat_g',
  'fibre_g',
  'sugars_g',
  'saturated_fat_g',
  'trans_fat_g',
]);

function confidenceRatio(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(number > 1 ? number / 100 : number, 1));
}

function includesAlias(value, aliases) {
  const normalized = normalizeForMatch(value);
  return aliases.find(alias => normalized.includes(normalizeForMatch(alias))) || '';
}

function searchableLineAndSpans(line) {
  if (!line.words?.length) {
    return { text: normalizeForMatch(line.text), spans: [] };
  }

  let text = '';
  const spans = [];
  [...line.words]
    .sort((left, right) => left.bbox.x0 - right.bbox.x0)
    .forEach(word => {
      const token = normalizeForMatch(word.text);
      if (!token) return;
      const start = text.length;
      text += token;
      spans.push({ start, end: text.length, bbox: word.bbox });
    });
  return { text, spans };
}

function matchAliasDetails(line, aliases) {
  const { text, spans } = searchableLineAndSpans(line);
  /** @type {{ alias: string, normalizedAlias: string, index: number } | null} */
  let best = null;

  for (const alias of aliases) {
    const normalizedAlias = normalizeForMatch(alias);
    const index = text.indexOf(normalizedAlias);
    if (index < 0) continue;
    if (!best || normalizedAlias.length > best.normalizedAlias.length) {
      best = { alias, normalizedAlias, index };
    }
  }

  if (!best) return null;
  const aliasEnd = best.index + best.normalizedAlias.length;
  const overlapping = spans.filter(span => span.start < aliasEnd && span.end > best.index);
  if (overlapping.length) {
    const x0 = Math.min(...overlapping.map(span => span.bbox.x0));
    const x1 = Math.max(...overlapping.map(span => span.bbox.x1));
    return { ...best, x: (x0 + x1) / 2 };
  }

  const width = Math.max(line.bbox.x1 - line.bbox.x0, 1);
  const centerRatio = (best.index + best.normalizedAlias.length / 2) / Math.max(text.length, 1);
  return {
    ...best,
    x: line.bbox.x0 + width * centerRatio,
  };
}

function parseDecimal(value) {
  const normalized = String(value).replace(/\s+/gu, '').replace(',', '.');
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function possibleGAsNineValues(rawValue) {
  const normalized = String(rawValue).replace(/\s+/gu, '').replace(',', '.');
  if (!/^[0-9]+(?:\.[0-9]+)?9$/u.test(normalized)) return [];

  const withoutNine = normalized.slice(0, -1);
  if (!withoutNine || withoutNine === '.') return [];
  const values = [parseDecimal(withoutNine)];
  if (!withoutNine.includes('.') && withoutNine.length >= 2) {
    values.push(parseDecimal(`${withoutNine.slice(0, -1)}.${withoutNine.slice(-1)}`));
  }
  return [...new Set(values.filter(value => value != null))];
}

function normalizedUnit(value) {
  const unit = normalizeForMatch(value).replace(/\.$/u, '');
  for (const [canonical, aliases] of Object.entries(UNIT_ALIASES)) {
    if (aliases.some(alias => normalizeForMatch(alias) === unit)) return canonical;
  }
  return '';
}

function mapServingUnit(value) {
  const unit = normalizeForMatch(value);
  if (['g', '克', '公克'].includes(unit)) return '克';
  if (['mg', '毫克'].includes(unit)) return '毫克';
  if (['ml', '毫升'].includes(unit)) return '毫升';
  if (/^(serving|servings|portion|portions|份)$/u.test(unit)) return '份';
  if (/^(cup|cups|杯)$/u.test(unit)) return '杯';
  if (/^(slice|slices|片)$/u.test(unit)) return '片';
  if (/^(piece|pieces|个|個)$/u.test(unit)) return '个';
  if (/^(bag|bags|袋)$/u.test(unit)) return '袋';
  if (/^(bottle|bottles|瓶)$/u.test(unit)) return '瓶';
  if (/^(包装|包裝)$/u.test(unit)) return '包装';
  return normalizeCharacters(value);
}

function extractExplicitText(lines, aliases) {
  for (const line of lines) {
    const alias = includesAlias(line.text, aliases);
    if (!alias) continue;
    const normalizedLine = normalizeCharacters(line.text);
    const aliasIndex = normalizeForMatch(normalizedLine).indexOf(normalizeForMatch(alias));
    const approximateEnd = aliasIndex + alias.length;
    const value = normalizedLine.slice(approximateEnd).replace(/^\s*[:：-]\s*/u, '').trim();
    if (value && !/^[0-9.,]+$/u.test(value)) return value;
  }
  return '';
}

function extractServingMetadata(lines) {
  const result = {
    quantity: null,
    unit: '',
    weightG: null,
    servingsPerContainer: null,
    confidence: 0,
    sourceText: '',
    warnings: [],
    ocrCorrection: null,
  };

  for (const line of lines) {
    if (!includesAlias(line.text, LABEL_STRUCTURE_ALIASES.servingsPerContainer)) continue;
    const match = normalizeCharacters(line.text).match(/([0-9]+(?:[.,][0-9]+)?)/u);
    if (match) {
      result.servingsPerContainer = parseDecimal(match[1]);
      result.confidence = Math.max(result.confidence, confidenceRatio(line.confidence));
    }
  }

  for (const line of lines) {
    if (!includesAlias(line.text, LABEL_STRUCTURE_ALIASES.servingSize)) continue;
    if (includesAlias(line.text, LABEL_STRUCTURE_ALIASES.servingsPerContainer)) continue;
    const match = normalizeCharacters(line.text).match(SERVING_VALUE_PATTERN);
    if (!match) {
      const normalizedLine = normalizeCharacters(line.text);
      const suspicious = normalizedLine.match(
        /[（(]\s*([0-9]+(?:[.,][0-9]+)?9)\s*[)）]/u,
      ) || normalizedLine.match(/([0-9]+(?:[.,][0-9]+)?9)\s*[)\]】]?\s*$/u);
      const corrected = suspicious ? possibleGAsNineValues(suspicious[1])[0] : null;
      if (corrected == null) continue;
      result.quantity = corrected;
      result.unit = '克';
      result.weightG = corrected;
      result.sourceText = line.text;
      result.confidence = Math.min(confidenceRatio(line.confidence), 0.45);
      result.warnings.push('serving_g_9_auto_corrected');
      result.ocrCorrection = {
        type: 'unit_g_read_as_9',
        originalValue: parseDecimal(suspicious[1]),
        correctedValue: corrected,
      };
      break;
    }

    result.quantity = parseDecimal(match[1]);
    result.unit = mapServingUnit(match[2]);
    result.sourceText = line.text;
    result.confidence = Math.max(result.confidence, confidenceRatio(line.confidence));
    if (result.unit === '克') result.weightG = result.quantity;
    if (result.unit === '毫克' && result.quantity != null) result.weightG = result.quantity / 1000;
    break;
  }

  return result;
}

function findBasisColumns(lines, serving) {
  const columns = [];
  const percentageColumns = [];

  lines.forEach(line => {
    const servingSizeLine = includesAlias(line.text, LABEL_STRUCTURE_ALIASES.servingSize)
      && SERVING_VALUE_PATTERN.test(normalizeCharacters(line.text));
    SERVING_VALUE_PATTERN.lastIndex = 0;
    const percentDetails = matchAliasDetails(line, LABEL_STRUCTURE_ALIASES.percentageHeaders);
    if (percentDetails) percentageColumns.push(percentDetails.x);

    Object.entries(NUTRITION_BASIS_ALIASES).forEach(([basis, aliases]) => {
      const details = matchAliasDetails(line, aliases);
      if (!details) return;
      if (basis === 'per_serving' && servingSizeLine && !percentDetails) return;
      columns.push({
        basis,
        x: details.x,
        confidence: confidenceRatio(line.confidence),
        sourceText: line.text,
        inferred: false,
      });
    });
  });

  const unique = [];
  columns.forEach(column => {
    const existing = unique.find(item => item.basis === column.basis);
    if (!existing) {
      unique.push(column);
      return;
    }
    if (column.x > existing.x || column.confidence > existing.confidence) {
      Object.assign(existing, column);
    }
  });

  if (!unique.length) {
    unique.push({
      basis: 'per_serving',
      x: 0,
      confidence: serving.quantity ? Math.max(serving.confidence - 0.1, 0.45) : 0.35,
      sourceText: serving.sourceText || '',
      inferred: true,
    });
  }

  unique.sort((left, right) => left.x - right.x);
  return { columns: unique, percentageColumns };
}

function lineTextAndSpans(line) {
  if (!line.words?.length) {
    return { text: line.text, spans: [] };
  }

  let text = '';
  const spans = [];
  line.words.forEach(word => {
    if (text) text += ' ';
    const start = text.length;
    text += word.text;
    spans.push({ start, end: text.length, bbox: word.bbox });
  });
  return { text, spans };
}

function matchGeometry(line, match, spans, textLength) {
  const start = match.index;
  const end = start + match[0].length;
  const overlapping = spans.filter(span => span.start < end && span.end > start);
  if (overlapping.length) {
    const bbox = {
      x0: Math.min(...overlapping.map(span => span.bbox.x0)),
      y0: Math.min(...overlapping.map(span => span.bbox.y0)),
      x1: Math.max(...overlapping.map(span => span.bbox.x1)),
      y1: Math.max(...overlapping.map(span => span.bbox.y1)),
    };
    return { x: (bbox.x0 + bbox.x1) / 2, bbox };
  }
  const width = Math.max(line.bbox.x1 - line.bbox.x0, 1);
  const safeLength = Math.max(textLength, 1);
  const bbox = {
    x0: line.bbox.x0 + width * (start / safeLength),
    y0: line.bbox.y0,
    x1: line.bbox.x0 + width * (end / safeLength),
    y1: line.bbox.y1,
  };
  return { x: (bbox.x0 + bbox.x1) / 2, bbox };
}

function extractValueCandidates(line) {
  const { text, spans } = lineTextAndSpans(line);
  const candidates = [];
  VALUE_PATTERN.lastIndex = 0;
  let match = VALUE_PATTERN.exec(text);

  while (match) {
    const rawValue = match[2];
    const ambiguousCharacter = /^[oOilI]$/u.test(rawValue);
    const unit = normalizedUnit(match[3]);
    const after = text.slice(match.index + match[0].length, match.index + match[0].length + 3);
    const isPercentage = unit === 'percent' || /^\s*%/u.test(after);
    const geometry = matchGeometry(line, match, spans, text.length);
    candidates.push({
      raw: match[0],
      rawValue,
      value: ambiguousCharacter ? null : parseDecimal(rawValue),
      qualifier: match[1] || '',
      unit,
      rawUnit: normalizeCharacters(match[3]),
      isPercentage,
      x: geometry.x,
      bbox: geometry.bbox,
      lineBbox: { ...line.bbox },
      confidence: confidenceRatio(line.confidence),
      sourceText: line.text,
      warnings: ambiguousCharacter ? ['ocr_character_ambiguity'] : [],
    });
    match = VALUE_PATTERN.exec(text);
  }

  return candidates;
}

function closestDistance(value, anchors) {
  if (!anchors.length) return Number.POSITIVE_INFINITY;
  return Math.min(...anchors.map(anchor => Math.abs(value - anchor)));
}

function convertCandidate(fieldKey, candidate) {
  const definition = NUTRITION_FIELD_DEFINITIONS[fieldKey];
  const warnings = [...candidate.warnings];
  let confidence = candidate.confidence;
  let value = candidate.value;
  let ocrAlternatives = [];

  if (value == null) {
    return {
      value: null,
      unit: definition.storageUnit,
      originalValue: candidate.rawValue,
      originalUnit: candidate.rawUnit,
      qualifier: candidate.qualifier,
      confidence: Math.min(confidence, 0.35),
      sourceText: candidate.sourceText,
      warnings,
      ocrRawValue: candidate.rawValue,
      ocrAlternatives,
      valueBbox: { ...candidate.bbox },
      sourceBbox: { ...candidate.lineBbox },
      columnX: candidate.x,
    };
  }

  if (fieldKey === 'calories_kcal') {
    if (candidate.unit === 'kJ') value /= 4.184;
    else if (!candidate.unit) {
      warnings.push('missing_energy_unit');
      confidence = Math.min(confidence, 0.6);
    } else if (candidate.unit !== 'kcal') {
      warnings.push('unexpected_energy_unit');
      confidence = Math.min(confidence, 0.45);
    }
  } else if (definition.storageUnit === 'g') {
    if (candidate.unit === 'mg') value /= 1000;
    else if (!candidate.unit) {
      warnings.push('missing_nutrient_unit');
      confidence = Math.min(confidence, 0.58);
      ocrAlternatives = possibleGAsNineValues(candidate.rawValue);
      if (ocrAlternatives.length) {
        warnings.push('possible_g_9_confusion');
        confidence = Math.min(confidence, 0.45);
      }
    } else if (candidate.unit !== 'g') {
      warnings.push('unexpected_nutrient_unit');
      confidence = Math.min(confidence, 0.4);
    }
  } else if (definition.storageUnit === 'mg') {
    if (candidate.unit === 'g') {
      value *= 1000;
      warnings.push('sodium_unit_requires_confirmation');
      confidence = Math.min(confidence, 0.55);
    } else if (!candidate.unit) {
      warnings.push('missing_nutrient_unit');
      confidence = Math.min(confidence, 0.58);
    } else if (candidate.unit !== 'mg') {
      warnings.push('unexpected_nutrient_unit');
      confidence = Math.min(confidence, 0.4);
    }
  }

  return {
    value: Math.round(value * 1000) / 1000,
    unit: definition.storageUnit,
    originalValue: candidate.value,
    originalUnit: candidate.rawUnit || candidate.unit,
    qualifier: candidate.qualifier,
    confidence,
    sourceText: candidate.sourceText,
    warnings,
    ocrRawValue: candidate.rawValue,
    ocrAlternatives,
    valueBbox: { ...candidate.bbox },
    sourceBbox: { ...candidate.lineBbox },
    columnX: candidate.x,
  };
}

function correctionOptions(nutrient, preferSuffixCorrection = false) {
  if (!nutrient?.ocrAlternatives?.length || nutrient.value == null) return [];
  const hasDecimal = /[.,]/u.test(String(nutrient.ocrRawValue));
  const options = [{
    value: nutrient.value,
    corrected: false,
    penalty: hasDecimal && preferSuffixCorrection ? 3 : 0,
  }];

  nutrient.ocrAlternatives.forEach((value, index) => {
    if (value === nutrient.value || options.some(option => option.value === value)) return;
    options.push({
      value,
      corrected: true,
      penalty: hasDecimal && preferSuffixCorrection ? 0.15 : 0.45 + index * 0.35,
    });
  });
  return options;
}

function selectedNutrientValue(group, field, choices) {
  const selected = choices[field];
  const value = selected ? selected.value : group.nutrients[field]?.value;
  return Number.isFinite(Number(value)) && value != null ? Number(value) : null;
}

function correctionPlausibilityScore(group, serving, choices) {
  let score = Object.values(choices).reduce((sum, choice) => sum + choice.penalty, 0);
  let massLimit = null;
  if (group.basis === 'per_100g') massLimit = 100;
  else if (group.basis === 'per_serving' && serving.weightG) massLimit = serving.weightG;

  if (massLimit) {
    GRAM_NUTRIENT_FIELDS.forEach(field => {
      const value = selectedNutrientValue(group, field, choices);
      if (value != null && value > massLimit * 1.08) {
        score += Math.min((value / massLimit - 1.08) * 35, 500);
      }
    });

    const macroValues = ['carbohydrates_g', 'protein_g', 'fat_g']
      .map(field => selectedNutrientValue(group, field, choices));
    if (macroValues.every(value => value != null)) {
      const macroTotal = macroValues.reduce((sum, value) => sum + value, 0);
      const ratio = macroTotal / massLimit;
      if (ratio > 1.35) score += (ratio - 1.35) * 35;
    }
  }

  const calories = selectedNutrientValue(group, 'calories_kcal', choices);
  const carbs = selectedNutrientValue(group, 'carbohydrates_g', choices);
  const protein = selectedNutrientValue(group, 'protein_g', choices);
  const fat = selectedNutrientValue(group, 'fat_g', choices);
  if ([calories, carbs, protein, fat].every(value => value != null)) {
    const estimatedCalories = carbs * 4 + protein * 4 + fat * 9;
    const relativeDifference = Math.abs(estimatedCalories - calories) / Math.max(calories, 40);
    score += Math.min(relativeDifference, 10) * 18;
  }

  return score;
}

function applyGAsNineCorrections(group, serving) {
  const ambiguousEntries = Object.entries(group.nutrients)
    .filter(([, nutrient]) => nutrient?.ocrAlternatives?.length);
  if (!ambiguousEntries.length) return;
  const preferSuffixCorrection = ambiguousEntries.length >= 2;
  const entries = ambiguousEntries.map(([field, nutrient]) => ({
    field,
    nutrient,
    options: correctionOptions(nutrient, preferSuffixCorrection),
  }));

  let bestScore = Number.POSITIVE_INFINITY;
  let bestChoices = {};
  let examined = 0;
  const choices = {};

  function visit(index) {
    if (examined >= 10000) return;
    if (index === entries.length) {
      examined += 1;
      const score = correctionPlausibilityScore(group, serving, choices);
      if (score < bestScore) {
        bestScore = score;
        bestChoices = { ...choices };
      }
      return;
    }

    const entry = entries[index];
    entry.options.forEach(option => {
      choices[entry.field] = option;
      visit(index + 1);
    });
    delete choices[entry.field];
  }

  visit(0);
  entries.forEach(({ field, nutrient }) => {
    const selected = bestChoices[field];
    if (!selected?.corrected) return;
    const originalValue = nutrient.value;
    nutrient.value = selected.value;
    nutrient.confidence = Math.min(Number(nutrient.confidence) || 0, 0.45);
    nutrient.warnings = [
      ...new Set([
        ...nutrient.warnings.filter(code => code !== 'possible_g_9_confusion'),
        'ocr_g_9_auto_corrected',
      ]),
    ];
    nutrient.ocrCorrection = {
      type: 'unit_g_read_as_9',
      originalValue,
      correctedValue: selected.value,
    };
  });
}

function chooseColumn(candidate, columns, percentageColumns) {
  const basisDistance = closestDistance(candidate.x, columns.map(column => column.x));
  const percentageDistance = closestDistance(candidate.x, percentageColumns);
  if (!candidate.unit && percentageDistance < basisDistance) return null;

  if (columns.length === 1 || columns.every(column => column.x === columns[0].x)) return columns[0];
  return columns.reduce((closest, column) => (
    Math.abs(candidate.x - column.x) < Math.abs(candidate.x - closest.x) ? column : closest
  ), columns[0]);
}

function assignSequentialColumns(candidates, columns) {
  const usable = candidates.filter(candidate => !candidate.isPercentage);
  if (columns.length <= 1 || usable.length !== columns.length) return null;
  return new Map(usable.sort((a, b) => a.x - b.x).map((candidate, index) => [candidate, columns[index]]));
}

function createGroups(columns) {
  return columns.map((column, index) => ({
    id: `${column.basis}-${index}`,
    basis: column.basis,
    recognizedBasis: column.basis,
    label: BASIS_LABELS[column.basis],
    confidence: column.confidence,
    inferred: column.inferred,
    sourceHeader: column.sourceText,
    columnX: column.x,
    nutrients: {},
    originalEnergyValues: [],
    warnings: column.inferred ? ['nutrition_basis_inferred'] : [],
    derived: false,
  }));
}

function addNutrient(group, fieldKey, converted, candidate) {
  if (fieldKey === 'calories_kcal' && candidate.value != null) {
    group.originalEnergyValues.push({
      value: candidate.value,
      unit: candidate.rawUnit || candidate.unit || '',
      qualifier: candidate.qualifier,
    });
  }

  const existing = group.nutrients[fieldKey];
  if (!existing) {
    group.nutrients[fieldKey] = converted;
    return;
  }

  const sameValue = existing.value != null && converted.value != null
    && Math.abs(existing.value - converted.value) <= Math.max(Math.abs(existing.value) * 0.02, 0.05);
  if (!sameValue) {
    existing.warnings = [...new Set([...existing.warnings, 'conflicting_ocr_values'])];
    group.warnings.push(`conflicting_${fieldKey}`);
  }

  const convertedIsDirectKcal = fieldKey === 'calories_kcal' && candidate.unit === 'kcal';
  const existingWasConvertedKj = fieldKey === 'calories_kcal' && normalizeForMatch(existing.originalUnit) === 'kj';
  if (convertedIsDirectKcal && existingWasConvertedKj) group.nutrients[fieldKey] = converted;
  else if (converted.confidence > existing.confidence) group.nutrients[fieldKey] = converted;
}

export function deriveNutrientsPer100g(nutrients, servingWeightG) {
  if (!Number.isFinite(Number(servingWeightG)) || Number(servingWeightG) <= 0) return {};
  const multiplier = 100 / Number(servingWeightG);
  return Object.fromEntries(Object.entries(nutrients || {}).map(([key, nutrient]) => [
    key,
    {
      ...nutrient,
      value: nutrient.value == null ? null : Math.round(nutrient.value * multiplier * 1000) / 1000,
      confidence: Math.max((Number(nutrient.confidence) || 0) - 0.05, 0),
      warnings: [...(nutrient.warnings || []), 'calculated_from_serving_weight'],
    },
  ]));
}

function derivePer100gGroup(groups, serving) {
  if (!serving.weightG || serving.weightG <= 0) return null;
  if (groups.some(group => group.basis === 'per_100g')) return null;
  const servingGroup = groups.find(group => group.basis === 'per_serving');
  if (!servingGroup || !Object.keys(servingGroup.nutrients).length) return null;

  const nutrients = deriveNutrientsPer100g(servingGroup.nutrients, serving.weightG);

  return {
    id: 'per_100g-derived',
    basis: 'per_100g',
    recognizedBasis: 'per_serving',
    label: `${BASIS_LABELS.per_100g}（根据份量换算）`,
    confidence: Math.max(servingGroup.confidence - 0.05, 0),
    inferred: false,
    sourceHeader: serving.sourceText,
    nutrients,
    originalEnergyValues: [...servingGroup.originalEnergyValues],
    warnings: ['calculated_from_serving_weight'],
    derived: true,
    derivedFrom: 'per_serving',
  };
}

export function parseNutritionLabel(input) {
  const ocr = normalizeOcrResult(input);
  const logicalRows = buildLogicalRows(ocr.lines, ocr.width, ocr.height);
  const analysisLines = logicalRows.length ? logicalRows : ocr.lines;
  const serving = extractServingMetadata(analysisLines);
  const { columns, percentageColumns } = findBasisColumns(analysisLines, serving);
  const groups = createGroups(columns);
  if (serving.ocrCorrection) {
    groups.forEach(group => group.warnings.push('serving_g_9_auto_corrected'));
  }

  analysisLines.forEach(line => {
    const fieldMatch = SORTED_FIELD_ENTRIES.find(([, definition]) => includesAlias(line.text, definition.aliases));
    if (!fieldMatch) return;
    const [fieldKey] = fieldMatch;
    const candidates = extractValueCandidates(line);
    const sequentialColumns = assignSequentialColumns(candidates, columns);

    candidates.forEach(candidate => {
      if (candidate.isPercentage) return;
      const column = sequentialColumns?.get(candidate) || chooseColumn(candidate, columns, percentageColumns);
      if (!column) return;
      const groupIndex = columns.indexOf(column);
      const group = groups[groupIndex];
      addNutrient(group, fieldKey, convertCandidate(fieldKey, candidate), candidate);
    });
  });

  groups.forEach(group => applyGAsNineCorrections(group, serving));
  const derived = derivePer100gGroup(groups, serving);
  if (derived) groups.push(derived);

  groups.forEach(group => {
    const confidences = Object.values(group.nutrients).map(nutrient => nutrient.confidence);
    if (confidences.length) {
      group.confidence = confidences.reduce((sum, value) => sum + value, 0) / confidences.length;
    }
    group.warnings = [...new Set(group.warnings)];
  });

  return {
    foodName: extractExplicitText(analysisLines, LABEL_STRUCTURE_ALIASES.foodName),
    brand: extractExplicitText(analysisLines, LABEL_STRUCTURE_ALIASES.brand),
    detectedLanguages: ocr.detectedLanguages,
    ocrConfidence: confidenceRatio(ocr.confidence),
    serving,
    groups,
    ignoredPercentageColumns: percentageColumns.length,
    ocr: { ...ocr, logicalRows },
  };
}
