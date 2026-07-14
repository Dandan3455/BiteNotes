import assert from 'node:assert/strict';
import test from 'node:test';

import {
  locateNumericRegion,
  parseNumericOcrText,
  refineNutritionValues,
  selectNumericConsensus,
} from '../nutrition-label/numericOcrRefiner.js';

function candidate(value, passId, options = {}) {
  return {
    value,
    originalValue: options.originalValue ?? value,
    originalUnit: options.originalUnit || 'g',
    explicitUnit: options.explicitUnit ?? true,
    hasDecimal: options.hasDecimal ?? String(value).includes('.'),
    confidence: options.confidence ?? 0.9,
    rawText: options.rawText || `${value}g`,
    passId,
    trimRightRatio: options.trimRightRatio || 0,
    initial: false,
  };
}

function row(text, words, y0 = 20) {
  return {
    text,
    bbox: { x0: 10, y0, x1: 290, y1: y0 + 24 },
    words: words.map(([wordText, x0, x1]) => ({
      text: wordText,
      bbox: { x0, y0, x1, y1: y0 + 24 },
    })),
  };
}

test('parses English and Chinese refined numeric tokens with decimal and energy conversion', () => {
  const english = parseNumericOcrText('2.4 g', 'protein_g', {
    confidence: 92,
    expectedUnit: 'g',
    passId: 'gray',
  });
  assert.equal(english.value, 2.4);
  assert.equal(english.originalUnit, 'g');
  assert.equal(english.explicitUnit, true);

  const chinese = parseNumericOcrText('432 千焦', 'calories_kcal', {
    confidence: 90,
    expectedUnit: '千焦',
    passId: 'adaptive',
  });
  assert.equal(chinese.value, 103.25);
  assert.equal(chinese.originalValue, 432);
  assert.equal(chinese.originalUnit, 'kJ');

  const decimalComma = parseNumericOcrText('13,6g', 'carbohydrates_g', {
    expectedUnit: 'g',
  });
  assert.equal(decimalComma.value, 13.6);

  const traditional = parseNumericOcrText('2.5 公克', 'fat_g', {
    expectedUnit: '公克',
  });
  assert.equal(traditional.value, 2.5);
  assert.equal(traditional.originalUnit, 'g');

  assert.equal(parseNumericOcrText('.5g', 'fat_g', { expectedUnit: 'g' }).value, 0.5);
});

test('locates numeric cells in English and Chinese rows while ignoring percentage words', () => {
  const englishRow = row('Protein 2.4g 4%', [
    ['Protein', 10, 90], ['2.4g', 130, 180], ['4%', 245, 275],
  ]);
  const chineseRow = row('碳水化合物 13.6g 5%', [
    ['碳水化合物', 10, 100], ['13.6g', 135, 195], ['5%', 250, 278],
  ], 60);
  const missingValueRow = row('脂肪', [['脂肪', 10, 70]], 100);
  const traditionalRow = row('蛋白質 4公克', [
    ['蛋白質', 10, 90], ['4公克', 135, 190],
  ], 140);
  const parsed = {
    ocr: { logicalRows: [englishRow, chineseRow, missingValueRow, traditionalRow] },
  };
  const proteinGroup = {
    columnX: 155,
    nutrients: { protein_g: { valueBbox: { x0: 130, y0: 20, x1: 180, y1: 44 } } },
  };
  const carbsGroup = { columnX: 160, nutrients: {} };

  assert.deepEqual(locateNumericRegion(parsed, proteinGroup, 'protein_g'), {
    x0: 130, y0: 20, x1: 180, y1: 44,
  });
  assert.deepEqual(locateNumericRegion(parsed, carbsGroup, 'carbohydrates_g'), {
    x0: 135, y0: 60, x1: 195, y1: 84,
  });
  const missingRegion = locateNumericRegion(parsed, { columnX: 160, nutrients: {} }, 'fat_g');
  assert.ok(missingRegion.x0 < 160);
  assert.ok(missingRegion.x1 > 160);
  assert.deepEqual(
    locateNumericRegion(
      parsed,
      {
        columnX: 160,
        nutrients: {
          protein_g: { valueBbox: { x0: 135, y0: 140, x1: 190, y1: 164 } },
        },
      },
      'protein_g',
    ),
    { x0: 135, y0: 140, x1: 190, y1: 164 },
  );
});

test('uses repeated cell OCR to replace g-as-9 and missing-decimal values', () => {
  const group = { basis: 'per_serving', nutrients: {} };
  const serving = { weightG: 24 };
  const protein = selectNumericConsensus({
    fieldKey: 'protein_g',
    candidates: [
      candidate(2.4, 'gray'),
      candidate(2.4, 'otsu'),
      candidate(2.4, 'adaptive'),
      candidate(249, 'noisy', { explicitUnit: false, hasDecimal: false }),
    ],
    currentNutrient: {
      value: 249,
      confidence: 0.35,
      originalUnit: '',
      ocrRawValue: '249',
      warnings: ['possible_g_9_confusion'],
    },
    group,
    serving,
  });
  assert.equal(protein.status, 'replaced');
  assert.equal(protein.winner.value, 2.4);

  const carbs = selectNumericConsensus({
    fieldKey: 'carbohydrates_g',
    candidates: [candidate(13.6, 'gray'), candidate(13.6, 'otsu'), candidate(13.6, 'adaptive')],
    currentNutrient: {
      value: 136,
      confidence: 0.4,
      originalUnit: 'g',
      ocrRawValue: '136',
      warnings: ['possible_lost_decimal'],
    },
    group,
    serving,
  });
  assert.equal(carbs.status, 'replaced');
  assert.equal(carbs.winner.value, 13.6);
});

test('keeps conflicting refinement candidates for review instead of guessing', () => {
  const result = selectNumericConsensus({
    fieldKey: 'fat_g',
    candidates: [candidate(3.7, 'gray'), candidate(3.79, 'adaptive')],
    currentNutrient: { value: 3.79, confidence: 0.5, originalUnit: 'g', warnings: [] },
    group: { basis: 'per_serving' },
    serving: { weightG: 24 },
  });
  assert.equal(result.status, 'conflict');
});

test('runs cell refinement through all three image variants and safely updates a Chinese row', async () => {
  const proteinRow = row('蛋白质 249 4%', [
    ['蛋白质', 10, 90], ['249', 130, 180], ['4%', 245, 275],
  ]);
  const parsed = {
    serving: { weightG: 24 },
    ocr: { logicalRows: [proteinRow] },
    groups: [{
      id: 'per-serving',
      basis: 'per_serving',
      columnX: 155,
      nutrients: {
        protein_g: {
          value: 249,
          unit: 'g',
          confidence: 0.35,
          originalUnit: '',
          ocrRawValue: '249',
          warnings: ['possible_g_9_confusion'],
          valueBbox: { x0: 130, y0: 20, x1: 180, y1: 44 },
        },
      },
      originalEnergyValues: [],
      derived: false,
    }],
  };
  const preprocessor = {
    async initialize() {},
    async createVariants(_region, options = {}) {
      const names = options.trimRightRatio ? ['grayscale', 'adaptive'] : ['grayscale', 'otsu', 'adaptive'];
      return names.map(name => ({ name, blob: name, width: 200, height: 100 }));
    },
    destroy() {},
  };
  const ocrEngine = {
    async recognize(image) {
      return { text: image === 'otsu' ? '2.4g' : '2.4 g', confidence: 93 };
    },
  };

  await refineNutritionValues({ image: 'blob', parsed, ocrEngine, preprocessor });
  const protein = parsed.groups[0].nutrients.protein_g;
  assert.equal(protein.value, 2.4);
  assert.equal(protein.numericRefinement.status, 'replaced');
  assert.ok(protein.numericRefinement.support >= 3);
  assert.equal(protein.ocrCorrection.type, 'numeric_multi_pass_consensus');
});
