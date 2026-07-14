import {
  BASIS_LABELS,
  LABEL_STRUCTURE_ALIASES,
  NUTRITION_BASIS_ALIASES,
  NUTRITION_FIELD_DEFINITIONS,
  SORTED_FIELD_ENTRIES,
  UNIT_ALIASES,
} from './fieldAliases.js';
import {
  normalizeCharacters,
  normalizeForMatch,
  normalizeOcrResult,
} from './ocrTextNormalizer.js';

const VALUE_PATTERN = /([<≤]?)\s*([0-9]+(?:[.,][0-9]+)?|[oOilI])\s*(kcal|kj|千卡|大卡|千焦|mg|毫克|g|公克|克|ml|毫升|%)?/giu;
const SERVING_VALUE_PATTERN = /([0-9]+(?:[.,][0-9]+)?)\s*(g|公克|克|mg|毫克|ml|毫升|servings?|portions?|cups?|slices?|pieces?|bags?|bottles?|份|片|个|個|杯|袋|瓶|包装|包裝)/iu;

function confidenceRatio(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(number > 1 ? number / 100 : number, 1));
}

function includesAlias(value, aliases) {
  const normalized = normalizeForMatch(value);
  return aliases.find(alias => normalized.includes(normalizeForMatch(alias))) || '';
}

function matchAliasDetails(line, aliases) {
  const text = normalizeForMatch(line.text);
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
  const width = Math.max(line.bbox.x1 - line.bbox.x0, 1);
  const centerRatio = (best.index + best.normalizedAlias.length / 2) / Math.max(text.length, 1);
  return {
    ...best,
    x: line.bbox.x0 + width * centerRatio,
  };
}

function parseDecimal(value) {
  const normalized = String(value).replace(',', '.');
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
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
    if (!match) continue;

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

    Object.entries(NUTRITION_BASIS_ALIASES).forEach(([basis, aliases]) => {
      const details = matchAliasDetails(line, aliases);
      if (!details) return;
      if (basis === 'per_serving' && servingSizeLine) return;
      columns.push({
        basis,
        x: details.x,
        confidence: confidenceRatio(line.confidence),
        sourceText: line.text,
        inferred: false,
      });
    });

    const percentDetails = matchAliasDetails(line, LABEL_STRUCTURE_ALIASES.percentageHeaders);
    if (percentDetails) percentageColumns.push(percentDetails.x);
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

function matchCenterX(line, match, spans, textLength) {
  const start = match.index;
  const end = start + match[0].length;
  const overlapping = spans.filter(span => span.start < end && span.end > start);
  if (overlapping.length) {
    const x0 = Math.min(...overlapping.map(span => span.bbox.x0));
    const x1 = Math.max(...overlapping.map(span => span.bbox.x1));
    return (x0 + x1) / 2;
  }
  const width = Math.max(line.bbox.x1 - line.bbox.x0, 1);
  return line.bbox.x0 + width * ((start + match[0].length / 2) / Math.max(textLength, 1));
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
    candidates.push({
      raw: match[0],
      rawValue,
      value: ambiguousCharacter ? null : parseDecimal(rawValue),
      qualifier: match[1] || '',
      unit,
      rawUnit: normalizeCharacters(match[3]),
      isPercentage,
      x: matchCenterX(line, match, spans, text.length),
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
      if (/9$/u.test(candidate.rawValue)) {
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
  };
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
  const serving = extractServingMetadata(ocr.lines);
  const { columns, percentageColumns } = findBasisColumns(ocr.lines, serving);
  const groups = createGroups(columns);

  ocr.lines.forEach(line => {
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
    foodName: extractExplicitText(ocr.lines, LABEL_STRUCTURE_ALIASES.foodName),
    brand: extractExplicitText(ocr.lines, LABEL_STRUCTURE_ALIASES.brand),
    detectedLanguages: ocr.detectedLanguages,
    ocrConfidence: confidenceRatio(ocr.confidence),
    serving,
    groups,
    ignoredPercentageColumns: percentageColumns.length,
    ocr,
  };
}
