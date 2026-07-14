function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function grayscalePixels(rgba) {
  const gray = new Uint8ClampedArray(Math.floor(rgba.length / 4));
  for (let pixel = 0, index = 0; index < rgba.length; pixel += 1, index += 4) {
    gray[pixel] = Math.round(
      rgba[index] * 0.299
      + rgba[index + 1] * 0.587
      + rgba[index + 2] * 0.114,
    );
  }
  return gray;
}

export function otsuThreshold(gray) {
  const histogram = new Uint32Array(256);
  gray.forEach(value => { histogram[value] += 1; });

  const total = Math.max(gray.length, 1);
  let weightedTotal = 0;
  for (let value = 0; value < histogram.length; value += 1) {
    weightedTotal += value * histogram[value];
  }

  let backgroundWeight = 0;
  let backgroundSum = 0;
  let bestVariance = -1;
  let bestThreshold = 160;
  for (let threshold = 0; threshold < histogram.length; threshold += 1) {
    backgroundWeight += histogram[threshold];
    if (!backgroundWeight) continue;
    const foregroundWeight = total - backgroundWeight;
    if (!foregroundWeight) break;
    backgroundSum += threshold * histogram[threshold];
    const backgroundMean = backgroundSum / backgroundWeight;
    const foregroundMean = (weightedTotal - backgroundSum) / foregroundWeight;
    const variance = backgroundWeight
      * foregroundWeight
      * (backgroundMean - foregroundMean) ** 2;
    if (variance > bestVariance) {
      bestVariance = variance;
      bestThreshold = threshold;
    }
  }
  return bestThreshold;
}

export function globalBinarize(gray, threshold = otsuThreshold(gray)) {
  return Uint8ClampedArray.from(gray, value => (value > threshold ? 255 : 0));
}

export function adaptiveBinarize(gray, width, height, { radius = 12, bias = 10 } = {}) {
  if (!width || !height || gray.length !== width * height) return new Uint8ClampedArray(gray);
  const stride = width + 1;
  const integral = new Float64Array((width + 1) * (height + 1));

  for (let y = 1; y <= height; y += 1) {
    let rowSum = 0;
    for (let x = 1; x <= width; x += 1) {
      rowSum += gray[(y - 1) * width + x - 1];
      integral[y * stride + x] = integral[(y - 1) * stride + x] + rowSum;
    }
  }

  const output = new Uint8ClampedArray(gray.length);
  for (let y = 0; y < height; y += 1) {
    const y0 = Math.max(0, y - radius);
    const y1 = Math.min(height - 1, y + radius);
    for (let x = 0; x < width; x += 1) {
      const x0 = Math.max(0, x - radius);
      const x1 = Math.min(width - 1, x + radius);
      const area = (x1 - x0 + 1) * (y1 - y0 + 1);
      const sum = integral[(y1 + 1) * stride + x1 + 1]
        - integral[y0 * stride + x1 + 1]
        - integral[(y1 + 1) * stride + x0]
        + integral[y0 * stride + x0];
      output[y * width + x] = gray[y * width + x] > sum / area - bias ? 255 : 0;
    }
  }
  return output;
}

export function normalizeNumericRegion(
  bbox,
  imageWidth,
  imageHeight,
  { trimRightRatio = 0 } = {},
) {
  const x0 = Number(bbox?.x0);
  const y0 = Number(bbox?.y0);
  const x1 = Number(bbox?.x1);
  const y1 = Number(bbox?.y1);
  if (![x0, y0, x1, y1].every(Number.isFinite) || x1 <= x0 || y1 <= y0) return null;

  const tokenWidth = x1 - x0;
  const tokenHeight = y1 - y0;
  const trimmedX1 = x1 - tokenWidth * clamp(trimRightRatio, 0, 0.45);
  const horizontalPadding = tokenHeight * 0.42;
  const rightPadding = trimRightRatio > 0 ? tokenHeight * 0.08 : tokenHeight * 0.65;
  const verticalPadding = tokenHeight * 0.38;
  const left = clamp(x0 - horizontalPadding, 0, imageWidth);
  const top = clamp(y0 - verticalPadding, 0, imageHeight);
  const right = clamp(trimmedX1 + rightPadding, left + 1, imageWidth);
  const bottom = clamp(y1 + verticalPadding, top + 1, imageHeight);
  return {
    x: Math.floor(left),
    y: Math.floor(top),
    width: Math.max(1, Math.ceil(right - left)),
    height: Math.max(1, Math.ceil(bottom - top)),
  };
}

function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function canvasToPng(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('无法生成数值识别图片'));
    }, 'image/png');
  });
}

function loadImageElement(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.addEventListener('load', () => {
      URL.revokeObjectURL(url);
      resolve(image);
    }, { once: true });
    image.addEventListener('error', () => {
      URL.revokeObjectURL(url);
      reject(new Error('无法解码数值识别图片'));
    }, { once: true });
    image.src = url;
  });
}

function grayToImageData(context, gray, width, height) {
  const imageData = context.createImageData(width, height);
  for (let pixel = 0, index = 0; pixel < gray.length; pixel += 1, index += 4) {
    const value = gray[pixel];
    imageData.data[index] = value;
    imageData.data[index + 1] = value;
    imageData.data[index + 2] = value;
    imageData.data[index + 3] = 255;
  }
  return imageData;
}

async function variantBlob(gray, width, height) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');
  context.putImageData(grayToImageData(context, gray, width, height), 0, 0);
  return canvasToPng(canvas);
}

export class NumericImagePreprocessor {
  constructor(imageBlob, bitmapFactory = globalThis.createImageBitmap) {
    this.imageBlob = imageBlob;
    this.bitmapFactory = bitmapFactory;
    this.bitmap = null;
  }

  async initialize() {
    if (this.bitmap) return this.bitmap;
    this.bitmap = typeof this.bitmapFactory === 'function'
      ? await this.bitmapFactory(this.imageBlob)
      : await loadImageElement(this.imageBlob);
    return this.bitmap;
  }

  async createVariants(bbox, { trimRightRatio = 0 } = {}) {
    const bitmap = await this.initialize();
    const region = normalizeNumericRegion(bbox, bitmap.width, bitmap.height, { trimRightRatio });
    if (!region) return [];

    const originalHeight = Math.max(Number(bbox.y1) - Number(bbox.y0), 1);
    const scale = Math.min(clamp(96 / originalHeight, 2, 5), 1800 / region.width);
    const border = 20;
    const width = Math.max(1, Math.round(region.width * scale) + border * 2);
    const height = Math.max(1, Math.round(region.height * scale) + border * 2);
    const sourceCanvas = createCanvas(width, height);
    const context = sourceCanvas.getContext('2d', { willReadFrequently: true });
    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.drawImage(
      bitmap,
      region.x,
      region.y,
      region.width,
      region.height,
      border,
      border,
      width - border * 2,
      height - border * 2,
    );

    const rgba = context.getImageData(0, 0, width, height).data;
    const gray = grayscalePixels(rgba);
    const radius = Math.max(8, Math.round(height * 0.07));
    const variants = [
      { name: 'grayscale', pixels: gray },
      { name: 'otsu', pixels: globalBinarize(gray) },
      { name: 'adaptive', pixels: adaptiveBinarize(gray, width, height, { radius, bias: 11 }) },
    ];

    return Promise.all(variants.map(async variant => ({
      name: variant.name,
      blob: await variantBlob(variant.pixels, width, height),
      width,
      height,
      trimRightRatio,
    })));
  }

  destroy() {
    this.bitmap?.close?.();
    this.bitmap = null;
  }
}
