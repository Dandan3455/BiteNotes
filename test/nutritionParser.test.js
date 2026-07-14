import assert from 'node:assert/strict';
import test from 'node:test';

import { deriveNutrientsPer100g, parseNutritionLabel } from '../nutrition-label/nutritionParser.js';
import {
  bilingualLabel,
  cellsLine,
  dualBasisLabel,
  englishLabel,
  frenchLabel,
  makeOcr,
  mixedChineseEnglishLabel,
  per100mlLabel,
  simplifiedPer100gLabel,
  simplifiedPerServingLabel,
  textLine,
  traditionalLabel,
} from './fixtures/nutritionLabels.js';

function findGroup(result, basis, derived = false) {
  return result.groups.find(group => group.basis === basis && group.derived === derived);
}

function nutrient(result, basis, key, derived = false) {
  return findGroup(result, basis, derived)?.nutrients[key];
}

test('parses an English Nutrition Facts label and ignores %DV', () => {
  const result = parseNutritionLabel(englishLabel);
  assert.deepEqual(result.detectedLanguages, ['en']);
  assert.equal(result.serving.quantity, 30);
  assert.equal(result.serving.unit, '克');
  assert.equal(nutrient(result, 'per_serving', 'calories_kcal').value, 120);
  assert.equal(nutrient(result, 'per_serving', 'fat_g').value, 3);
  assert.equal(nutrient(result, 'per_serving', 'sodium_mg').value, 180);
  assert.ok(nutrient(result, 'per_serving', 'protein_g').valueBbox.x1
    > nutrient(result, 'per_serving', 'protein_g').valueBbox.x0);
  assert.ok(findGroup(result, 'per_serving').columnX >= 0);
});

test('corrects an English g-to-9 OCR error when serving mass and energy make it unambiguous', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    textLine('Serving Size 309', 30),
    cellsLine([{ text: 'Per Serving', x: 280 }, { text: '%DV', x: 455 }], 60),
    cellsLine([{ text: 'Calories', x: 10 }, { text: '150 kcal', x: 280 }], 90),
    cellsLine([{ text: 'Total Fat', x: 10 }, { text: '89', x: 280 }, { text: '10%', x: 455 }], 120),
    cellsLine([{ text: 'Carbohydrate', x: 10 }, { text: '13 g', x: 280 }], 150),
    cellsLine([{ text: 'Protein', x: 10 }, { text: '5 g', x: 280 }], 180),
  ]));

  const fat = nutrient(result, 'per_serving', 'fat_g');
  assert.equal(result.serving.weightG, 30);
  assert.equal(fat.value, 8);
  assert.equal(fat.originalValue, 89);
  assert.deepEqual(fat.ocrCorrection, {
    type: 'unit_g_read_as_9',
    originalValue: 89,
    correctedValue: 8,
  });
  assert.ok(fat.warnings.includes('ocr_g_9_auto_corrected'));
});

test('parses French labels and decimal commas', () => {
  const result = parseNutritionLabel(frenchLabel);
  assert.deepEqual(result.detectedLanguages, ['fr']);
  assert.equal(result.serving.quantity, 40);
  assert.equal(nutrient(result, 'per_serving', 'carbohydrates_g').value, 25.5);
  assert.equal(nutrient(result, 'per_serving', 'fibre_g').value, 3);
});

test('detects both English and French in a bilingual label', () => {
  const result = parseNutritionLabel(bilingualLabel);
  assert.deepEqual(result.detectedLanguages.sort(), ['en', 'fr']);
  assert.equal(nutrient(result, 'per_serving', 'protein_g').value, 6);
  assert.equal(nutrient(result, 'per_serving', 'fat_g').value, 4);
});

test('parses Simplified Chinese per-100g data and excludes a bare NRV number by column', () => {
  const result = parseNutritionLabel(simplifiedPer100gLabel);
  assert.deepEqual(result.detectedLanguages, ['zh-Hans']);
  assert.equal(findGroup(result, 'per_100g').basis, 'per_100g');
  assert.equal(nutrient(result, 'per_100g', 'protein_g').value, 5);
  assert.equal(nutrient(result, 'per_100g', 'calories_kcal').value, 200.765);
  assert.notEqual(nutrient(result, 'per_100g', 'calories_kcal').value, 10);
});

test('reconstructs Simplified Chinese table rows split into OCR blocks and characters', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('营 养 成 分 表', 0),
    cellsLine([{ text: '项 目', x: 10 }], 30),
    cellsLine([{ text: '每 1 0 0 克', x: 280 }], 31),
    cellsLine([{ text: 'N R V %', x: 455 }], 29),
    cellsLine([{ text: '能 量', x: 10 }], 60),
    cellsLine([{ text: '840 千 焦', x: 280 }], 62),
    cellsLine([{ text: '10', x: 455 }], 59),
    cellsLine([{ text: '蛋 白 质', x: 10 }], 90),
    cellsLine([{ text: '5 . 0 g', x: 280 }], 92),
    cellsLine([{ text: '8 %', x: 455 }], 89),
    cellsLine([{ text: '脂 肪', x: 10 }], 120),
    cellsLine([{ text: '2 g', x: 280 }], 121),
    cellsLine([{ text: '3 %', x: 455 }], 119),
    cellsLine([{ text: '碳 水 化 合 物', x: 10 }], 150),
    cellsLine([{ text: '40 g', x: 280 }], 152),
    cellsLine([{ text: '13 %', x: 455 }], 149),
  ]));

  assert.equal(nutrient(result, 'per_100g', 'calories_kcal').value, 200.765);
  assert.equal(nutrient(result, 'per_100g', 'protein_g').value, 5);
  assert.equal(nutrient(result, 'per_100g', 'fat_g').value, 2);
  assert.equal(nutrient(result, 'per_100g', 'carbohydrates_g').value, 40);
  assert.ok(result.ignoredPercentageColumns >= 1);
});

test('corrects g-to-9 and lost-decimal errors from a real-style Chinese serving label', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('营养成分表', 0),
    cellsLine([
      { text: '项目', x: 10 },
      { text: '每份(249)', x: 280 },
      { text: 'NRV%', x: 455 },
    ], 30),
    cellsLine([{ text: '能量', x: 10 }, { text: '432kJ', x: 280 }, { text: '5%', x: 455 }], 60),
    cellsLine([{ text: '蛋白质', x: 10 }, { text: '249', x: 280 }, { text: '4%', x: 455 }], 90),
    cellsLine([{ text: '脂肪', x: 10 }, { text: '3.79', x: 280 }, { text: '6%', x: 455 }], 120),
    cellsLine([{ text: '碳水化合物', x: 10 }, { text: '13.6g', x: 280 }, { text: '5%', x: 455 }], 150),
    cellsLine([{ text: '膳食纤维', x: 10 }, { text: '2.99', x: 280 }, { text: '12%', x: 455 }], 180),
    cellsLine([{ text: '钠', x: 10 }, { text: '48mg', x: 280 }, { text: '2%', x: 455 }], 210),
  ]));

  assert.equal(result.serving.weightG, 24);
  assert.deepEqual(result.serving.ocrCorrection, {
    type: 'unit_g_read_as_9',
    originalValue: 249,
    correctedValue: 24,
  });
  assert.equal(nutrient(result, 'per_serving', 'calories_kcal').value, 103.25);
  assert.equal(nutrient(result, 'per_serving', 'carbohydrates_g').value, 13.6);
  assert.equal(nutrient(result, 'per_serving', 'protein_g').value, 2.4);
  assert.equal(nutrient(result, 'per_serving', 'fat_g').value, 3.7);
  assert.equal(nutrient(result, 'per_serving', 'fibre_g').value, 2.9);
  assert.deepEqual(
    nutrient(result, 'per_serving', 'protein_g').ocrCorrection,
    {
      type: 'unit_g_read_as_9',
      originalValue: 249,
      correctedValue: 2.4,
    },
  );
  assert.deepEqual(
    findGroup(result, 'per_serving').originalEnergyValues[0],
    { value: 432, unit: 'kJ', qualifier: '' },
  );
});

test('parses Simplified Chinese per-serving data and derives per 100g only when grams are known', () => {
  const result = parseNutritionLabel(simplifiedPerServingLabel);
  assert.equal(result.serving.weightG, 30);
  assert.equal(nutrient(result, 'per_serving', 'carbohydrates_g').value, 18);
  assert.equal(nutrient(result, 'per_100g', 'carbohydrates_g', true).value, 60);
  assert.equal(findGroup(result, 'per_100g', true).derivedFrom, 'per_serving');
});

test('recalculates per-100g values from the final confirmed serving values', () => {
  const derived = deriveNutrientsPer100g({
    protein_g: { value: 6, unit: 'g', confidence: 1, warnings: [] },
    fat_g: { value: 3, unit: 'g', confidence: 1, warnings: [] },
  }, 30);
  assert.equal(derived.protein_g.value, 20);
  assert.equal(derived.fat_g.value, 10);
  assert.ok(derived.protein_g.warnings.includes('calculated_from_serving_weight'));
});

test('parses Traditional Chinese serving size and package count', () => {
  const result = parseNutritionLabel(traditionalLabel);
  assert.deepEqual(result.detectedLanguages, ['zh-Hant']);
  assert.equal(result.serving.quantity, 25);
  assert.equal(result.serving.unit, '克');
  assert.equal(result.serving.servingsPerContainer, 4);
  assert.equal(nutrient(result, 'per_serving', 'sodium_mg').value, 90);
});

test('reconstructs Traditional Chinese serving and nutrients from separate OCR blocks', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('營 養 標 示', 0),
    cellsLine([{ text: '每 一 份 量', x: 10 }], 30),
    cellsLine([{ text: '25 公 克', x: 260 }], 31),
    cellsLine([{ text: '每 份', x: 280 }], 60),
    cellsLine([{ text: '熱 量', x: 10 }], 90),
    cellsLine([{ text: '100 大 卡', x: 280 }], 91),
    cellsLine([{ text: '蛋 白 質', x: 10 }], 120),
    cellsLine([{ text: '4 公 克', x: 280 }], 122),
    cellsLine([{ text: '脂 肪', x: 10 }], 150),
    cellsLine([{ text: '2 . 5 公 克', x: 280 }], 151),
    cellsLine([{ text: '碳 水 化 合 物', x: 10 }], 180),
    cellsLine([{ text: '16 公 克', x: 280 }], 182),
  ]));

  assert.equal(result.serving.quantity, 25);
  assert.equal(result.serving.unit, '克');
  assert.equal(nutrient(result, 'per_serving', 'calories_kcal').value, 100);
  assert.equal(nutrient(result, 'per_serving', 'protein_g').value, 4);
  assert.equal(nutrient(result, 'per_serving', 'fat_g').value, 2.5);
  assert.equal(nutrient(result, 'per_serving', 'carbohydrates_g').value, 16);
});

test('detects mixed Simplified Chinese and English text', () => {
  const result = parseNutritionLabel(mixedChineseEnglishLabel);
  assert.deepEqual(result.detectedLanguages.sort(), ['en', 'zh-Hans']);
  assert.equal(nutrient(result, 'per_serving', 'calories_kcal').value, 210);
});

test('keeps per-serving and per-100g columns separate', () => {
  const result = parseNutritionLabel(dualBasisLabel);
  assert.equal(nutrient(result, 'per_serving', 'calories_kcal').value, 120);
  assert.equal(nutrient(result, 'per_100g', 'calories_kcal').value, 400);
  assert.equal(nutrient(result, 'per_serving', 'fat_g').value, 3);
  assert.equal(nutrient(result, 'per_100g', 'fat_g').value, 10);
});

test('converts kJ to kcal while preserving the original energy', () => {
  const result = parseNutritionLabel(per100mlLabel);
  const group = findGroup(result, 'per_100ml');
  assert.equal(group.nutrients.calories_kcal.value, 43.021);
  assert.deepEqual(group.originalEnergyValues[0], { value: 180, unit: 'kJ', qualifier: '' });
});

test('preserves both kJ and kcal when both appear', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    cellsLine([{ text: 'Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Energy', x: 10 }, { text: '420 kJ 100 kcal', x: 280 }], 60),
    cellsLine([{ text: 'Fat', x: 10 }, { text: '2 g', x: 280 }], 90),
    cellsLine([{ text: 'Carbohydrate', x: 10 }, { text: '20 g', x: 280 }], 120),
    cellsLine([{ text: 'Protein', x: 10 }, { text: '5 g', x: 280 }], 150),
  ]));
  const group = findGroup(result, 'per_serving');
  assert.equal(group.nutrients.calories_kcal.value, 100);
  assert.equal(group.originalEnergyValues.length, 2);
  assert.deepEqual(group.originalEnergyValues.map(item => item.unit), ['kJ', 'kcal']);
});

test('recognizes a per-100mL basis without converting it to per 100g', () => {
  const result = parseNutritionLabel(per100mlLabel);
  assert.ok(findGroup(result, 'per_100ml'));
  assert.equal(findGroup(result, 'per_100g'), undefined);
});

test('normalizes Chinese units including 公克、毫克、毫升、千焦 and 千卡', () => {
  const traditional = parseNutritionLabel(traditionalLabel);
  const liquid = parseNutritionLabel(per100mlLabel);
  assert.equal(traditional.serving.unit, '克');
  assert.equal(nutrient(traditional, 'per_serving', 'protein_g').unit, 'g');
  assert.equal(nutrient(traditional, 'per_serving', 'sodium_mg').unit, 'mg');
  assert.equal(findGroup(liquid, 'per_100ml').basis, 'per_100ml');
});

test('ignores %DV, %VQ and NRV% values instead of treating them as grams', () => {
  const english = parseNutritionLabel(englishLabel);
  const french = parseNutritionLabel(frenchLabel);
  const chinese = parseNutritionLabel(simplifiedPer100gLabel);
  assert.equal(nutrient(english, 'per_serving', 'fat_g').value, 3);
  assert.equal(nutrient(french, 'per_serving', 'fat_g').value, 4);
  assert.equal(nutrient(chinese, 'per_100g', 'protein_g').value, 5);
});

test('leaves missing nutrition fields absent', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    cellsLine([{ text: 'Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Calories', x: 10 }, { text: '80 kcal', x: 280 }], 60),
    cellsLine([{ text: 'Protein', x: 10 }, { text: '3 g', x: 280 }], 90),
  ]));
  assert.equal(nutrient(result, 'per_serving', 'protein_g').value, 3);
  assert.equal(nutrient(result, 'per_serving', 'fat_g'), undefined);
  assert.equal(nutrient(result, 'per_serving', 'carbohydrates_g'), undefined);
});

test('normalizes full-width digits, punctuation and percent signs', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('营养成分表', 0),
    cellsLine([{ text: '每１００克', x: 280 }, { text: 'NRV％', x: 450 }], 30),
    cellsLine([{ text: '蛋白质：', x: 10 }, { text: '５．５ g', x: 280 }, { text: '９％', x: 450 }], 60),
  ]));
  assert.equal(nutrient(result, 'per_100g', 'protein_g').value, 5.5);
});

test('does not silently change OCR O into zero', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    cellsLine([{ text: 'Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Total Fat', x: 10 }, { text: 'O g', x: 280 }], 60),
  ]));
  const fat = nutrient(result, 'per_serving', 'fat_g');
  assert.equal(fat.value, null);
  assert.ok(fat.warnings.includes('ocr_character_ambiguity'));
});

test('flags possible g/9 confusion without changing the recognized number', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    cellsLine([{ text: 'Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Total Fat', x: 10 }, { text: '39', x: 280 }], 60),
  ]));
  const fat = nutrient(result, 'per_serving', 'fat_g');
  assert.equal(fat.value, 39);
  assert.ok(fat.warnings.includes('possible_g_9_confusion'));
  assert.ok(fat.confidence <= 0.45);
});

test('does not auto-correct a lone decimal ending in 9 without supporting context', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    cellsLine([{ text: 'Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Total Fat', x: 10 }, { text: '3.79', x: 280 }], 60),
  ]));
  const fat = nutrient(result, 'per_serving', 'fat_g');

  assert.equal(fat.value, 3.79);
  assert.equal(fat.ocrCorrection, undefined);
  assert.ok(fat.warnings.includes('possible_g_9_confusion'));
});

test('preserves less-than and less-than-or-equal qualifiers', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('营养成分表 Nutrition Facts', 0),
    cellsLine([{ text: '每份 Per Serving', x: 280 }], 30),
    cellsLine([{ text: 'Trans Fat 反式脂肪', x: 10 }, { text: '<0.5 g', x: 280 }], 60),
    cellsLine([{ text: '糖 Sugars', x: 10 }, { text: '≤0.5克', x: 280 }], 90),
  ]));
  assert.equal(nutrient(result, 'per_serving', 'trans_fat_g').value, 0.5);
  assert.equal(nutrient(result, 'per_serving', 'trans_fat_g').qualifier, '<');
  assert.equal(nutrient(result, 'per_serving', 'sugars_g').qualifier, '≤');
});

test('recognizes per-package, per-bag and per-bottle aliases', () => {
  for (const header of ['Per Package', '每袋', '每瓶']) {
    const result = parseNutritionLabel(makeOcr([
      textLine('营养成分 Nutrition Facts', 0),
      cellsLine([{ text: header, x: 280 }], 30),
      cellsLine([{ text: '热量 Calories', x: 10 }, { text: '90 kcal', x: 280 }], 60),
    ]));
    assert.equal(findGroup(result, 'per_package').basis, 'per_package');
  }
});

test('does not derive per 100g from a serving expressed only as a cup', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Nutrition Facts', 0),
    textLine('Serving Size 1 cup', 30),
    cellsLine([{ text: 'Per Serving', x: 280 }], 60),
    cellsLine([{ text: 'Calories', x: 10 }, { text: '90 kcal', x: 280 }], 90),
  ]));
  assert.equal(result.serving.unit, '杯');
  assert.equal(findGroup(result, 'per_100g'), undefined);
});

test('extracts only explicitly labelled product name and brand', () => {
  const result = parseNutritionLabel(makeOcr([
    textLine('Product Name: Plain Yogurt', 0),
    textLine('Brand: Example Foods', 25),
    textLine('Nutrition Facts', 50),
    cellsLine([{ text: 'Per 100 g', x: 280 }], 80),
    cellsLine([{ text: 'Protein', x: 10 }, { text: '5 g', x: 280 }], 110),
  ]));
  assert.equal(result.foodName, 'Plain Yogurt');
  assert.equal(result.brand, 'Example Foods');
});
