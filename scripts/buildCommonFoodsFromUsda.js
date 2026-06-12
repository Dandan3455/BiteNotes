import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const preferredRawDir = path.join(rootDir, 'data', 'usda', 'raw');
const legacyRawDir = path.join(rootDir, 'server', 'data', 'raw');
const rawDirs = [preferredRawDir, legacyRawDir];
const outputPath = path.join(rootDir, 'server', 'data', 'commonFoods.json');
const includePath = path.join(rootDir, 'config', 'includeKeywords.json');
const excludePath = path.join(rootDir, 'config', 'excludeKeywords.json');
const dataTypeLabels = new Map([
  ['foundation', 'Foundation'],
  ['foundation_food', 'Foundation'],
  ['sr legacy', 'SR Legacy'],
  ['sr_legacy_food', 'SR Legacy'],
  ['survey (fndds)', 'Survey (FNDDS)'],
  ['survey_fndds_food', 'Survey (FNDDS)'],
]);
const excludedDataTypes = new Set([
  'branded',
  'branded_food',
  'experimental',
  'experimental foods',
  'experimental_food',
]);

const stats = {
  rawFoods: 0,
  afterDataType: 0,
  afterInclude: 0,
  excludedByKeyword: 0,
  incompleteNutrition: 0,
  beforeDedupe: 0,
  final: 0,
};

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    throw new Error(`Could not read ${filePath}: ${error.message}`);
  }
}

function normalizeText(value) {
  return String(value || '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function rounded(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number * 10) / 10 : null;
}

function requiredFile(datasetDir, name) {
  const filePath = path.join(datasetDir, name);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing USDA raw file: ${filePath}`);
  }
  return filePath;
}

function hasRequiredCsvFiles(datasetDir) {
  return ['food.csv', 'food_nutrient.csv', 'nutrient.csv']
    .every(name => fs.existsSync(path.join(datasetDir, name)));
}

function findDatasetDirs(startDir) {
  if (!fs.existsSync(startDir)) return [];

  const datasetDirs = [];

  function walk(dir) {
    if (hasRequiredCsvFiles(dir)) {
      datasetDirs.push(dir);
      return;
    }

    fs.readdirSync(dir, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .forEach(entry => walk(path.join(dir, entry.name)));
  }

  walk(startDir);
  return datasetDirs;
}

function getField(row, names, fileName) {
  const matchedName = names.find(name => Object.prototype.hasOwnProperty.call(row, name));
  if (!matchedName) {
    throw new Error(
      `${fileName} is missing expected columns. Expected one of: ${names.join(', ')}. Found: ${Object.keys(row).join(', ')}`
    );
  }
  return row[matchedName];
}

function readKeywordList(filePath) {
  return readJson(filePath, []).map(normalizeText).filter(Boolean);
}

function containsAnyKeyword(text, keywords) {
  return keywords.some(keyword => text.includes(keyword));
}

function getAllowedDataTypeLabel(value) {
  const normalizedValue = normalizeText(value);
  if (excludedDataTypes.has(normalizedValue)) return null;
  return dataTypeLabels.get(normalizedValue) || null;
}

async function streamCsv(filePath, onRow) {
  const parser = fs
    .createReadStream(filePath)
    .pipe(parse({ columns: true, bom: true, trim: true }));

  for await (const row of parser) {
    await onRow(row);
  }
}

function nutrientKind(name, unit) {
  const normalizedName = normalizeText(name);
  const normalizedUnit = normalizeText(unit);

  if (
    normalizedUnit === 'kcal'
    && (normalizedName === 'energy' || normalizedName.includes('energy'))
  ) {
    return 'calories';
  }

  if (normalizedUnit === 'g' && normalizedName === 'protein') return 'protein';

  if (
    normalizedUnit === 'g'
    && (
      normalizedName === 'carbohydrate, by difference'
      || normalizedName.includes('carbohydrate, by difference')
    )
  ) {
    return 'carbs';
  }

  if (
    normalizedUnit === 'g'
    && (
      normalizedName === 'total lipid (fat)'
      || normalizedName.includes('total lipid')
    )
  ) {
    return 'fat';
  }

  return null;
}

function makeId(fdcId) {
  return `usda_${fdcId}`;
}

async function loadNutrients(datasetDir) {
  const nutrientPath = requiredFile(datasetDir, 'nutrient.csv');
  const nutrientMap = new Map();

  await streamCsv(nutrientPath, row => {
    const id = getField(row, ['id', 'nutrient_id'], 'nutrient.csv');
    const name = getField(row, ['name', 'nutrient_name'], 'nutrient.csv');
    const unit = getField(row, ['unit_name', 'unit'], 'nutrient.csv');
    const kind = nutrientKind(name, unit);
    if (kind) nutrientMap.set(String(id), kind);
  });

  for (const requiredKind of ['calories', 'protein', 'carbs', 'fat']) {
    if (![...nutrientMap.values()].includes(requiredKind)) {
      throw new Error(`nutrient.csv did not contain a recognizable ${requiredKind} nutrient.`);
    }
  }

  return nutrientMap;
}

async function loadTargetFoods(datasetDir, includeKeywords, excludeKeywords) {
  const foodPath = requiredFile(datasetDir, 'food.csv');
  const targetFoods = new Map();

  await streamCsv(foodPath, row => {
    stats.rawFoods += 1;

    const fdcId = String(getField(row, ['fdc_id'], 'food.csv'));
    const description = getField(row, ['description'], 'food.csv');
    const rawDataType = getField(row, ['data_type'], 'food.csv');
    const dataType = getAllowedDataTypeLabel(rawDataType);
    const normalizedDescription = normalizeText(description);

    if (!dataType) return;
    stats.afterDataType += 1;

    if (!containsAnyKeyword(normalizedDescription, includeKeywords)) return;
    stats.afterInclude += 1;

    if (containsAnyKeyword(normalizedDescription, excludeKeywords)) {
      stats.excludedByKeyword += 1;
      return;
    }

    targetFoods.set(fdcId, {
      fdcId,
      nameEn: description,
      dataType,
      nutrients: {},
    });
  });

  return targetFoods;
}

async function attachNutrition(datasetDir, targetFoods, nutrientMap) {
  const foodNutrientPath = requiredFile(datasetDir, 'food_nutrient.csv');

  await streamCsv(foodNutrientPath, row => {
    const fdcId = String(getField(row, ['fdc_id'], 'food_nutrient.csv'));
    if (!targetFoods.has(fdcId)) return;

    const nutrientId = String(getField(row, ['nutrient_id'], 'food_nutrient.csv'));
    const kind = nutrientMap.get(nutrientId);
    if (!kind) return;

    const amount = toNumber(getField(row, ['amount'], 'food_nutrient.csv'));
    if (amount === null) return;

    targetFoods.get(fdcId).nutrients[kind] = rounded(amount);
  });
}

function toCommonFood(food) {
  return {
    id: makeId(food.fdcId),
    nameZh: '',
    nameEn: food.nameEn,
    aliasesZh: [],
    aliasesEn: [],
    serving: {
      amount: 100,
      unit: 'g',
    },
    nutrientsPer100g: {
      calories: food.nutrients.calories,
      protein: food.nutrients.protein,
      carbs: food.nutrients.carbs,
      fat: food.nutrients.fat,
    },
    source: {
      name: 'USDA',
      externalId: food.fdcId,
      dataType: food.dataType,
    },
  };
}

function buildOutput(targetFoods) {
  const foodsWithNutrition = [];

  targetFoods.forEach(food => {
    const nutrients = food.nutrients;
    const hasAllNutrients = ['calories', 'protein', 'carbs', 'fat']
      .every(key => typeof nutrients[key] === 'number');

    if (!hasAllNutrients) {
      stats.incompleteNutrition += 1;
      return;
    }

    foodsWithNutrition.push(toCommonFood(food));
  });

  stats.beforeDedupe = foodsWithNutrition.length;
  const seen = new Set();
  const deduped = foodsWithNutrition.filter(food => {
    const key = `${normalizeText(food.nameEn)}|${food.source.dataType}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  deduped.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
  stats.final = deduped.length;
  return deduped;
}

function printReport() {
  console.log('USDA common foods build report');
  console.log(`Raw food count: ${stats.rawFoods}`);
  console.log(`After data type filter: ${stats.afterDataType}`);
  console.log(`After include keyword filter: ${stats.afterInclude}`);
  console.log(`Excluded by exclude keywords: ${stats.excludedByKeyword}`);
  console.log(`Incomplete nutrition excluded: ${stats.incompleteNutrition}`);
  console.log(`Before dedupe: ${stats.beforeDedupe}`);
  console.log(`Final output count: ${stats.final}`);
  console.log(`Output file: ${outputPath}`);
}

async function main() {
  const includeKeywords = readKeywordList(includePath);
  const excludeKeywords = readKeywordList(excludePath);

  if (!includeKeywords.length) {
    throw new Error(`No include keywords found in ${includePath}`);
  }

  const datasetDirs = rawDirs.flatMap(findDatasetDirs);
  if (!datasetDirs.length) {
    throw new Error(
      `No USDA CSV dataset found. Expected food.csv, food_nutrient.csv, and nutrient.csv in ${preferredRawDir} or ${legacyRawDir}, including their subfolders.`
    );
  }

  const targetFoods = new Map();
  for (const datasetDir of datasetDirs) {
    console.log(`Reading USDA CSV dataset: ${datasetDir}`);
    const nutrientMap = await loadNutrients(datasetDir);
    const datasetFoods = await loadTargetFoods(datasetDir, includeKeywords, excludeKeywords);
    await attachNutrition(datasetDir, datasetFoods, nutrientMap);
    datasetFoods.forEach((food, fdcId) => targetFoods.set(fdcId, food));
  }

  const output = buildOutput(targetFoods);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
  printReport();
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
