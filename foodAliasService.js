const foodAliases = {
  鸡胸肉: ['chicken breast'],
  鸡腿肉: ['chicken thigh'],
  鸡蛋: ['egg'],
  蛋清: ['egg white'],
  蛋白: ['egg white'],
  牛肉: ['beef'],
  牛排: ['beef steak'],
  猪肉: ['pork'],
  虾: ['shrimp'],
  大虾: ['shrimp'],
  三文鱼: ['salmon'],
  鳕鱼: ['cod'],
  金枪鱼: ['tuna'],
  米饭: ['rice cooked'],
  白米饭: ['white rice cooked'],
  糙米饭: ['brown rice cooked'],
  燕麦: ['oats'],
  燕麦片: ['oatmeal'],
  红薯: ['sweet potato'],
  地瓜: ['sweet potato'],
  土豆: ['potato'],
  马铃薯: ['potato'],
  玉米: ['corn'],
  面包: ['bread'],
  全麦面包: ['whole wheat bread'],
  意面: ['pasta cooked'],
  西兰花: ['broccoli'],
  花椰菜: ['cauliflower'],
  菠菜: ['spinach'],
  生菜: ['lettuce'],
  番茄: ['tomato'],
  西红柿: ['tomato'],
  黄瓜: ['cucumber'],
  胡萝卜: ['carrot'],
  牛油果: ['avocado'],
  香蕉: ['banana'],
  苹果: ['apple'],
  蓝莓: ['blueberries'],
  草莓: ['strawberries'],
  希腊酸奶: ['greek yogurt'],
  酸奶: ['yogurt'],
  牛奶: ['milk'],
  豆腐: ['tofu'],
  豆浆: ['soy milk'],
  杏仁: ['almonds'],
  花生酱: ['peanut butter'],
};

function normalizeQuery(query) {
  return String(query || '').trim().toLowerCase();
}

export function getSearchTerms(query) {
  const normalizedQuery = normalizeQuery(query);
  if (!normalizedQuery) return [];

  const aliases = foodAliases[normalizedQuery] || [];
  return aliases.length
    ? [...new Set([...aliases, normalizedQuery])]
    : [normalizedQuery];
}

export function hasAlias(query) {
  return Boolean(foodAliases[normalizeQuery(query)]);
}

function getPrimaryFoodName(baseName, description) {
  const lowerDescription = normalizeQuery(description);
  const isBeef = baseName === '牛肉';
  const isChickenBreast = baseName === '鸡胸肉';

  const beefRules = [
    ['beef burgundy', '红酒炖牛肉'],
    ['ground', '牛肉末'],
    ['stew', '炖牛肉'],
    ['corned beef', '咸牛肉'],
    ['brisket', '牛腩'],
    ['tenderloin', '牛里脊'],
    ['sirloin', '西冷牛肉'],
    ['ribeye', '肋眼牛排'],
    ['short ribs', '牛小排'],
    ['steak', '牛排'],
    ['chuck', '肩胛牛肉'],
    ['round', '牛后腿肉'],
  ];

  const chickenRules = [
    ['rotisserie', '烤鸡胸肉'],
    ['sauteed', '煎鸡胸肉'],
    ['breaded', '裹粉鸡胸肉'],
    ['tenders', '鸡胸肉条'],
    ['roll', '鸡胸肉卷'],
    ['oven-roasted', '烤鸡胸肉'],
  ];

  const rules = isBeef ? beefRules : isChickenBreast ? chickenRules : [];
  return rules.find(([keyword]) => lowerDescription.includes(keyword))?.[1] || baseName;
}

function getFoodModifiers(description) {
  const lowerDescription = normalizeQuery(description);
  const modifierRules = [
    ['canned', '罐装'],
    ['raw', '生'],
    ['uncooked', '未熟'],
    ['cooked', '熟'],
    ['skin not eaten', '去皮'],
    ['skin eaten', '带皮'],
    ['cured', '腌制'],
    ['roasted', '烤制'],
  ];

  return modifierRules
    .filter(([keyword]) => lowerDescription.includes(keyword))
    .map(([, label]) => label);
}

export function localizeFoodName(baseName, description) {
  const normalizedBaseName = String(baseName || '').trim();
  if (!normalizedBaseName || !description) return normalizedBaseName || description || '';

  const primaryName = getPrimaryFoodName(normalizedBaseName, description);
  const modifiers = getFoodModifiers(description);
  return modifiers.length ? `${primaryName}（${modifiers.join('、')}）` : primaryName;
}
