import assert from 'node:assert/strict';
import test from 'node:test';

import { measureImageData } from '../nutrition-label/imageProcessor.js';
import { DEFAULT_LANGUAGES, LocalOcrEngineAdapter } from '../nutrition-label/ocrEngineAdapter.js';

test('configures local English, French, Simplified Chinese and Traditional Chinese OCR models', async () => {
  const calls = {};
  const worker = {
    async setParameters(parameters) {
      calls.parameterSets ||= [];
      calls.parameterSets.push(parameters);
    },
    async recognize(image, options, output) {
      calls.image = image;
      calls.options = options;
      calls.output = output;
      return { data: { text: 'Nutrition Facts', confidence: 90, blocks: [] } };
    },
    async terminate() {
      calls.terminated = true;
    },
  };
  const tesseract = {
    PSM: {
      AUTO: '3', SINGLE_BLOCK: '6', SINGLE_LINE: '7', SINGLE_WORD: '8', RAW_LINE: '13',
    },
    async createWorker(languages, oem, options) {
      calls.languages = languages;
      calls.oem = oem;
      calls.workerOptions = options;
      return worker;
    },
  };
  const adapter = new LocalOcrEngineAdapter({ tesseract });
  const result = await adapter.recognize('image-blob', { width: 800, height: 600 });

  assert.deepEqual(calls.languages, DEFAULT_LANGUAGES);
  assert.equal(calls.workerOptions.langPath, '/vendor/tessdata');
  assert.equal(calls.workerOptions.corePath, '/vendor/tesseract-core');
  assert.equal(calls.options.rotateAuto, true);
  assert.equal(calls.output.blocks, true);
  assert.equal(result.width, 800);
  assert.equal(calls.parameterSets.at(-1).tessedit_pageseg_mode, '3');

  await adapter.recognize('image-blob', {
    width: 800,
    height: 600,
    pageSegmentation: 'single_block',
  });
  assert.equal(calls.parameterSets.at(-1).tessedit_pageseg_mode, '6');

  await adapter.recognize('numeric-cell', {
    width: 240,
    height: 100,
    pageSegmentation: 'single_word',
    characterWhitelist: '0123456789.,g',
    rotateAuto: false,
    includeBlocks: false,
    rectangle: { top: 2, left: 3, width: 100, height: 40 },
  });
  assert.equal(calls.parameterSets.at(-1).tessedit_pageseg_mode, '8');
  assert.equal(calls.parameterSets.at(-1).tessedit_char_whitelist, '0123456789.,g');
  assert.equal(calls.options.rotateAuto, false);
  assert.deepEqual(calls.options.rectangle, { top: 2, left: 3, width: 100, height: 40 });
  assert.equal(calls.output.blocks, false);

  await adapter.recognize('image-blob');
  assert.equal(calls.parameterSets.at(-1).tessedit_char_whitelist, '');
  await adapter.terminate();
  assert.equal(calls.terminated, true);
});

test('image metrics distinguish uniform blur-like input from high-contrast edges', () => {
  const uniform = new Uint8ClampedArray(4 * 4 * 4).fill(128);
  for (let index = 3; index < uniform.length; index += 4) uniform[index] = 255;
  const uniformMetrics = measureImageData(uniform, 4, 4);
  assert.ok(uniformMetrics.contrastScore < 0.001);
  assert.equal(uniformMetrics.sharpnessScore, 0);

  const checker = new Uint8ClampedArray(4 * 4 * 4);
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const value = (x + y) % 2 ? 255 : 0;
      const index = (y * 4 + x) * 4;
      checker[index] = value;
      checker[index + 1] = value;
      checker[index + 2] = value;
      checker[index + 3] = 255;
    }
  }
  const checkerMetrics = measureImageData(checker, 4, 4);
  assert.ok(checkerMetrics.contrastScore > 100);
  assert.ok(checkerMetrics.sharpnessScore > 100);
});
