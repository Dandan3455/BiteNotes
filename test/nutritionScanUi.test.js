import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const htmlUrl = new URL('../nutrition-label.html', import.meta.url);
const scanPageUrl = new URL('../nutrition-label/scanPage.js', import.meta.url);

test('keeps the nutrition scan confirmation form focused on core fields', async () => {
  const [html, scanPage] = await Promise.all([
    readFile(htmlUrl, 'utf8'),
    readFile(scanPageUrl, 'utf8'),
  ]);

  assert.match(html, /name="food_name"/u);
  assert.match(html, /<select name="amount_unit" required>/u);
  assert.match(html, /<option value="g">克 \(g\)<\/option>/u);
  assert.match(html, /<option value="mL">毫升 \(mL\)<\/option>/u);
  assert.match(html, /<option value="份">份<\/option>/u);
  assert.match(html, /<option value="个">个<\/option>/u);
  assert.match(html, /name="amount_quantity" type="number" min="0" step="1"/u);
  assert.match(html, /id="saveAmountPreview"/u);
  assert.match(html, /id="saveReviewModal"/u);
  assert.match(html, /id="returnToReviewBtn"/u);
  assert.match(html, /id="continueSaveBtn"/u);
  assert.doesNotMatch(html, /id="basisOptions"|营养数值基准|标签数值/u);
  assert.doesNotMatch(html, /servings_per_container|每包装份数/u);
  assert.doesNotMatch(html, /name="brand"|name="barcode"|name="confirm_warnings"/u);
  assert.doesNotMatch(html, /detectedLanguages|ocrConfidence|retryOcrBtn|barcodeConflictModal/u);
  assert.doesNotMatch(scanPage, /data-qualifier-for|qualifierInput|数值限定符|<option value="<">小于/u);
  assert.match(scanPage, /qualifier: ''/u);

  const controls = scanPage.match(/const FIELD_CONTROLS = Object\.freeze\(\[([\s\S]*?)\]\);/u)?.[1] || '';
  assert.match(controls, /calories_kcal/u);
  assert.match(controls, /\['calories_kcal', '热量', 'kcal', 1\]/u);
  assert.match(controls, /\['carbohydrates_g', '碳水化合物', 'g', 0\.1\]/u);
  assert.match(controls, /\['protein_g', '蛋白质', 'g', 0\.1\]/u);
  assert.match(controls, /\['fat_g', '脂肪', 'g', 0\.1\]/u);
  assert.doesNotMatch(controls, /fibre_g|sugars_g|saturated_fat_g|trans_fat_g|sodium_mg/u);
  assert.doesNotMatch(`${html}\n${scanPage}`, /step="0\.001"|detected_basis_group/u);
  assert.match(scanPage, /reportFormValidityIgnoringStepMismatch/u);
  assert.doesNotMatch(scanPage, /当前营养数值基准无法换算/u);
});

test('uses categorical confidence, generic field warnings, and an inline energy formula', async () => {
  const [html, scanPage] = await Promise.all([
    readFile(htmlUrl, 'utf8'),
    readFile(scanPageUrl, 'utf8'),
  ]);

  assert.match(scanPage, /high: '高'/u);
  assert.match(scanPage, /medium: '中'/u);
  assert.match(scanPage, /low: '低'/u);
  assert.match(scanPage, /\$\{label\}数值可能错误/u);
  assert.match(scanPage, /kJ ÷ 4\.184 =/u);
  assert.doesNotMatch(scanPage, /已按 g\/9 混淆|识别信心 \$\{Math\.round/u);

  const saveButtons = html.match(/id="saveScannedFoodBtn"/gu) || [];
  assert.equal(saveButtons.length, 1);
  assert.match(html, /scan-bottom-actions save-only/u);
});

test('opens camera and gallery pickers synchronously from their buttons', async () => {
  const [html, scanPage] = await Promise.all([
    readFile(htmlUrl, 'utf8'),
    readFile(scanPageUrl, 'utf8'),
  ]);
  const cameraStart = scanPage.indexOf('function openCameraInput()');
  const cameraEnd = scanPage.indexOf('async function handleSelectedFile', cameraStart);
  const cameraFlow = scanPage.slice(cameraStart, cameraEnd);

  assert.match(html, /id="cameraInput" type="file" accept="image\/\*" capture="environment"/u);
  assert.match(html, /id="galleryInput" type="file" accept="image\/\*,\.heic,\.heif"/u);
  assert.match(scanPage, /function openFilePicker\(input\)/u);
  assert.match(scanPage, /input\.showPicker\(\)/u);
  assert.match(scanPage, /input\.click\(\)/u);
  assert.doesNotMatch(scanPage, /async function openCameraInput/u);
  assert.ok(cameraFlow.indexOf('openFilePicker(elements.cameraInput)') >= 0);
  assert.ok(cameraFlow.indexOf('openFilePicker(elements.cameraInput)') < cameraFlow.indexOf('inspectCameraPermission()'));
  assert.match(scanPage, /elements\.choosePhoto\.addEventListener\('click', openGalleryInput\)/u);
});
