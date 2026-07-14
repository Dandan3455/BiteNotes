export const NUTRITION_FIELD_DEFINITIONS = Object.freeze({
  calories_kcal: {
    label: '热量',
    storageUnit: 'kcal',
    priority: 100,
    aliases: [
      'calories', 'calorie', 'energy', 'énergie', 'energie',
      '能量', '热量', '熱量',
    ],
  },
  saturated_fat_g: {
    label: '饱和脂肪',
    storageUnit: 'g',
    priority: 95,
    aliases: [
      'saturated fat', 'saturates', 'saturated', 'saturés', 'satures',
      '饱和脂肪酸', '饱和脂肪', '飽和脂肪酸', '飽和脂肪',
    ],
  },
  trans_fat_g: {
    label: '反式脂肪',
    storageUnit: 'g',
    priority: 94,
    aliases: [
      'trans fat', 'trans', '反式脂肪酸', '反式脂肪',
    ],
  },
  carbohydrates_g: {
    label: '碳水化合物',
    storageUnit: 'g',
    priority: 90,
    aliases: [
      'total carbohydrate', 'carbohydrate', 'carbohydrates', 'carbs',
      'glucides', '碳水化合物',
    ],
  },
  fibre_g: {
    label: '膳食纤维',
    storageUnit: 'g',
    priority: 89,
    aliases: [
      'dietary fibre', 'dietary fiber', 'fibre', 'fiber', 'fibres',
      '膳食纤维', '膳食纖維',
    ],
  },
  sugars_g: {
    label: '糖',
    storageUnit: 'g',
    priority: 88,
    aliases: ['total sugars', 'sugars', 'sugar', 'sucres', '糖'],
  },
  protein_g: {
    label: '蛋白质',
    storageUnit: 'g',
    priority: 85,
    aliases: ['protein', 'proteins', 'protéines', 'proteines', '蛋白质', '蛋白質'],
  },
  sodium_mg: {
    label: '钠',
    storageUnit: 'mg',
    priority: 84,
    aliases: ['sodium', '钠', '鈉'],
  },
  fat_g: {
    label: '脂肪',
    storageUnit: 'g',
    priority: 70,
    aliases: ['total fat', 'fat', 'lipides', '脂肪'],
  },
});

export const NUTRITION_BASIS_ALIASES = Object.freeze({
  per_100g: [
    'per 100 g', 'per 100g', 'pour 100 g', 'pour 100g',
    '每100克', '每 100 克', '每100g', '每 100g',
    '每100公克', '每 100 公克',
  ],
  per_100ml: [
    'per 100 ml', 'per 100ml', 'pour 100 ml', 'pour 100ml',
    '每100毫升', '每 100 毫升', '每100ml', '每 100ml',
  ],
  per_serving: [
    'per serving', 'par portion', '每份', '每一份',
  ],
  per_package: [
    'per package', 'per container', 'per bag', 'per bottle',
    'par emballage', '每包装', '每包裝', '每袋', '每瓶',
  ],
});

export const LABEL_STRUCTURE_ALIASES = Object.freeze({
  titles: [
    'nutrition facts', 'valeur nutritive',
    '营养成分表', '营养成分', '營養標示', '營養成分', '營養資料',
  ],
  servingSize: [
    'serving size', 'portion',
    '每份量', '每份', '每一份量', '每一份',
  ],
  servingsPerContainer: [
    'servings per container', 'servings per package', 'about servings',
    'portions par contenant', 'portions par emballage',
    '每包装份数', '每包裝份數', '本包装含', '本包裝含',
  ],
  percentageHeaders: [
    '% daily value', '%dv', 'daily value',
    '% vq', '%vq', 'valeur quotidienne',
    'nrv%', 'nrv %', 'nrv',
    '营养素参考值%', '营养素参考值',
    '營養素參考值%', '營養素參考值',
    '每日参考值', '每日參考值',
  ],
  foodName: ['product name', 'food name', 'nom du produit', '品名', '产品名称', '產品名稱'],
  brand: ['brand', 'marque', '品牌'],
});

export const UNIT_ALIASES = Object.freeze({
  kcal: ['kcal', 'cal', '千卡', '大卡'],
  kJ: ['kj', '千焦'],
  g: ['g', '克', '公克'],
  mg: ['mg', '毫克'],
  mL: ['ml', '毫升'],
  percent: ['%'],
});

export const BASIS_LABELS = Object.freeze({
  per_serving: '每份',
  per_100g: '每100克',
  per_100ml: '每100毫升',
  per_package: '每包装',
});

export const CORE_NUTRITION_FIELDS = Object.freeze([
  'calories_kcal',
  'carbohydrates_g',
  'protein_g',
  'fat_g',
]);

export const SORTED_FIELD_ENTRIES = Object.freeze(
  Object.entries(NUTRITION_FIELD_DEFINITIONS)
    .sort(([, left], [, right]) => right.priority - left.priority),
);
