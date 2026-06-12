import commonFoods from '../data/commonFoods.js';

function normalizeText(value) {
  return String(value || '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function toApiFood(food) {
  const nameZh = food.nameZh || '';
  const nameEn = food.nameEn || '';
  const nutrients = food.nutrientsPer100g || {};
  const source = food.source || {};

  return {
    name: nameZh || nameEn,
    nameZh,
    nameEn,
    qty: 100,
    unit: '克',
    cal: toNumber(nutrients.calories),
    protein: toNumber(nutrients.protein),
    carbs: toNumber(nutrients.carbs),
    fat: toNumber(nutrients.fat),
    source: '本地食物库',
    sourceType: 'commonFoods',
    sourceDetail: [source.name || 'USDA', source.dataType].filter(Boolean).join(' / '),
    state: food.state || '',
    externalId: String(source.externalId || ''),
  };
}

function getSearchableValues(food) {
  return [
    food.nameZh,
    food.nameEn,
    ...(food.aliasesZh || []),
    ...(food.aliasesEn || []),
  ]
    .map(normalizeText)
    .filter(Boolean);
}

function getMatchRank(values, query) {
  if (values.some(value => value === query)) return 0;
  if (values.some(value => value.startsWith(query))) return 1;
  if (values.some(value => value.includes(query))) return 2;
  return null;
}

export function searchLocalFoods(query, { limit = 20 } = {}) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  return commonFoods
    .map(food => {
      const rank = getMatchRank(getSearchableValues(food), normalizedQuery);
      return rank === null ? null : { food, rank };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return (a.food.nameEn || '').localeCompare(b.food.nameEn || '');
    })
    .slice(0, limit)
    .map(item => toApiFood(item.food));
}
