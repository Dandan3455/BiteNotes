import assert from 'node:assert/strict';
import test from 'node:test';

import {
  validateImageQuality,
  validateNutritionProfile,
  validateScannedFood,
} from '../nutrition-label/nutritionValidator.js';

function nutrient(value, unit, confidence = 0.94, warnings = []) {
  return { value, unit, confidence, warnings, qualifier: '' };
}

function completeProfile(overrides = {}) {
  return {
    basis: 'per_100g',
    warnings: [],
    originalEnergyValues: [],
    nutrients: {
      calories_kcal: nutrient(200, 'kcal'),
      carbohydrates_g: nutrient(30, 'g'),
      protein_g: nutrient(10, 'g'),
      fat_g: nutrient(4, 'g'),
    },
    ...overrides,
  };
}

test('rejects negative nutrition values', () => {
  const profile = completeProfile();
  profile.nutrients.fat_g.value = -1;
  const result = validateNutritionProfile(profile);
  assert.ok(result.errors.some(item => item.code === 'negative_value' && item.field === 'fat_g'));
});

test('warns about a likely lost decimal point above 100g per 100g', () => {
  const profile = completeProfile();
  profile.nutrients.carbohydrates_g.value = 205;
  const result = validateNutritionProfile(profile);
  assert.ok(result.warnings.some(item => item.code === 'nutrient_over_100g'));
});

test('uses 4/4/9 only as a loose warning', () => {
  const plausible = validateNutritionProfile(completeProfile());
  assert.equal(plausible.warnings.some(item => item.code === 'macro_energy_mismatch'), false);

  const implausible = completeProfile();
  implausible.nutrients.calories_kcal.value = 900;
  const result = validateNutritionProfile(implausible);
  assert.ok(result.warnings.some(item => item.code === 'macro_energy_mismatch'));
  assert.equal(result.errors.some(item => item.code === 'macro_energy_mismatch'), false);
});

test('checks kJ and kcal consistency without overwriting either value', () => {
  const profile = completeProfile({
    originalEnergyValues: [
      { value: 400, unit: 'kJ' },
      { value: 300, unit: 'kcal' },
    ],
  });
  const result = validateNutritionProfile(profile);
  assert.ok(result.warnings.some(item => item.code === 'energy_units_inconsistent'));
  assert.equal(profile.originalEnergyValues[0].value, 400);
  assert.equal(profile.originalEnergyValues[1].value, 300);
});

test('surfaces possible mg/g OCR confusion for sodium', () => {
  const profile = completeProfile();
  profile.nutrients.sodium_mg = nutrient(230000, 'mg', 0.55, ['sodium_unit_requires_confirmation']);
  const result = validateNutritionProfile(profile);
  assert.ok(result.warnings.some(item => item.code === 'sodium_unit_requires_confirmation'));
  assert.ok(result.warnings.some(item => item.code === 'low_field_confidence'));
});

test('does not fill missing fields and marks them for review', () => {
  const profile = completeProfile();
  delete profile.nutrients.protein_g;
  const result = validateNutritionProfile(profile);
  assert.ok(result.warnings.some(item => item.code === 'missing_core_field' && item.field === 'protein_g'));
  assert.equal(profile.nutrients.protein_g, undefined);
});

test('blocks a missing name but permits warnings after explicit confirmation in the UI', () => {
  const profile = completeProfile();
  const result = validateScannedFood({ name: '', qty: 100, nutritionBasis: 'per_100g' }, profile);
  assert.ok(result.errors.some(item => item.code === 'missing_food_name'));
  assert.equal(result.warnings.some(item => item.code === 'macro_energy_mismatch'), false);
});

test('flags blurry, low-contrast and partially cropped image metadata', () => {
  const warnings = validateImageQuality({
    sharpnessScore: 3,
    contrastScore: 10,
    partialCrop: true,
  });
  assert.deepEqual(warnings.map(item => item.code).sort(), [
    'image_blurry',
    'image_low_contrast',
    'image_partial_crop',
  ]);
});

test('does not apply per-100g mass warnings to per-100mL data', () => {
  const profile = completeProfile({ basis: 'per_100ml' });
  profile.nutrients.carbohydrates_g.value = 105;
  const result = validateNutritionProfile(profile);
  assert.equal(result.warnings.some(item => item.code === 'nutrient_over_100g'), false);
});
