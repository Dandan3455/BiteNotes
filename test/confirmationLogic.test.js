import assert from 'node:assert/strict';
import test from 'node:test';

import {
  amountScaleFactor,
  defaultSaveAmount,
  prepareSaveReview,
  scaleNutritionValue,
} from '../nutrition-label/confirmationLogic.js';

function nutrient(value) {
  return { value };
}

test('uses explicit quantity and unit for each nutrition basis', () => {
  assert.deepEqual(defaultSaveAmount('per_serving', { quantity: 24, unit: 'g' }), {
    quantity: 24,
    unit: 'g',
  });
  assert.deepEqual(defaultSaveAmount('per_100g'), { quantity: 100, unit: 'g' });
  assert.deepEqual(defaultSaveAmount('per_100ml'), { quantity: 100, unit: 'mL' });
});

test('scales nutrition values to compatible save quantities and units', () => {
  const per24g = amountScaleFactor({
    basis: 'per_100g',
    amountQuantity: 24,
    amountUnit: 'g',
  });
  const per250ml = amountScaleFactor({
    basis: 'per_100ml',
    amountQuantity: 250,
    amountUnit: '毫升',
  });

  assert.equal(per24g, 0.24);
  assert.equal(scaleNutritionValue(430.208, per24g), 103.25);
  assert.equal(per250ml, 2.5);
  assert.equal(amountScaleFactor({
    basis: 'per_100g',
    amountQuantity: 1,
    amountUnit: '份',
  }), null);
});

test('calculates missing calories from complete macros and still requires review', () => {
  const review = prepareSaveReview({
    carbohydrates_g: nutrient(13.6),
    protein_g: nutrient(2.4),
    fat_g: nutrient(3.7),
  });

  assert.equal(review.calculatedCalories, 97.3);
  assert.equal(review.calculationNeeded, true);
  assert.deepEqual(review.missingFields, []);
  assert.equal(review.requiresReview, true);
});

test('continues to require review while calories remain auto-calculated', () => {
  const review = prepareSaveReview({
    calories_kcal: {
      value: 97.3,
      calculation: { type: 'macro_4_4_9' },
    },
    carbohydrates_g: nutrient(13.6),
    protein_g: nutrient(2.4),
    fat_g: nutrient(3.7),
  });

  assert.equal(review.calculatedCalories, 97.3);
  assert.equal(review.calculationNeeded, false);
  assert.equal(review.requiresReview, true);
});

test('lists every missing core value when calories cannot be calculated', () => {
  const review = prepareSaveReview({
    carbohydrates_g: nutrient(13.6),
    fat_g: nutrient(3.7),
  });

  assert.equal(review.calculatedCalories, null);
  assert.deepEqual(review.missingFields.map(field => field.key), [
    'calories_kcal',
    'protein_g',
  ]);
});
