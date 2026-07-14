const MIME_FORMATS = Object.freeze({
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpeg',
  'image/png': 'png',
  'image/heic': 'heic',
  'image/heic-sequence': 'heic',
  'image/heif': 'heif',
  'image/heif-sequence': 'heif',
});

const EXTENSION_FORMATS = Object.freeze({
  jpg: 'jpeg',
  jpeg: 'jpeg',
  png: 'png',
  heic: 'heic',
  heif: 'heif',
});

const HEIC_BRANDS = new Set(['heic', 'heix', 'hevc', 'hevx']);
const HEIF_BRANDS = new Set(['heif', 'mif1', 'msf1']);
const HEIC_CONVERTER_URL = '/vendor/heic-to/heic-to.js';

let defaultHeicConverterPromise;

function startsWith(bytes, signature) {
  return signature.every((value, index) => bytes[index] === value);
}

function ascii(bytes, start, end) {
  return String.fromCharCode(...bytes.slice(start, end)).replace(/\0/g, '').trim();
}

function formatFromBytes(bytes) {
  if (bytes.length >= 3 && startsWith(bytes, [0xff, 0xd8, 0xff])) return 'jpeg';
  if (
    bytes.length >= 8
    && startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  ) {
    return 'png';
  }
  if (bytes.length >= 12 && ascii(bytes, 4, 8) === 'ftyp') {
    const brand = ascii(bytes, 8, 12).toLowerCase();
    if (HEIC_BRANDS.has(brand)) return 'heic';
    if (HEIF_BRANDS.has(brand)) return 'heif';
  }
  return '';
}

function formatFromName(name = '') {
  const extension = String(name).toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || '';
  return EXTENSION_FORMATS[extension] || '';
}

function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isHeifFormat(format) {
  return format === 'heic' || format === 'heif';
}

async function loadDefaultHeicConverter() {
  if (!defaultHeicConverterPromise) {
    defaultHeicConverterPromise = import(HEIC_CONVERTER_URL)
      .then(module => module.heicTo)
      .catch(error => {
        defaultHeicConverterPromise = undefined;
        throw error;
      });
  }
  return defaultHeicConverterPromise;
}

export async function detectImageFileFormat(file) {
  if (!isBlob(file)) return 'unknown';

  const header = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const detectedFromBytes = formatFromBytes(header);
  if (detectedFromBytes) return detectedFromBytes;

  const mime = String(file.type || '').toLowerCase().split(';', 1)[0].trim();
  if (MIME_FORMATS[mime]) return MIME_FORMATS[mime];

  const detectedFromName = formatFromName(file.name);
  if (detectedFromName) return detectedFromName;

  return mime.startsWith('image/') ? 'browser-image' : 'unknown';
}

export async function normalizeImageFile(file, options = {}) {
  if (!isBlob(file)) throw new Error('请选择照片或图片文件');

  const format = await detectImageFileFormat(file);
  if (format === 'unknown') {
    throw new Error('无法识别该文件格式。请选择 JPG、JPEG、PNG、HEIC 或 HEIF 图片');
  }

  if (!isHeifFormat(format)) {
    return {
      blob: file,
      converted: false,
      originalFormat: format,
      outputFormat: format,
    };
  }

  options.onStatus?.('正在当前设备上转换 HEIC/HEIF 图片…');
  try {
    const converter = options.heicConverter || await loadDefaultHeicConverter();
    if (typeof converter !== 'function') throw new Error('HEIC converter is unavailable');
    const conversion = await converter({
      blob: file,
      type: 'image/jpeg',
      quality: 0.94,
    });
    const convertedBlob = Array.isArray(conversion) ? conversion[0] : conversion;
    if (!isBlob(convertedBlob)) throw new Error('HEIC converter returned no image');

    return {
      blob: convertedBlob.type === 'image/jpeg'
        ? convertedBlob
        : new Blob([convertedBlob], { type: 'image/jpeg' }),
      converted: true,
      originalFormat: format,
      outputFormat: 'jpeg',
    };
  } catch (_error) {
    throw new Error(
      '无法解码这张 HEIC/HEIF 图片。文件可能损坏、尚未完整下载，或使用了当前解码器不支持的编码；请尝试重新导出为 JPG/PNG',
    );
  }
}
