// foodLibraryService.js
// Manages the browser-local custom food library without rewriting legacy records.

const STORAGE_KEY = 'foodLibrary';
const CURRENT_SCHEMA_VERSION = 2;

function makeId() {
  if (globalThis.crypto?.randomUUID) return `custom_${globalThis.crypto.randomUUID()}`;
  return `custom_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeBarcode(value) {
  return String(value ?? '').replace(/[\s-]+/gu, '').trim();
}

function normalizeFood(item = {}, index = 0) {
  return {
    ...item,
    id: item.id || `legacy_${index}_${String(item.name || 'food').slice(0, 24)}`,
    schemaVersion: Number(item.schemaVersion) || 1,
    name: String(item.name || '').trim(),
    brand: String(item.brand || '').trim(),
    barcode: normalizeBarcode(item.barcode),
    source: item.source || '我的食物库',
    sourceType: item.sourceType || 'userLibrary',
    createdAt: item.createdAt || '',
    lastConfirmedAt: item.lastConfirmedAt || item.updatedAt || '',
  };
}

function loadLibrary() {
  const json = localStorage.getItem(STORAGE_KEY);
  try {
    const parsed = json ? JSON.parse(json) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeFood);
  } catch (error) {
    console.error('解析 foodLibrary 数据失败:', error);
    return [];
  }
}

function cleanForStorage(item) {
  return { ...item };
}

function saveLibrary(library) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(library.map(cleanForStorage)));
}

export class BarcodeConflictError extends Error {
  constructor(existingFood) {
    super('该条形码已绑定其他自定义食物');
    this.name = 'BarcodeConflictError';
    this.code = 'BARCODE_CONFLICT';
    this.existingFood = existingFood;
  }
}

export function getAllFoods() {
  return Promise.resolve(loadLibrary());
}

export function findFoodByBarcode(barcode) {
  const normalized = normalizeBarcode(barcode);
  if (!normalized) return Promise.resolve(null);
  return Promise.resolve(loadLibrary().find(food => food.barcode === normalized) || null);
}

export function getFoodById(id) {
  return Promise.resolve(loadLibrary().find(food => food.id === id) || null);
}

export function addFood(item) {
  const library = loadLibrary();
  const normalized = normalizeFood({ ...item, id: item.id || makeId() });
  const barcodeConflict = normalized.barcode
    ? library.find(food => food.barcode === normalized.barcode && food.id !== normalized.id)
    : null;
  if (barcodeConflict) return Promise.reject(new BarcodeConflictError(barcodeConflict));

  const existing = library.find(food => food.id === normalized.id || food.name === normalized.name);
  const next = {
    ...(existing || {}),
    ...normalized,
    id: existing?.id || normalized.id,
    createdAt: existing?.createdAt || normalized.createdAt || new Date().toISOString(),
  };
  const filtered = library.filter(food => food.id !== next.id && food.name !== next.name);
  filtered.push(next);
  saveLibrary(filtered);
  return Promise.resolve(cleanForStorage(next));
}

export function saveScannedFood(item, { barcodeConflict = 'error' } = {}) {
  const library = loadLibrary();
  const barcode = normalizeBarcode(item.barcode);
  const existingByBarcode = barcode
    ? library.find(food => food.barcode === barcode && food.id !== item.id)
    : null;

  if (existingByBarcode && barcodeConflict !== 'update') {
    return Promise.reject(new BarcodeConflictError(existingByBarcode));
  }

  const now = new Date().toISOString();
  const existing = existingByBarcode
    || library.find(food => food.id === item.id)
    || null;
  const saved = normalizeFood({
    ...(existing || {}),
    ...item,
    id: existing?.id || item.id || makeId(),
    barcode,
    schemaVersion: CURRENT_SCHEMA_VERSION,
    dataSource: 'nutrition_label_scan',
    source: '我的食物库',
    sourceType: 'userLibrary',
    sourceDetail: '营养标签扫描',
    createdAt: existing?.createdAt || item.createdAt || now,
    lastConfirmedAt: now,
  });

  const filtered = library.filter(food => {
    if (food.id === saved.id) return false;
    if (saved.barcode && food.barcode === saved.barcode) return false;
    if (!saved.barcode && food.name === saved.name) return false;
    return true;
  });
  filtered.push(saved);
  saveLibrary(filtered);
  return Promise.resolve(cleanForStorage(saved));
}

export function removeFood(name) {
  const library = loadLibrary();
  const filtered = library.filter(food => food.name !== name);
  saveLibrary(filtered);
  return Promise.resolve();
}

export const foodLibrarySchemaVersion = CURRENT_SCHEMA_VERSION;
