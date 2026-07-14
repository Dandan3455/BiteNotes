# Nutrition label scanning

## Architecture

The scan runs entirely in the browser. Photos are not posted to the Express server.

- `imageProcessor.js`: camera/gallery image loading, EXIF orientation handling, crop, rotation, contrast enhancement, quality hints, and optional browser barcode detection.
- `ocrEngineAdapter.js`: local Tesseract.js worker configured with `eng`, `fra`, `chi_sim`, and `chi_tra` language data.
- `ocrTextNormalizer.js`: OCR block, line, word, confidence, and bounding-box normalization plus language detection.
- `fieldAliases.js`: extensible field, basis, percentage-column, and unit aliases.
- `nutritionParser.js`: position-aware table parsing, basis separation, unit conversion, qualifiers, and optional per-100g derivation.
- `nutritionValidator.js`: negative-value checks, unit/confidence warnings, 4/4/9 comparison, kJ/kcal consistency, and image-quality hints.
- `scanPage.js`: capture, confirmation, barcode conflict, and confirmed-data save workflow.

The original image is represented by temporary object URLs only. It is released after retaking, leaving the page, or saving. Only confirmed structured data is written to `foodLibrary` in `localStorage`.

Existing custom foods remain readable as schema version 1 objects. New scans use schema version 2. Existing `records_YYYY-MM-DD` meal records are not migrated or rewritten.

## Automated coverage

Run:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Synthetic OCR lines and coordinates cover:

- English, French, English/French, Simplified Chinese, Traditional Chinese, and Chinese/English labels.
- Per serving, per 100 g, per 100 mL, per package, and simultaneous per-serving/per-100g columns.
- kJ-only and combined kJ/kcal energy values.
- `%DV`, `%VQ`, and `NRV%` exclusion, including a missing percent symbol in the OCR output.
- Decimal commas, full-width digits and punctuation, Chinese units, missing fields, `<0.5`, and `≤0.5`.
- `O/0`, `I/l/1`, `g/9`, missing decimal point indicators, and `mg/g` unit warnings.
- Blurry, low-contrast, and partial-crop warning paths.
- Legacy-food preservation, duplicate barcode rejection, explicit barcode update, and meal-record preservation.

A browser integration check also loads all four local language packs and recognizes a generated Chinese/English label with real Tesseract.js block output. It intentionally does not become a required unit test because loading about 65 MB of OCR models would make every test run slow.

## Physical device checklist

Use a temporary custom-food name and verify every detected value against the package before saving.

- English US or Canadian label: camera capture, crop, OCR, edit, save, then search the saved food.
- English/French Canadian label: confirm the two languages do not create duplicate nutrient rows.
- Simplified Chinese label: test both `每100克 + NRV%` and `每份` formats.
- Traditional Chinese label: verify `每一份量`, `本包裝含`, `公克`, and `鈉`.
- Chinese/English mixed label: verify both scripts remain readable in the OCR preview and fields.
- Weak light: check blur/contrast warnings and retry after enabling contrast enhancement.
- Reflective package: change the camera angle and verify reflections do not replace digits.
- Curved bottle: capture from farther away, crop tightly, and inspect each column.
- Tilted image: rotate and crop before OCR; verify automatic OCR rotation does not swap columns.
- Blurry image: confirm the warning appears and retake instead of accepting uncertain values.
- Incomplete crop: verify missing fields remain blank and retake with the whole table.
- Permission denied: deny camera permission, verify the message, then use gallery upload.
- Existing barcode: verify the dialog offers use existing, update existing, and cancel.

Real package images are still needed for all label types above, especially reflective wrappers, curved bottles, dense bilingual tables, and low-quality Traditional Chinese printing.

## Current limitations

- The current plain web stack has no reliable perspective-correction component. Version one provides crop, rotate, EXIF orientation correction, and contrast enhancement only.
- Browser barcode detection is optional. Unsupported browsers use manual barcode entry.
- Product name and brand are extracted only when explicitly labelled. They are never guessed.
- Camera capture outside `localhost` normally requires HTTPS and browser permission.
- Tesseract may confuse characters or lose decimal points on blur, glare, decorative fonts, or dense tables. Suspect values are lowered in confidence and require confirmation; they are not silently corrected.
