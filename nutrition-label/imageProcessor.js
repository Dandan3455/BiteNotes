function canvasToBlob(canvas, type = 'image/jpeg', quality = 0.92) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('无法生成处理后的图片'));
    }, type, quality);
  });
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
  constructor(imageElement, CropperConstructor = globalThis.Cropper) {
    this.imageElement = imageElement;
    this.CropperConstructor = CropperConstructor;
    this.cropper = null;
    this.sourceUrl = '';
    this.rotationDegrees = 0;
  }

  async load(file) {
    if (!(file instanceof Blob) || !String(file.type).startsWith('image/')) {
      throw new Error('请选择照片或图片文件');
    }
    if (!this.CropperConstructor) throw new Error('图片裁剪组件未加载');

    this.destroyCropper();
    this.revokeSourceUrl();
    this.sourceUrl = URL.createObjectURL(file);
    this.imageElement.src = this.sourceUrl;
    await this.imageElement.decode();
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
      maxWidth: 2200,
      maxHeight: 2200,
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
