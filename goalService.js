const GOAL_PROFILES_KEY = 'biteNotesGoalProfiles';
const APP_SETTINGS_KEY = 'biteNotesSettings';

export const dayTemplates = {
  training: { label: '训练日' },
  rest: { label: '休息日' },
};

export const meals = [
  { id: 'meal1', title: '第 1 餐' },
  { id: 'meal2', title: '第 2 餐' },
  { id: 'meal3', title: '第 3 餐' },
  { id: 'snack', title: '加餐' },
];

export const mealNames = Object.fromEntries(meals.map(meal => [meal.id, meal.title]));

const defaultMealRatio = { meal1: '', meal2: '', meal3: '', snack: '' };

export function readJson(key, fallback) {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : fallback;
  } catch (error) {
    console.error(`读取 ${key} 失败：`, error);
    return fallback;
  }
}

export function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function todayString() {
  return formatLocalDate(new Date());
}

export function shiftDate(date, days) {
  const next = new Date(`${date}T00:00:00`);
  next.setDate(next.getDate() + days);
  return formatLocalDate(next);
}

export function formatDateLabel(date) {
  if (date === todayString()) return '今日 ▾';
  const [, month, day] = date.split('-');
  return `${Number(month)}月${Number(day)}日 ▾`;
}

export function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function hasValue(value) {
  return value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value));
}

export function rounded(value) {
  return Math.round(toNumber(value));
}

export function gramsFromRatio(calories, ratio) {
  return {
    protein: rounded((calories * toNumber(ratio.protein) / 100) / 4),
    carbs: rounded((calories * toNumber(ratio.carbs) / 100) / 4),
    fat: rounded((calories * toNumber(ratio.fat) / 100) / 9),
  };
}

export function caloriesFromGrams(grams) {
  return rounded(toNumber(grams.protein) * 4 + toNumber(grams.carbs) * 4 + toNumber(grams.fat) * 9);
}

export function defaultMeta(dayType = 'training') {
  const resolvedDayType = dayTemplates[dayType] ? dayType : 'training';
  return {
    dayType: resolvedDayType,
    targetMode: 'ratio',
    targetCalories: '',
    macroRatio: { protein: '', carbs: '', fat: '' },
    macroGrams: { protein: '', carbs: '', fat: '' },
    mealRatio: { ...defaultMealRatio },
    targetConfigured: false,
    userChoseTarget: false,
  };
}

export function recalculateTargets(meta) {
  if (meta.targetMode === 'grams') {
    const hasAnyGram = Object.values(meta.macroGrams).some(hasValue);
    return {
      ...meta,
      targetCalories: hasAnyGram ? caloriesFromGrams(meta.macroGrams) : '',
    };
  }

  const ratioReady = hasValue(meta.targetCalories)
    && hasValue(meta.macroRatio.protein)
    && hasValue(meta.macroRatio.carbs)
    && hasValue(meta.macroRatio.fat);

  return {
    ...meta,
    macroGrams: ratioReady
      ? gramsFromRatio(toNumber(meta.targetCalories), meta.macroRatio)
      : { protein: '', carbs: '', fat: '' },
  };
}

export function normalizeMeta(meta = {}) {
  const hasKnownDayType = Boolean(dayTemplates[meta.dayType]);
  const base = defaultMeta(hasKnownDayType ? meta.dayType : 'training');
  const merged = {
    ...base,
    ...meta,
    dayType: base.dayType,
    macroRatio: { ...base.macroRatio, ...(meta.macroRatio || {}) },
    macroGrams: { ...base.macroGrams, ...(meta.macroGrams || {}) },
    mealRatio: { ...base.mealRatio, ...(meta.mealRatio || {}) },
    targetConfigured: hasKnownDayType && meta.userChoseTarget === true,
    userChoseTarget: hasKnownDayType && meta.userChoseTarget === true,
  };
  return recalculateTargets(merged);
}

export function getGoalProfiles() {
  return readJson(GOAL_PROFILES_KEY, {});
}

export function getGoalProfile(dayType) {
  return getGoalProfiles()[dayType] || null;
}

export function saveGoalProfile(meta) {
  const normalized = recalculateTargets(meta);
  const profiles = getGoalProfiles();
  profiles[normalized.dayType] = {
    dayType: normalized.dayType,
    targetMode: normalized.targetMode,
    targetCalories: normalized.targetCalories,
    macroRatio: { ...normalized.macroRatio },
    macroGrams: { ...normalized.macroGrams },
    mealRatio: { ...normalized.mealRatio },
    targetConfigured: true,
    userChoseTarget: true,
  };
  writeJson(GOAL_PROFILES_KEY, profiles);
  writeJson(APP_SETTINGS_KEY, { currentDayType: normalized.dayType });
}

export function getLatestConfiguredMeta() {
  return Object.keys(localStorage)
    .filter(key => key.startsWith('meta_'))
    .map(key => ({ key, date: key.replace('meta_', ''), meta: readJson(key, null) }))
    .filter(item => item.meta?.userChoseTarget === true && dayTemplates[item.meta.dayType])
    .sort((a, b) => b.date.localeCompare(a.date))[0]?.meta || null;
}

export function getDayMeta(date) {
  const dateMeta = readJson(`meta_${date}`, {});
  if (dateMeta.userChoseTarget === true && dayTemplates[dateMeta.dayType]) {
    const normalized = normalizeMeta(dateMeta);
    saveGoalProfile(normalized);
    return normalized;
  }

  const settings = readJson(APP_SETTINGS_KEY, {});
  const preferredDayType = dayTemplates[settings.currentDayType] ? settings.currentDayType : 'training';
  const profile = getGoalProfile(preferredDayType);
  if (profile) return normalizeMeta(profile);

  const latestMeta = getLatestConfiguredMeta();
  if (latestMeta) {
    const normalized = normalizeMeta(latestMeta);
    saveGoalProfile(normalized);
    return normalized;
  }

  return normalizeMeta({ dayType: preferredDayType });
}

export function getInitialGoalMeta(date) {
  return getDayMeta(date);
}

export function saveDayMeta(date, meta) {
  const normalized = recalculateTargets({
    ...meta,
    targetConfigured: true,
    userChoseTarget: true,
  });
  writeJson(`meta_${date}`, normalized);
  saveGoalProfile(normalized);
  return normalized;
}

export function getRecords(date) {
  return readJson(`records_${date}`, []);
}

export function saveRecords(date, records) {
  writeJson(`records_${date}`, records);
}

export function getRecordMeal(record) {
  const legacyMap = { '早餐': 'meal1', '午餐': 'meal2', '晚餐': 'meal3', '零食': 'snack' };
  return record.meal || legacyMap[record.cat] || 'meal1';
}

export function recordTotals(records) {
  return records.reduce((sum, record) => {
    if (record.nutritionMode === 'total') {
      sum.calories += toNumber(record.cal);
      sum.protein += toNumber(record.protein);
      sum.carbs += toNumber(record.carbs);
      sum.fat += toNumber(record.fat);
      return sum;
    }

    const qty = toNumber(record.qty);
    sum.calories += qty * toNumber(record.cal);
    sum.protein += qty * toNumber(record.protein);
    sum.carbs += qty * toNumber(record.carbs);
    sum.fat += qty * toNumber(record.fat);
    return sum;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

export function targetTotals(meta) {
  return {
    calories: toNumber(meta.targetCalories),
    protein: toNumber(meta.macroGrams.protein),
    carbs: toNumber(meta.macroGrams.carbs),
    fat: toNumber(meta.macroGrams.fat),
  };
}

export function mealTarget(meta, mealId) {
  const ratio = toNumber(meta.mealRatio[mealId]) / 100;
  const targets = targetTotals(meta);
  return {
    calories: targets.calories * ratio,
    protein: targets.protein * ratio,
    carbs: targets.carbs * ratio,
    fat: targets.fat * ratio,
  };
}
