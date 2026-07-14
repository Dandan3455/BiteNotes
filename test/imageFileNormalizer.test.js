import assert from 'node:assert/strict';
import test from 'node:test';

import {
  detectImageFileFormat,
  normalizeImageFile,
} from '../nutrition-label/imageFileNormalizer.js';

function namedBlob(bytes, { type = '', name = '' } = {}) {
  const blob = new Blob([Uint8Array.from(bytes)], { type });
  Object.defineProperty(blob, 'name', { value: name });
  return blob;
}

function ftypHeader(brand) {
  const bytes = new Uint8Array(16);
  bytes.set([0, 0, 0, 16], 0);
  bytes.set([...Buffer.from('ftyp')], 4);
  bytes.set([...Buffer.from(brand)], 8);
  return bytes;
}

test('detects JPEG and PNG from file signatures even when MIME is absent', async () => {
  const jpeg = namedBlob([0xff, 0xd8, 0xff, 0xe0], { name: 'camera-upload' });
  const png = namedBlob([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  assert.equal(await detectImageFileFormat(jpeg), 'jpeg');
  assert.equal(await detectImageFileFormat(png), 'png');
});

test('uses case-insensitive extensions when photo MIME metadata is missing', async () => {
  assert.equal(
    await detectImageFileFormat(namedBlob([], { name: 'LABEL.JPG' })),
    'jpeg',
  );
  assert.equal(
    await detectImageFileFormat(namedBlob([], { name: 'LABEL.HEIF' })),
    'heif',
  );
});

test('detects HEIC and HEIF container brands before misleading MIME metadata', async () => {
  const heic = namedBlob(ftypHeader('heic'), { type: 'image/jpeg', name: 'label.jpg' });
  const heif = namedBlob(ftypHeader('mif1'), { type: 'application/octet-stream' });

  assert.equal(await detectImageFileFormat(heic), 'heic');
  assert.equal(await detectImageFileFormat(heif), 'heif');
});

test('keeps browser-decodable JPEG input unchanged', async () => {
  const jpeg = namedBlob([0xff, 0xd8, 0xff, 0xe0], { type: 'image/jpeg' });
  let converterCalled = false;
  const result = await normalizeImageFile(jpeg, {
    heicConverter: async () => {
      converterCalled = true;
      return new Blob();
    },
  });

  assert.equal(result.blob, jpeg);
  assert.equal(result.converted, false);
  assert.equal(result.originalFormat, 'jpeg');
  assert.equal(converterCalled, false);
});

test('converts HEIC to a temporary JPEG before browser image decoding', async () => {
  const heic = namedBlob(ftypHeader('heic'), { type: 'image/heic', name: 'label.HEIC' });
  const jpeg = new Blob([[0xff, 0xd8, 0xff]], { type: 'image/jpeg' });
  const statuses = [];
  const result = await normalizeImageFile(heic, {
    onStatus: message => statuses.push(message),
    heicConverter: async options => {
      assert.equal(options.blob, heic);
      assert.equal(options.type, 'image/jpeg');
      assert.equal(options.quality, 0.94);
      return jpeg;
    },
  });

  assert.equal(result.blob, jpeg);
  assert.equal(result.converted, true);
  assert.equal(result.originalFormat, 'heic');
  assert.equal(result.outputFormat, 'jpeg');
  assert.ok(statuses.some(message => message.includes('HEIC/HEIF')));
});

test('returns actionable errors for unknown files and failed HEIF decoding', async () => {
  await assert.rejects(
    normalizeImageFile(namedBlob([1, 2, 3], { type: 'application/octet-stream' })),
    /JPG、JPEG、PNG、HEIC 或 HEIF/,
  );

  await assert.rejects(
    normalizeImageFile(namedBlob(ftypHeader('mif1')), {
      heicConverter: async () => {
        throw new Error('decoder failed');
      },
    }),
    /无法解码这张 HEIC\/HEIF 图片/,
  );
});
