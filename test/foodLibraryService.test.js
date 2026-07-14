import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BarcodeConflictError,
  findFoodByBarcode,
  getAllFoods,
  saveScannedFood,
} from '../foodLibraryService.js';

class MemoryStorage {
  constructor(initial = {}) {
    this.values = new Map(Object.entries(initial));
  }

  getItem(key) {
    return this.values.has(key) ? this.values.get(key) : null;
  }

  setItem(key, value) {
    this.values.set(key, String(value));
  }

  removeItem(key) {
    this.values.delete(key);
  }

  clear() {
    this.values.clear();
  }
}

function scannedFood(overrides = {}) {
  return {
    name: '测试酸奶',
    barcode: '0123456789012',
    qty: 100,
    unit: '克',
    cal: 80,
    protein: 5,
    carbs: 10,
    fat: 2,
    nutritionBasis: 'per_100g',
    confirmedNutrition: { basis: 'per_100g', nutrients: {} },
    ...overrides,
  };
}

test.beforeEach(() => {
  globalThis.localStorage = new MemoryStorage();
});

test('loads legacy custom foods without rewriting or deleting their fields', async () => {
  const legacy = [{ name: '旧食物', qty: 1, unit: '份', cal: 120, customNote: '保留我' }];
  localStorage.setItem('foodLibrary', JSON.stringify(legacy));
  const foods = await getAllFoods();
  assert.equal(foods[0].name, '旧食物');
  assert.equal(foods[0].customNote, '保留我');
  assert.deepEqual(JSON.parse(localStorage.getItem('foodLibrary')), legacy);
});

test('saves confirmed scan data without touching existing meal records', async () => {
  const records = JSON.stringify([{ id: 1, food: '旧记录', cal: 100 }]);
  localStorage.setItem('records_2026-07-14', records);
  const saved = await saveScannedFood(scannedFood());

  assert.equal(saved.schemaVersion, 2);
  assert.equal(saved.dataSource, 'nutrition_label_scan');
  assert.equal(saved.sourceDetail, '营养标签扫描');
  assert.equal(localStorage.getItem('records_2026-07-14'), records);
});

test('prevents duplicate foods with the same barcode', async () => {
  await saveScannedFood(scannedFood());
  await assert.rejects(
    () => saveScannedFood(scannedFood({ name: '另一个名称' })),
    error => error instanceof BarcodeConflictError && error.code === 'BARCODE_CONFLICT',
  );
  const foods = await getAllFoods();
  assert.equal(foods.length, 1);
  assert.equal(foods[0].name, '测试酸奶');
});

test('can explicitly update an existing barcode while preserving its identity and creation time', async () => {
  const original = await saveScannedFood(scannedFood());
  const updated = await saveScannedFood(
    scannedFood({ name: '新酸奶名称', protein: 6 }),
    { barcodeConflict: 'update' },
  );

  assert.equal(updated.id, original.id);
  assert.equal(updated.createdAt, original.createdAt);
  assert.equal(updated.name, '新酸奶名称');
  assert.equal(updated.protein, 6);
  assert.equal((await getAllFoods()).length, 1);
});

test('finds a previously confirmed local food by normalized barcode', async () => {
  await saveScannedFood(scannedFood({ barcode: '0123 456-789012' }));
  const found = await findFoodByBarcode('0123456789012');
  assert.equal(found.name, '测试酸奶');
});
