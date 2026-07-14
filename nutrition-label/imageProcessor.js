import { normalizeImageFile } from './imageFileNormalizer.js';

function canvasToBlob(canvas, type = 'image/png', quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('无法生成处理后的图片'));
    }, type, quality);
  });
}

function hasDecodedDimensions(imageElement) {
  return imageElement.naturalWidth > 0 && imageElement.naturalHeight > 0;
}

function waitForImageLoad(imageElement) {
  if (imageElement.complete) {
    return hasDecodedDimensions(imageElement)
      ? Promise.resolve()
      : Promise.reject(new Error('Image has no decoded dimensions'));
  }
  return new Promise((resolve, reject) => {
    imageElement.addEventListener('load', resolve, { once: true });
    imageElement.addEventListener(
      'error',
      () => reject(new Error('Image load failed')),
      { once: true },
    );
  });
}

async function decodeImageElement(imageElement) {
  if (typeof imageElement.decode === 'function') {
    try {
      await imageElement.decode();
    } catch (error) {
      if (!hasDecodedDimensions(imageElement)) throw error;
    }
  } else {
    await waitForImageLoad(imageElement);
  }
  if (!hasDecodedDimensions(imageElement)) throw new Error('Image has no decoded dimensions');
}

function applyContrast(canvas, contrast) {
  if (Math.abs(contrast - 1) < 0.01) return;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const factor = contrast;
  for (let index = 0; index < image.data.length; index += 4) {
    image.data[index] = 128 + (image.data[index] - 128) * factor;
    image.data[index + 1] = 128 + (image.data[index + 1] - 128) * factor;
    image.data[index + 2] = 128 + (image.data[index + 2] - 128) * factor;
  }
  context.putImageData(image, 0, 0);
}

export function measureImageData(imageData, width, height) {
  const values = imageData?.data || imageData;
  if (!values?.length || width <= 1 || height <= 1) {
    return { contrastScore: 0, sharpnessScore: 0 };
  }

  const step = Math.max(1, Math.floor(Math.max(width, height) / 400));
  let count = 0;
  let sum = 0;
  let sumSquares = 0;
  let gradient = 0;
  let gradientCount = 0;

  const grayAt = (x, y) => {
    const index = (y * width + x) * 4;
    return values[index] * 0.299 + values[index + 1] * 0.587 + values[index + 2] * 0.114;
  };

  for (let y = 0; y < height - step; y += step) {
    for (let x = 0; x < width - step; x += step) {
      const gray = grayAt(x, y);
      sum += gray;
      sumSquares += gray * gray;
      count += 1;
      gradient += Math.abs(gray - grayAt(x + step, y));
      gradient += Math.abs(gray - grayAt(x, y + step));
      gradientCount += 2;
    }
  }

  const mean = sum / Math.max(count, 1);
  const variance = Math.max(sumSquares / Math.max(count, 1) - mean * mean, 0);
  return {
    contrastScore: Math.sqrt(variance),
    sharpnessScore: gradient / Math.max(gradientCount, 1),
  };
}

function analyzeCanvas(canvas) {
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  return measureImageData(imageData, canvas.width, canvas.height);
}

export class NutritionLabelImageProcessor {
  constructor(imageElement, CropperConstructor = globalThis.Cropper, heicConverter = null) {
    this.imageElement = imageElement;
    this.CropperConstructor = CropperConstructor;
    this.heicConverter = heicConverter;
    this.cropper = null;
    this.sourceUrl = '';
    this.rotationDegrees = 0;
  }

  async load(file, options = {}) {
    if (!this.CropperConstructor) throw new Error('图片裁剪组件未加载');

    options.onStatus?.('正在读取图片…');
    const normalized = await normalizeImageFile(file, {
      heicConverter: this.heicConverter,
      onStatus: options.onStatus,
    });

    this.destroyCropper();
    this.revokeSourceUrl();
    this.sourceUrl = URL.createObjectURL(normalized.blob);
    this.imageElement.src = this.sourceUrl;
    try {
      await decodeImageElement(this.imageElement);
    } catch (_error) {
      this.revokeSourceUrl();
      this.imageElement.removeAttribute('src');
      const label = normalized.originalFormat === 'browser-image'
        ? '所选'
        : normalized.originalFormat.toUpperCase();
      throw new Error(
        `${label} 图片无法解码。文件可能损坏或尚未完整下载，请重新选择 JPG、PNG、HEIC 或 HEIF 图片`,
      );
    }
    this.rotationDegrees = 0;
    this.cropper = new this.CropperConstructor(this.imageElement, {
      viewMode: 1,
      dragMode: 'move',
      autoCropArea: 0.95,
      responsive: true,
      restore: false,
      checkOrientation: true,
      background: false,
      movable: true,
      zoomable: true,
      rotatable: true,
      scalable: false,
    });
    return normalized;
  }

  rotate(degrees) {
    if (!this.cropper) return;
    this.rotationDegrees = (this.rotationDegrees + degrees) % 360;
    this.cropper.rotate(degrees);
  }

  reset() {
    if (!this.cropper) return;
    this.rotationDegrees = 0;
    this.cropper.reset();
  }

  async createProcessedImage({ enhanceContrast = false } = {}) {
    if (!this.cropper) throw new Error('请先拍摄或选择营养标签图片');
    const canvas = this.cropper.getCroppedCanvas({
      maxWidth: 3200,
      maxHeight: 3200,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
      fillColor: '#fff',
    });
    if (!canvas) throw new Error('无法读取裁剪区域');
    applyContrast(canvas, enhanceContrast ? 1.45 : 1);
    const quality = analyzeCanvas(canvas);
    const blob = await canvasToBlob(canvas);
    return {
      blob,
      width: canvas.width,
      height: canvas.height,
      rotationDegrees: this.rotationDegrees,
      enhancedContrast: enhanceContrast,
      ...quality,
    };
  }

  destroyCropper() {
    if (!this.cropper) return;
    this.cropper.destroy();
    this.cropper = null;
  }

  revokeSourceUrl() {
    if (!this.sourceUrl) return;
    URL.revokeObjectURL(this.sourceUrl);
    this.sourceUrl = '';
  }

  destroy() {
    this.destroyCropper();
    this.revokeSourceUrl();
    this.imageElement.removeAttribute('src');
  }
}

export async function detectBarcodeFromImage(blob) {
  if (!('BarcodeDetector' in globalThis)) return { supported: false, value: '' };
  const detector = new globalThis.BarcodeDetector({
    formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'itf'],
  });
  const bitmap = await createImageBitmap(blob);
  try {
    const results = await detector.detect(bitmap);
    return { supported: true, value: results[0]?.rawValue || '' };
  } finally {
    bitmap.close();
  }
}
