import assert from 'node:assert/strict';
import test from 'node:test';

import {
  adaptiveBinarize,
  globalBinarize,
  grayscalePixels,
  normalizeNumericRegion,
  otsuThreshold,
} from '../nutrition-label/numericImagePreprocessor.js';

test('creates grayscale and binary numeric-cell pixels without losing dimensions', () => {
  const rgba = new Uint8ClampedArray([
    0, 0, 0, 255,
    255, 255, 255, 255,
    40, 40, 40, 255,
    220, 220, 220, 255,
  ]);
  const gray = grayscalePixels(rgba);
  assert.deepEqual([...gray], [0, 255, 40, 220]);
  const threshold = otsuThreshold(gray);
  const global = globalBinarize(gray, threshold);
  assert.equal(global.length, 4);
  assert.equal(global[0], 0);
  assert.equal(global[1], 255);

  const adaptive = adaptiveBinarize(gray, 2, 2, { radius: 1, bias: 5 });
  assert.equal(adaptive.length, 4);
  assert.equal(adaptive[0], 0);
  assert.equal(adaptive[1], 255);
});

test('pads numeric cells while keeping right-trim crops inside the source image', () => {
  const full = normalizeNumericRegion(
    { x0: 100, y0: 40, x1: 160, y1: 60 },
    300,
    200,
  );
  const trimmed = normalizeNumericRegion(
    { x0: 100, y0: 40, x1: 160, y1: 60 },
    300,
    200,
    { trimRightRatio: 0.25 },
  );

  assert.ok(full.x < 100);
  assert.ok(full.y < 40);
  assert.ok(trimmed.width < full.width);
  assert.ok(trimmed.x + trimmed.width <= 300);
  assert.ok(trimmed.y + trimmed.height <= 200);
});
