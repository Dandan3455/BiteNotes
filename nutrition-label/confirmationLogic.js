const CORE_FIELDS = Object.freeze([
  ['calories_kcal', '热量'],
  ['carbohydrates_g', '碳水化合物'],
  ['protein_g', '蛋白质'],
  ['fat_g', '脂肪'],
]);

const UNIT_MEASURES = new Map([
  ['g', { family: 'mass', factor: 1 }],
  ['克', { family: 'mass', factor: 1 }],
  ['公克', { family: 'mass', factor: 1 }],
  ['mg', { family: 'mass', factor: 0.001 }],
  ['毫克', { family: 'mass', factor: 0.001 }],
  ['kg', { family: 'mass', factor: 1000 }],
  ['千克', { family: 'mass', factor: 1000 }],
  ['公斤', { family: 'mass', factor: 1000 }],
  ['ml', { family: 'volume', factor: 1 }],
  ['毫升', { family: 'volume', factor: 1 }],
  ['l', { family: 'volume', factor: 1000 }],
  ['升', { family: 'volume', factor: 1000 }],
  ['公升', { family: 'volume', factor: 1000 }],
]);

function numberOrNull(value) {
  if (value === '' || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeUnit(value) {
  return String(value || '').trim().toLocaleLowerCase().replaceAll(' ', '');
}

function baseAmountForBasis(basis, serving = {}) {
  if (basis === 'per_100g') return { quantity: 100, unit: 'g' };
  if (basis === 'per_100ml') return { quantity: 100, unit: 'mL' };
  if (basis === 'per_package') return { quantity: 1, unit: '包装' };
  return {
    quantity: numberOrNull(serving.quantity) > 0 ? Number(serving.quantity) : 1,
    unit: String(serving.unit || '').trim() || '份',
  };
}

export function defaultSaveAmount(basis, serving = {}) {
  return { ...baseAmountForBasis(basis, serving) };
}

export function amountScaleFactor({
  basis,
  amountQuantity,
  amountUnit,
  servingQuantity,
  servingUnit,
}) {
  const desiredQuantity = numberOrNull(amountQuantity);
  if (desiredQuantity == null || desiredQuantity <= 0) return null;

  const base = baseAmountForBasis(basis, {
    quantity: servingQuantity,
    unit: servingUnit,
  });
  const desiredUnit = normalizeUnit(amountUnit);
  const baseUnit = normalizeUnit(base.unit);
  if (!desiredUnit || !baseUnit) return null;

  const desiredMeasure = UNIT_MEASURES.get(desiredUnit);
  const baseMeasure = UNIT_MEASURES.get(baseUnit);
  if (desiredMeasure && baseMeasure && desiredMeasure.family === baseMeasure.family) {
    return (desiredQuantity * desiredMeasure.factor) / (base.quantity * baseMeasure.factor);
  }
  if (desiredUnit === baseUnit) return desiredQuantity / base.quantity;
  return null;
}

export function scaleNutritionValue(value, factor) {
  const number = numberOrNull(value);
  if (number == null || !Number.isFinite(factor)) return null;
  return Math.round(number * factor * 1000) / 1000;
}

export function prepareSaveReview(nutrients = {}) {
  const values = Object.fromEntries(CORE_FIELDS.map(([key]) => [
    key,
    numberOrNull(nutrients[key]?.value),
  ]));
  const macros = [values.carbohydrates_g, values.protein_g, values.fat_g];
  const existingCalculation = nutrients.calories_kcal?.calculation?.type === 'macro_4_4_9';
  let calculatedCalories = existingCalculation ? values.calories_kcal : null;
  let calculationNeeded = false;

  if (values.calories_kcal == null && macros.every(value => value != null)) {
    calculatedCalories = Math.round((
      values.carbohydrates_g * 4
      + values.protein_g * 4
      + values.fat_g * 9
    ) * 100) / 100;
    values.calories_kcal = calculatedCalories;
    calculationNeeded = true;
  }

  const missingFields = CORE_FIELDS
    .filter(([key]) => values[key] == null)
    .map(([key, label]) => ({ key, label }));

  return {
    calculatedCalories,
    calculationNeeded,
    macroValues: {
      carbohydrates_g: values.carbohydrates_g,
      protein_g: values.protein_g,
      fat_g: values.fat_g,
    },
    missingFields,
    requiresReview: calculatedCalories != null || missingFields.length > 0,
  };
}
