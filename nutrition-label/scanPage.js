import { saveScannedFood } from '../foodLibraryService.js';
import {
  amountScaleFactor,
  defaultSaveAmount,
  prepareSaveReview,
  scaleNutritionValue,
} from './confirmationLogic.js';
import {
  BASIS_LABELS,
  CORE_NUTRITION_FIELDS,
  NUTRITION_FIELD_DEFINITIONS,
} from './fieldAliases.js';
import { NutritionLabelImageProcessor } from './imageProcessor.js';
import { refineNutritionValues } from './numericOcrRefiner.js';
import { LocalOcrEngineAdapter } from './ocrEngineAdapter.js';
import { deriveNutrientsPer100g, parseNutritionLabel } from './nutritionParser.js';
import {
  validateImageQuality,
  validateScannedFood,
} from './nutritionValidator.js';

const FIELD_CONTROLS = Object.freeze([
  ['calories_kcal', '热量', 'kcal', 1],
  ['carbohydrates_g', '碳水化合物', 'g', 0.1],
  ['protein_g', '蛋白质', 'g', 0.1],
  ['fat_g', '脂肪', 'g', 0.1],
]);

const SAVE_UNIT_ALIASES = Object.freeze({
  g: 'g',
  克: 'g',
  公克: 'g',
  kg: 'kg',
  千克: 'kg',
  公斤: 'kg',
  mg: 'mg',
  毫克: 'mg',
  ml: 'mL',
  毫升: 'mL',
  l: 'L',
  升: 'L',
  公升: 'L',
  包装: '包',
  包裝: '包',
});

const SAVE_UNIT_VALUES = new Set([
  'g', 'kg', 'mg', 'mL', 'L',
  '份', '个', '片', '袋', '包', '盒', '瓶', '罐', '杯', '勺', '碗', '盘',
]);

const CONFIDENCE_LABELS = Object.freeze({
  high: '高',
  medium: '中',
  low: '低',
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
  amountPreview: document.getElementById('saveAmountPreview'),
  form: document.getElementById('scanConfirmForm'),
  nutritionFields: document.getElementById('nutritionFields'),
  validationSummary: document.getElementById('validationSummary'),
  saveButton: document.getElementById('saveScannedFoodBtn'),
  saveReviewModal: document.getElementById('saveReviewModal'),
  saveReviewContent: document.getElementById('saveReviewContent'),
  returnToReview: document.getElementById('returnToReviewBtn'),
  continueSave: document.getElementById('continueSaveBtn'),
};

const imageProcessor = new NutritionLabelImageProcessor(elements.cropImage);
const ocrEngine = new LocalOcrEngineAdapter();
const state = {
  parsed: null,
  selectedGroupId: '',
  processedImage: null,
  previewUrl: '',
  imageWarnings: [],
  saveAmounts: {},
  pendingSaveItem: null,
  reviewFocusKey: '',
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
  elements.nutritionFields.innerHTML = FIELD_CONTROLS.map(([key, label, unit, step]) => `
    <div class="nutrition-field" data-nutrition-field="${key}">
      <label for="nutrition-${key}">
        <span>${label}</span>
      </label>
      <div class="nutrition-value-control">
        <input id="nutrition-${key}" data-value-for="${key}" type="number" min="0" step="${step}" inputmode="decimal" />
        <b>${unit}</b>
      </div>
      ${key === 'calories_kcal' ? '<small class="energy-conversion hidden" id="energyConversion"></small>' : ''}
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
    const loaded = await imageProcessor.load(file, {
      onStatus: message => setStatus(elements.captureStatus, message),
    });
    setStatus(elements.captureStatus);
    setStatus(
      elements.editStatus,
      loaded.converted ? 'HEIC/HEIF 已在当前设备转换为临时 JPEG，可继续裁剪和识别。' : '',
    );
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

function updateTableRetryProgress(message) {
  const progress = Math.max(0, Math.min(Number(message.progress) || 0, 1));
  elements.progress.value = progress;
  elements.progressText.textContent = `正在使用表格模式重新识别… ${Math.round(progress * 100)}%`;
}

function updateNumericRefinementProgress({ completed, total, label }) {
  const progress = total > 0 ? completed / total : 1;
  elements.progress.value = progress;
  elements.progressText.textContent = `正在精修${label}数值… ${completed}/${total}`;
}

function nutritionRecognitionQuality(parsed) {
  return (parsed?.groups || [])
    .filter(group => !group.derived)
    .reduce((best, group) => {
      const recognizedEntries = Object.entries(group.nutrients || {})
        .filter(([, nutrient]) => (
          nutrient?.value != null && Number.isFinite(Number(nutrient.value))
        ));
      const recognizedKeys = new Set(recognizedEntries.map(([key]) => key));
      const coreCount = CORE_NUTRITION_FIELDS
        .filter(key => recognizedKeys.has(key)).length;
      const score = coreCount * 100
        + recognizedEntries.length * 10
        + (Number(group.confidence) || 0);
      return score > best.score ? { score, coreCount } : best;
    }, { score: 0, coreCount: 0 });
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
    const ocrData = await ocrEngine.recognize(processed.blob, {
      onProgress: updateOcrProgress,
      width: processed.width,
      height: processed.height,
    });
    let parsed = parseNutritionLabel(ocrData);
    let quality = nutritionRecognitionQuality(parsed);

    if (quality.coreCount < 3 && runId === state.ocrRunId) {
      elements.progress.value = 0;
      elements.progressText.textContent = '字段较少，正在尝试表格模式重新识别…';
      const tableOcrData = await ocrEngine.recognize(processed.blob, {
        onProgress: updateTableRetryProgress,
        width: processed.width,
        height: processed.height,
        pageSegmentation: 'single_block',
      });
      const tableParsed = parseNutritionLabel(tableOcrData);
      const tableQuality = nutritionRecognitionQuality(tableParsed);
      if (tableQuality.score > quality.score) {
        parsed = tableParsed;
        quality = tableQuality;
      }
    }

    if (runId !== state.ocrRunId) return;

    elements.progress.value = 0;
    elements.progressText.textContent = '正在逐项精修营养数值…';
    try {
      parsed = await refineNutritionValues({
        image: processed.blob,
        parsed,
        ocrEngine,
        onProgress: updateNumericRefinementProgress,
      });
    } catch (error) {
      console.warn('数值精修阶段未完成，将保留整表识别结果：', error);
    }

    if (runId !== state.ocrRunId) return;

    state.parsed = parsed;
    state.selectedGroupId = state.parsed.groups[0]?.id || '';
    renderConfirmation();
    setStage('confirm');
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
      qualifier: '',
      confidence: existing?.confidence ?? (value == null ? 0 : 1),
      warnings: existing?.warnings || [],
    };
  });
  if (group.basis === 'per_serving') {
    const derived = state.parsed.groups.find(item => item.derived && item.derivedFrom === 'per_serving');
    const servingWeightG = parsedServingWeightG();
    if (derived && servingWeightG) {
      derived.nutrients = deriveNutrientsPer100g(group.nutrients, servingWeightG);
    }
  }
  return group;
}

function formatNutritionNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return '';
  return String(Math.round(number * 100) / 100);
}

function normalizeSaveUnit(value) {
  const raw = String(value || '').trim();
  const alias = SAVE_UNIT_ALIASES[raw.toLocaleLowerCase()];
  if (alias) return alias;
  return SAVE_UNIT_VALUES.has(raw) ? raw : '份';
}

function saveAmountFromForm() {
  return {
    quantity: numberOrNull(elements.form.elements.amount_quantity.value),
    unit: elements.form.elements.amount_unit.value.trim(),
  };
}

function saveAmountForGroup(group) {
  return state.saveAmounts[group.id]
    || defaultSaveAmount(group.basis, state.parsed.serving);
}

function updateSaveAmountPreview() {
  const amount = saveAmountFromForm();
  elements.amountPreview.textContent = amount.quantity != null && amount.unit
    ? `${formatNutritionNumber(amount.quantity)}${amount.unit}`
    : '请填写单位和数量';
}

function renderSaveAmount(group) {
  const currentAmount = saveAmountForGroup(group);
  const amount = {
    ...currentAmount,
    unit: normalizeSaveUnit(currentAmount.unit),
  };
  state.saveAmounts[group.id] = amount;
  elements.form.elements.amount_unit.value = amount.unit;
  elements.form.elements.amount_quantity.value = amount.quantity;
  updateSaveAmountPreview();
}

function weightInGrams(quantity, unit) {
  const amount = numberOrNull(quantity);
  const normalizedUnit = String(unit || '').trim().toLocaleLowerCase();
  if (amount == null || amount <= 0) return null;
  if (['g', '克', '公克'].includes(normalizedUnit)) return amount;
  if (['mg', '毫克'].includes(normalizedUnit)) return amount / 1000;
  if (['kg', '千克', '公斤'].includes(normalizedUnit)) return amount * 1000;
  return null;
}

function syncSaveAmount() {
  const group = currentGroup();
  const amount = saveAmountFromForm();
  state.saveAmounts[group.id] = amount;
  if (group.basis === 'per_serving' && !group.derived) {
    const servingChanged = Number(state.parsed.serving.quantity) !== Number(amount.quantity)
      || String(state.parsed.serving.unit || '').trim() !== amount.unit;
    state.parsed.serving.quantity = amount.quantity;
    state.parsed.serving.unit = amount.unit;
    const directWeightG = weightInGrams(amount.quantity, amount.unit);
    if (directWeightG != null || servingChanged) state.parsed.serving.weightG = directWeightG;
  }
  return amount;
}

function currentAmountScaleFactor() {
  const group = currentGroup();
  const amount = saveAmountFromForm();
  return amountScaleFactor({
    basis: group.basis,
    amountQuantity: amount.quantity,
    amountUnit: amount.unit,
    servingQuantity: state.parsed.serving.quantity,
    servingUnit: state.parsed.serving.unit,
  }) ?? 1;
}

function validateSaveAmount() {
  const quantityInput = elements.form.elements.amount_quantity;
  const amount = saveAmountFromForm();
  const hasPositiveQuantity = amount.quantity != null && amount.quantity > 0;
  quantityInput.setCustomValidity(hasPositiveQuantity ? '' : '请输入大于 0 的数量。');
  return hasPositiveQuantity && amount.unit ? currentAmountScaleFactor() : null;
}

function reportFormValidityIgnoringStepMismatch() {
  const steppedInputs = [...elements.form.querySelectorAll('input[type="number"][step]')];
  const steps = steppedInputs.map(input => input.step);
  steppedInputs.forEach(input => { input.step = 'any'; });
  const valid = elements.form.reportValidity();
  steppedInputs.forEach((input, index) => { input.step = steps[index]; });
  return valid;
}

function renderEnergyConversion(group) {
  const conversion = document.getElementById('energyConversion');
  const calorieNutrient = group.nutrients.calories_kcal;
  if (calorieNutrient?.calculation?.type === 'macro_4_4_9') {
    const { carbohydrates_g: carbs, protein_g: protein, fat_g: fat } = calorieNutrient.calculation.inputs;
    conversion.textContent = `${formatNutritionNumber(carbs)} × 4 + ${formatNutritionNumber(protein)} × 4 + ${formatNutritionNumber(fat)} × 9 = ${formatNutritionNumber(calorieNutrient.value)} kcal（自动计算，非识别结果）`;
    conversion.classList.remove('hidden');
    return;
  }

  const kilojoules = (group.originalEnergyValues || []).find(item => (
    String(item.unit || '').toLocaleLowerCase().includes('kj') || item.unit === '千焦'
  ));
  const calories = calorieNutrient?.value;

  if (!kilojoules || calories == null) {
    conversion.textContent = '';
    conversion.classList.add('hidden');
    return;
  }

  const convertedPerOriginalBasis = Number(kilojoules.value) / 4.184;
  let message = `${formatNutritionNumber(kilojoules.value)} kJ ÷ 4.184 = ${formatNutritionNumber(convertedPerOriginalBasis)} kcal`;
  const servingWeightG = parsedServingWeightG();
  if (group.derived && group.basis === 'per_100g' && servingWeightG) {
    message += `；再按每份 ${formatNutritionNumber(servingWeightG)} g 换算为 ${formatNutritionNumber(calories)} kcal/100克`;
  }
  conversion.textContent = message;
  conversion.classList.remove('hidden');
}

function fillFieldsFromGroup(group) {
  FIELD_CONTROLS.forEach(([key]) => {
    const nutrient = group.nutrients[key];
    fieldInput(key).value = nutrient?.value ?? '';
    const wrapper = elements.nutritionFields.querySelector(`[data-nutrition-field="${key}"]`);
    const missing = nutrient?.value == null;
    const lowConfidence = !missing && Number(nutrient.confidence) < 0.65;
    wrapper.classList.toggle('needs-review', missing || lowConfidence || Boolean(nutrient?.warnings?.length));
  });
  renderEnergyConversion(group);
}

function renderConfirmation() {
  const parsed = state.parsed;
  elements.form.reset();
  state.saveAmounts = {};
  elements.form.elements.food_name.value = parsed.foodName || '';
  renderSaveAmount(currentGroup());
  fillFieldsFromGroup(currentGroup());
  renderValidation();
}

function simpleNutritionProfile(group) {
  const nutrients = Object.fromEntries(FIELD_CONTROLS
    .map(([key]) => [key, group.nutrients[key]])
    .filter(([, nutrient]) => nutrient)
    .map(([key, nutrient]) => [key, {
      value: nutrient.value,
      unit: nutrient.unit,
      qualifier: nutrient.qualifier || '',
      labelOriginalValue: nutrient.originalValue ?? null,
      labelOriginalUnit: nutrient.originalUnit || '',
      ocrCorrection: nutrient.ocrCorrection ? { ...nutrient.ocrCorrection } : null,
      numericRefinement: nutrient.numericRefinement
        ? structuredClone(nutrient.numericRefinement)
        : null,
      calculation: nutrient.calculation ? { ...nutrient.calculation } : null,
    }]));
  return {
    basis: group.basis,
    derived: group.derived,
    derivedFrom: group.derivedFrom || '',
    nutrients,
  };
}

function coreValidationProfile(group) {
  return {
    ...group,
    nutrients: Object.fromEntries(FIELD_CONTROLS
      .map(([key]) => [key, group.nutrients[key]])
      .filter(([, nutrient]) => nutrient)),
  };
}

function originalEnergy(group) {
  const values = group.originalEnergyValues || [];
  const energy = values.find(item => /kcal|千卡|大卡/iu.test(String(item.unit))) || values[0];
  if (!energy) return { value: null, unit: '' };
  const isKilojoule = String(energy.unit || '').toLocaleLowerCase().includes('kj')
    || energy.unit === '千焦';
  return { value: numberOrNull(energy.value), unit: isKilojoule ? 'kJ' : 'kcal' };
}

function parsedServingWeightG() {
  return weightInGrams(state.parsed.serving.quantity, state.parsed.serving.unit)
    || numberOrNull(state.parsed.serving.weightG);
}

function refreshDerivedServingGroup() {
  const groups = state.parsed.groups;
  const source = groups.find(group => group.basis === 'per_serving' && !group.derived);
  const derivedIndex = groups.findIndex(group => group.derived && group.derivedFrom === 'per_serving');
  const servingWeightG = parsedServingWeightG();

  if (!source || !servingWeightG) {
    if (derivedIndex < 0) return false;
    const removedId = groups[derivedIndex].id;
    groups.splice(derivedIndex, 1);
    if (state.selectedGroupId === removedId) state.selectedGroupId = source?.id || groups[0]?.id || '';
    return true;
  }

  const nutrients = deriveNutrientsPer100g(source.nutrients, servingWeightG);
  if (derivedIndex >= 0) {
    groups[derivedIndex] = {
      ...groups[derivedIndex],
      confidence: Math.max((Number(source.confidence) || 0) - 0.05, 0),
      nutrients,
      originalEnergyValues: [...(source.originalEnergyValues || [])],
    };
    return false;
  }

  if (groups.some(group => group.basis === 'per_100g')) return false;
  groups.push({
    id: 'per_100g-derived',
    basis: 'per_100g',
    recognizedBasis: 'per_serving',
    label: `${BASIS_LABELS.per_100g}（根据份量换算）`,
    confidence: Math.max((Number(source.confidence) || 0) - 0.05, 0),
    inferred: false,
    sourceHeader: state.parsed.serving.sourceText || '',
    nutrients,
    originalEnergyValues: [...(source.originalEnergyValues || [])],
    warnings: ['calculated_from_serving_weight'],
    derived: true,
    derivedFrom: 'per_serving',
  });
  return true;
}

function buildFoodItem() {
  const group = syncFormToCurrentGroup();
  const basis = group.basis;
  const amount = syncSaveAmount();
  const scaleFactor = currentAmountScaleFactor() ?? 1;
  const nutrients = group.nutrients;
  const energy = originalEnergy(group);
  const servingWeightG = weightInGrams(amount.quantity, amount.unit);
  const scaledValue = key => scaleNutritionValue(nutrients[key]?.value, scaleFactor);
  const parsedServingWeight = parsedServingWeightG();
  const existingDerived = state.parsed.groups.find(item => item.derived && item.basis === 'per_100g');
  const confirmedDerived = basis === 'per_serving' && parsedServingWeight
    ? {
      ...group,
      basis: 'per_100g',
      derived: true,
      derivedFrom: 'per_serving',
      nutrients: deriveNutrientsPer100g(group.nutrients, parsedServingWeight),
    }
    : (group.derived ? group : existingDerived);

  return {
    name: elements.form.elements.food_name.value.trim(),
    brand: '',
    barcode: '',
    qty: amount.quantity,
    unit: amount.unit,
    cal: scaledValue('calories_kcal'),
    calories: scaledValue('calories_kcal'),
    protein: scaledValue('protein_g'),
    carbs: scaledValue('carbohydrates_g'),
    fat: scaledValue('fat_g'),
    nutritionMode: 'total',
    nutritionBasis: basis,
    servingQuantity: amount.quantity,
    servingUnit: amount.unit,
    servingWeightG,
    savedNutritionScaleFactor: scaleFactor,
    calorieCalculation: nutrients.calories_kcal?.calculation
      ? { ...nutrients.calories_kcal.calculation }
      : null,
    servingCorrection: state.parsed.serving.ocrCorrection
      ? { ...state.parsed.serving.ocrCorrection }
      : null,
    originalNutritionBasis: group.derived
      ? group.derivedFrom
      : (group.recognizedBasis || group.basis),
    originalEnergyValue: energy.value,
    originalEnergyUnit: energy.unit,
    originalEnergyValues: group.originalEnergyValues,
    detectedLanguages: [...state.parsed.detectedLanguages],
    ocrConfidence: state.parsed.ocrConfidence,
    fieldConfidences: Object.fromEntries(FIELD_CONTROLS.map(([key]) => [key, nutrients[key]?.confidence ?? 0])),
    fieldQualifiers: Object.fromEntries(FIELD_CONTROLS.map(([key]) => [key, nutrients[key]?.qualifier || ''])),
    fieldCorrections: Object.fromEntries(
      FIELD_CONTROLS
        .map(([key]) => [key, nutrients[key]])
        .filter(([, value]) => value?.ocrCorrection)
        .map(([key, value]) => [key, { ...value.ocrCorrection }]),
    ),
    fieldRefinements: Object.fromEntries(
      FIELD_CONTROLS
        .map(([key]) => [key, nutrients[key]])
        .filter(([, value]) => value?.numericRefinement)
        .map(([key, value]) => [key, structuredClone(value.numericRefinement)]),
    ),
    confirmedNutrition: simpleNutritionProfile(group),
    derivedPer100g: confirmedDerived ? simpleNutritionProfile(confirmedDerived) : null,
    source: '我的食物库',
    sourceType: 'userLibrary',
    sourceDetail: '营养标签扫描',
    dataSource: 'nutrition_label_scan',
  };
}

function confidenceLevel(group) {
  const fieldScores = FIELD_CONTROLS.map(([key]) => {
    const nutrient = group.nutrients[key];
    if (nutrient?.value == null) return 0;
    if (nutrient.userConfirmed) return 1;
    return Math.max(0, Math.min(Number(nutrient.confidence) || 0, 1));
  });
  const fieldAverage = fieldScores.reduce((sum, value) => sum + value, 0) / fieldScores.length;
  const ocrConfidence = state.parsed.ocrConfidence;
  let score = ocrConfidence == null
    ? fieldAverage
    : fieldAverage * 0.8 + Math.max(0, Math.min(Number(ocrConfidence) || 0, 1)) * 0.2;
  score = Math.max(0, score - Math.min(state.imageWarnings.length * 0.06, 0.18));
  if (group.nutrients.calories_kcal?.calculation) score = Math.min(score, 0.74);
  if (score >= 0.82) return 'high';
  if (score >= 0.58) return 'medium';
  return 'low';
}

function fieldNeedsReview(key, group, issues) {
  const nutrient = group.nutrients[key];
  const meaningfulWarnings = (nutrient?.warnings || [])
    .filter(code => code !== 'calculated_from_serving_weight');
  return nutrient?.value == null
    || (!nutrient.userConfirmed && Number(nutrient.confidence) < 0.65)
    || meaningfulWarnings.length > 0
    || Boolean(nutrient?.ocrCorrection)
    || issues.some(itemIssue => itemIssue.field === key);
}

function renderValidation() {
  if (!state.parsed) return null;
  const item = buildFoodItem();
  const group = currentGroup();
  const result = validateScannedFood(
    item,
    coreValidationProfile(group),
    { ocrConfidence: state.parsed.ocrConfidence },
  );
  const issues = [...result.errors, ...result.warnings]
    .filter(itemIssue => itemIssue.code !== 'calculated_from_serving_weight');
  const possibleFields = FIELD_CONTROLS.filter(([key]) => fieldNeedsReview(key, group, issues));

  elements.nutritionFields.querySelectorAll('.nutrition-field').forEach(field => {
    const key = field.dataset.nutritionField;
    field.classList.toggle('needs-review', possibleFields.some(([fieldKey]) => fieldKey === key));
  });

  const level = confidenceLevel(group);
  elements.validationSummary.dataset.confidence = level;
  elements.validationSummary.innerHTML = `
    <strong>识别信心度：<span class="confidence-level ${level}">${CONFIDENCE_LABELS[level]}</span></strong>
    ${possibleFields.length ? `<ul>${possibleFields.map(([, label]) => `<li>${label}数值可能错误</li>`).join('')}</ul>` : ''}
  `;
  return result;
}

function markFieldAsEdited(key) {
  const group = currentGroup();
  if (!group) return;
  const macroFields = ['carbohydrates_g', 'protein_g', 'fat_g'];
  if (macroFields.includes(key) && group.nutrients.calories_kcal?.calculation) {
    group.nutrients.calories_kcal = {
      ...group.nutrients.calories_kcal,
      value: null,
      confidence: 0,
      warnings: [],
      calculation: null,
    };
    fieldInput('calories_kcal').value = '';
    renderEnergyConversion(group);
  }
  const value = numberOrNull(fieldInput(key).value);
  group.nutrients[key] = {
    ...(group.nutrients[key] || {}),
    value,
    unit: NUTRITION_FIELD_DEFINITIONS[key].storageUnit,
    qualifier: '',
    confidence: value == null ? 0 : 1,
    warnings: [],
    ocrAlternatives: [],
    ocrCorrection: null,
    calculation: null,
    userConfirmed: true,
  };
}

function applyCalculatedCalories(review) {
  const group = currentGroup();
  const inputs = { ...review.macroValues };
  group.nutrients.calories_kcal = {
    ...(group.nutrients.calories_kcal || {}),
    value: review.calculatedCalories,
    unit: 'kcal',
    qualifier: '',
    confidence: 0.55,
    warnings: ['calculated_from_macros'],
    ocrAlternatives: [],
    ocrCorrection: null,
    calculation: {
      type: 'macro_4_4_9',
      inputs,
      value: review.calculatedCalories,
      unit: 'kcal',
    },
    userConfirmed: false,
  };
  fieldInput('calories_kcal').value = review.calculatedCalories;
  if (group.basis === 'per_serving') refreshDerivedServingGroup();
  renderEnergyConversion(group);
}

function showSaveReview(review, item) {
  const messages = [];
  if (review.calculatedCalories != null) {
    const { carbohydrates_g: carbs, protein_g: protein, fat_g: fat } = review.macroValues;
    const calculationLead = review.calculationNeeded ? '热量为空，已' : '热量此前已';
    messages.push(`
      <p class="auto-calorie-notice">
        ${calculationLead}按 ${formatNutritionNumber(carbs)} × 4 + ${formatNutritionNumber(protein)} × 4 + ${formatNutritionNumber(fat)} × 9
        自动填写为 ${formatNutritionNumber(review.calculatedCalories)} kcal。该热量为自动计算，并非 OCR 识别结果。
      </p>
    `);
  }
  if (review.missingFields.length) {
    messages.push(`
      <p>以下数值为空，请返回检查，或确认仍要继续保存：</p>
      <ul>${review.missingFields.map(field => `<li>${field.label}数值为空</li>`).join('')}</ul>
    `);
  }

  state.pendingSaveItem = item;
  state.reviewFocusKey = review.missingFields[0]?.key
    || (review.calculatedCalories != null ? 'calories_kcal' : '');
  elements.saveReviewContent.innerHTML = messages.join('');
  elements.saveReviewModal.classList.remove('hidden');
  elements.returnToReview.focus();
}

function hideSaveReview({ focusField = false } = {}) {
  elements.saveReviewModal.classList.add('hidden');
  const focusKey = state.reviewFocusKey;
  state.pendingSaveItem = null;
  state.reviewFocusKey = '';
  if (focusField && focusKey) {
    fieldInput(focusKey).focus();
    fieldInput(focusKey).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

async function persistItem(item) {
  state.saving = true;
  elements.saveButton.disabled = true;
  elements.saveButton.textContent = '正在保存…';
  try {
    const saved = await saveScannedFood(item);
    await finishAndReturn(saved.name);
  } catch (error) {
    console.error('保存扫描食物失败：', error);
    elements.validationSummary.innerHTML = `<strong class="save-error">保存失败：${error.message || error}</strong>`;
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
  state.saveAmounts = {};
  state.pendingSaveItem = null;
  state.reviewFocusKey = '';
  elements.saveReviewModal.classList.add('hidden');
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
document.getElementById('retakeBtn').addEventListener('click', resetCapture);
document.getElementById('confirmRetakeBtn').addEventListener('click', resetCapture);
document.getElementById('cancelOcrBtn').addEventListener('click', async () => {
  state.ocrRunId += 1;
  await ocrEngine.cancel().catch(() => {});
  setStage('edit');
  setStatus(elements.editStatus, '已取消识别，可重试或手动填写。');
});

elements.nutritionFields.addEventListener('input', event => {
  const key = event.target.dataset.valueFor;
  if (!key) return;
  markFieldAsEdited(key);
  renderValidation();
});

elements.form.addEventListener('input', event => {
  if (event.target.closest('#nutritionFields')) return;
  if (['amount_quantity', 'amount_unit'].includes(event.target.name)) {
    syncFormToCurrentGroup();
    syncSaveAmount();
    if (currentGroup()?.basis === 'per_serving') refreshDerivedServingGroup();
    updateSaveAmountPreview();
    validateSaveAmount();
  }
  renderValidation();
});

elements.form.addEventListener('submit', async event => {
  event.preventDefault();
  if (state.saving) return;
  syncFormToCurrentGroup();
  syncSaveAmount();
  validateSaveAmount();
  if (!reportFormValidityIgnoringStepMismatch()) return;
  const review = prepareSaveReview(currentGroup().nutrients);
  if (review.calculationNeeded) applyCalculatedCalories(review);
  const result = renderValidation();
  if (result.errors.length) {
    elements.validationSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const item = buildFoodItem();
  if (review.requiresReview) {
    showSaveReview(review, item);
    return;
  }
  await persistItem(item);
});

elements.returnToReview.addEventListener('click', () => hideSaveReview({ focusField: true }));
elements.continueSave.addEventListener('click', async () => {
  const item = state.pendingSaveItem;
  hideSaveReview();
  if (item) await persistItem(item);
});
elements.saveReviewModal.addEventListener('click', event => {
  if (event.target === elements.saveReviewModal) hideSaveReview({ focusField: true });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !elements.saveReviewModal.classList.contains('hidden')) {
    hideSaveReview({ focusField: true });
  }
});

elements.back.addEventListener('click', () => finishAndReturn());
window.addEventListener('beforeunload', () => {
  imageProcessor.destroy();
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  void ocrEngine.terminate();
});
