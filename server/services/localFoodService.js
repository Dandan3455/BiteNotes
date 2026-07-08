import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const foodDatabasePath = path.join(__dirname, '..', 'data', 'combined_food_database.csv');

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

function cleanText(value) {
  return String(value ?? '').trim();
}

function cleanOptionalText(value) {
  const text = cleanText(value);
  return text && text.toLowerCase() !== 'n/a' ? text : '';
}

function normalizeGiValue(value) {
  const text = cleanText(value);
  if (!text || text.toLowerCase() === 'n/a') return null;
  const number = Number(text);
  return Number.isFinite(number) ? number : text;
}

function estimateCalories({ protein, carbs, fat }) {
  return protein * 4 + carbs * 4 + fat * 9;
}

function loadCombinedFoods() {
  const csv = fs.readFileSync(foodDatabasePath, 'utf8');
  return parse(csv, {
    bom: true,
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }).map(row => {
    const protein = toNumber(row.protein_g_per_100g);
    const fat = toNumber(row.fat_g_per_100g);
    const carbs = toNumber(row.carbs_g_per_100g);
    const nameZh = cleanText(row.name_zh);
    const nameEn = cleanText(row.name_en);

    return {
      name: nameZh || nameEn,
      nameZh,
      nameEn,
      aliasesZh: [],
      aliasesEn: [],
      qty: 100,
      unit: '克',
      cal: estimateCalories({ protein, carbs, fat }),
      protein,
      carbs,
      fat,
      gi: normalizeGiValue(row.gi),
      giLevel: cleanOptionalText(row.gi_level),
      giSource: cleanOptionalText(row.gi_source),
      giMatchNote: cleanOptionalText(row.gi_match_note),
      category: cleanOptionalText(row.category),
      translationNote: cleanOptionalText(row.translation_note),
      source: '本地食物库',
      sourceType: 'commonFoods',
      sourceDetail: [cleanOptionalText(row.source), cleanOptionalText(row.category)].filter(Boolean).join(' / '),
      state: '',
      externalId: cleanText(row.food_id || row.usda_food_id),
    };
  }).filter(food => food.name);
}

const commonFoods = loadCombinedFoods();

function getGeneratedSearchValues(food) {
  const nameEn = normalizeText(food.nameEn);
  const values = [];

  if (/^chicken\b/.test(nameEn)) values.push('鸡肉');
  if (/^beef\b/.test(nameEn)) values.push('牛肉');
  if (/^pork\b/.test(nameEn)) values.push('猪肉');
  if (/^lamb\b/.test(nameEn)) values.push('羊肉');
  if (/^turkey\b/.test(nameEn)) values.push('火鸡肉');

  return values;
}

function getSearchableValues(food) {
  return [
    food.name,
    food.nameZh,
    food.nameEn,
    food.category,
    ...getGeneratedSearchValues(food),
    ...(food.aliasesZh || []),
    ...(food.aliasesEn || []),
  ]
    .map(normalizeText)
    .filter(Boolean);
}

function isBoundaryCharacter(char) {
  return !char || /[\s,，、;；:：()（）[\]【】]/.test(char);
}

function getTextMatchScore(value, query) {
  const index = value.indexOf(query);
  if (index === -1) return null;
  if (value === query) return 0;

  const after = value[index + query.length];
  const hasRightBoundary = isBoundaryCharacter(after);
  const starts = index === 0;

  if (starts && hasRightBoundary) return 8;
  if (!starts && hasRightBoundary) return 18 + index;
  if (starts) return 32;
  return 48 + index;
}

function getFoodTypePenalty(food) {
  const text = normalizeText([
    food.nameZh,
    food.nameEn,
    food.category,
  ].filter(Boolean).join(' '));
  let penalty = 0;

  const processedTerms = [
    'bagel',
    'bread',
    'cracker',
    'cookie',
    'dessert',
    'bar',
    'cake',
    'roll',
    'noodle',
    'pasta',
    'prepared from recipe',
    'fried',
    '面包',
    '贝果',
    '饼干',
    '甜点',
    '奶棒',
    '鸡蛋面',
    '餐包',
    '油炸',
  ];

  if (processedTerms.some(term => text.includes(term))) penalty += 35;

  const secondaryMeatTerms = [
    'skin',
    'variety meats',
    'by-products',
    'brain',
    'heart',
    'kidney',
    'liver',
    'feet',
    'chitterlings',
    '皮',
    '脑',
    '心',
    '肾',
    '肝',
    '蹄',
    '肠',
    '副产品',
  ];

  if (secondaryMeatTerms.some(term => text.includes(term))) penalty += 24;
  return penalty;
}

function getCommonFoodBoost(food, query) {
  const nameZh = normalizeText(food.nameZh || food.name);
  const nameEn = normalizeText(food.nameEn);
  const category = normalizeText(food.category);

  if (query === '牛奶' || query === 'milk') {
    if (/低脂牛奶|脱脂牛奶|全脂牛奶|减脂牛奶|液态牛奶/.test(nameZh)) return -16;
    if (/milk, (lowfat|nonfat|whole|reduced fat|fluid)/.test(nameEn)) return -16;
    if (/水牛奶|生产者牛奶|低钠牛奶|牛奶替代品/.test(nameZh)) return 12;
    if (/buffalo|producer|low sodium|substitute/.test(nameEn)) return 12;
  }

  if (query === '鸡蛋' || query === 'egg') {
    if (/鸡蛋，.*全蛋/.test(nameZh) || /eggs,.*egg whole/.test(nameEn)) return -18;
    if (/鸡蛋，.*蛋白|鸡蛋，.*蛋黄/.test(nameZh) || /eggs,.*egg (white|yolk)/.test(nameEn)) return -12;
    if (/鸡蛋替代品/.test(nameZh) || /egg substitute/.test(nameEn)) return 10;
    if (/火鸡蛋/.test(nameZh) || /turkey/.test(nameEn)) return 14;
  }

  if (query === '鸡肉' || query === 'chicken') {
    if (/^chicken\b/.test(nameEn) && (category.includes('poultry') || category.includes('foundation'))) {
      if (/鸡胸肉|鸡腿肉|鸡小腿|鸡绞肉/.test(nameZh) && !/皮/.test(nameZh)) return -34;
      if (/breast|thigh|drumstick|ground/.test(nameEn) && !/skin/.test(nameEn)) return -32;
      return -14;
    }
    if (/meatless|patty|breaded|fried/.test(nameEn) || /植物基|肉饼|裹粉|油炸/.test(nameZh)) return 34;
    if (/^turkey\b/.test(nameEn) || /火鸡/.test(nameZh)) return 24;
  }

  if (query === '牛肉' || query === 'beef') {
    if (/^beef\b/.test(nameEn) && (category.includes('beef') || category.includes('foundation'))) {
      if (/牛绞肉|牛里脊|牛上腰|牛上后腿|牛眼圆|牛胸肉|牛肩|牛排/.test(nameZh)) return -24;
      if (/ground|tenderloin|steak|round|brisket|chuck|loin/.test(nameEn)) return -22;
      return -14;
    }
    if (/bison|buffalo|game meat|beefalo|frankfurter|sausage|beans/.test(nameEn)) return 34;
    if (/野牛|水牛|美洲野牛|热狗|香肠|焗豆/.test(nameZh)) return 34;
  }

  if (query === '猪肉' || query === 'pork') {
    if (/^pork\b/.test(nameEn) && (category.includes('pork') || category.includes('foundation'))) {
      if (/猪绞肉|猪里脊肉|五花肉|鲜猪|猪肩肉|猪后腿/.test(nameZh)) return -24;
      if (/ground|tenderloin|belly|fresh|loin|shoulder|leg/.test(nameEn)) return -22;
      return -14;
    }
    if (/sausage|bacon|salt pork|chorizo|beans|restaurant/.test(nameEn)) return 28;
    if (/香肠|培根|咸猪肉|焗豆|餐厅|中式风味/.test(nameZh)) return 28;
    if (/boar|wild/.test(nameEn) || /野猪/.test(nameZh)) return 22;
  }

  if (query === '羊肉' || query === 'lamb') {
    if (/^lamb\b/.test(nameEn)) {
      if (/羊绞肉|羊腿|羊里脊|羊肩|羊排|羔羊肉/.test(nameZh)) return -24;
      if (/ground|leg|loin|shoulder|chop|rack|cubed/.test(nameEn)) return -22;
      return -14;
    }
    if (/goat|antelope|game meat|veal/.test(nameEn)) return 34;
    if (/山羊|羚羊|小牛|野味/.test(nameZh)) return 34;
  }

  return 0;
}


function getCategoryBoost(food, query) {
  const category = normalizeText(food.category);
  const name = normalizeText(food.nameZh || food.name);
  const queryIsDairyEggOrMeat = ['牛奶', 'milk', '鸡蛋', 'egg', '鸡肉', 'chicken', '牛肉', 'beef', '猪肉', 'pork', '羊肉', 'lamb'].some(term => query.includes(term));

  if (!queryIsDairyEggOrMeat) return 0;
  if (!category.includes('dairy and egg') && !category.includes('foundation') && !category.includes('poultry') && !category.includes('beef') && !category.includes('pork') && !category.includes('lamb')) return 0;
  if (name.includes(query)) return -12;
  return -6;
}

function getSourceBoost(food) {
  return String(food.externalId || '').startsWith('foundation_') ? -6 : 0;
}

function getMatchRank(food, query) {
  const values = getSearchableValues(food);
  const scores = values
    .map(value => getTextMatchScore(value, query))
    .filter(score => score !== null);

  if (!scores.length) return null;

  const bestTextScore = Math.min(...scores);
  const lengthPenalty = Math.min(normalizeText(food.nameZh || food.name).length, 30) * 0.35;
  return bestTextScore
    + lengthPenalty
    + getFoodTypePenalty(food)
    + getCommonFoodBoost(food, query)
    + getCategoryBoost(food, query)
    + getSourceBoost(food);
}

export function searchLocalFoods(query, { limit = 20 } = {}) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  return commonFoods
    .map(food => {
      const rank = getMatchRank(food, normalizedQuery);
      return rank === null ? null : { food, rank };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return (a.food.nameEn || '').localeCompare(b.food.nameEn || '');
    })
    .slice(0, limit)
    .map(item => item.food);
}
