# BiteNotes

## Local preview

This project uses a small Express server for static files and local food search.

```bash
npm install
cp .env.example .env
npm start
```

Then visit:

```text
http://localhost:3000/index.html
```

Runtime food search currently uses the local dataset only. USDA and Open Food Facts API calls are intentionally disabled for now.

## File naming notes

`scripts/buildCommonFoodsFromUsda.js` is a build-time importer for locally downloaded USDA CSV files. It does not call the USDA API at runtime.

`server/services/localFoodService.js` is the runtime local food search service used by `/api/food-search`.

`server/data/commonFoods.js` is the active runtime food dataset. The old `server/data/commonFoods.json` dataset is not used and has been removed.

## Legacy USDA dataset builder

The USDA builder is kept as an optional import tool for local experiments. It writes a JSON dataset, but that JSON output is not used by the current app unless the runtime search service is changed to read it.

Download USDA FoodData Central CSV files yourself, then put the raw CSV files here:

```text
data/usda/raw/
```

The older `server/data/raw/` folder is also supported for local development, but `data/usda/raw/` is the preferred location going forward.

The build script looks in that folder and its subfolders. You can put one combined CSV export directly in `data/usda/raw/`, or unzip separate USDA datasets into subfolders such as:

```text
data/usda/raw/foundation/food.csv
data/usda/raw/sr-legacy/food.csv
data/usda/raw/fndds/food.csv
```

Each dataset folder needs at least:

```text
food.csv
food_nutrient.csv
nutrient.csv
```

Then run:

```bash
npm run build:foods
```

The script reads only local CSV files. It does not download USDA archives, does not include Branded data, and does not call any translation API.

Edit these keyword lists to control what goes into the generated local dataset:

```text
config/includeKeywords.json
config/excludeKeywords.json
```
