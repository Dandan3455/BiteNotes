import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const mealUrl = new URL('../meal.html', import.meta.url);
const styleUrl = new URL('../style.css', import.meta.url);

test('keeps mobile food search results focused on names, core macros, and actions', async () => {
  const [meal, style] = await Promise.all([
    readFile(mealUrl, 'utf8'),
    readFile(styleUrl, 'utf8'),
  ]);
  const renderer = meal.match(/function showSearchResults[\s\S]*?async function fetchExternalFoods/u)?.[0] || '';

  assert.match(renderer, /food-result-name/u);
  assert.match(renderer, /food-result-english/u);
  assert.match(renderer, /<span>热量<\/span>/u);
  assert.match(renderer, /<span>蛋白质<\/span>/u);
  assert.match(renderer, /<span>碳水<\/span>/u);
  assert.match(renderer, /<span>脂肪<\/span>/u);
  assert.match(renderer, /<span>GI<\/span><b>\$\{giDisplay\(item\)\}<\/b>/u);
  assert.match(renderer, /detail-food-btn/u);
  assert.match(renderer, /use-food-btn/u);
  assert.doesNotMatch(renderer, /foodSourceLabel|foodAmountLabel|giSummary|每包装|数据来源/u);

  assert.match(meal, /function foodEnglishName\(item\)/u);
  assert.match(meal, /function giLevelDisplay\(item\)/u);
  assert.match(meal, /function giDisplay\(item\)/u);
  assert.match(meal, /if \(\['high', '高', '高 gi', '高gi'\]\.includes\(level\)\) return '高'/u);
  assert.match(meal, /return `\$\{rounded\(numericGi\)\} · \$\{level\}`/u);
  assert.match(meal, /return '待匹配'/u);
  assert.match(style, /@media \(max-width: 560px\)/u);
  assert.match(style, /grid-template-columns: repeat\(5, minmax\(0, 1fr\)\)/u);
  assert.match(style, /grid-template-columns: minmax\(64px, 1fr\) auto auto auto/u);
});
