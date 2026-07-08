import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { searchLocalFoods } from './server/services/localFoodService.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function rounded(value) {
  return Math.round(toNumber(value) * 10) / 10;
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
    gi: food.gi ?? null,
    giLevel: food.giLevel || '',
    giSource: food.giSource || '',
    giMatchNote: food.giMatchNote || '',
    category: food.category || '',
    translationNote: food.translationNote || '',
  };
}

app.get('/api/food-search', async (req, res) => {
  const query = String(req.query.q || '').trim();
  if (!query) {
    res.json([]);
    return;
  }

  const localFoods = dedupeFoods(searchLocalFoods(query, { limit: 20 }));
  res.json(localFoods.map(normalizeFoodResult).slice(0, 20));
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`BiteNotes running at http://localhost:${PORT}`);
});
