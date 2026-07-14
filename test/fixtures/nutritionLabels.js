export function cellsLine(cells, y, confidence = 94) {
  const words = cells.map(cell => ({
    text: cell.text,
    confidence: cell.confidence ?? confidence,
    bbox: { x0: cell.x, y0: y, x1: cell.x + (cell.width || Math.max(cell.text.length * 10, 40)), y1: y + 22 },
  }));
  return {
    text: words.map(word => word.text).join(' '),
    confidence,
    bbox: {
      x0: Math.min(...words.map(word => word.bbox.x0)),
      y0: y,
      x1: Math.max(...words.map(word => word.bbox.x1)),
      y1: y + 22,
    },
    words,
  };
}

export function textLine(text, y, confidence = 94) {
  return cellsLine([{ text, x: 10, width: 500 }], y, confidence);
}

export function makeOcr(lines, confidence = 93) {
  return { lines, confidence, width: 560, height: Math.max(lines.length * 30 + 20, 200) };
}

const westernRow = (label, value, y, percent = '') => cellsLine([
  { text: label, x: 12, width: 180 },
  { text: value, x: 285, width: 90 },
  ...(percent ? [{ text: percent, x: 455, width: 55 }] : []),
], y);

export const englishLabel = makeOcr([
  textLine('Nutrition Facts', 0),
  textLine('Serving Size 30 g', 30),
  cellsLine([{ text: 'Per Serving', x: 270 }, { text: '% Daily Value', x: 430 }], 60),
  westernRow('Calories', '120 kcal', 90),
  westernRow('Total Fat', '3 g', 120, '4%'),
  westernRow('Total Carbohydrate', '20 g', 150, '7%'),
  westernRow('Dietary Fiber', '2 g', 180, '7%'),
  westernRow('Sugars', '5 g', 210),
  westernRow('Protein', '5 g', 240),
  westernRow('Sodium', '180 mg', 270, '8%'),
]);

export const frenchLabel = makeOcr([
  textLine('Valeur nutritive', 0),
  textLine('Portion 40 g', 30),
  cellsLine([{ text: 'Par portion', x: 270 }, { text: '% VQ', x: 450 }], 60),
  westernRow('Calories', '160 kcal', 90),
  westernRow('Lipides', '4 g', 120, '5 %'),
  westernRow('Glucides', '25,5 g', 150, '9 %'),
  westernRow('Fibres', '3 g', 180, '11 %'),
  westernRow('Sucres', '7 g', 210),
  westernRow('Protéines', '6 g', 240),
  westernRow('Sodium', '220 mg', 270, '10 %'),
]);

export const bilingualLabel = makeOcr([
  textLine('Nutrition Facts / Valeur nutritive', 0),
  textLine('Serving Size / Portion 35 g', 30),
  cellsLine([{ text: 'Per Serving / Par portion', x: 245 }, { text: '% DV / % VQ', x: 440 }], 60),
  westernRow('Calories', '140 kcal', 90),
  westernRow('Fat / Lipides', '4 g', 120, '5%'),
  westernRow('Carbohydrate / Glucides', '22 g', 150, '8%'),
  westernRow('Protein / Protéines', '6 g', 180),
]);

export const simplifiedPer100gLabel = makeOcr([
  textLine('营养成分表', 0),
  cellsLine([{ text: '项目', x: 10 }, { text: '每100克', x: 280 }, { text: 'NRV%', x: 455 }], 30),
  cellsLine([{ text: '能量', x: 10 }, { text: '840 千焦', x: 280 }, { text: '10', x: 455 }], 60),
  cellsLine([{ text: '蛋白质', x: 10 }, { text: '5.0 g', x: 280 }, { text: '8%', x: 455 }], 90),
  cellsLine([{ text: '脂肪', x: 10 }, { text: '2 g', x: 280 }, { text: '3%', x: 455 }], 120),
  cellsLine([{ text: '碳水化合物', x: 10 }, { text: '40 g', x: 280 }, { text: '13%', x: 455 }], 150),
  cellsLine([{ text: '钠', x: 10 }, { text: '120 毫克', x: 280 }, { text: '6%', x: 455 }], 180),
]);

export const simplifiedPerServingLabel = makeOcr([
  textLine('营养成分', 0),
  textLine('每份 30克', 30),
  cellsLine([{ text: '每份', x: 285 }], 60),
  westernRow('热量', '110 千卡', 90),
  westernRow('脂肪', '3 g', 120),
  westernRow('碳水化合物', '18 g', 150),
  westernRow('蛋白质', '4 g', 180),
]);

export const traditionalLabel = makeOcr([
  textLine('營養標示', 0),
  textLine('每一份量 25公克', 30),
  textLine('本包裝含 4 份', 55),
  cellsLine([{ text: '每份', x: 285 }], 80),
  westernRow('熱量', '100 大卡', 110),
  westernRow('脂肪', '2.5 公克', 140),
  westernRow('碳水化合物', '16 公克', 170),
  westernRow('蛋白質', '4 公克', 200),
  westernRow('鈉', '90 毫克', 230),
]);

export const mixedChineseEnglishLabel = makeOcr([
  textLine('营养成分表 Nutrition Facts', 0),
  textLine('Serving Size 每份 50 g', 30),
  cellsLine([{ text: 'Per Serving 每份', x: 270 }], 60),
  westernRow('Calories 热量', '210 kcal', 90),
  westernRow('Total Fat 脂肪', '8 g', 120),
  westernRow('Carbohydrate 碳水化合物', '30 g', 150),
  westernRow('Protein 蛋白质', '7 g', 180),
]);

export const dualBasisLabel = makeOcr([
  textLine('Nutrition Facts', 0),
  textLine('Serving Size 30 g', 25),
  cellsLine([
    { text: 'Nutrient', x: 10 },
    { text: 'Per Serving', x: 230 },
    { text: 'Per 100 g', x: 370 },
    { text: '%DV', x: 490 },
  ], 55),
  cellsLine([{ text: 'Calories', x: 10 }, { text: '120 kcal', x: 245 }, { text: '400 kcal', x: 385 }], 85),
  cellsLine([{ text: 'Total Fat', x: 10 }, { text: '3 g', x: 245 }, { text: '10 g', x: 385 }, { text: '4%', x: 495 }], 115),
  cellsLine([{ text: 'Carbohydrate', x: 10 }, { text: '20 g', x: 245 }, { text: '66.7 g', x: 385 }, { text: '7%', x: 495 }], 145),
  cellsLine([{ text: 'Protein', x: 10 }, { text: '5 g', x: 245 }, { text: '16.7 g', x: 385 }], 175),
]);

export const per100mlLabel = makeOcr([
  textLine('Nutrition Facts', 0),
  cellsLine([{ text: 'Per 100 mL', x: 280 }], 30),
  westernRow('Energy', '180 kJ', 60),
  westernRow('Fat', '0 g', 90),
  westernRow('Carbohydrate', '10.5 g', 120),
  westernRow('Protein', '0.5 g', 150),
]);
