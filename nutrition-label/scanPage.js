import {
  BarcodeConflictError,
  findFoodByBarcode,
  saveScannedFood,
} from '../foodLibraryService.js';
import { BASIS_LABELS, NUTRITION_FIELD_DEFINITIONS } from './fieldAliases.js';
import {
  NutritionLabelImageProcessor,
  detectBarcodeFromImage,
} from './imageProcessor.js';
import { LocalOcrEngineAdapter } from './ocrEngineAdapter.js';
import { deriveNutrientsPer100g, parseNutritionLabel } from './nutritionParser.js';
import {
  validateImageQuality,
  validateScannedFood,
} from './nutritionValidator.js';

const FIELD_CONTROLS = Object.freeze([
  ['calories_kcal', '热量', 'kcal', false],
  ['carbohydrates_g', '碳水化合物', 'g', false],
  ['protein_g', '蛋白质', 'g', false],
  ['fat_g', '脂肪', 'g', false],
  ['fibre_g', '膳食纤维', 'g', true],
  ['sugars_g', '糖', 'g', true],
  ['saturated_fat_g', '饱和脂肪', 'g', true],
  ['trans_fat_g', '反式脂肪', 'g', true],
  ['sodium_mg', '钠', 'mg', true],
]);

const LANGUAGE_LABELS = Object.freeze({
  en: '英文',
  fr: '法文',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁体中文',
});

const PROGRESS_LABELS = Object.freeze({
  'loading tesseract core': '加载 OCR 核心',
  'initializing tesseract': '初始化 OCR',
  'loading language traineddata': '加载英法简繁语言模型',
  'initializing api': '初始化语言模型',
  'recognizing text': '识别标签文字与表格',
});

const params = new URLSearchParams(window.location.search);
const returnDate = params.get('date') || new Date().toISOString().slice(0, 10);
const returnMeal = params.get('meal') || 'meal1';

const elements = {
  back: document.getElementById('scanBackBtn'),
  captureStage: document.getElementById('captureStage'),
  editStage: document.getElementById('editStage'),
  processingStage: document.getElementById('processingStage'),
  confirmStage: document.getElementById('confirmStage'),
  cameraInput: document.getElementById('cameraInput'),
  galleryInput: document.getElementById('galleryInput'),
  takePhoto: document.getElementById('takePhotoBtn'),
  choosePhoto: document.getElementById('choosePhotoBtn'),
  captureStatus: document.getElementById('captureStatus'),
  editStatus: document.getElementById('editStatus'),
  cropImage: document.getElementById('cropImage'),
  contrast: document.getElementById('contrastToggle'),
  progress: document.getElementById('ocrProgress'),
  progressText: document.getElementById('ocrProgressText'),
  previewFigure: document.getElementById('labelPreviewFigure'),
  preview: document.getElementById('labelPreview'),
  detectedLanguages: document.getElementById('detectedLanguages'),
  ocrConfidence: document.getElementById('ocrConfidence'),
  basisFieldset: document.getElementById('basisFieldset'),
  basisOptions: document.getElementById('basisOptions'),
  form: document.getElementById('scanConfirmForm'),
  nutritionFields: document.getElementById('nutritionFields'),
  validationSummary: document.getElementById('validationSummary'),
  warningConfirmLabel: document.getElementById('warningConfirmLabel'),
  barcodeStatus: document.getElementById('barcodeStatus'),
  saveButton: document.getElementById('saveScannedFoodBtn'),
  conflictModal: document.getElementById('barcodeConflictModal'),
  conflictDescription: document.getElementById('barcodeConflictDescription'),
};

const imageProcessor = new NutritionLabelImageProcessor(elements.cropImage);
const ocrEngine = new LocalOcrEngineAdapter();
const state = {
  parsed: null,
  selectedGroupId: '',
  processedImage: null,
  previewUrl: '',
  imageWarnings: [],
  pendingItem: null,
  existingFood: null,
  conflictMode: '',
  updateExistingOnSave: false,
  ocrRunId: 0,
  saving: false,
};

function numberOrNull(value) {
  if (value === '' || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function setStatus(element, message = '', kind = 'info') {
  element.textContent = message;
  element.className = message ? `scan-status ${kind}` : 'scan-status hidden';
}

function setStage(stage) {
  elements.captureStage.classList.toggle('hidden', stage !== 'capture');
  elements.editStage.classList.toggle('hidden', stage !== 'edit');
  elements.processingStage.classList.toggle('hidden', stage !== 'processing');
  elements.confirmStage.classList.toggle('hidden', stage !== 'confirm');
  const activeIndex = stage === 'capture' ? 0 : (stage === 'confirm' ? 2 : 1);
  document.querySelectorAll('[data-step-indicator]').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === activeIndex);
    indicator.classList.toggle('complete', index < activeIndex);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderFieldControls() {
  elements.nutritionFields.innerHTML = FIELD_CONTROLS.map(([key, label, unit, optional]) => `
    <div class="nutrition-field" data-nutrition-field="${key}">
      <label for="nutrition-${key}">
        <span>${label}${optional ? '<small>可选</small>' : ''}</span>
      </label>
      <div class="nutrition-value-control">
        <select data-qualifier-for="${key}" aria-label="${label}数值限定符">
          <option value="">等于</option>
          <option value="<">小于</option>
          <option value="≤">不超过</option>
        </select>
        <input id="nutrition-${key}" data-value-for="${key}" type="number" min="0" step="0.001" inputmode="decimal" />
        <b>${unit}</b>
      </div>
      <small class="field-confidence" data-confidence-for="${key}">未识别</small>
    </div>
  `).join('');
}

function currentGroup() {
  return state.parsed?.groups.find(group => group.id === state.selectedGroupId)
    || state.parsed?.groups[0]
    || null;
}

function replacePreview(blob) {
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = blob ? URL.createObjectURL(blob) : '';
  if (state.previewUrl) {
    elements.preview.src = state.previewUrl;
    elements.previewFigure.classList.remove('hidden');
  } else {
    elements.preview.removeAttribute('src');
    elements.previewFigure.classList.add('hidden');
  }
}

async function inspectCameraPermission() {
  if (!navigator.permissions?.query) return 'unknown';
  try {
    const permission = await navigator.permissions.query({ name: 'camera' });
    return permission.state;
  } catch {
    return 'unknown';
  }
}

async function openCameraInput() {
  const permission = await inspectCameraPermission();
  if (permission === 'denied') {
    setStatus(
      elements.captureStatus,
      '摄像头权限已被拒绝。请在浏览器或系统设置中允许摄像头，或从相册选择图片。',
      'error',
    );
    return;
  }
  elements.cameraInput.click();
}

async function handleSelectedFile(input) {
  const file = input.files?.[0];
  input.value = '';
  if (!file) return;
  try {
    setStatus(elements.captureStatus);
    await imageProcessor.load(file);
    setStatus(elements.editStatus);
    setStage('edit');
  } catch (error) {
    setStatus(elements.captureStatus, error.message || '无法读取该图片。', 'error');
  }
}

async function prepareProcessedImage() {
  const processed = await imageProcessor.createProcessedImage({
    enhanceContrast: elements.contrast.checked,
  });
  state.processedImage = processed;
  state.imageWarnings = validateImageQuality(processed);
  replacePreview(processed.blob);
  return processed;
}

function updateOcrProgress(message) {
  const progress = Math.max(0, Math.min(Number(message.progress) || 0, 1));
  elements.progress.value = progress;
  const label = PROGRESS_LABELS[message.status] || message.status || '本地 OCR 处理中';
  elements.progressText.textContent = `${label}… ${Math.round(progress * 100)}%`;
}

function manualParsedResult() {
  return {
    foodName: '',
    brand: '',
    detectedLanguages: [],
    ocrConfidence: null,
    serving: {
      quantity: null,
      unit: '',
      weightG: null,
      servingsPerContainer: null,
      confidence: 0,
      sourceText: '',
    },
    groups: [{
      id: 'per_serving-manual',
      basis: 'per_serving',
      recognizedBasis: '',
      label: BASIS_LABELS.per_serving,
      confidence: 0,
      inferred: false,
      sourceHeader: '',
      nutrients: {},
      originalEnergyValues: [],
      warnings: [],
      derived: false,
    }],
    ignoredPercentageColumns: 0,
  };
}

async function recognizeLabel() {
  const runId = ++state.ocrRunId;
  setStatus(elements.editStatus);
  setStage('processing');
  elements.progress.value = 0;
  elements.progressText.textContent = '正在准备图片…';

  try {
    const processed = await prepareProcessedImage();
    const barcodePromise = detectBarcodeFromImage(processed.blob).catch(() => ({ supported: true, value: '' }));
    const ocrData = await ocrEngine.recognize(processed.blob, {
      onProgress: updateOcrProgress,
      width: processed.width,
      height: processed.height,
    });
    const barcodeResult = await barcodePromise;
    if (runId !== state.ocrRunId) return;

    state.parsed = parseNutritionLabel(ocrData);
    state.selectedGroupId = state.parsed.groups[0]?.id || '';
    renderConfirmation({ barcodeResult });
    setStage('confirm');
    if (barcodeResult.value) {
      const existing = await findFoodByBarcode(barcodeResult.value);
      if (existing && runId === state.ocrRunId) {
        showBarcodeConflict(existing, null, { mode: 'detected' });
      }
    }
  } catch (error) {
    if (runId !== state.ocrRunId) return;
    console.error('营养标签识别失败：', error);
    setStage('edit');
    setStatus(
      elements.editStatus,
      `识别失败：${error.message || error}。可重试、重新拍摄或直接手动填写。`,
      'error',
    );
  }
}

async function openManualConfirmation({ keepImage = false } = {}) {
  if (keepImage) {
    try {
      await prepareProcessedImage();
    } catch (error) {
      setStatus(elements.editStatus, error.message, 'error');
      return;
    }
  } else {
    state.processedImage = null;
    state.imageWarnings = [];
    replacePreview(null);
  }
  state.parsed = manualParsedResult();
  state.selectedGroupId = state.parsed.groups[0].id;
  renderConfirmation();
  setStage('confirm');
}

function fieldInput(key) {
  return elements.nutritionFields.querySelector(`[data-value-for="${key}"]`);
}

function qualifierInput(key) {
  return elements.nutritionFields.querySelector(`[data-qualifier-for="${key}"]`);
}

function syncFormToCurrentGroup() {
  const group = currentGroup();
  if (!group) return null;
  FIELD_CONTROLS.forEach(([key, , unit]) => {
    const value = numberOrNull(fieldInput(key).value);
    const existing = group.nutrients[key];
    group.nutrients[key] = {
      ...(existing || {}),
      value,
      unit,
      qualifier: qualifierInput(key).value,
      confidence: existing?.confidence ?? (value == null ? 0 : 1),
      warnings: existing?.warnings || [],
    };
  });
  group.basis = elements.form.elements.nutrition_basis.value;
  group.label = BASIS_LABELS[group.basis];
  if (group.basis === 'per_serving') {
    const derived = state.parsed.groups.find(item => item.derived && item.derivedFrom === 'per_serving');
    const servingWeightG = servingWeightFromForm();
    if (derived && servingWeightG) {
      derived.nutrients = deriveNutrientsPer100g(group.nutrients, servingWeightG);
    }
  }
  return group;
}

function fillFieldsFromGroup(group) {
  FIELD_CONTROLS.forEach(([key]) => {
    const nutrient = group.nutrients[key];
    fieldInput(key).value = nutrient?.value ?? '';
    qualifierInput(key).value = nutrient?.qualifier || '';
    const wrapper = elements.nutritionFields.querySelector(`[data-nutrition-field="${key}"]`);
    const confidence = wrapper.querySelector(`[data-confidence-for="${key}"]`);
    const missing = nutrient?.value == null;
    const lowConfidence = !missing && Number(nutrient.confidence) < 0.65;
    wrapper.classList.toggle('needs-review', missing || lowConfidence || Boolean(nutrient?.warnings?.length));
    confidence.textContent = missing
      ? '未识别'
      : `识别信心 ${Math.round((Number(nutrient.confidence) || 0) * 100)}%${lowConfidence ? ' · 请检查' : ''}`;
  });

  elements.form.elements.nutrition_basis.value = group.basis;
  const energy = group.originalEnergyValues.find(item => /kcal|千卡|大卡/iu.test(String(item.unit)))
    || group.originalEnergyValues[0];
  elements.form.elements.original_energy_value.value = energy?.value ?? '';
  const energyUnit = String(energy?.unit || '').toLocaleLowerCase().includes('kj') || energy?.unit === '千焦'
    ? 'kJ'
    : (energy ? 'kcal' : '');
  elements.form.elements.original_energy_unit.value = energyUnit;
}

function renderBasisOptions() {
  const groups = state.parsed.groups;
  elements.basisFieldset.classList.toggle('hidden', groups.length <= 1);
  elements.basisOptions.innerHTML = groups.map(group => `
    <label class="basis-option${group.id === state.selectedGroupId ? ' active' : ''}">
      <input type="radio" name="detected_basis_group" value="${group.id}" ${group.id === state.selectedGroupId ? 'checked' : ''} />
      <span>${group.label}</span>
      <small>${group.derived ? '换算数据' : `识别信心 ${Math.round(group.confidence * 100)}%`}</small>
    </label>
  `).join('');
}

function renderConfirmation({ barcodeResult } = {}) {
  const parsed = state.parsed;
  const languages = parsed.detectedLanguages.map(language => LANGUAGE_LABELS[language] || language);
  elements.detectedLanguages.textContent = languages.length ? languages.join('、') : '未识别';
  elements.ocrConfidence.textContent = parsed.ocrConfidence == null
    ? '手动填写'
    : `${Math.round(parsed.ocrConfidence * 100)}%`;
  elements.form.reset();
  elements.form.elements.food_name.value = parsed.foodName || '';
  elements.form.elements.brand.value = parsed.brand || '';
  elements.form.elements.serving_quantity.value = parsed.serving.quantity ?? '';
  elements.form.elements.serving_unit.value = parsed.serving.unit || '';
  elements.form.elements.servings_per_container.value = parsed.serving.servingsPerContainer ?? '';
  if (barcodeResult?.value) {
    elements.form.elements.barcode.value = barcodeResult.value;
    elements.barcodeStatus.textContent = '已从图片检测到条形码，请确认。';
  } else if (barcodeResult?.supported === false) {
    elements.barcodeStatus.textContent = '当前浏览器不支持本地条形码识别，可手动输入。';
  } else {
    elements.barcodeStatus.textContent = '未从图片检测到条形码，可手动输入。';
  }
  renderBasisOptions();
  fillFieldsFromGroup(currentGroup());
  renderValidation();
  document.getElementById('retryOcrBtn').classList.toggle('hidden', !state.processedImage);
}

function basisAmount(basis) {
  if (basis === 'per_100g') return { qty: 100, unit: '克' };
  if (basis === 'per_100ml') return { qty: 100, unit: '毫升' };
  if (basis === 'per_package') return { qty: 1, unit: '包装' };
  return {
    qty: numberOrNull(elements.form.elements.serving_quantity.value) || 1,
    unit: elements.form.elements.serving_unit.value.trim() || '份',
  };
}

function simpleNutritionProfile(group) {
  return {
    basis: group.basis,
    derived: group.derived,
    derivedFrom: group.derivedFrom || '',
    nutrients: Object.fromEntries(Object.entries(group.nutrients).map(([key, nutrient]) => [key, {
      value: nutrient.value,
      unit: nutrient.unit,
      qualifier: nutrient.qualifier || '',
      labelOriginalValue: nutrient.originalValue ?? null,
      labelOriginalUnit: nutrient.originalUnit || '',
    }])),
  };
}

function servingWeightFromForm() {
  const quantity = numberOrNull(elements.form.elements.serving_quantity.value);
  const unit = elements.form.elements.serving_unit.value.trim().toLocaleLowerCase();
  if (!quantity || quantity <= 0) return null;
  if (['g', '克', '公克'].includes(unit)) return quantity;
  if (['mg', '毫克'].includes(unit)) return quantity / 1000;
  return null;
}

function buildFoodItem() {
  const group = syncFormToCurrentGroup();
  const basis = elements.form.elements.nutrition_basis.value;
  const amount = basisAmount(basis);
  const nutrients = group.nutrients;
  const originalEnergyValue = numberOrNull(elements.form.elements.original_energy_value.value);
  const originalEnergyUnit = elements.form.elements.original_energy_unit.value;
  const servingWeightG = servingWeightFromForm();
  const existingDerived = state.parsed.groups.find(item => item.derived && item.basis === 'per_100g');
  const confirmedDerived = basis === 'per_serving' && servingWeightG
    ? {
      ...group,
      basis: 'per_100g',
      derived: true,
      derivedFrom: 'per_serving',
      nutrients: deriveNutrientsPer100g(group.nutrients, servingWeightG),
    }
    : (group.derived ? group : existingDerived);

  return {
    name: elements.form.elements.food_name.value.trim(),
    brand: elements.form.elements.brand.value.trim(),
    barcode: elements.form.elements.barcode.value.trim(),
    qty: amount.qty,
    unit: amount.unit,
    cal: nutrients.calories_kcal?.value ?? null,
    calories: nutrients.calories_kcal?.value ?? null,
    protein: nutrients.protein_g?.value ?? null,
    carbs: nutrients.carbohydrates_g?.value ?? null,
    fat: nutrients.fat_g?.value ?? null,
    fibre: nutrients.fibre_g?.value ?? null,
    sugars: nutrients.sugars_g?.value ?? null,
    saturatedFat: nutrients.saturated_fat_g?.value ?? null,
    transFat: nutrients.trans_fat_g?.value ?? null,
    sodium: nutrients.sodium_mg?.value ?? null,
    nutritionMode: 'total',
    nutritionBasis: basis,
    servingQuantity: numberOrNull(elements.form.elements.serving_quantity.value),
    servingUnit: elements.form.elements.serving_unit.value.trim(),
    servingWeightG,
    servingsPerContainer: numberOrNull(elements.form.elements.servings_per_container.value),
    originalNutritionBasis: group.derived
      ? group.derivedFrom
      : (group.recognizedBasis || group.basis),
    originalEnergyValue,
    originalEnergyUnit,
    originalEnergyValues: group.originalEnergyValues,
    detectedLanguages: [...state.parsed.detectedLanguages],
    ocrConfidence: state.parsed.ocrConfidence,
    fieldConfidences: Object.fromEntries(Object.entries(nutrients).map(([key, value]) => [key, value.confidence])),
    fieldQualifiers: Object.fromEntries(Object.entries(nutrients).map(([key, value]) => [key, value.qualifier || ''])),
    confirmedNutrition: simpleNutritionProfile(group),
    derivedPer100g: confirmedDerived ? simpleNutritionProfile(confirmedDerived) : null,
    source: '我的食物库',
    sourceType: 'userLibrary',
    sourceDetail: '营养标签扫描',
    dataSource: 'nutrition_label_scan',
  };
}

function renderValidation() {
  if (!state.parsed) return null;
  const item = buildFoodItem();
  const group = currentGroup();
  const result = validateScannedFood(item, group, { ocrConfidence: state.parsed.ocrConfidence });
  const issues = [...result.errors, ...result.warnings, ...state.imageWarnings];

  elements.nutritionFields.querySelectorAll('.nutrition-field').forEach(field => {
    const key = field.dataset.nutritionField;
    const hasIssue = issues.some(itemIssue => itemIssue.field === key);
    field.classList.toggle('needs-review', hasIssue || fieldInput(key).value === '');
  });

  if (!issues.length) {
    elements.validationSummary.innerHTML = '';
    elements.validationSummary.classList.add('hidden');
    elements.warningConfirmLabel.classList.add('hidden');
    return result;
  }

  elements.validationSummary.innerHTML = `
    <strong>${result.errors.length ? '请先修正以下问题' : '保存前请检查'}</strong>
    <ul>${issues.map(itemIssue => `<li class="${itemIssue.severity === 'error' ? 'error' : ''}">${itemIssue.message}</li>`).join('')}</ul>
  `;
  elements.validationSummary.classList.remove('hidden');
  elements.warningConfirmLabel.classList.toggle('hidden', !result.warnings.length && !state.imageWarnings.length);
  return result;
}

function markFieldAsEdited(key) {
  const group = currentGroup();
  if (!group) return;
  const value = numberOrNull(fieldInput(key).value);
  group.nutrients[key] = {
    ...(group.nutrients[key] || {}),
    value,
    unit: NUTRITION_FIELD_DEFINITIONS[key].storageUnit,
    qualifier: qualifierInput(key).value,
    confidence: value == null ? 0 : 1,
    warnings: [],
    userConfirmed: true,
  };
  const confidence = elements.nutritionFields.querySelector(`[data-confidence-for="${key}"]`);
  confidence.textContent = value == null ? '未填写' : '已手动确认';
}

function showBarcodeConflict(existingFood, pendingItem, { mode = 'save' } = {}) {
  state.existingFood = existingFood;
  state.pendingItem = pendingItem;
  state.conflictMode = mode;
  const barcode = pendingItem?.barcode || existingFood.barcode;
  elements.conflictDescription.textContent = mode === 'detected'
    ? `已找到条形码 ${barcode} 对应的本地食物“${existingFood.name}”。可直接使用它，或继续检查本次 OCR 结果后更新。`
    : `条形码 ${barcode} 已绑定“${existingFood.name}”。你可使用已有食物，或用本次确认的数据更新它。`;
  elements.conflictModal.classList.remove('hidden');
}

async function persistItem(item, barcodeConflict = 'error') {
  state.saving = true;
  elements.saveButton.disabled = true;
  elements.saveButton.textContent = '正在保存…';
  try {
    const saved = await saveScannedFood(item, { barcodeConflict });
    await finishAndReturn(saved.name);
  } catch (error) {
    if (error instanceof BarcodeConflictError) {
      showBarcodeConflict(error.existingFood, item);
    } else {
      console.error('保存扫描食物失败：', error);
      elements.validationSummary.innerHTML = `<strong>保存失败</strong><p>${error.message || error}</p>`;
      elements.validationSummary.classList.remove('hidden');
    }
  } finally {
    state.saving = false;
    elements.saveButton.disabled = false;
    elements.saveButton.textContent = '保存为自定义食物';
  }
}

async function finishAndReturn(foodName = '') {
  imageProcessor.destroy();
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = '';
  await ocrEngine.terminate();
  const query = new URLSearchParams({ date: returnDate, meal: returnMeal });
  if (foodName) query.set('food', foodName);
  window.location.href = `meal.html?${query.toString()}`;
}

async function resetCapture() {
  state.ocrRunId += 1;
  await ocrEngine.cancel().catch(() => {});
  imageProcessor.destroy();
  replacePreview(null);
  state.parsed = null;
  state.processedImage = null;
  state.imageWarnings = [];
  elements.contrast.checked = false;
  setStatus(elements.captureStatus);
  setStage('capture');
}

renderFieldControls();

elements.takePhoto.addEventListener('click', openCameraInput);
elements.choosePhoto.addEventListener('click', () => elements.galleryInput.click());
elements.cameraInput.addEventListener('change', () => handleSelectedFile(elements.cameraInput));
elements.galleryInput.addEventListener('change', () => handleSelectedFile(elements.galleryInput));
document.getElementById('manualWithoutPhotoBtn').addEventListener('click', () => openManualConfirmation());
document.getElementById('manualWithPhotoBtn').addEventListener('click', () => openManualConfirmation({ keepImage: true }));
document.getElementById('rotateLeftBtn').addEventListener('click', () => imageProcessor.rotate(-90));
document.getElementById('rotateRightBtn').addEventListener('click', () => imageProcessor.rotate(90));
document.getElementById('resetImageBtn').addEventListener('click', () => imageProcessor.reset());
document.getElementById('recognizeBtn').addEventListener('click', recognizeLabel);
document.getElementById('retryOcrBtn').addEventListener('click', recognizeLabel);
document.getElementById('retakeBtn').addEventListener('click', resetCapture);
document.getElementById('confirmRetakeBtn').addEventListener('click', resetCapture);
document.getElementById('cancelOcrBtn').addEventListener('click', async () => {
  state.ocrRunId += 1;
  await ocrEngine.cancel().catch(() => {});
  setStage('edit');
  setStatus(elements.editStatus, '已取消识别，可重试或手动填写。');
});

elements.basisOptions.addEventListener('change', event => {
  if (event.target.name !== 'detected_basis_group') return;
  syncFormToCurrentGroup();
  state.selectedGroupId = event.target.value;
  renderBasisOptions();
  fillFieldsFromGroup(currentGroup());
  renderValidation();
});

elements.form.elements.nutrition_basis.addEventListener('change', () => {
  const group = currentGroup();
  group.basis = elements.form.elements.nutrition_basis.value;
  group.label = BASIS_LABELS[group.basis];
  renderBasisOptions();
  renderValidation();
});

elements.nutritionFields.addEventListener('input', event => {
  const key = event.target.dataset.valueFor || event.target.dataset.qualifierFor;
  if (!key) return;
  markFieldAsEdited(key);
  renderValidation();
});

elements.form.addEventListener('input', event => {
  if (event.target.closest('#nutritionFields') || event.target.name === 'confirm_warnings') return;
  renderValidation();
});

elements.form.addEventListener('submit', async event => {
  event.preventDefault();
  if (state.saving) return;
  const item = buildFoodItem();
  const result = renderValidation();
  if (result.errors.length) {
    elements.validationSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const needsConfirmation = result.warnings.length || state.imageWarnings.length;
  if (needsConfirmation && !elements.form.elements.confirm_warnings.checked) {
    elements.warningConfirmLabel.classList.add('attention');
    elements.warningConfirmLabel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const existing = await findFoodByBarcode(item.barcode);
  if (existing) {
    if (state.updateExistingOnSave && existing.id === state.existingFood?.id) {
      await persistItem(item, 'update');
      return;
    }
    showBarcodeConflict(existing, item);
    return;
  }
  await persistItem(item);
});

document.getElementById('useExistingFoodBtn').addEventListener('click', async () => {
  elements.conflictModal.classList.add('hidden');
  await finishAndReturn(state.existingFood?.name || '');
});

document.getElementById('updateExistingFoodBtn').addEventListener('click', async () => {
  if (state.conflictMode === 'detected') {
    elements.conflictModal.classList.add('hidden');
    state.updateExistingOnSave = true;
    if (!elements.form.elements.food_name.value.trim()) {
      elements.form.elements.food_name.value = state.existingFood?.name || '';
    }
    if (!elements.form.elements.brand.value.trim()) {
      elements.form.elements.brand.value = state.existingFood?.brand || '';
    }
    renderValidation();
    return;
  }
  const item = state.pendingItem;
  elements.conflictModal.classList.add('hidden');
  if (item) await persistItem(item, 'update');
});

document.getElementById('cancelConflictBtn').addEventListener('click', () => {
  elements.conflictModal.classList.add('hidden');
  state.pendingItem = null;
  state.updateExistingOnSave = false;
  state.conflictMode = '';
});

elements.form.elements.barcode.addEventListener('input', () => {
  state.updateExistingOnSave = false;
  state.existingFood = null;
});

elements.back.addEventListener('click', () => finishAndReturn());
window.addEventListener('beforeunload', () => {
  imageProcessor.destroy();
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  void ocrEngine.terminate();
});
