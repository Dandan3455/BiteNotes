const DEFAULT_LANGUAGES = Object.freeze(['eng', 'fra', 'chi_sim', 'chi_tra']);

function pageSegmentationMode(tesseract, mode) {
  if (mode === 'single_block') return tesseract.PSM?.SINGLE_BLOCK || '6';
  if (mode === 'single_line') return tesseract.PSM?.SINGLE_LINE || '7';
  if (mode === 'single_word') return tesseract.PSM?.SINGLE_WORD || '8';
  if (mode === 'raw_line') return tesseract.PSM?.RAW_LINE || '13';
  return tesseract.PSM?.AUTO || '3';
}

export class LocalOcrEngineAdapter {
  constructor({ tesseract = globalThis.Tesseract, languages = DEFAULT_LANGUAGES } = {}) {
    this.tesseract = tesseract;
    this.languages = [...languages];
    this.worker = null;
    this.progressListener = null;
  }

  async ensureWorker(onProgress = (_message) => {}) {
    this.progressListener = onProgress;
    if (this.worker) return this.worker;
    if (!this.tesseract?.createWorker) throw new Error('本地 OCR 引擎未正确加载');

    this.worker = await this.tesseract.createWorker(this.languages, 1, {
      workerPath: '/vendor/tesseract/worker.min.js',
      corePath: '/vendor/tesseract-core',
      langPath: '/vendor/tessdata',
      cacheMethod: 'write',
      workerBlobURL: false,
      logger: message => this.progressListener?.(message),
      errorHandler: error => console.error('本地 OCR 引擎错误：', error),
    });
    await this.worker.setParameters({
      tessedit_pageseg_mode: this.tesseract.PSM?.AUTO || '3',
      preserve_interword_spaces: '1',
      user_defined_dpi: '300',
    });
    return this.worker;
  }

  async recognize(
    image,
    {
      onProgress = () => {},
      width = 0,
      height = 0,
      pageSegmentation = 'auto',
      characterWhitelist = '',
      rotateAuto = true,
      includeBlocks = true,
      rectangle = null,
    } = {},
  ) {
    const worker = await this.ensureWorker(onProgress);
    this.progressListener = onProgress;
    await worker.setParameters({
      tessedit_pageseg_mode: pageSegmentationMode(this.tesseract, pageSegmentation),
      tessedit_char_whitelist: characterWhitelist,
    });
    const result = await worker.recognize(
      image,
      {
        rotateAuto,
        ...(rectangle ? { rectangle } : {}),
      },
      { text: true, blocks: includeBlocks },
    );
    return {
      ...result.data,
      width,
      height,
      languages: [...this.languages],
    };
  }

  async cancel() {
    if (!this.worker) return;
    const worker = this.worker;
    this.worker = null;
    await worker.terminate();
  }

  async terminate() {
    await this.cancel();
  }
}

export { DEFAULT_LANGUAGES };
