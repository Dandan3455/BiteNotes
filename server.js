import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSearchTerms, hasAlias, localizeFoodName } from './foodAliasService.js';
import { searchLocalFoods } from './server/services/localFoodService.js';

const app = express();
const PORT = process.env.PORT || 3000;
const USDA_API_KEY = process.env.USDA_API_KEY;
const APP_USER_AGENT = 'BiteNotes/0.1 (food search gateway)';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localResultThreshold = 10;

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function rounded(value) {
  return Math.round(toNumber(value) * 10) / 10;
}

function hasUsefulNutrition(food) {
  return Boolean(food.name) && [food.cal, food.protein, food.carbs, food.fat].some(value => toNumber(value) > 0);
}

function dedupeFoods(foods) {
  const seen = new Set();
  const uniqueFoods = [];

  foods.forEach(food => {
    const key = [
      food.name,
      food.unit,
      rounded(food.cal),
      rounded(food.protein),
      rounded(food.carbs),
      rounded(food.fat),
    ].join('|');
    if (seen.has(key)) return;
    seen.add(key);
    uniqueFoods.push(food);
  });

  return uniqueFoods;
}

function normalizeFoodResult(food) {
  const nameZh = food.nameZh || '';
  const nameEn = food.nameEn || food.externalName || food.name || '';
  return {
    name: nameZh || food.name || nameEn,
    nameZh,
    nameEn,
    qty: 100,
    unit: '克',
    cal: rounded(food.cal),
    protein: rounded(food.protein),
    carbs: rounded(food.carbs),
    fat: rounded(food.fat),
    source: typeof food.source === 'string' ? food.source : food.source?.name || '',
    sourceType: food.sourceType || '',
    sourceDetail: food.sourceDetail || '',
    externalId: String(food.externalId || ''),
  };
}

function getUsdaNutrient(food, nutrientIds) {
  const nutrient = food.foodNutrients?.find(item => nutrientIds.includes(Number(item.nutrientId)));
  return toNumber(nutrient?.value);
}

function normalizeUsdaFood(food) {
  return {
    name: food.description || food.brandName || '',
    nameZh: '',
    nameEn: food.description || food.brandName || '',
    qty: 100,
    unit: '克',
    cal: rounded(getUsdaNutrient(food, [1008])),
    protein: rounded(getUsdaNutrient(food, [1003])),
    carbs: rounded(getUsdaNutrient(food, [1005])),
    fat: rounded(getUsdaNutrient(food, [1004])),
    source: '联网搜索',
    sourceType: 'online',
    sourceDetail: 'USDA',
    externalId: String(food.fdcId || ''),
  };
}

function normalizeOpenFoodFactsProduct(product) {
  const nutriments = product.nutriments || {};
  return {
    name: product.product_name || product.generic_name || product.brands || '',
    nameZh: '',
    nameEn: product.product_name || product.generic_name || product.brands || '',
    qty: 100,
    unit: '克',
    cal: rounded(nutriments['energy-kcal_100g'] ?? nutriments['energy-kcal'] ?? 0),
    protein: rounded(nutriments.proteins_100g ?? nutriments.proteins ?? 0),
    carbs: rounded(nutriments.carbohydrates_100g ?? nutriments.carbohydrates ?? 0),
    fat: rounded(nutriments.fat_100g ?? nutriments.fat ?? 0),
    source: '联网搜索',
    sourceType: 'online',
    sourceDetail: 'Open Food Facts',
    externalId: String(product.code || product.id || ''),
  };
}

async function searchUsda(query) {
  if (!USDA_API_KEY) return [];

  const url = new URL('https://api.nal.usda.gov/fdc/v1/foods/search');
  url.searchParams.set('api_key', USDA_API_KEY);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': APP_USER_AGENT,
    },
    body: JSON.stringify({
      query,
      pageSize: 8,
      dataType: ['Foundation', 'SR Legacy', 'Survey (FNDDS)'],
    }),
  });

  if (!response.ok) throw new Error(`USDA request failed: ${response.status}`);

  const data = await response.json();
  return (data.foods || []).map(normalizeUsdaFood).filter(hasUsefulNutrition);
}

async function searchOpenFoodFacts(query) {
  const url = new URL('https://world.openfoodfacts.org/cgi/search.pl');
  url.searchParams.set('search_terms', query);
  url.searchParams.set('search_simple', '1');
  url.searchParams.set('action', 'process');
  url.searchParams.set('json', '1');
  url.searchParams.set('page_size', '10');
  url.searchParams.set('fields', 'code,product_name,generic_name,brands,nutriments');

  const response = await fetch(url, {
    headers: {
      'User-Agent': APP_USER_AGENT,
    },
  });
  if (!response.ok) throw new Error(`Open Food Facts request failed: ${response.status}`);

  const data = await response.json();
  return (data.products || []).map(normalizeOpenFoodFactsProduct).filter(hasUsefulNutrition);
}

app.get('/api/food-search', async (req, res) => {
  const query = String(req.query.q || '').trim();
  if (!query) {
    res.json([]);
    return;
  }

  const searchTerms = getSearchTerms(query);
  const localFoods = dedupeFoods(searchTerms.flatMap(term => searchLocalFoods(term, { limit: 20 })));
  if (localFoods.length >= localResultThreshold) {
    res.json(dedupeFoods(localFoods).slice(0, 20));
    return;
  }

  const shouldLocalizeName = hasAlias(query);
  const results = await Promise.allSettled(searchTerms.flatMap(term => [
    searchUsda(term),
    searchOpenFoodFacts(term),
  ]));

  const foods = results
    .flatMap(result => result.status === 'fulfilled' ? result.value : [])
    .map(food => shouldLocalizeName
      ? {
        ...food,
        name: localizeFoodName(query, food.nameEn || food.name),
        nameZh: localizeFoodName(query, food.nameEn || food.name),
        nameEn: food.nameEn || food.name,
      }
      : food);
  results
    .filter(result => result.status === 'rejected')
    .forEach(result => console.warn(result.reason.message || result.reason));

  res.json(dedupeFoods([...localFoods, ...foods].map(normalizeFoodResult)).slice(0, 20));
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`BiteNotes running at http://localhost:${PORT}`);
});
