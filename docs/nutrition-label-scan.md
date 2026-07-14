# Nutrition label scanning

## Architecture

The scan runs entirely in the browser. Photos are not posted to the Express server.

- `imageFileNormalizer.js`: file-signature, MIME, and extension detection plus local HEIC/HEIF-to-JPEG conversion.
- `imageProcessor.js`: normalized image loading, EXIF orientation handling, crop, rotation, contrast enhancement, quality hints, and a lossless PNG OCR source up to 3200 px.
- `ocrEngineAdapter.js`: local Tesseract.js worker configured with `eng`, `fra`, `chi_sim`, and `chi_tra` language data, with a single-block retry for weak table extraction.
- `ocrTextNormalizer.js`: OCR block, line, word, confidence, and bounding-box normalization, visual-row reconstruction, compact token matching, and language detection.
- `fieldAliases.js`: extensible field, basis, percentage-column, and unit aliases.
- `nutritionParser.js`: position-aware table parsing, basis separation, unit conversion, qualifiers, evidence-scored `g/9` OCR correction, and optional per-100g derivation.
- `numericImagePreprocessor.js`: value-cell enlargement with white padding plus grayscale, Otsu, and local adaptive-threshold lossless PNG variants.
- `numericOcrRefiner.js`: English, Simplified Chinese, and Traditional Chinese row localization; constrained single-word/raw-line OCR; decimal and unit parsing; multi-pass consensus; and conservative value replacement.
- `nutritionValidator.js`: negative-value checks, unit/confidence warnings, 4/4/9 comparison, kJ/kcal consistency, and image-quality hints.
- `scanPage.js`: capture, full-table OCR, per-cell numeric refinement, simplified confirmation, confidence warning, serving-to-100g conversion, and confirmed-data save workflow.

The original image is represented by temporary object URLs only. It is released after retaking, leaving the page, or saving. Only confirmed structured data is written to `foodLibrary` in `localStorage`.

The confirmation page shows only the food name, a user-defined save amount, and the four core values: calories, carbohydrate, protein, and fat. Each core field contains only a numeric input and its unit; values are confirmed and stored as exact values without an equal/less-than/not-more-than selector. The OCR basis remains internal metadata and is no longer presented as a required choice. The save amount is made of a common-unit menu plus quantity, such as `g` and `24`, previewed and stored as `24g`; mass and volume values are scaled when the OCR basis supports an exact conversion, while user-selected count units remain accepted. Available units include grams, kilograms, milligrams, millilitres, litres, servings, pieces, slices, bags, packages, boxes, bottles, cans, cups, spoons, bowls, and plates. The amount spinner advances by `1`, calories by `1`, and carbohydrate, protein, and fat by `0.1`; step alignment does not reject a more precise OCR value. Per-container count is not requested. OCR confidence is presented as high, medium, or low beside the save action, with at most one generic review warning per core field. Language, brand, barcode, optional nutrients, percentage confidence, and the warning checkbox are intentionally not shown. A kJ-to-kcal conversion is displayed directly below calories, for example `432 kJ ÷ 4.184 = 103.25 kcal`.

Saving with one or more blank core values opens a review dialog with explicit return and continue actions. When calories are blank but carbohydrate, protein, and fat are all available, calories are filled with the loose 4/4/9 formula and the dialog clearly identifies the value as calculated rather than recognized by OCR. Returning without editing keeps the calculated marker, so the warning appears again on the next save attempt.

JPEG/JPG and PNG files use the browser's native decoder. HEIC/HEIF files are detected from their container header, MIME, or case-insensitive extension and converted locally to a temporary JPEG with `heic-to`/libheif before crop and OCR. The converter is loaded only when a HEIC/HEIF file is selected; the source photo is not sent to Express or a cloud service.

After multilingual full-table OCR finds nutrient labels, each located calories, carbohydrate, protein, and fat cell is recognized again. The refinement pass separates field localization from numeric recognition, uses single-word or raw-line segmentation, constrains the available characters, and compares grayscale, global-threshold, and adaptive-threshold results. A suspected terminal `g → 9` error also receives tightly right-trimmed numeric-only passes. A value is replaced only when multiple independent passes agree and the candidate passes loose serving-mass and 4/4/9 checks. Conflicting candidates remain review warnings instead of being silently guessed. Refined confidence and candidate summaries are stored with confirmed structured data; temporary cell images are discarded.

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
- Chinese and English `g → 9` cases such as `2.4g → 249`, `3.7g → 3.79`, `8g → 89`, and serving-size `30g → 309`. Corrections retain both original and corrected values.
- Blurry, low-contrast, and partial-crop warning paths.
- JPEG, PNG, HEIC, and HEIF detection, including empty or misleading MIME metadata, plus the HEIC conversion boundary.
- Simplified and Traditional Chinese characters split by OCR whitespace, and nutrient labels, values, and NRV columns emitted as separate positioned text blocks.
- Legacy-food preservation, duplicate barcode rejection at the storage-service boundary, explicit barcode update, and meal-record preservation.
- Unit-and-quantity save amounts, compatible mass/volume scaling, missing-field review, and 4/4/9 calorie calculation warnings.
- Lossless numeric-cell preprocessing, English/Simplified/Traditional row localization, decimal-comma parsing, kJ conversion, missing-value region fallback, `g/9` correction consensus, and conflict-safe retention.

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
- File formats: upload one JPG, PNG, HEIC, and HEIF file; confirm each reaches crop preview and OCR.

Real package images are still needed for all label types above, especially reflective wrappers, curved bottles, dense bilingual tables, and low-quality Traditional Chinese printing.

## Current limitations

- The current plain web stack has no reliable perspective-correction component. Version one provides crop, rotate, EXIF orientation correction, and contrast enhancement only.
- Product names are extracted only when explicitly labelled and can always be entered manually. Brands are not requested by the simplified confirmation flow.
- Camera capture outside `localhost` normally requires HTTPS and browser permission.
- Tesseract may confuse characters or lose decimal points on blur, glare, decorative fonts, or dense tables. Suspect values are lowered in confidence and require confirmation; they are not silently corrected.
- A `g/9` correction is selected only from explicit suffix candidates and scored against serving mass, the nutrition basis, repeated unit-confusion patterns, and the loose 4/4/9 energy check. Ambiguous cases remain unchanged; applied corrections are visibly marked and still require user confirmation.
- When the first OCR pass finds fewer than three core nutrients, a second single-block table pass runs automatically. This improves fragmented rows but takes additional time on difficult images.
- HEIC/HEIF decoding uses the container's primary image. Multi-image sequences and uncommon codecs may require exporting the photo as JPG or PNG; conversion metadata is not saved.
