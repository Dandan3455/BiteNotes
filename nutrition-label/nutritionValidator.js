import { CORE_NUTRITION_FIELDS, NUTRITION_FIELD_DEFINITIONS } from './fieldAliases.js';

const WARNING_MESSAGES = Object.freeze({
  calculated_from_serving_weight: '该组数据根据标签份量换算为每100克。',
  conflicting_ocr_values: '同一字段识别到了不同数值，请对照图片检查。',
  missing_energy_unit: '热量单位未被清晰识别，当前按 kcal 展示，请确认。',
  missing_nutrient_unit: '营养数值的单位未被清晰识别，请确认。',
  nutrition_basis_inferred: '计量基础未被清晰识别，当前暂按每份展示。',
  ocr_character_ambiguity: '发现 0/O 或 1/I/l 字符混淆，未自动改写该数值。',
  possible_g_9_confusion: '数值末尾的9可能是单位 g 的 OCR 误识，程序未自动修改，请对照标签。',
  sodium_unit_requires_confirmation: '钠的单位识别为 g 并已换算为 mg，请确认不是 mg/g 识别错误。',
  unexpected_energy_unit: '热量单位异常，请手动核对。',
  unexpected_nutrient_unit: '营养素单位异常，请手动核对。',
});

function numberOrNull(value) {
  if (value === '' || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function issue(code, message, field = '', severity = 'warning') {
  return { code, message, field, severity };
}

function dedupeIssues(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = `${item.code}|${item.field}|${item.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function validateOriginalEnergy(profile, issues) {
  const values = profile.originalEnergyValues || [];
  const kilojoules = values.find(item => String(item.unit).toLocaleLowerCase().includes('kj') || item.unit === '千焦');
  const kilocalories = values.find(item => /kcal|千卡|大卡/iu.test(String(item.unit)));
  if (!kilojoules || !kilocalories) return;

  const expectedKcal = Number(kilojoules.value) / 4.184;
  const actualKcal = Number(kilocalories.value);
  const difference = Math.abs(expectedKcal - actualKcal);
  if (Number.isFinite(difference) && difference > Math.max(actualKcal * 0.12, 8)) {
    issues.push(issue(
      'energy_units_inconsistent',
      '标签中 kJ 与 kcal 的换算结果不一致，可能存在 OCR 错误。',
      'calories_kcal',
    ));
  }
}

export function validateNutritionProfile(profile, context = {}) {
  const issues = [];
  const nutrients = profile?.nutrients || {};

  CORE_NUTRITION_FIELDS.forEach(field => {
    const nutrient = nutrients[field];
    if (numberOrNull(nutrient?.value) == null) {
      issues.push(issue(
        'missing_core_field',
        `${NUTRITION_FIELD_DEFINITIONS[field].label}未识别，不会自动填补。`,
        field,
      ));
    }
  });

  Object.entries(nutrients).forEach(([field, nutrient]) => {
    const value = numberOrNull(nutrient?.value);
    if (value != null && value < 0) {
      issues.push(issue('negative_value', '营养数值不能为负数。', field, 'error'));
    }
    if (value != null && nutrient?.confidence < 0.65) {
      issues.push(issue('low_field_confidence', `${NUTRITION_FIELD_DEFINITIONS[field]?.label || field}识别信心较低。`, field));
    }
    (nutrient?.warnings || []).forEach(code => {
      issues.push(issue(code, WARNING_MESSAGES[code] || '该字段可能存在 OCR 识别问题。', field));
    });
  });

  (profile?.warnings || []).forEach(code => {
    issues.push(issue(code, WARNING_MESSAGES[code] || '该组数据需要人工确认。'));
  });

  if (profile?.basis === 'per_100g') {
    ['carbohydrates_g', 'protein_g', 'fat_g', 'fibre_g', 'sugars_g'].forEach(field => {
      const value = numberOrNull(nutrients[field]?.value);
      if (value != null && value > 100) {
        issues.push(issue(
          'nutrient_over_100g',
          `${NUTRITION_FIELD_DEFINITIONS[field].label}每100克超过100克，可能丢失了小数点或单位识别错误。`,
          field,
        ));
      }
    });
  }

  const calories = numberOrNull(nutrients.calories_kcal?.value);
  const carbs = numberOrNull(nutrients.carbohydrates_g?.value);
  const protein = numberOrNull(nutrients.protein_g?.value);
  const fat = numberOrNull(nutrients.fat_g?.value);
  if ([calories, carbs, protein, fat].every(value => value != null)) {
    const estimated = carbs * 4 + protein * 4 + fat * 9;
    const difference = Math.abs(calories - estimated);
    if (difference > Math.max(estimated * 0.35, 55)) {
      issues.push(issue(
        'macro_energy_mismatch',
        `标签热量与 4/4/9 宽松估算相差较大（估算约 ${Math.round(estimated)} kcal），请检查小数点和单位。`,
        'calories_kcal',
      ));
    }
  }

  validateOriginalEnergy(profile || {}, issues);

  if (context.ocrConfidence != null && context.ocrConfidence < 0.6) {
    issues.push(issue('low_ocr_confidence', 'OCR 整体信心较低，请逐项对照图片。'));
  }

  const uniqueIssues = dedupeIssues(issues);
  return {
    errors: uniqueIssues.filter(item => item.severity === 'error'),
    warnings: uniqueIssues.filter(item => item.severity !== 'error'),
    fields: Object.fromEntries(Object.keys(NUTRITION_FIELD_DEFINITIONS).map(field => [
      field,
      uniqueIssues.filter(item => item.field === field),
    ])),
    requiresConfirmation: uniqueIssues.some(item => item.severity !== 'error'),
  };
}

export function validateImageQuality(metadata = {}) {
  const warnings = [];
  if (metadata.sharpnessScore != null && metadata.sharpnessScore < 9) {
    warnings.push(issue('image_blurry', '图片可能模糊，建议重新拍摄或仔细核对。'));
  }
  if (metadata.contrastScore != null && metadata.contrastScore < 24) {
    warnings.push(issue('image_low_contrast', '图片对比度较低，可尝试开启对比度增强。'));
  }
  if (metadata.partialCrop) {
    warnings.push(issue('image_partial_crop', '图片可能未包含完整营养表。'));
  }
  return warnings;
}

export function validateScannedFood(item, profile, context = {}) {
  const result = validateNutritionProfile(profile, context);
  const errors = [...result.errors];
  if (!String(item?.name || '').trim()) {
    errors.push(issue('missing_food_name', '请填写商品或食物名称。', 'food_name', 'error'));
  }
  if (!['per_serving', 'per_100g', 'per_100ml', 'per_package'].includes(item?.nutritionBasis)) {
    errors.push(issue('invalid_nutrition_basis', '请选择正确的计量基础。', 'nutrition_basis', 'error'));
  }
  if (Number(item?.qty) <= 0) {
    errors.push(issue('invalid_serving_quantity', '份量或计量数值必须大于0。', 'serving_quantity', 'error'));
  }
  return { ...result, errors: dedupeIssues(errors) };
}
