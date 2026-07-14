import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const requiredPaths = [
  'nutrition-label.html',
  'nutrition-label/scanPage.js',
  'node_modules/tesseract.js/dist/tesseract.min.js',
  'node_modules/tesseract.js/dist/worker.min.js',
  'node_modules/tesseract.js-core/tesseract-core-lstm.wasm.js',
  'node_modules/cropperjs/dist/cropper.min.js',
  'node_modules/cropperjs/dist/cropper.min.css',
  'node_modules/@tesseract.js-data/eng/4.0.0/eng.traineddata.gz',
  'node_modules/@tesseract.js-data/fra/4.0.0/fra.traineddata.gz',
  'node_modules/@tesseract.js-data/chi_sim/4.0.0/chi_sim.traineddata.gz',
  'node_modules/@tesseract.js-data/chi_tra/4.0.0/chi_tra.traineddata.gz',
];

const missing = requiredPaths.filter(relativePath => !fs.existsSync(path.join(root, relativePath)));
if (missing.length) {
  console.error('Missing OCR build assets:');
  missing.forEach(relativePath => console.error(`- ${relativePath}`));
  process.exitCode = 1;
} else {
  console.log(`Static build verified: ${requiredPaths.length} OCR and UI assets are present.`);
}
