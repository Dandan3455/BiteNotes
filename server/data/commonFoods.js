// BiteNotes commonFoods 自维护中文食物库
// 说明：营养数据按每 100g/100ml 记录；原型食物会在名称后标注（生）或（熟），水果和成品不标。
// 食物总数：881 种

const commonFoods = [
  {
    "id": "bitenotes_0001_米饭",
    "nameZh": "米饭",
    "nameEn": "",
    "aliasesZh": [
      "米饭",
      "主食",
      "中式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 116,
      "protein": 2.6,
      "carbs": 25,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0001",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0002_糙米饭",
    "nameZh": "糙米饭",
    "nameEn": "",
    "aliasesZh": [
      "糙米饭",
      "主食",
      "健康"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 123,
      "protein": 2.7,
      "carbs": 26,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0002",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0003_糯米饭",
    "nameZh": "糯米饭",
    "nameEn": "",
    "aliasesZh": [
      "糯米饭",
      "主食",
      "中式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 144,
      "protein": 3.1,
      "carbs": 31,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0003",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0004_蛋炒饭",
    "nameZh": "蛋炒饭",
    "nameEn": "",
    "aliasesZh": [
      "蛋炒饭",
      "主食",
      "中式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 180,
      "protein": 5.2,
      "carbs": 28,
      "fat": 5.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0004",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0005_扬州炒饭",
    "nameZh": "扬州炒饭",
    "nameEn": "",
    "aliasesZh": [
      "扬州炒饭",
      "主食",
      "中式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 6.1,
      "carbs": 30,
      "fat": 6.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0005",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0006_海鲜炒饭",
    "nameZh": "海鲜炒饭",
    "nameEn": "",
    "aliasesZh": [
      "海鲜炒饭",
      "主食",
      "中式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 175,
      "protein": 7.8,
      "carbs": 27,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0006",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0007_牛肉炒饭",
    "nameZh": "牛肉炒饭",
    "nameEn": "",
    "aliasesZh": [
      "牛肉炒饭",
      "主食",
      "中式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 205,
      "protein": 8.5,
      "carbs": 28,
      "fat": 7.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0007",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0008_叉烧炒饭",
    "nameZh": "叉烧炒饭",
    "nameEn": "",
    "aliasesZh": [
      "叉烧炒饭",
      "主食",
      "粤菜",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 9.2,
      "carbs": 29,
      "fat": 7.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0008",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0009_虾仁炒饭",
    "nameZh": "虾仁炒饭",
    "nameEn": "",
    "aliasesZh": [
      "虾仁炒饭",
      "主食",
      "中式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 168,
      "protein": 8.1,
      "carbs": 26,
      "fat": 4.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0009",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0010_泡菜炒饭",
    "nameZh": "泡菜炒饭",
    "nameEn": "",
    "aliasesZh": [
      "泡菜炒饭",
      "主食",
      "韩式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 4.8,
      "carbs": 28,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0010",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0011_石锅拌饭",
    "nameZh": "石锅拌饭",
    "nameEn": "",
    "aliasesZh": [
      "石锅拌饭",
      "主食",
      "韩式",
      "拌饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 7.5,
      "carbs": 30,
      "fat": 4.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0011",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0012_日式炒饭",
    "nameZh": "日式炒饭",
    "nameEn": "",
    "aliasesZh": [
      "日式炒饭",
      "主食",
      "日式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 175,
      "protein": 6.2,
      "carbs": 29,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0012",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0013_菠萝炒饭",
    "nameZh": "菠萝炒饭",
    "nameEn": "",
    "aliasesZh": [
      "菠萝炒饭",
      "主食",
      "泰式",
      "炒饭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 165,
      "protein": 5.5,
      "carbs": 32,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0013",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0014_面条",
    "nameZh": "面条",
    "nameEn": "",
    "aliasesZh": [
      "面条",
      "主食",
      "中式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 137,
      "protein": 4.5,
      "carbs": 28,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0014",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0015_挂面",
    "nameZh": "挂面",
    "nameEn": "",
    "aliasesZh": [
      "挂面",
      "主食",
      "中式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 138,
      "protein": 10.3,
      "carbs": 26,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0015",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0016_手擀面",
    "nameZh": "手擀面",
    "nameEn": "",
    "aliasesZh": [
      "手擀面",
      "主食",
      "中式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 145,
      "protein": 4.8,
      "carbs": 30,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0016",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0017_刀削面",
    "nameZh": "刀削面",
    "nameEn": "",
    "aliasesZh": [
      "刀削面",
      "主食",
      "山西",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 4.6,
      "carbs": 29,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0017",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0018_拉面",
    "nameZh": "拉面",
    "nameEn": "",
    "aliasesZh": [
      "拉面",
      "主食",
      "兰州",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 5.2,
      "carbs": 31,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0018",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0019_乌冬面",
    "nameZh": "乌冬面",
    "nameEn": "",
    "aliasesZh": [
      "乌冬面",
      "主食",
      "日式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 126,
      "protein": 3.5,
      "carbs": 26,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0019",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0020_荞麦面",
    "nameZh": "荞麦面",
    "nameEn": "",
    "aliasesZh": [
      "荞麦面",
      "主食",
      "日式",
      "健康",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 99,
      "protein": 5.1,
      "carbs": 21,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0020",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0021_意大利面",
    "nameZh": "意大利面",
    "nameEn": "",
    "aliasesZh": [
      "意大利面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 131,
      "protein": 5,
      "carbs": 25,
      "fat": 1.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0021",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0022_通心粉",
    "nameZh": "通心粉",
    "nameEn": "",
    "aliasesZh": [
      "通心粉",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 157,
      "protein": 5.8,
      "carbs": 31,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0022",
      "dataType": "主食"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0023_方便面",
    "nameZh": "方便面",
    "nameEn": "",
    "aliasesZh": [
      "方便面",
      "主食",
      "速食",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 473,
      "protein": 9.5,
      "carbs": 61,
      "fat": 21
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0023",
      "dataType": "主食"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0024_干拌面",
    "nameZh": "干拌面",
    "nameEn": "",
    "aliasesZh": [
      "干拌面",
      "主食",
      "中式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 8.5,
      "carbs": 42,
      "fat": 9.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0024",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0025_热干面",
    "nameZh": "热干面",
    "nameEn": "",
    "aliasesZh": [
      "热干面",
      "主食",
      "武汉",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 8.2,
      "carbs": 38,
      "fat": 7.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0025",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0026_炸酱面",
    "nameZh": "炸酱面",
    "nameEn": "",
    "aliasesZh": [
      "炸酱面",
      "主食",
      "北京",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 9.5,
      "carbs": 40,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0026",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0027_担担面",
    "nameZh": "担担面",
    "nameEn": "",
    "aliasesZh": [
      "担担面",
      "主食",
      "四川",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 10.2,
      "carbs": 42,
      "fat": 9.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0027",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0028_重庆小面",
    "nameZh": "重庆小面",
    "nameEn": "",
    "aliasesZh": [
      "重庆小面",
      "主食",
      "重庆",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 275,
      "protein": 9.8,
      "carbs": 41,
      "fat": 8.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0028",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0029_兰州拉面",
    "nameZh": "兰州拉面",
    "nameEn": "",
    "aliasesZh": [
      "兰州拉面",
      "主食",
      "兰州",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 6.5,
      "carbs": 28,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0029",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0030_日式拉面",
    "nameZh": "日式拉面",
    "nameEn": "",
    "aliasesZh": [
      "日式拉面",
      "主食",
      "日式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 8.5,
      "carbs": 32,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0030",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0031_味噌拉面",
    "nameZh": "味噌拉面",
    "nameEn": "",
    "aliasesZh": [
      "味噌拉面",
      "主食",
      "日式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 9.2,
      "carbs": 33,
      "fat": 4.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0031",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0032_豚骨拉面",
    "nameZh": "豚骨拉面",
    "nameEn": "",
    "aliasesZh": [
      "豚骨拉面",
      "主食",
      "日式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 225,
      "protein": 10.5,
      "carbs": 34,
      "fat": 6.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0032",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0033_海鲜拉面",
    "nameZh": "海鲜拉面",
    "nameEn": "",
    "aliasesZh": [
      "海鲜拉面",
      "主食",
      "日式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 175,
      "protein": 11.2,
      "carbs": 31,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0033",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0034_意大利肉酱面",
    "nameZh": "意大利肉酱面",
    "nameEn": "",
    "aliasesZh": [
      "意大利肉酱面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 9.5,
      "carbs": 28,
      "fat": 4.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0034",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0035_奶油培根意面",
    "nameZh": "奶油培根意面",
    "nameEn": "",
    "aliasesZh": [
      "奶油培根意面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 12.5,
      "carbs": 32,
      "fat": 11.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0035",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0036_海鲜意面",
    "nameZh": "海鲜意面",
    "nameEn": "",
    "aliasesZh": [
      "海鲜意面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 175,
      "protein": 11.8,
      "carbs": 27,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0036",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0037_番茄意面",
    "nameZh": "番茄意面",
    "nameEn": "",
    "aliasesZh": [
      "番茄意面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 6.8,
      "carbs": 29,
      "fat": 2.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0037",
      "dataType": "主食"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0038_青酱意面",
    "nameZh": "青酱意面",
    "nameEn": "",
    "aliasesZh": [
      "青酱意面",
      "主食",
      "西式",
      "面食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 235,
      "protein": 8.5,
      "carbs": 28,
      "fat": 11.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0038",
      "dataType": "主食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0039_鸡胸肉",
    "nameZh": "鸡胸肉（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸡胸肉",
      "肉类",
      "鸡肉",
      "低脂",
      "鸡胸肉（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0039",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0040_鸡腿肉",
    "nameZh": "鸡腿肉（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸡腿肉",
      "肉类",
      "鸡肉",
      "带皮",
      "鸡腿肉（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 226,
      "protein": 25,
      "carbs": 0,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0040",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0041_鸡翅",
    "nameZh": "鸡翅（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸡翅",
      "肉类",
      "鸡肉",
      "带皮",
      "鸡翅（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 290,
      "protein": 17,
      "carbs": 0,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0041",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0042_牛肉",
    "nameZh": "牛肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肉",
      "肉类",
      "红肉",
      "牛肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 250,
      "protein": 26,
      "carbs": 0,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0042",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0043_牛瘦肉",
    "nameZh": "牛瘦肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛瘦肉",
      "肉类",
      "牛肉",
      "低脂",
      "牛瘦肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 106,
      "protein": 20.2,
      "carbs": 0,
      "fat": 2.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0043",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0044_牛腩",
    "nameZh": "牛腩（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛腩",
      "肉类",
      "牛肉",
      "高脂",
      "牛腩（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 332,
      "protein": 17.5,
      "carbs": 0,
      "fat": 28.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0044",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0045_猪瘦肉",
    "nameZh": "猪瘦肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪瘦肉",
      "肉类",
      "猪肉",
      "低脂",
      "猪瘦肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 143,
      "protein": 26,
      "carbs": 0,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0045",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0046_猪五花肉",
    "nameZh": "猪五花肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪五花肉",
      "肉类",
      "猪肉",
      "高脂",
      "猪五花肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 349,
      "protein": 13.2,
      "carbs": 0,
      "fat": 32
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0046",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0047_羊肉",
    "nameZh": "羊肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊肉",
      "肉类",
      "红肉",
      "羊肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 203,
      "protein": 17,
      "carbs": 0,
      "fat": 14.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0047",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0048_培根",
    "nameZh": "培根",
    "nameEn": "",
    "aliasesZh": [
      "培根",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 541,
      "protein": 37,
      "carbs": 1.4,
      "fat": 42
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0048",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0049_火腿",
    "nameZh": "火腿",
    "nameEn": "",
    "aliasesZh": [
      "火腿",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 163,
      "protein": 16.3,
      "carbs": 1.3,
      "fat": 10.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0049",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0050_香肠",
    "nameZh": "香肠",
    "nameEn": "",
    "aliasesZh": [
      "香肠",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 346,
      "protein": 14.5,
      "carbs": 2.3,
      "fat": 31
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0050",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0051_腊肠",
    "nameZh": "腊肠",
    "nameEn": "",
    "aliasesZh": [
      "腊肠",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 429,
      "protein": 18,
      "carbs": 12,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0051",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0052_腊肉",
    "nameZh": "腊肉",
    "nameEn": "",
    "aliasesZh": [
      "腊肉",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 498,
      "protein": 22,
      "carbs": 2.8,
      "fat": 44
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0052",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0053_三文鱼",
    "nameZh": "三文鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "三文鱼",
      "海鲜",
      "鱼类",
      "深海",
      "三文鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0053",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0054_金枪鱼",
    "nameZh": "金枪鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "金枪鱼",
      "海鲜",
      "鱼类",
      "深海",
      "金枪鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 132,
      "protein": 28,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0054",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0055_鳕鱼",
    "nameZh": "鳕鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鳕鱼",
      "海鲜",
      "鱼类",
      "低脂",
      "鳕鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 18,
      "carbs": 0,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0055",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0056_鲈鱼",
    "nameZh": "鲈鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲈鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲈鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 100,
      "protein": 19,
      "carbs": 0,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0056",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0057_虾",
    "nameZh": "虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "虾",
      "海鲜",
      "虾类",
      "低脂",
      "虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 20,
      "carbs": 0,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0057",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0058_基围虾",
    "nameZh": "基围虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "基围虾",
      "海鲜",
      "虾类",
      "海虾",
      "基围虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 87,
      "protein": 18,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0058",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0059_螃蟹",
    "nameZh": "螃蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "螃蟹",
      "海鲜",
      "蟹类",
      "低脂",
      "螃蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0059",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0060_大闸蟹",
    "nameZh": "大闸蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "大闸蟹",
      "海鲜",
      "蟹类",
      "淡水",
      "大闸蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 103,
      "protein": 17.5,
      "carbs": 2.3,
      "fat": 2.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0060",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0061_蛤蜊",
    "nameZh": "蛤蜊（生）",
    "nameEn": "",
    "aliasesZh": [
      "蛤蜊",
      "海鲜",
      "贝类",
      "低脂",
      "蛤蜊（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 11,
      "carbs": 2.5,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0061",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0062_扇贝",
    "nameZh": "扇贝（生）",
    "nameEn": "",
    "aliasesZh": [
      "扇贝",
      "海鲜",
      "贝类",
      "低脂",
      "扇贝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 111,
      "protein": 20,
      "carbs": 2.5,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0062",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0063_生蚝",
    "nameZh": "生蚝（生）",
    "nameEn": "",
    "aliasesZh": [
      "生蚝",
      "海鲜",
      "贝类",
      "低脂",
      "生蚝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 7,
      "carbs": 3,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0063",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0064_鱿鱼",
    "nameZh": "鱿鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱿鱼",
      "海鲜",
      "头足",
      "低脂",
      "鱿鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 15.5,
      "carbs": 3.5,
      "fat": 1.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0064",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0065_菠菜",
    "nameZh": "菠菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "菠菜",
      "蔬菜",
      "叶菜",
      "绿叶",
      "菠菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0065",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0066_生菜",
    "nameZh": "生菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "生菜",
      "蔬菜",
      "叶菜",
      "生食",
      "生菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 15,
      "protein": 1.4,
      "carbs": 2.9,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0066",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0067_西兰花",
    "nameZh": "西兰花（生）",
    "nameEn": "",
    "aliasesZh": [
      "西兰花",
      "蔬菜",
      "十字花",
      "超级食物",
      "西兰花（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 2.8,
      "carbs": 7,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0067",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0068_西红柿",
    "nameZh": "西红柿（生）",
    "nameEn": "",
    "aliasesZh": [
      "西红柿",
      "蔬菜",
      "茄果",
      "红色",
      "西红柿（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0068",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0069_黄瓜",
    "nameZh": "黄瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄瓜",
      "蔬菜",
      "瓜类",
      "生食",
      "黄瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 16,
      "protein": 0.7,
      "carbs": 3.6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0069",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0070_胡萝卜",
    "nameZh": "胡萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "胡萝卜",
      "蔬菜",
      "根茎",
      "橙色",
      "胡萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 41,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0070",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0071_土豆",
    "nameZh": "土豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "土豆",
      "蔬菜",
      "健康",
      "土豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0071",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0072_茄子",
    "nameZh": "茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "茄子",
      "蔬菜",
      "茄果",
      "紫色",
      "茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0072",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0073_苹果",
    "nameZh": "苹果",
    "nameEn": "",
    "aliasesZh": [
      "苹果",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0073",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0074_香蕉",
    "nameZh": "香蕉",
    "nameEn": "",
    "aliasesZh": [
      "香蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0074",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0075_橙子",
    "nameZh": "橙子",
    "nameEn": "",
    "aliasesZh": [
      "橙子",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0075",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0076_草莓",
    "nameZh": "草莓",
    "nameEn": "",
    "aliasesZh": [
      "草莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0076",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0077_蓝莓",
    "nameZh": "蓝莓",
    "nameEn": "",
    "aliasesZh": [
      "蓝莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.7,
      "carbs": 14,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0077",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0078_西瓜",
    "nameZh": "西瓜",
    "nameEn": "",
    "aliasesZh": [
      "西瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0078",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0079_芒果",
    "nameZh": "芒果",
    "nameEn": "",
    "aliasesZh": [
      "芒果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0079",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0080_葡萄",
    "nameZh": "葡萄",
    "nameEn": "",
    "aliasesZh": [
      "葡萄",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0080",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0081_豆腐",
    "nameZh": "豆腐",
    "nameEn": "",
    "aliasesZh": [
      "豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 76,
      "protein": 8,
      "carbs": 1.9,
      "fat": 4.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0081",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0082_嫩豆腐",
    "nameZh": "嫩豆腐",
    "nameEn": "",
    "aliasesZh": [
      "嫩豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 6,
      "carbs": 1.5,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0082",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0083_老豆腐",
    "nameZh": "老豆腐",
    "nameEn": "",
    "aliasesZh": [
      "老豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 10,
      "carbs": 2,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0083",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0084_豆浆",
    "nameZh": "豆浆",
    "nameEn": "",
    "aliasesZh": [
      "豆浆",
      "豆制品",
      "饮品"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 3.6,
      "carbs": 1.8,
      "fat": 2.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0084",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0085_腐竹",
    "nameZh": "腐竹",
    "nameEn": "",
    "aliasesZh": [
      "腐竹",
      "豆制品",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 460,
      "protein": 44,
      "carbs": 22,
      "fat": 21
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0085",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0086_鸡蛋",
    "nameZh": "鸡蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋",
      "蛋类",
      "全蛋",
      "鸡蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0086",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0087_鸡蛋清",
    "nameZh": "鸡蛋清（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋清",
      "蛋类",
      "蛋白",
      "鸡蛋清（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 11,
      "carbs": 0.7,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0087",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0088_鹌鹑蛋",
    "nameZh": "鹌鹑蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "鹌鹑蛋",
      "蛋类",
      "小型",
      "鹌鹑蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 158,
      "protein": 13,
      "carbs": 0.4,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0088",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0089_牛奶",
    "nameZh": "牛奶",
    "nameEn": "",
    "aliasesZh": [
      "牛奶",
      "奶制品",
      "全脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 3.6,
      "carbs": 4.8,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0089",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0090_酸奶",
    "nameZh": "酸奶",
    "nameEn": "",
    "aliasesZh": [
      "酸奶",
      "奶制品",
      "原味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 3.5,
      "carbs": 9,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0090",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0091_奶酪",
    "nameZh": "奶酪",
    "nameEn": "",
    "aliasesZh": [
      "奶酪",
      "奶制品",
      "干酪"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 350,
      "protein": 25,
      "carbs": 1.3,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0091",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0092_黄油",
    "nameZh": "黄油",
    "nameEn": "",
    "aliasesZh": [
      "黄油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 717,
      "protein": 0.9,
      "carbs": 0.1,
      "fat": 81
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0092",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0093_奶油",
    "nameZh": "奶油",
    "nameEn": "",
    "aliasesZh": [
      "奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0093",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0094_薯片",
    "nameZh": "薯片",
    "nameEn": "",
    "aliasesZh": [
      "薯片",
      "零食",
      "土豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 536,
      "protein": 7,
      "carbs": 53,
      "fat": 35
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0094",
      "dataType": "零食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0095_巧克力",
    "nameZh": "巧克力",
    "nameEn": "",
    "aliasesZh": [
      "巧克力",
      "零食",
      "甜食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 546,
      "protein": 4.9,
      "carbs": 61,
      "fat": 31
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0095",
      "dataType": "零食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0096_饼干",
    "nameZh": "饼干",
    "nameEn": "",
    "aliasesZh": [
      "饼干",
      "零食",
      "烘焙"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 502,
      "protein": 5.5,
      "carbs": 64,
      "fat": 26
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0096",
      "dataType": "零食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0097_蛋糕",
    "nameZh": "蛋糕",
    "nameEn": "",
    "aliasesZh": [
      "蛋糕",
      "零食",
      "甜食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 371,
      "protein": 3.5,
      "carbs": 53,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0097",
      "dataType": "零食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0098_冰淇淋",
    "nameZh": "冰淇淋",
    "nameEn": "",
    "aliasesZh": [
      "冰淇淋",
      "零食",
      "冷食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 207,
      "protein": 3.5,
      "carbs": 24,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0098",
      "dataType": "零食"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0099_可乐",
    "nameZh": "可乐",
    "nameEn": "",
    "aliasesZh": [
      "可乐",
      "饮料",
      "含糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0,
      "carbs": 10.6,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0099",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0100_橙汁",
    "nameZh": "橙汁",
    "nameEn": "",
    "aliasesZh": [
      "橙汁",
      "饮料",
      "果汁"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 0.7,
      "carbs": 10.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0100",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0101_苹果汁",
    "nameZh": "苹果汁",
    "nameEn": "",
    "aliasesZh": [
      "苹果汁",
      "饮料",
      "果汁"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0101",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0102_咖啡",
    "nameZh": "咖啡",
    "nameEn": "",
    "aliasesZh": [
      "咖啡",
      "饮料",
      "无糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0102",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0103_绿茶",
    "nameZh": "绿茶",
    "nameEn": "",
    "aliasesZh": [
      "绿茶",
      "饮料",
      "无糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 1,
      "protein": 0.1,
      "carbs": 0.2,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0103",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0104_啤酒",
    "nameZh": "啤酒",
    "nameEn": "",
    "aliasesZh": [
      "啤酒",
      "饮料",
      "酒精"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 0.5,
      "carbs": 3.6,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0104",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0105_红酒",
    "nameZh": "红酒",
    "nameEn": "",
    "aliasesZh": [
      "红酒",
      "饮料",
      "酒精"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 0.1,
      "carbs": 2.6,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0105",
      "dataType": "饮料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0106_花生",
    "nameZh": "花生",
    "nameEn": "",
    "aliasesZh": [
      "花生",
      "坚果",
      "豆类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 567,
      "protein": 26,
      "carbs": 16,
      "fat": 49
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0106",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0107_核桃",
    "nameZh": "核桃",
    "nameEn": "",
    "aliasesZh": [
      "核桃",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 654,
      "protein": 15,
      "carbs": 14,
      "fat": 65
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0107",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0108_杏仁",
    "nameZh": "杏仁",
    "nameEn": "",
    "aliasesZh": [
      "杏仁",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 579,
      "protein": 21,
      "carbs": 22,
      "fat": 50
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0108",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0109_腰果",
    "nameZh": "腰果",
    "nameEn": "",
    "aliasesZh": [
      "腰果",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 553,
      "protein": 18,
      "carbs": 30,
      "fat": 44
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0109",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0110_开心果",
    "nameZh": "开心果",
    "nameEn": "",
    "aliasesZh": [
      "开心果",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 560,
      "protein": 20,
      "carbs": 28,
      "fat": 45
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0110",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0111_榛子",
    "nameZh": "榛子",
    "nameEn": "",
    "aliasesZh": [
      "榛子",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 628,
      "protein": 15,
      "carbs": 17,
      "fat": 61
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0111",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0112_松子",
    "nameZh": "松子",
    "nameEn": "",
    "aliasesZh": [
      "松子",
      "坚果",
      "树坚果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 673,
      "protein": 14,
      "carbs": 13,
      "fat": 68
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0112",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0113_瓜子",
    "nameZh": "瓜子",
    "nameEn": "",
    "aliasesZh": [
      "瓜子",
      "坚果",
      "种子"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 584,
      "protein": 21,
      "carbs": 20,
      "fat": 51
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0113",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0114_芝麻",
    "nameZh": "芝麻",
    "nameEn": "",
    "aliasesZh": [
      "芝麻",
      "坚果",
      "种子"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 573,
      "protein": 18,
      "carbs": 23,
      "fat": 50
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0114",
      "dataType": "坚果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0115_盐",
    "nameZh": "盐",
    "nameEn": "",
    "aliasesZh": [
      "盐",
      "调料",
      "咸味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0115",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0116_糖",
    "nameZh": "糖",
    "nameEn": "",
    "aliasesZh": [
      "糖",
      "调料",
      "甜味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 400,
      "protein": 0,
      "carbs": 100,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0116",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0117_酱油",
    "nameZh": "酱油",
    "nameEn": "",
    "aliasesZh": [
      "酱油",
      "调料",
      "咸味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 5.6,
      "carbs": 9,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0117",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0118_醋",
    "nameZh": "醋",
    "nameEn": "",
    "aliasesZh": [
      "醋",
      "调料",
      "酸味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 0.3,
      "carbs": 0.9,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0118",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0119_料酒",
    "nameZh": "料酒",
    "nameEn": "",
    "aliasesZh": [
      "料酒",
      "调料",
      "去腥"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 0.3,
      "carbs": 0.5,
      "fat": 0
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0119",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0120_蚝油",
    "nameZh": "蚝油",
    "nameEn": "",
    "aliasesZh": [
      "蚝油",
      "调料",
      "鲜味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 114,
      "protein": 2.2,
      "carbs": 22,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0120",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0121_番茄酱",
    "nameZh": "番茄酱",
    "nameEn": "",
    "aliasesZh": [
      "番茄酱",
      "调料",
      "酸甜"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 112,
      "protein": 1.2,
      "carbs": 26,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0121",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0122_沙拉酱",
    "nameZh": "沙拉酱",
    "nameEn": "",
    "aliasesZh": [
      "沙拉酱",
      "调料",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 680,
      "protein": 1,
      "carbs": 3,
      "fat": 75
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0122",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0123_芝麻酱",
    "nameZh": "芝麻酱",
    "nameEn": "",
    "aliasesZh": [
      "芝麻酱",
      "调料",
      "香味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 595,
      "protein": 17,
      "carbs": 22,
      "fat": 54
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0123",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0124_花生酱",
    "nameZh": "花生酱",
    "nameEn": "",
    "aliasesZh": [
      "花生酱",
      "调料",
      "香味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 598,
      "protein": 25,
      "carbs": 22,
      "fat": 50
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0124",
      "dataType": "调料"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0125_猪里脊",
    "nameZh": "猪里脊（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪里脊",
      "肉类",
      "猪肉",
      "瘦肉",
      "猪里脊（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 153,
      "protein": 22,
      "carbs": 0,
      "fat": 6.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0125",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0126_猪排骨",
    "nameZh": "猪排骨（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪排骨",
      "肉类",
      "猪肉",
      "骨头",
      "猪排骨（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 278,
      "protein": 16.7,
      "carbs": 0,
      "fat": 23
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0126",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0127_猪蹄",
    "nameZh": "猪蹄（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪蹄",
      "肉类",
      "猪肉",
      "胶原蛋白",
      "猪蹄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 260,
      "protein": 23.6,
      "carbs": 0,
      "fat": 18.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0127",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0128_猪耳朵",
    "nameZh": "猪耳朵（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪耳朵",
      "肉类",
      "猪肉",
      "卤味",
      "猪耳朵（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 165,
      "protein": 19.1,
      "carbs": 0,
      "fat": 9.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0128",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0129_猪肝",
    "nameZh": "猪肝（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪肝",
      "肉类",
      "猪肉",
      "内脏",
      "猪肝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 129,
      "protein": 19.3,
      "carbs": 5,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0129",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0130_猪肚",
    "nameZh": "猪肚（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪肚",
      "肉类",
      "猪肉",
      "内脏",
      "猪肚（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 15.2,
      "carbs": 0,
      "fat": 3.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0130",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0131_猪大肠",
    "nameZh": "猪大肠（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪大肠",
      "肉类",
      "猪肉",
      "内脏",
      "猪大肠（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 182,
      "protein": 6.9,
      "carbs": 0,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0131",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0132_猪血",
    "nameZh": "猪血（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪血",
      "肉类",
      "猪肉",
      "内脏",
      "猪血（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 12.2,
      "carbs": 0.9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0132",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0133_猪舌头",
    "nameZh": "猪舌头（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪舌头",
      "肉类",
      "猪肉",
      "卤味",
      "猪舌头（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 225,
      "protein": 16.3,
      "carbs": 0.7,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0133",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0134_猪尾巴",
    "nameZh": "猪尾巴（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪尾巴",
      "肉类",
      "猪肉",
      "卤味",
      "猪尾巴（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 286,
      "protein": 18.5,
      "carbs": 0,
      "fat": 23.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0134",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0135_午餐肉",
    "nameZh": "午餐肉",
    "nameEn": "",
    "aliasesZh": [
      "午餐肉",
      "肉类",
      "猪肉",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 315,
      "protein": 13,
      "carbs": 5,
      "fat": 26
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0135",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0136_肉脯",
    "nameZh": "肉脯",
    "nameEn": "",
    "aliasesZh": [
      "肉脯",
      "肉类",
      "猪肉",
      "零食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 378,
      "protein": 28.5,
      "carbs": 25,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0136",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0137_肉松",
    "nameZh": "肉松",
    "nameEn": "",
    "aliasesZh": [
      "肉松",
      "肉类",
      "猪肉",
      "零食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 396,
      "protein": 25.5,
      "carbs": 18,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0137",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0138_牛排",
    "nameZh": "牛排（熟）",
    "nameEn": "",
    "aliasesZh": [
      "牛排",
      "肉类",
      "牛肉",
      "西餐",
      "牛排（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 271,
      "protein": 26,
      "carbs": 0,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0138",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0139_菲力牛排",
    "nameZh": "菲力牛排（熟）",
    "nameEn": "",
    "aliasesZh": [
      "菲力牛排",
      "肉类",
      "牛肉",
      "西餐",
      "菲力牛排（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 202,
      "protein": 26,
      "carbs": 0,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0139",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0140_西冷牛排",
    "nameZh": "西冷牛排（熟）",
    "nameEn": "",
    "aliasesZh": [
      "西冷牛排",
      "肉类",
      "牛肉",
      "西餐",
      "西冷牛排（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 251,
      "protein": 26,
      "carbs": 0,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0140",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0141_眼肉牛排",
    "nameZh": "眼肉牛排（熟）",
    "nameEn": "",
    "aliasesZh": [
      "眼肉牛排",
      "肉类",
      "牛肉",
      "西餐",
      "眼肉牛排（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 291,
      "protein": 25,
      "carbs": 0,
      "fat": 21
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0141",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0142_t骨牛排",
    "nameZh": "T骨牛排（熟）",
    "nameEn": "",
    "aliasesZh": [
      "T骨牛排",
      "肉类",
      "牛肉",
      "西餐",
      "T骨牛排（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 258,
      "protein": 24,
      "carbs": 0,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0142",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0143_牛腱子",
    "nameZh": "牛腱子（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛腱子",
      "肉类",
      "牛肉",
      "瘦肉",
      "牛腱子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 122,
      "protein": 23.5,
      "carbs": 0,
      "fat": 2.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0143",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0144_牛舌",
    "nameZh": "牛舌（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛舌",
      "肉类",
      "牛肉",
      "卤味",
      "牛舌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 196,
      "protein": 17.5,
      "carbs": 2.8,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0144",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0145_牛肚",
    "nameZh": "牛肚（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肚",
      "肉类",
      "牛肉",
      "内脏",
      "牛肚（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 14.5,
      "carbs": 0,
      "fat": 1.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0145",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0146_牛百叶",
    "nameZh": "牛百叶（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛百叶",
      "肉类",
      "牛肉",
      "内脏",
      "牛百叶（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 70,
      "protein": 14.4,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0146",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0147_牛肝",
    "nameZh": "牛肝（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肝",
      "肉类",
      "牛肉",
      "内脏",
      "牛肝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 125,
      "protein": 19.8,
      "carbs": 5.1,
      "fat": 3.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0147",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0148_牛尾",
    "nameZh": "牛尾（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛尾",
      "肉类",
      "牛肉",
      "炖汤",
      "牛尾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 282,
      "protein": 19.5,
      "carbs": 0,
      "fat": 22.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0148",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0149_肥牛卷",
    "nameZh": "肥牛卷（生）",
    "nameEn": "",
    "aliasesZh": [
      "肥牛卷",
      "肉类",
      "牛肉",
      "火锅",
      "肥牛卷（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 267,
      "protein": 17.8,
      "carbs": 0,
      "fat": 21.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0149",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0150_牛肉片",
    "nameZh": "牛肉片（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肉片",
      "肉类",
      "牛肉",
      "火锅",
      "牛肉片（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 250,
      "protein": 26,
      "carbs": 0,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0150",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0151_牛肉干",
    "nameZh": "牛肉干（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肉干",
      "肉类",
      "牛肉",
      "零食",
      "牛肉干（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 550,
      "protein": 45,
      "carbs": 2.5,
      "fat": 40
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0151",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0152_酱牛肉",
    "nameZh": "酱牛肉",
    "nameEn": "",
    "aliasesZh": [
      "酱牛肉",
      "肉类",
      "牛肉",
      "卤味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 225,
      "protein": 32,
      "carbs": 3.5,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0152",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0153_卤牛肉",
    "nameZh": "卤牛肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "卤牛肉",
      "肉类",
      "牛肉",
      "卤味",
      "卤牛肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 31,
      "carbs": 2.8,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0153",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0154_牛排肉",
    "nameZh": "牛排肉（熟）",
    "nameEn": "",
    "aliasesZh": [
      "牛排肉",
      "肉类",
      "牛肉",
      "西餐",
      "牛排肉（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 242,
      "protein": 24,
      "carbs": 0,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0154",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0155_羊腿肉",
    "nameZh": "羊腿肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊腿肉",
      "肉类",
      "羊肉",
      "瘦肉",
      "羊腿肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 178,
      "protein": 19.5,
      "carbs": 0,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0155",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0156_羊排",
    "nameZh": "羊排（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊排",
      "肉类",
      "羊肉",
      "烧烤",
      "羊排（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 16.8,
      "carbs": 0,
      "fat": 28.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0156",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0157_羊蝎子",
    "nameZh": "羊蝎子（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊蝎子",
      "肉类",
      "羊肉",
      "火锅",
      "羊蝎子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 20.5,
      "carbs": 0,
      "fat": 11.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0157",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0158_羊杂",
    "nameZh": "羊杂（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊杂",
      "肉类",
      "羊肉",
      "内脏",
      "羊杂（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 18.5,
      "carbs": 2.5,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0158",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0159_羊肉串",
    "nameZh": "羊肉串",
    "nameEn": "",
    "aliasesZh": [
      "羊肉串",
      "肉类",
      "羊肉",
      "烧烤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 18.5,
      "carbs": 2.8,
      "fat": 22.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0159",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0160_烤全羊",
    "nameZh": "烤全羊",
    "nameEn": "",
    "aliasesZh": [
      "烤全羊",
      "肉类",
      "羊肉",
      "烧烤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 298,
      "protein": 19.5,
      "carbs": 0,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0160",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0161_手抓羊肉",
    "nameZh": "手抓羊肉",
    "nameEn": "",
    "aliasesZh": [
      "手抓羊肉",
      "肉类",
      "羊肉",
      "西北"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 275,
      "protein": 18.8,
      "carbs": 0,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0161",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0162_涮羊肉",
    "nameZh": "涮羊肉",
    "nameEn": "",
    "aliasesZh": [
      "涮羊肉",
      "肉类",
      "羊肉",
      "火锅"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 198,
      "protein": 19.5,
      "carbs": 0,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0162",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0163_羊肉汤",
    "nameZh": "羊肉汤",
    "nameEn": "",
    "aliasesZh": [
      "羊肉汤",
      "肉类",
      "羊肉",
      "汤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 11.5,
      "carbs": 1.5,
      "fat": 4.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0163",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0164_羊杂汤",
    "nameZh": "羊杂汤",
    "nameEn": "",
    "aliasesZh": [
      "羊杂汤",
      "肉类",
      "羊肉",
      "汤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 115,
      "protein": 12.5,
      "carbs": 2.8,
      "fat": 6.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0164",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0165_鸡爪",
    "nameZh": "鸡爪（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡爪",
      "肉类",
      "鸡肉",
      "胶原蛋白",
      "鸡爪（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 19.4,
      "carbs": 0,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0165",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0166_鸡胗",
    "nameZh": "鸡胗（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡胗",
      "肉类",
      "鸡肉",
      "内脏",
      "鸡胗（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 94,
      "protein": 17.5,
      "carbs": 1.4,
      "fat": 2.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0166",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0167_鸡心",
    "nameZh": "鸡心（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡心",
      "肉类",
      "鸡肉",
      "内脏",
      "鸡心（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 153,
      "protein": 15.6,
      "carbs": 0.8,
      "fat": 10.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0167",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0168_鸡肝",
    "nameZh": "鸡肝（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡肝",
      "肉类",
      "鸡肉",
      "内脏",
      "鸡肝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 119,
      "protein": 16.8,
      "carbs": 0.9,
      "fat": 5.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0168",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0169_鸡皮",
    "nameZh": "鸡皮（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡皮",
      "肉类",
      "鸡肉",
      "高脂",
      "鸡皮（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 454,
      "protein": 13,
      "carbs": 0,
      "fat": 44
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0169",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0170_整鸡",
    "nameZh": "整鸡（生）",
    "nameEn": "",
    "aliasesZh": [
      "整鸡",
      "肉类",
      "鸡肉",
      "全鸡",
      "整鸡（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 19,
      "carbs": 0,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0170",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0171_火鸡肉",
    "nameZh": "火鸡肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "火鸡肉",
      "肉类",
      "禽肉",
      "低脂",
      "火鸡肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 135,
      "protein": 30,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0171",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0172_火鸡胸肉",
    "nameZh": "火鸡胸肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "火鸡胸肉",
      "肉类",
      "禽肉",
      "低脂",
      "火鸡胸肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 104,
      "protein": 24,
      "carbs": 0,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0172",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0173_鸡腿",
    "nameZh": "鸡腿（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸡腿",
      "肉类",
      "鸡肉",
      "带皮",
      "鸡腿（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 226,
      "protein": 25,
      "carbs": 0,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0173",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0174_鸡柳",
    "nameZh": "鸡柳（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡柳",
      "肉类",
      "鸡肉",
      "瘦肉",
      "鸡柳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 26,
      "carbs": 0,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0174",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0175_鸡块",
    "nameZh": "鸡块（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡块",
      "肉类",
      "鸡肉",
      "快餐",
      "鸡块（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 292,
      "protein": 15,
      "carbs": 16,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0175",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0176_炸鸡",
    "nameZh": "炸鸡",
    "nameEn": "",
    "aliasesZh": [
      "炸鸡",
      "肉类",
      "鸡肉",
      "油炸"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 320,
      "protein": 17,
      "carbs": 10,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0176",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0177_烤鸡",
    "nameZh": "烤鸡",
    "nameEn": "",
    "aliasesZh": [
      "烤鸡",
      "肉类",
      "鸡肉",
      "烤制"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 239,
      "protein": 22,
      "carbs": 0,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0177",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0178_白切鸡",
    "nameZh": "白切鸡",
    "nameEn": "",
    "aliasesZh": [
      "白切鸡",
      "肉类",
      "粤菜",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 21,
      "carbs": 0,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0178",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0179_盐焗鸡",
    "nameZh": "盐焗鸡",
    "nameEn": "",
    "aliasesZh": [
      "盐焗鸡",
      "肉类",
      "粤菜",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 225,
      "protein": 20,
      "carbs": 1.5,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0179",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0180_口水鸡",
    "nameZh": "口水鸡",
    "nameEn": "",
    "aliasesZh": [
      "口水鸡",
      "肉类",
      "川菜",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 20,
      "carbs": 3.5,
      "fat": 19.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0180",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0181_宫保鸡丁",
    "nameZh": "宫保鸡丁",
    "nameEn": "",
    "aliasesZh": [
      "宫保鸡丁",
      "肉类",
      "川菜",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 18,
      "carbs": 6.5,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0181",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0182_可乐鸡翅",
    "nameZh": "可乐鸡翅",
    "nameEn": "",
    "aliasesZh": [
      "可乐鸡翅",
      "肉类",
      "家常菜",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 16,
      "carbs": 12,
      "fat": 19.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0182",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0183_奥尔良鸡翅",
    "nameZh": "奥尔良鸡翅",
    "nameEn": "",
    "aliasesZh": [
      "奥尔良鸡翅",
      "肉类",
      "西式",
      "鸡肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 18,
      "carbs": 6,
      "fat": 18.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0183",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0184_鸭肉",
    "nameZh": "鸭肉（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸭肉",
      "肉类",
      "带皮",
      "鸭肉（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 337,
      "protein": 16,
      "carbs": 0,
      "fat": 30
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0184",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0185_鸭胸肉",
    "nameZh": "鸭胸肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭胸肉",
      "肉类",
      "鸭肉",
      "去皮",
      "鸭胸肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 123,
      "protein": 22,
      "carbs": 0,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0185",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0186_鸭腿",
    "nameZh": "鸭腿（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸭腿",
      "肉类",
      "鸭肉",
      "带皮",
      "鸭腿（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 19,
      "carbs": 0,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0186",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0187_鸭翅",
    "nameZh": "鸭翅（熟）",
    "nameEn": "",
    "aliasesZh": [
      "鸭翅",
      "肉类",
      "鸭肉",
      "带皮",
      "鸭翅（熟）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 268,
      "protein": 16.5,
      "carbs": 0,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0187",
      "dataType": "肉类"
    },
    "state": "熟重"
  },
  {
    "id": "bitenotes_0188_鸭脖",
    "nameZh": "鸭脖（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭脖",
      "肉类",
      "鸭肉",
      "零食",
      "鸭脖（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 178,
      "protein": 20,
      "carbs": 2.5,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0188",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0189_鸭舌",
    "nameZh": "鸭舌（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭舌",
      "肉类",
      "鸭肉",
      "卤味",
      "鸭舌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 17,
      "carbs": 0.5,
      "fat": 19.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0189",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0190_鸭肠",
    "nameZh": "鸭肠（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭肠",
      "肉类",
      "鸭肉",
      "内脏",
      "鸭肠（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 14,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0190",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0191_鸭血",
    "nameZh": "鸭血（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭血",
      "肉类",
      "鸭肉",
      "内脏",
      "鸭血（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 13,
      "carbs": 0.9,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0191",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0192_北京烤鸭",
    "nameZh": "北京烤鸭",
    "nameEn": "",
    "aliasesZh": [
      "北京烤鸭",
      "肉类",
      "北京",
      "烤鸭"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 337,
      "protein": 19,
      "carbs": 3,
      "fat": 28
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0192",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0193_盐水鸭",
    "nameZh": "盐水鸭",
    "nameEn": "",
    "aliasesZh": [
      "盐水鸭",
      "肉类",
      "南京",
      "鸭肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 20,
      "carbs": 0.5,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0193",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0194_酱鸭",
    "nameZh": "酱鸭",
    "nameEn": "",
    "aliasesZh": [
      "酱鸭",
      "肉类",
      "中式",
      "鸭肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 18.5,
      "carbs": 4.5,
      "fat": 25
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0194",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0195_板鸭",
    "nameZh": "板鸭",
    "nameEn": "",
    "aliasesZh": [
      "板鸭",
      "肉类",
      "中式",
      "鸭肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 365,
      "protein": 20,
      "carbs": 2,
      "fat": 30
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0195",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0196_卤鸭",
    "nameZh": "卤鸭",
    "nameEn": "",
    "aliasesZh": [
      "卤鸭",
      "肉类",
      "中式",
      "鸭肉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 295,
      "protein": 19.5,
      "carbs": 2.8,
      "fat": 22.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0196",
      "dataType": "肉类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0197_鸭架",
    "nameZh": "鸭架（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸭架",
      "肉类",
      "鸭肉",
      "骨头",
      "鸭架（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 198,
      "protein": 18,
      "carbs": 0,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0197",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0198_兔肉",
    "nameZh": "兔肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "兔肉",
      "肉类",
      "低脂",
      "兔肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 102,
      "protein": 21,
      "carbs": 0,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0198",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0199_驴肉",
    "nameZh": "驴肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "驴肉",
      "肉类",
      "低脂",
      "驴肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 116,
      "protein": 21.5,
      "carbs": 0,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0199",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0200_鹅肉",
    "nameZh": "鹅肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "鹅肉",
      "肉类",
      "高脂",
      "鹅肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 371,
      "protein": 15,
      "carbs": 0,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0200",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0201_鸽子肉",
    "nameZh": "鸽子肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸽子肉",
      "肉类",
      "禽肉",
      "瘦肉",
      "鸽子肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 21,
      "carbs": 0,
      "fat": 5.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0201",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0202_鹌鹑肉",
    "nameZh": "鹌鹑肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "鹌鹑肉",
      "肉类",
      "禽肉",
      "瘦肉",
      "鹌鹑肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 134,
      "protein": 20,
      "carbs": 0,
      "fat": 5.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0202",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0203_牛蛙",
    "nameZh": "牛蛙（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛蛙",
      "肉类",
      "蛙肉",
      "低脂",
      "牛蛙（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 81,
      "protein": 16,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0203",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0204_田鸡",
    "nameZh": "田鸡（生）",
    "nameEn": "",
    "aliasesZh": [
      "田鸡",
      "肉类",
      "蛙肉",
      "低脂",
      "田鸡（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 15.5,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0204",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0205_鸵鸟肉",
    "nameZh": "鸵鸟肉（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸵鸟肉",
      "肉类",
      "禽肉",
      "低脂",
      "鸵鸟肉（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 116,
      "protein": 21.5,
      "carbs": 0,
      "fat": 2.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0205",
      "dataType": "肉类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0206_鲫鱼",
    "nameZh": "鲫鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲫鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲫鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 108,
      "protein": 17,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0206",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0207_鲤鱼",
    "nameZh": "鲤鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲤鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲤鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 127,
      "protein": 17.5,
      "carbs": 0,
      "fat": 5.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0207",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0208_草鱼",
    "nameZh": "草鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "草鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "草鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 113,
      "protein": 16.5,
      "carbs": 0,
      "fat": 5.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0208",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0209_鲢鱼",
    "nameZh": "鲢鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲢鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲢鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 104,
      "protein": 17,
      "carbs": 0,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0209",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0210_鳙鱼",
    "nameZh": "鳙鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鳙鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鳙鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 100,
      "protein": 16,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0210",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0211_带鱼",
    "nameZh": "带鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "带鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "带鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 127,
      "protein": 17.5,
      "carbs": 0,
      "fat": 4.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0211",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0212_黄花鱼",
    "nameZh": "黄花鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄花鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "黄花鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 17,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0212",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0213_鲳鱼",
    "nameZh": "鲳鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲳鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "鲳鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 18.5,
      "carbs": 0,
      "fat": 7.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0213",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0214_比目鱼",
    "nameZh": "比目鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "比目鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "比目鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 91,
      "protein": 18,
      "carbs": 0,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0214",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0215_多宝鱼",
    "nameZh": "多宝鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "多宝鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "多宝鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 18,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0215",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0216_石斑鱼",
    "nameZh": "石斑鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "石斑鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "石斑鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0216",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0217_龙利鱼",
    "nameZh": "龙利鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "龙利鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "龙利鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 18,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0217",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0218_鲷鱼",
    "nameZh": "鲷鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲷鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "鲷鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 105,
      "protein": 20,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0218",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0219_秋刀鱼",
    "nameZh": "秋刀鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "秋刀鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "秋刀鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 139,
      "protein": 18,
      "carbs": 0,
      "fat": 7.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0219",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0220_鳗鱼",
    "nameZh": "鳗鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鳗鱼",
      "海鲜",
      "鱼类",
      "高脂",
      "鳗鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 236,
      "protein": 18.5,
      "carbs": 0,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0220",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0221_鳝鱼",
    "nameZh": "鳝鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鳝鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鳝鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 89,
      "protein": 18,
      "carbs": 1.2,
      "fat": 1.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0221",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0222_泥鳅",
    "nameZh": "泥鳅（生）",
    "nameEn": "",
    "aliasesZh": [
      "泥鳅",
      "海鲜",
      "鱼类",
      "淡水",
      "泥鳅（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 96,
      "protein": 17,
      "carbs": 1.5,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0222",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0223_黄辣丁",
    "nameZh": "黄辣丁（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄辣丁",
      "海鲜",
      "鱼类",
      "淡水",
      "黄辣丁（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 16,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0223",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0224_罗非鱼",
    "nameZh": "罗非鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "罗非鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "罗非鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 96,
      "protein": 20,
      "carbs": 0,
      "fat": 1.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0224",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0225_黑鱼",
    "nameZh": "黑鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "黑鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "黑鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 19,
      "carbs": 0,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0225",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0226_鲶鱼",
    "nameZh": "鲶鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲶鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲶鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 105,
      "protein": 17,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0226",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0227_鲟鱼",
    "nameZh": "鲟鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲟鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "鲟鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 135,
      "protein": 20,
      "carbs": 0,
      "fat": 5.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0227",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0228_青鱼",
    "nameZh": "青鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "青鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "青鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 118,
      "protein": 20,
      "carbs": 0,
      "fat": 4.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0228",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0229_胖头鱼",
    "nameZh": "胖头鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "胖头鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "胖头鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 100,
      "protein": 15.5,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0229",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0230_鲅鱼",
    "nameZh": "鲅鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲅鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "鲅鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 122,
      "protein": 20,
      "carbs": 0,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0230",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0231_沙丁鱼",
    "nameZh": "沙丁鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "沙丁鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "沙丁鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 208,
      "protein": 25,
      "carbs": 0,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0231",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0232_凤尾鱼",
    "nameZh": "凤尾鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "凤尾鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "凤尾鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 217,
      "protein": 22,
      "carbs": 0,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0232",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0233_银鱼",
    "nameZh": "银鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "银鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "银鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 105,
      "protein": 17,
      "carbs": 0,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0233",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0234_白鱼",
    "nameZh": "白鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "白鱼",
      "海鲜",
      "鱼类",
      "淡水",
      "白鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 108,
      "protein": 19,
      "carbs": 0,
      "fat": 3.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0234",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0235_马哈鱼",
    "nameZh": "马哈鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "马哈鱼",
      "海鲜",
      "鱼类",
      "深海",
      "马哈鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 20,
      "carbs": 0,
      "fat": 6.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0235",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0236_北极红点鲑",
    "nameZh": "北极红点鲑（生）",
    "nameEn": "",
    "aliasesZh": [
      "北极红点鲑",
      "海鲜",
      "鱼类",
      "深海",
      "北极红点鲑（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 162,
      "protein": 20,
      "carbs": 0,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0236",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0237_青花鱼",
    "nameZh": "青花鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "青花鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "青花鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 139,
      "protein": 19,
      "carbs": 0,
      "fat": 7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0237",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0238_马鲛鱼",
    "nameZh": "马鲛鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "马鲛鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "马鲛鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 125,
      "protein": 21,
      "carbs": 0,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0238",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0239_鲐鱼",
    "nameZh": "鲐鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲐鱼",
      "海鲜",
      "鱼类",
      "海鱼",
      "鲐鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 18,
      "carbs": 0,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0239",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0240_鮟鱇鱼",
    "nameZh": "鮟鱇鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鮟鱇鱼",
      "海鲜",
      "鱼类",
      "深海",
      "鮟鱇鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 76,
      "protein": 16,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0240",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0241_安康鱼",
    "nameZh": "安康鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "安康鱼",
      "海鲜",
      "鱼类",
      "深海",
      "安康鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 76,
      "protein": 16,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0241",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0242_对虾",
    "nameZh": "对虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "对虾",
      "海鲜",
      "虾类",
      "海虾",
      "对虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 18.5,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0242",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0243_明虾",
    "nameZh": "明虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "明虾",
      "海鲜",
      "虾类",
      "海虾",
      "明虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 18.5,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0243",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0244_北极甜虾",
    "nameZh": "北极甜虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "北极甜虾",
      "海鲜",
      "虾类",
      "海虾",
      "北极甜虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 20,
      "carbs": 0,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0244",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0245_小龙虾",
    "nameZh": "小龙虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "小龙虾",
      "海鲜",
      "虾类",
      "淡水",
      "小龙虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 90,
      "protein": 14,
      "carbs": 1,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0245",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0246_皮皮虾",
    "nameZh": "皮皮虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "皮皮虾",
      "海鲜",
      "虾类",
      "海虾",
      "皮皮虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 16,
      "carbs": 1,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0246",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0247_龙虾",
    "nameZh": "龙虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "龙虾",
      "海鲜",
      "虾类",
      "海虾",
      "龙虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 89,
      "protein": 19,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0247",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0248_波士顿龙虾",
    "nameZh": "波士顿龙虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "波士顿龙虾",
      "海鲜",
      "虾类",
      "海虾",
      "波士顿龙虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 77,
      "protein": 16,
      "carbs": 0.5,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0248",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0249_阿根廷红虾",
    "nameZh": "阿根廷红虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "阿根廷红虾",
      "海鲜",
      "虾类",
      "海虾",
      "阿根廷红虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 87,
      "protein": 19,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0249",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0250_白虾",
    "nameZh": "白虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "白虾",
      "海鲜",
      "虾类",
      "海虾",
      "白虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 18,
      "carbs": 0,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0250",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0251_虎虾",
    "nameZh": "虎虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "虎虾",
      "海鲜",
      "虾类",
      "海虾",
      "虎虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 99,
      "protein": 20,
      "carbs": 0,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0251",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0252_黑虎虾",
    "nameZh": "黑虎虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "黑虎虾",
      "海鲜",
      "虾类",
      "海虾",
      "黑虎虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 99,
      "protein": 20,
      "carbs": 0,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0252",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0253_河虾",
    "nameZh": "河虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "河虾",
      "海鲜",
      "虾类",
      "淡水",
      "河虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 81,
      "protein": 16,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0253",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0254_青虾",
    "nameZh": "青虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "青虾",
      "海鲜",
      "虾类",
      "淡水",
      "青虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 17,
      "carbs": 0,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0254",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0255_草虾",
    "nameZh": "草虾（生）",
    "nameEn": "",
    "aliasesZh": [
      "草虾",
      "海鲜",
      "虾类",
      "淡水",
      "草虾（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0255",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0256_虾仁",
    "nameZh": "虾仁（生）",
    "nameEn": "",
    "aliasesZh": [
      "虾仁",
      "海鲜",
      "虾类",
      "低脂",
      "虾仁（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 11,
      "carbs": 0,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0256",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0257_虾米",
    "nameZh": "虾米",
    "nameEn": "",
    "aliasesZh": [
      "虾米",
      "海鲜",
      "虾类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 43,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0257",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0258_虾皮",
    "nameZh": "虾皮",
    "nameEn": "",
    "aliasesZh": [
      "虾皮",
      "海鲜",
      "虾类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 153,
      "protein": 30,
      "carbs": 2.5,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0258",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0259_蟹",
    "nameZh": "蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹",
      "海鲜",
      "蟹类",
      "低脂",
      "蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0259",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0260_梭子蟹",
    "nameZh": "梭子蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "梭子蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "梭子蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0260",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0261_花蟹",
    "nameZh": "花蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "花蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "花蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 90,
      "protein": 18,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0261",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0262_青蟹",
    "nameZh": "青蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "青蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "青蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 19,
      "carbs": 0,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0262",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0263_面包蟹",
    "nameZh": "面包蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "面包蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "面包蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 18,
      "carbs": 0,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0263",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0264_帝王蟹",
    "nameZh": "帝王蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "帝王蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "帝王蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0264",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0265_雪蟹",
    "nameZh": "雪蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "雪蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "雪蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 90,
      "protein": 19,
      "carbs": 0,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0265",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0266_毛蟹",
    "nameZh": "毛蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "毛蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "毛蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 18,
      "carbs": 1.5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0266",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0267_珍宝蟹",
    "nameZh": "珍宝蟹（生）",
    "nameEn": "",
    "aliasesZh": [
      "珍宝蟹",
      "海鲜",
      "蟹类",
      "海蟹",
      "珍宝蟹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 19,
      "carbs": 0,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0267",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0268_蟹肉棒",
    "nameZh": "蟹肉棒（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹肉棒",
      "海鲜",
      "加工",
      "仿蟹",
      "蟹肉棒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 123,
      "protein": 8,
      "carbs": 12,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0268",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0269_蟹柳",
    "nameZh": "蟹柳（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹柳",
      "海鲜",
      "加工",
      "仿蟹",
      "蟹柳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 123,
      "protein": 8,
      "carbs": 12,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0269",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0270_花蛤",
    "nameZh": "花蛤（生）",
    "nameEn": "",
    "aliasesZh": [
      "花蛤",
      "海鲜",
      "贝类",
      "低脂",
      "花蛤（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 11,
      "carbs": 2.5,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0270",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0271_白蛤",
    "nameZh": "白蛤（生）",
    "nameEn": "",
    "aliasesZh": [
      "白蛤",
      "海鲜",
      "贝类",
      "低脂",
      "白蛤（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 10,
      "carbs": 2.5,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0271",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0272_蛏子",
    "nameZh": "蛏子（生）",
    "nameEn": "",
    "aliasesZh": [
      "蛏子",
      "海鲜",
      "贝类",
      "低脂",
      "蛏子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 15,
      "carbs": 2,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0272",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0273_带子",
    "nameZh": "带子（生）",
    "nameEn": "",
    "aliasesZh": [
      "带子",
      "海鲜",
      "贝类",
      "低脂",
      "带子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 111,
      "protein": 20,
      "carbs": 2.5,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0273",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0274_牡蛎",
    "nameZh": "牡蛎（生）",
    "nameEn": "",
    "aliasesZh": [
      "牡蛎",
      "海鲜",
      "贝类",
      "低脂",
      "牡蛎（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 7,
      "carbs": 3,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0274",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0275_鲍鱼",
    "nameZh": "鲍鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲍鱼",
      "海鲜",
      "贝类",
      "海珍",
      "鲍鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 12.6,
      "carbs": 6.6,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0275",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0276_青口贝",
    "nameZh": "青口贝（生）",
    "nameEn": "",
    "aliasesZh": [
      "青口贝",
      "海鲜",
      "贝类",
      "海贝",
      "青口贝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 86,
      "protein": 12,
      "carbs": 3.7,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0276",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0277_海虹",
    "nameZh": "海虹（生）",
    "nameEn": "",
    "aliasesZh": [
      "海虹",
      "海鲜",
      "贝类",
      "海贝",
      "海虹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 86,
      "protein": 12,
      "carbs": 3.7,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0277",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0278_淡菜",
    "nameZh": "淡菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "淡菜",
      "海鲜",
      "贝类",
      "海贝",
      "淡菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 86,
      "protein": 12,
      "carbs": 3.7,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0278",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0279_海螺",
    "nameZh": "海螺（生）",
    "nameEn": "",
    "aliasesZh": [
      "海螺",
      "海鲜",
      "贝类",
      "海贝",
      "海螺（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 100,
      "protein": 20,
      "carbs": 2,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0279",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0280_香螺",
    "nameZh": "香螺（生）",
    "nameEn": "",
    "aliasesZh": [
      "香螺",
      "海鲜",
      "贝类",
      "海贝",
      "香螺（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 18,
      "carbs": 2,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0280",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0281_田螺",
    "nameZh": "田螺（生）",
    "nameEn": "",
    "aliasesZh": [
      "田螺",
      "海鲜",
      "贝类",
      "淡水",
      "田螺（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 12,
      "carbs": 2.5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0281",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0282_石螺",
    "nameZh": "石螺（生）",
    "nameEn": "",
    "aliasesZh": [
      "石螺",
      "海鲜",
      "贝类",
      "淡水",
      "石螺（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 13,
      "carbs": 2,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0282",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0283_钉螺",
    "nameZh": "钉螺（生）",
    "nameEn": "",
    "aliasesZh": [
      "钉螺",
      "海鲜",
      "贝类",
      "淡水",
      "钉螺（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 12,
      "carbs": 2,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0283",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0284_北极贝",
    "nameZh": "北极贝（生）",
    "nameEn": "",
    "aliasesZh": [
      "北极贝",
      "海鲜",
      "贝类",
      "海贝",
      "北极贝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 17,
      "carbs": 1,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0284",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0285_象拔蚌",
    "nameZh": "象拔蚌（生）",
    "nameEn": "",
    "aliasesZh": [
      "象拔蚌",
      "海鲜",
      "贝类",
      "海贝",
      "象拔蚌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 17,
      "carbs": 2,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0285",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0286_河蚌",
    "nameZh": "河蚌（生）",
    "nameEn": "",
    "aliasesZh": [
      "河蚌",
      "海鲜",
      "贝类",
      "淡水",
      "河蚌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 10,
      "carbs": 0.8,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0286",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0287_蛏王",
    "nameZh": "蛏王（生）",
    "nameEn": "",
    "aliasesZh": [
      "蛏王",
      "海鲜",
      "贝类",
      "海贝",
      "蛏王（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 15,
      "carbs": 2,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0287",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0288_贵妃蚌",
    "nameZh": "贵妃蚌（生）",
    "nameEn": "",
    "aliasesZh": [
      "贵妃蚌",
      "海鲜",
      "贝类",
      "海贝",
      "贵妃蚌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 75,
      "protein": 14,
      "carbs": 2,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0288",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0289_墨鱼",
    "nameZh": "墨鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "墨鱼",
      "海鲜",
      "头足",
      "低脂",
      "墨鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 79,
      "protein": 14.5,
      "carbs": 1,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0289",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0290_章鱼",
    "nameZh": "章鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "章鱼",
      "海鲜",
      "头足",
      "低脂",
      "章鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 14.9,
      "carbs": 2.2,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0290",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0291_八爪鱼",
    "nameZh": "八爪鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "八爪鱼",
      "海鲜",
      "头足",
      "低脂",
      "八爪鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 14.9,
      "carbs": 2.2,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0291",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0292_乌贼",
    "nameZh": "乌贼（生）",
    "nameEn": "",
    "aliasesZh": [
      "乌贼",
      "海鲜",
      "头足",
      "低脂",
      "乌贼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 79,
      "protein": 14.5,
      "carbs": 1,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0292",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0293_枪乌贼",
    "nameZh": "枪乌贼（生）",
    "nameEn": "",
    "aliasesZh": [
      "枪乌贼",
      "海鲜",
      "头足",
      "低脂",
      "枪乌贼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 15.5,
      "carbs": 3.5,
      "fat": 1.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0293",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0294_目鱼",
    "nameZh": "目鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "目鱼",
      "海鲜",
      "头足",
      "低脂",
      "目鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 79,
      "protein": 14.5,
      "carbs": 1,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0294",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0295_海兔",
    "nameZh": "海兔（生）",
    "nameEn": "",
    "aliasesZh": [
      "海兔",
      "海鲜",
      "头足",
      "低脂",
      "海兔（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 14,
      "carbs": 1.5,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0295",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0296_鱿鱼须",
    "nameZh": "鱿鱼须（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱿鱼须",
      "海鲜",
      "头足",
      "低脂",
      "鱿鱼须（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 15.5,
      "carbs": 3.5,
      "fat": 1.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0296",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0297_鱿鱼圈",
    "nameZh": "鱿鱼圈（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱿鱼圈",
      "海鲜",
      "头足",
      "加工",
      "鱿鱼圈（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 156,
      "protein": 12,
      "carbs": 15,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0297",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0298_鱿鱼丝",
    "nameZh": "鱿鱼丝（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱿鱼丝",
      "海鲜",
      "头足",
      "零食",
      "鱿鱼丝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 28,
      "carbs": 22,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0298",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0299_墨鱼仔",
    "nameZh": "墨鱼仔（生）",
    "nameEn": "",
    "aliasesZh": [
      "墨鱼仔",
      "海鲜",
      "头足",
      "低脂",
      "墨鱼仔（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 79,
      "protein": 14.5,
      "carbs": 1,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0299",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0300_小章鱼",
    "nameZh": "小章鱼（生）",
    "nameEn": "",
    "aliasesZh": [
      "小章鱼",
      "海鲜",
      "头足",
      "低脂",
      "小章鱼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 14.9,
      "carbs": 2.2,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0300",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0301_海参",
    "nameZh": "海参（生）",
    "nameEn": "",
    "aliasesZh": [
      "海参",
      "海鲜",
      "海珍",
      "低脂",
      "海参（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 13,
      "carbs": 0.9,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0301",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0302_辽参",
    "nameZh": "辽参（生）",
    "nameEn": "",
    "aliasesZh": [
      "辽参",
      "海鲜",
      "海珍",
      "低脂",
      "辽参（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 13,
      "carbs": 0.9,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0302",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0303_海胆",
    "nameZh": "海胆（生）",
    "nameEn": "",
    "aliasesZh": [
      "海胆",
      "海鲜",
      "海珍",
      "低脂",
      "海胆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 120,
      "protein": 16,
      "carbs": 5,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0303",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0304_海胆黄",
    "nameZh": "海胆黄（生）",
    "nameEn": "",
    "aliasesZh": [
      "海胆黄",
      "海鲜",
      "海珍",
      "低脂",
      "海胆黄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 120,
      "protein": 16,
      "carbs": 5,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0304",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0305_海蜇",
    "nameZh": "海蜇（生）",
    "nameEn": "",
    "aliasesZh": [
      "海蜇",
      "海鲜",
      "海珍",
      "低脂",
      "海蜇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 3.7,
      "carbs": 3.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0305",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0306_海蜇皮",
    "nameZh": "海蜇皮（生）",
    "nameEn": "",
    "aliasesZh": [
      "海蜇皮",
      "海鲜",
      "海珍",
      "低脂",
      "海蜇皮（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 3.7,
      "carbs": 3.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0306",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0307_海蜇头",
    "nameZh": "海蜇头（生）",
    "nameEn": "",
    "aliasesZh": [
      "海蜇头",
      "海鲜",
      "海珍",
      "低脂",
      "海蜇头（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 36,
      "protein": 4,
      "carbs": 4,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0307",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0308_海星",
    "nameZh": "海星（生）",
    "nameEn": "",
    "aliasesZh": [
      "海星",
      "海鲜",
      "海珍",
      "低脂",
      "海星（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 12,
      "carbs": 2.5,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0308",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0309_紫菜",
    "nameZh": "紫菜",
    "nameEn": "",
    "aliasesZh": [
      "紫菜",
      "海鲜",
      "海藻",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 250,
      "protein": 43.6,
      "carbs": 44.1,
      "fat": 1.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0309",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0310_海带",
    "nameZh": "海带（生）",
    "nameEn": "",
    "aliasesZh": [
      "海带",
      "海鲜",
      "海藻",
      "低脂",
      "海带（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 1.8,
      "carbs": 9.9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0310",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0311_裙带菜",
    "nameZh": "裙带菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "裙带菜",
      "海鲜",
      "海藻",
      "低脂",
      "裙带菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 3,
      "carbs": 9,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0311",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0312_海白菜",
    "nameZh": "海白菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "海白菜",
      "海鲜",
      "海藻",
      "低脂",
      "海白菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 2.5,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0312",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0313_海苔",
    "nameZh": "海苔（生）",
    "nameEn": "",
    "aliasesZh": [
      "海苔",
      "海鲜",
      "海藻",
      "零食",
      "海苔（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 375,
      "protein": 40,
      "carbs": 45,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0313",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0314_紫菜蛋花汤",
    "nameZh": "紫菜蛋花汤",
    "nameEn": "",
    "aliasesZh": [
      "紫菜蛋花汤",
      "海鲜",
      "海藻",
      "汤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.5,
      "carbs": 3,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0314",
      "dataType": "海鲜"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0315_味噌汤",
    "nameZh": "味噌汤",
    "nameEn": "",
    "aliasesZh": [
      "味噌汤",
      "海鲜",
      "日式",
      "汤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 3,
      "carbs": 5,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0315",
      "dataType": "海鲜"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0316_海带汤",
    "nameZh": "海带汤",
    "nameEn": "",
    "aliasesZh": [
      "海带汤",
      "海鲜",
      "韩式",
      "汤"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.5,
      "carbs": 4,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0316",
      "dataType": "海鲜"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0317_鱼丸",
    "nameZh": "鱼丸（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼丸",
      "海鲜",
      "加工",
      "火锅",
      "鱼丸（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 112,
      "protein": 11,
      "carbs": 8,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0317",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0318_虾丸",
    "nameZh": "虾丸（生）",
    "nameEn": "",
    "aliasesZh": [
      "虾丸",
      "海鲜",
      "加工",
      "火锅",
      "虾丸（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 108,
      "protein": 12,
      "carbs": 6,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0318",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0319_蟹棒",
    "nameZh": "蟹棒（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹棒",
      "海鲜",
      "加工",
      "火锅",
      "蟹棒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 123,
      "protein": 8,
      "carbs": 12,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0319",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0320_鱼豆腐",
    "nameZh": "鱼豆腐（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼豆腐",
      "海鲜",
      "加工",
      "火锅",
      "鱼豆腐（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 142,
      "protein": 9,
      "carbs": 12,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0320",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0321_鱼糕",
    "nameZh": "鱼糕（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼糕",
      "海鲜",
      "日式",
      "加工",
      "鱼糕（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 125,
      "protein": 10,
      "carbs": 14,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0321",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0322_竹轮",
    "nameZh": "竹轮（生）",
    "nameEn": "",
    "aliasesZh": [
      "竹轮",
      "海鲜",
      "日式",
      "加工",
      "竹轮（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 135,
      "protein": 9,
      "carbs": 15,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0322",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0323_鱼饼",
    "nameZh": "鱼饼（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼饼",
      "海鲜",
      "韩式",
      "加工",
      "鱼饼（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 145,
      "protein": 8,
      "carbs": 18,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0323",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0324_鱼皮",
    "nameZh": "鱼皮（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼皮",
      "海鲜",
      "零食",
      "加工",
      "鱼皮（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 385,
      "protein": 42,
      "carbs": 8,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0324",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0325_鱼干",
    "nameZh": "鱼干",
    "nameEn": "",
    "aliasesZh": [
      "鱼干",
      "海鲜",
      "零食",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 38,
      "carbs": 0,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0325",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0326_虾干",
    "nameZh": "虾干",
    "nameEn": "",
    "aliasesZh": [
      "虾干",
      "海鲜",
      "零食",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 295,
      "protein": 45,
      "carbs": 0,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0326",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0327_鱿鱼干",
    "nameZh": "鱿鱼干",
    "nameEn": "",
    "aliasesZh": [
      "鱿鱼干",
      "海鲜",
      "零食",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 315,
      "protein": 35,
      "carbs": 12,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0327",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0328_干贝",
    "nameZh": "干贝",
    "nameEn": "",
    "aliasesZh": [
      "干贝",
      "海鲜",
      "干货",
      "海珍"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 264,
      "protein": 55,
      "carbs": 5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0328",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0329_瑶柱",
    "nameZh": "瑶柱",
    "nameEn": "",
    "aliasesZh": [
      "瑶柱",
      "海鲜",
      "干货",
      "海珍"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 264,
      "protein": 55,
      "carbs": 5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0329",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0330_海米",
    "nameZh": "海米",
    "nameEn": "",
    "aliasesZh": [
      "海米",
      "海鲜",
      "干货",
      "海珍"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 43,
      "carbs": 0,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0330",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0331_鱼翅",
    "nameZh": "鱼翅",
    "nameEn": "",
    "aliasesZh": [
      "鱼翅",
      "海鲜",
      "海珍",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 350,
      "protein": 84,
      "carbs": 0.1,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0331",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0332_花胶",
    "nameZh": "花胶",
    "nameEn": "",
    "aliasesZh": [
      "花胶",
      "海鲜",
      "海珍",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 286,
      "protein": 72,
      "carbs": 0,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0332",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0333_鱼胶",
    "nameZh": "鱼胶",
    "nameEn": "",
    "aliasesZh": [
      "鱼胶",
      "海鲜",
      "海珍",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 286,
      "protein": 72,
      "carbs": 0,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0333",
      "dataType": "海鲜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0334_鱼籽",
    "nameZh": "鱼籽（生）",
    "nameEn": "",
    "aliasesZh": [
      "鱼籽",
      "海鲜",
      "海珍",
      "加工",
      "鱼籽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 280,
      "protein": 29,
      "carbs": 1.5,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0334",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0335_蟹籽",
    "nameZh": "蟹籽（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹籽",
      "海鲜",
      "海珍",
      "加工",
      "蟹籽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 14,
      "carbs": 1,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0335",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0336_飞鱼籽",
    "nameZh": "飞鱼籽（生）",
    "nameEn": "",
    "aliasesZh": [
      "飞鱼籽",
      "海鲜",
      "海珍",
      "加工",
      "飞鱼籽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 102,
      "protein": 16,
      "carbs": 1.2,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0336",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0337_三文鱼籽",
    "nameZh": "三文鱼籽（生）",
    "nameEn": "",
    "aliasesZh": [
      "三文鱼籽",
      "海鲜",
      "海珍",
      "加工",
      "三文鱼籽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 250,
      "protein": 30,
      "carbs": 1,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0337",
      "dataType": "海鲜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0338_鱼子酱",
    "nameZh": "鱼子酱",
    "nameEn": "",
    "aliasesZh": [
      "鱼子酱",
      "海鲜",
      "海珍",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 264,
      "protein": 25,
      "carbs": 4,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0338",
      "dataType": "海鲜"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0339_油麦菜",
    "nameZh": "油麦菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "油麦菜",
      "蔬菜",
      "叶菜",
      "绿叶",
      "油麦菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 8,
      "protein": 1.4,
      "carbs": 2.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0339",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0340_小白菜",
    "nameZh": "小白菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "小白菜",
      "蔬菜",
      "叶菜",
      "绿叶",
      "小白菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 14,
      "protein": 1.5,
      "carbs": 2.7,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0340",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0341_大白菜",
    "nameZh": "大白菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "大白菜",
      "蔬菜",
      "叶菜",
      "冬季",
      "大白菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 13,
      "protein": 1.5,
      "carbs": 2.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0341",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0342_娃娃菜",
    "nameZh": "娃娃菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "娃娃菜",
      "蔬菜",
      "叶菜",
      "嫩叶",
      "娃娃菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 13,
      "protein": 1.2,
      "carbs": 2.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0342",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0343_空心菜",
    "nameZh": "空心菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "空心菜",
      "蔬菜",
      "叶菜",
      "绿叶",
      "空心菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 19,
      "protein": 2.6,
      "carbs": 3.6,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0343",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0344_芥蓝",
    "nameZh": "芥蓝（生）",
    "nameEn": "",
    "aliasesZh": [
      "芥蓝",
      "蔬菜",
      "叶菜",
      "粤菜",
      "芥蓝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 2.8,
      "carbs": 4,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0344",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0345_菜心",
    "nameZh": "菜心（生）",
    "nameEn": "",
    "aliasesZh": [
      "菜心",
      "蔬菜",
      "叶菜",
      "粤菜",
      "菜心（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 18,
      "protein": 1.8,
      "carbs": 3.6,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0345",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0346_油菜",
    "nameZh": "油菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "油菜",
      "蔬菜",
      "叶菜",
      "绿叶",
      "油菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 14,
      "protein": 1.8,
      "carbs": 2.7,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0346",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0347_茼蒿",
    "nameZh": "茼蒿（生）",
    "nameEn": "",
    "aliasesZh": [
      "茼蒿",
      "蔬菜",
      "叶菜",
      "绿叶",
      "茼蒿（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 21,
      "protein": 1.9,
      "carbs": 3.9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0347",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0348_芹菜",
    "nameZh": "芹菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "芹菜",
      "蔬菜",
      "叶菜",
      "茎菜",
      "芹菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 14,
      "protein": 0.8,
      "carbs": 2.9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0348",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0349_香芹",
    "nameZh": "香芹（生）",
    "nameEn": "",
    "aliasesZh": [
      "香芹",
      "蔬菜",
      "叶菜",
      "茎菜",
      "香芹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 16,
      "protein": 0.8,
      "carbs": 3.4,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0349",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0350_韭菜",
    "nameZh": "韭菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "韭菜",
      "蔬菜",
      "叶菜",
      "辛香",
      "韭菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 2.4,
      "carbs": 4.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0350",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0351_韭黄",
    "nameZh": "韭黄（生）",
    "nameEn": "",
    "aliasesZh": [
      "韭黄",
      "蔬菜",
      "叶菜",
      "嫩叶",
      "韭黄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 2.2,
      "carbs": 4.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0351",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0352_韭苔",
    "nameZh": "韭苔（生）",
    "nameEn": "",
    "aliasesZh": [
      "韭苔",
      "蔬菜",
      "叶菜",
      "嫩茎",
      "韭苔（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 24,
      "protein": 2.2,
      "carbs": 4.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0352",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0353_蒜苗",
    "nameZh": "蒜苗（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒜苗",
      "蔬菜",
      "叶菜",
      "辛香",
      "蒜苗（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 37,
      "protein": 2.1,
      "carbs": 8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0353",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0354_蒜苔",
    "nameZh": "蒜苔（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒜苔",
      "蔬菜",
      "叶菜",
      "嫩茎",
      "蒜苔（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 1.2,
      "carbs": 15,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0354",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0355_蒜黄",
    "nameZh": "蒜黄（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒜黄",
      "蔬菜",
      "叶菜",
      "辛香",
      "蒜黄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 2.4,
      "carbs": 7.8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0355",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0356_香菜",
    "nameZh": "香菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "香菜",
      "蔬菜",
      "叶菜",
      "调味",
      "香菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 23,
      "protein": 2.1,
      "carbs": 4,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0356",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0357_茭白",
    "nameZh": "茭白（生）",
    "nameEn": "",
    "aliasesZh": [
      "茭白",
      "蔬菜",
      "水生",
      "嫩茎",
      "茭白（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1.2,
      "carbs": 5.9,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0357",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0358_芦笋",
    "nameZh": "芦笋（生）",
    "nameEn": "",
    "aliasesZh": [
      "芦笋",
      "蔬菜",
      "嫩茎",
      "高档",
      "芦笋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 20,
      "protein": 2.2,
      "carbs": 3.9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0358",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0359_莴笋",
    "nameZh": "莴笋（生）",
    "nameEn": "",
    "aliasesZh": [
      "莴笋",
      "蔬菜",
      "茎菜",
      "嫩茎",
      "莴笋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 14,
      "protein": 1,
      "carbs": 2.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0359",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0360_莴苣叶",
    "nameZh": "莴苣叶（生）",
    "nameEn": "",
    "aliasesZh": [
      "莴苣叶",
      "蔬菜",
      "叶菜",
      "绿叶",
      "莴苣叶（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 18,
      "protein": 1.4,
      "carbs": 3.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0360",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0361_苦菊",
    "nameZh": "苦菊（生）",
    "nameEn": "",
    "aliasesZh": [
      "苦菊",
      "蔬菜",
      "叶菜",
      "沙拉",
      "苦菊（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0361",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0362_芝麻菜",
    "nameZh": "芝麻菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "芝麻菜",
      "蔬菜",
      "叶菜",
      "沙拉",
      "芝麻菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 2.6,
      "carbs": 3.7,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0362",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0363_羽衣甘蓝",
    "nameZh": "羽衣甘蓝（生）",
    "nameEn": "",
    "aliasesZh": [
      "羽衣甘蓝",
      "蔬菜",
      "叶菜",
      "超级食物",
      "羽衣甘蓝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 2.9,
      "carbs": 6,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0363",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0364_紫甘蓝",
    "nameZh": "紫甘蓝（生）",
    "nameEn": "",
    "aliasesZh": [
      "紫甘蓝",
      "蔬菜",
      "叶菜",
      "沙拉",
      "紫甘蓝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0364",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0365_卷心菜",
    "nameZh": "卷心菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "卷心菜",
      "蔬菜",
      "叶菜",
      "包菜",
      "卷心菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0365",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0366_圆白菜",
    "nameZh": "圆白菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "圆白菜",
      "蔬菜",
      "叶菜",
      "包菜",
      "圆白菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0366",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0367_包菜",
    "nameZh": "包菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "包菜",
      "蔬菜",
      "叶菜",
      "包菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0367",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0368_菜花",
    "nameZh": "菜花（生）",
    "nameEn": "",
    "aliasesZh": [
      "菜花",
      "蔬菜",
      "十字花",
      "白花",
      "菜花（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.9,
      "carbs": 5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0368",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0369_花椰菜",
    "nameZh": "花椰菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "花椰菜",
      "蔬菜",
      "十字花",
      "白花",
      "花椰菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.9,
      "carbs": 5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0369",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0370_宝塔菜",
    "nameZh": "宝塔菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "宝塔菜",
      "蔬菜",
      "十字花",
      "特色",
      "宝塔菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2,
      "carbs": 5.4,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0370",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0371_罗马生菜",
    "nameZh": "罗马生菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "罗马生菜",
      "蔬菜",
      "叶菜",
      "沙拉",
      "罗马生菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.3,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0371",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0372_奶油生菜",
    "nameZh": "奶油生菜",
    "nameEn": "",
    "aliasesZh": [
      "奶油生菜",
      "蔬菜",
      "叶菜",
      "沙拉"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 13,
      "protein": 1.3,
      "carbs": 2.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0372",
      "dataType": "蔬菜"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0373_冰草",
    "nameZh": "冰草（生）",
    "nameEn": "",
    "aliasesZh": [
      "冰草",
      "蔬菜",
      "叶菜",
      "沙拉",
      "冰草（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 15,
      "protein": 1.5,
      "carbs": 2.8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0373",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0374_穿心莲",
    "nameZh": "穿心莲（生）",
    "nameEn": "",
    "aliasesZh": [
      "穿心莲",
      "蔬菜",
      "叶菜",
      "药食",
      "穿心莲（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.5,
      "carbs": 5.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0374",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0375_马齿苋",
    "nameZh": "马齿苋（生）",
    "nameEn": "",
    "aliasesZh": [
      "马齿苋",
      "蔬菜",
      "野菜",
      "叶菜",
      "马齿苋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.3,
      "carbs": 5,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0375",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0376_蒲公英",
    "nameZh": "蒲公英（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒲公英",
      "蔬菜",
      "野菜",
      "叶菜",
      "蒲公英（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 2.7,
      "carbs": 9.2,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0376",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0377_荠菜",
    "nameZh": "荠菜（生）",
    "nameEn": "",
    "aliasesZh": [
      "荠菜",
      "蔬菜",
      "野菜",
      "叶菜",
      "荠菜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.9,
      "carbs": 4.7,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0377",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0378_香椿",
    "nameZh": "香椿（生）",
    "nameEn": "",
    "aliasesZh": [
      "香椿",
      "蔬菜",
      "野菜",
      "春季",
      "香椿（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 47,
      "protein": 1.7,
      "carbs": 10.9,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0378",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0379_榆钱",
    "nameZh": "榆钱（生）",
    "nameEn": "",
    "aliasesZh": [
      "榆钱",
      "蔬菜",
      "野菜",
      "春季",
      "榆钱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 3.8,
      "carbs": 11,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0379",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0380_槐花",
    "nameZh": "槐花（生）",
    "nameEn": "",
    "aliasesZh": [
      "槐花",
      "蔬菜",
      "野菜",
      "春季",
      "槐花（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 3.1,
      "carbs": 17,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0380",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0381_白萝卜",
    "nameZh": "白萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "白萝卜",
      "蔬菜",
      "根茎",
      "十字花",
      "白萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 16,
      "protein": 0.7,
      "carbs": 4.1,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0381",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0382_青萝卜",
    "nameZh": "青萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "青萝卜",
      "蔬菜",
      "根茎",
      "十字花",
      "青萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 0.8,
      "carbs": 7.6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0382",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0383_心里美",
    "nameZh": "心里美（生）",
    "nameEn": "",
    "aliasesZh": [
      "心里美",
      "蔬菜",
      "根茎",
      "红心",
      "心里美（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 20,
      "protein": 0.8,
      "carbs": 4.9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0383",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0384_樱桃萝卜",
    "nameZh": "樱桃萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "樱桃萝卜",
      "蔬菜",
      "根茎",
      "小型",
      "樱桃萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 16,
      "protein": 0.7,
      "carbs": 3.4,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0384",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0385_水萝卜",
    "nameZh": "水萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "水萝卜",
      "蔬菜",
      "根茎",
      "夏季",
      "水萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 19,
      "protein": 0.7,
      "carbs": 4.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0385",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0386_樱桃小萝卜",
    "nameZh": "樱桃小萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "樱桃小萝卜",
      "蔬菜",
      "根茎",
      "小型",
      "樱桃小萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 16,
      "protein": 0.7,
      "carbs": 3.4,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0386",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0387_芜菁",
    "nameZh": "芜菁（生）",
    "nameEn": "",
    "aliasesZh": [
      "芜菁",
      "蔬菜",
      "根茎",
      "十字花",
      "芜菁（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 0.9,
      "carbs": 6.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0387",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0388_甜菜根",
    "nameZh": "甜菜根（生）",
    "nameEn": "",
    "aliasesZh": [
      "甜菜根",
      "蔬菜",
      "根茎",
      "红色",
      "甜菜根（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 1.6,
      "carbs": 10,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0388",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0389_紫萝卜",
    "nameZh": "紫萝卜（生）",
    "nameEn": "",
    "aliasesZh": [
      "紫萝卜",
      "蔬菜",
      "根茎",
      "紫色",
      "紫萝卜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 21,
      "protein": 0.8,
      "carbs": 5.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0389",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0390_牛蒡",
    "nameZh": "牛蒡（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛蒡",
      "蔬菜",
      "根茎",
      "日式",
      "牛蒡（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 1.5,
      "carbs": 17,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0390",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0391_洋姜",
    "nameZh": "洋姜（生）",
    "nameEn": "",
    "aliasesZh": [
      "洋姜",
      "蔬菜",
      "根茎",
      "药食",
      "洋姜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 73,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0391",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0392_葛根",
    "nameZh": "葛根（生）",
    "nameEn": "",
    "aliasesZh": [
      "葛根",
      "蔬菜",
      "根茎",
      "药食",
      "葛根（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 2.2,
      "carbs": 12,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0392",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0393_番茄",
    "nameZh": "番茄（生）",
    "nameEn": "",
    "aliasesZh": [
      "番茄",
      "蔬菜",
      "茄果",
      "红色",
      "番茄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0393",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0394_小番茄",
    "nameZh": "小番茄（生）",
    "nameEn": "",
    "aliasesZh": [
      "小番茄",
      "蔬菜",
      "茄果",
      "水果",
      "小番茄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 5.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0394",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0395_圣女果",
    "nameZh": "圣女果（生）",
    "nameEn": "",
    "aliasesZh": [
      "圣女果",
      "蔬菜",
      "茄果",
      "水果",
      "圣女果（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 5.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0395",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0396_千禧果",
    "nameZh": "千禧果（生）",
    "nameEn": "",
    "aliasesZh": [
      "千禧果",
      "蔬菜",
      "茄果",
      "水果",
      "千禧果（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 1.1,
      "carbs": 6.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0396",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0397_小黄瓜",
    "nameZh": "小黄瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "小黄瓜",
      "蔬菜",
      "瓜类",
      "小型",
      "小黄瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 12,
      "protein": 0.7,
      "carbs": 2.6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0397",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0398_水果黄瓜",
    "nameZh": "水果黄瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "水果黄瓜",
      "蔬菜",
      "瓜类",
      "生食",
      "水果黄瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 14,
      "protein": 0.8,
      "carbs": 3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0398",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0399_老黄瓜",
    "nameZh": "老黄瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "老黄瓜",
      "蔬菜",
      "瓜类",
      "煲汤",
      "老黄瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 13,
      "protein": 0.6,
      "carbs": 3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0399",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0400_苦瓜",
    "nameZh": "苦瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "苦瓜",
      "蔬菜",
      "瓜类",
      "清热",
      "苦瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 19,
      "protein": 1,
      "carbs": 4.3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0400",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0401_丝瓜",
    "nameZh": "丝瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "丝瓜",
      "蔬菜",
      "瓜类",
      "夏季",
      "丝瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 20,
      "protein": 1.3,
      "carbs": 4.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0401",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0402_冬瓜",
    "nameZh": "冬瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "冬瓜",
      "蔬菜",
      "瓜类",
      "清热",
      "冬瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 12,
      "protein": 0.4,
      "carbs": 2.6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0402",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0403_佛手瓜",
    "nameZh": "佛手瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "佛手瓜",
      "蔬菜",
      "瓜类",
      "特色",
      "佛手瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 19,
      "protein": 1.2,
      "carbs": 4.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0403",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0404_节瓜",
    "nameZh": "节瓜（生）",
    "nameEn": "",
    "aliasesZh": [
      "节瓜",
      "蔬菜",
      "瓜类",
      "夏季",
      "节瓜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 12,
      "protein": 0.6,
      "carbs": 2.6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0404",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0405_长茄子",
    "nameZh": "长茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "长茄子",
      "蔬菜",
      "茄果",
      "紫色",
      "长茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 23,
      "protein": 1.1,
      "carbs": 5.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0405",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0406_圆茄子",
    "nameZh": "圆茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "圆茄子",
      "蔬菜",
      "茄果",
      "紫色",
      "圆茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 24,
      "protein": 1.1,
      "carbs": 5.7,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0406",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0407_紫茄子",
    "nameZh": "紫茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "紫茄子",
      "蔬菜",
      "茄果",
      "紫色",
      "紫茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0407",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0408_青茄子",
    "nameZh": "青茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "青茄子",
      "蔬菜",
      "茄果",
      "绿色",
      "青茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 1,
      "carbs": 5.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0408",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0409_白茄子",
    "nameZh": "白茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "白茄子",
      "蔬菜",
      "茄果",
      "白色",
      "白茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 23,
      "protein": 1.1,
      "carbs": 5.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0409",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0410_线茄子",
    "nameZh": "线茄子（生）",
    "nameEn": "",
    "aliasesZh": [
      "线茄子",
      "蔬菜",
      "茄果",
      "细长",
      "线茄子（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 1.1,
      "carbs": 5.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0410",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0411_彩椒",
    "nameZh": "彩椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "彩椒",
      "蔬菜",
      "茄果",
      "彩色",
      "彩椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1,
      "carbs": 6,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0411",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0412_红椒",
    "nameZh": "红椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "红椒",
      "蔬菜",
      "茄果",
      "红色",
      "红椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1,
      "carbs": 6,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0412",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0413_黄椒",
    "nameZh": "黄椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄椒",
      "蔬菜",
      "茄果",
      "黄色",
      "黄椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 1,
      "carbs": 6.3,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0413",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0414_青椒",
    "nameZh": "青椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "青椒",
      "蔬菜",
      "茄果",
      "绿色",
      "青椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 1,
      "carbs": 5.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0414",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0415_尖椒",
    "nameZh": "尖椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "尖椒",
      "蔬菜",
      "茄果",
      "辣",
      "尖椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 1.2,
      "carbs": 6.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0415",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0416_螺丝椒",
    "nameZh": "螺丝椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "螺丝椒",
      "蔬菜",
      "茄果",
      "辣",
      "螺丝椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 1.4,
      "carbs": 6.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0416",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0417_杭椒",
    "nameZh": "杭椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "杭椒",
      "蔬菜",
      "茄果",
      "辣",
      "杭椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 29,
      "protein": 1.3,
      "carbs": 7,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0417",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0418_小米椒",
    "nameZh": "小米椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "小米椒",
      "蔬菜",
      "茄果",
      "辣",
      "小米椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.9,
      "carbs": 9.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0418",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0419_朝天椒",
    "nameZh": "朝天椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "朝天椒",
      "蔬菜",
      "茄果",
      "辣",
      "朝天椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.9,
      "carbs": 9.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0419",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0420_线椒",
    "nameZh": "线椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "线椒",
      "蔬菜",
      "茄果",
      "辣",
      "线椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 1.5,
      "carbs": 7.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0420",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0421_美人椒",
    "nameZh": "美人椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "美人椒",
      "蔬菜",
      "茄果",
      "辣",
      "美人椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 30,
      "protein": 1.4,
      "carbs": 7.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0421",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0422_二荆条",
    "nameZh": "二荆条（生）",
    "nameEn": "",
    "aliasesZh": [
      "二荆条",
      "蔬菜",
      "茄果",
      "辣",
      "二荆条（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 1.5,
      "carbs": 7.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0422",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0423_泡椒",
    "nameZh": "泡椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "泡椒",
      "蔬菜",
      "茄果",
      "腌制",
      "泡椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 22,
      "protein": 0.9,
      "carbs": 5.1,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0423",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0424_灯笼椒",
    "nameZh": "灯笼椒（生）",
    "nameEn": "",
    "aliasesZh": [
      "灯笼椒",
      "蔬菜",
      "茄果",
      "不辣",
      "灯笼椒（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 20,
      "protein": 0.9,
      "carbs": 4.6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0424",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0425_毛豆",
    "nameZh": "毛豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "毛豆",
      "蔬菜",
      "豆类",
      "鲜豆",
      "毛豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 131,
      "protein": 13.1,
      "carbs": 10,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0425",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0426_青豆",
    "nameZh": "青豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "青豆",
      "蔬菜",
      "豆类",
      "鲜豆",
      "青豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 131,
      "protein": 13.1,
      "carbs": 10,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0426",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0427_豌豆",
    "nameZh": "豌豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "豌豆",
      "蔬菜",
      "豆类",
      "鲜豆",
      "豌豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 81,
      "protein": 7.4,
      "carbs": 14,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0427",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0428_荷兰豆",
    "nameZh": "荷兰豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "荷兰豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "荷兰豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.5,
      "carbs": 4.9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0428",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0429_四季豆",
    "nameZh": "四季豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "四季豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "四季豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 1.8,
      "carbs": 7,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0429",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0430_豇豆",
    "nameZh": "豇豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "豇豆",
      "蔬菜",
      "豆类",
      "长条",
      "豇豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 2.9,
      "carbs": 6.9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0430",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0431_长豆角",
    "nameZh": "长豆角（生）",
    "nameEn": "",
    "aliasesZh": [
      "长豆角",
      "蔬菜",
      "豆类",
      "长条",
      "长豆角（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 2.9,
      "carbs": 6.9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0431",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0432_扁豆",
    "nameZh": "扁豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "扁豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "扁豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 41,
      "protein": 2.5,
      "carbs": 8.4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0432",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0433_眉豆",
    "nameZh": "眉豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "眉豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "眉豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 2.8,
      "carbs": 9.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0433",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0434_芸豆",
    "nameZh": "芸豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "芸豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "芸豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.8,
      "carbs": 5.4,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0434",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0435_白芸豆",
    "nameZh": "白芸豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "白芸豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "白芸豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 1.8,
      "carbs": 5.4,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0435",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0436_油豆角",
    "nameZh": "油豆角（生）",
    "nameEn": "",
    "aliasesZh": [
      "油豆角",
      "蔬菜",
      "豆类",
      "嫩荚",
      "油豆角（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 1.9,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0436",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0437_刀豆",
    "nameZh": "刀豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "刀豆",
      "蔬菜",
      "豆类",
      "嫩荚",
      "刀豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 36,
      "protein": 2.6,
      "carbs": 7.8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0437",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0438_蚕豆",
    "nameZh": "蚕豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "蚕豆",
      "蔬菜",
      "豆类",
      "鲜豆",
      "蚕豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 104,
      "protein": 8.8,
      "carbs": 19,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0438",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0439_鲜蚕豆",
    "nameZh": "鲜蚕豆（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲜蚕豆",
      "蔬菜",
      "豆类",
      "鲜豆",
      "鲜蚕豆（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 104,
      "protein": 8.8,
      "carbs": 19,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0439",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0440_黄豆芽",
    "nameZh": "黄豆芽（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄豆芽",
      "蔬菜",
      "芽菜",
      "豆类",
      "黄豆芽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 44,
      "protein": 4.5,
      "carbs": 4.5,
      "fat": 1.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0440",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0441_绿豆芽",
    "nameZh": "绿豆芽（生）",
    "nameEn": "",
    "aliasesZh": [
      "绿豆芽",
      "蔬菜",
      "芽菜",
      "豆类",
      "绿豆芽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 18,
      "protein": 2.1,
      "carbs": 2.9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0441",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0442_黑豆芽",
    "nameZh": "黑豆芽（生）",
    "nameEn": "",
    "aliasesZh": [
      "黑豆芽",
      "蔬菜",
      "芽菜",
      "豆类",
      "黑豆芽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 4,
      "carbs": 4,
      "fat": 1.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0442",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0443_豌豆苗",
    "nameZh": "豌豆苗（生）",
    "nameEn": "",
    "aliasesZh": [
      "豌豆苗",
      "蔬菜",
      "芽菜",
      "嫩苗",
      "豌豆苗（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 3.2,
      "carbs": 5.2,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0443",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0444_萝卜苗",
    "nameZh": "萝卜苗（生）",
    "nameEn": "",
    "aliasesZh": [
      "萝卜苗",
      "蔬菜",
      "芽菜",
      "嫩苗",
      "萝卜苗（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 2.5,
      "carbs": 4,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0444",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0445_花生芽",
    "nameZh": "花生芽（生）",
    "nameEn": "",
    "aliasesZh": [
      "花生芽",
      "蔬菜",
      "芽菜",
      "特色",
      "花生芽（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 4.8,
      "carbs": 9.2,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0445",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0446_大葱",
    "nameZh": "大葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "大葱",
      "蔬菜",
      "调味",
      "辛香",
      "大葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 1.7,
      "carbs": 6.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0446",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0447_小葱",
    "nameZh": "小葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "小葱",
      "蔬菜",
      "调味",
      "辛香",
      "小葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.6,
      "carbs": 4.4,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0447",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0448_香葱",
    "nameZh": "香葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "香葱",
      "蔬菜",
      "调味",
      "辛香",
      "香葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.6,
      "carbs": 4.4,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0448",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0449_洋葱",
    "nameZh": "洋葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "洋葱",
      "蔬菜",
      "调味",
      "辛香",
      "洋葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0449",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0450_紫洋葱",
    "nameZh": "紫洋葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "紫洋葱",
      "蔬菜",
      "调味",
      "辛香",
      "紫洋葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0450",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0451_白洋葱",
    "nameZh": "白洋葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "白洋葱",
      "蔬菜",
      "调味",
      "辛香",
      "白洋葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 1.2,
      "carbs": 9.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0451",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0452_红洋葱",
    "nameZh": "红洋葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "红洋葱",
      "蔬菜",
      "调味",
      "辛香",
      "红洋葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0452",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0453_黄洋葱",
    "nameZh": "黄洋葱（生）",
    "nameEn": "",
    "aliasesZh": [
      "黄洋葱",
      "蔬菜",
      "调味",
      "辛香",
      "黄洋葱（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 1,
      "carbs": 8.6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0453",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0454_姜",
    "nameZh": "姜（生）",
    "nameEn": "",
    "aliasesZh": [
      "姜",
      "蔬菜",
      "调味",
      "辛香",
      "姜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 80,
      "protein": 1.8,
      "carbs": 18,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0454",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0455_嫩姜",
    "nameZh": "嫩姜（生）",
    "nameEn": "",
    "aliasesZh": [
      "嫩姜",
      "蔬菜",
      "调味",
      "辛香",
      "嫩姜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 75,
      "protein": 1.6,
      "carbs": 17,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0455",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0456_老姜",
    "nameZh": "老姜（生）",
    "nameEn": "",
    "aliasesZh": [
      "老姜",
      "蔬菜",
      "调味",
      "辛香",
      "老姜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 1.8,
      "carbs": 18.5,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0456",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0457_沙姜",
    "nameZh": "沙姜（生）",
    "nameEn": "",
    "aliasesZh": [
      "沙姜",
      "蔬菜",
      "调味",
      "辛香",
      "沙姜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 1.6,
      "carbs": 17.5,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0457",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0458_蒜",
    "nameZh": "蒜（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒜",
      "蔬菜",
      "调味",
      "辛香",
      "蒜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 149,
      "protein": 6.4,
      "carbs": 33,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0458",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0459_蒜头",
    "nameZh": "蒜头（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒜头",
      "蔬菜",
      "调味",
      "辛香",
      "蒜头（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 149,
      "protein": 6.4,
      "carbs": 33,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0459",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0460_独头蒜",
    "nameZh": "独头蒜（生）",
    "nameEn": "",
    "aliasesZh": [
      "独头蒜",
      "蔬菜",
      "调味",
      "辛香",
      "独头蒜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 6.8,
      "carbs": 34,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0460",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0461_新蒜",
    "nameZh": "新蒜（生）",
    "nameEn": "",
    "aliasesZh": [
      "新蒜",
      "蔬菜",
      "调味",
      "辛香",
      "新蒜（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 135,
      "protein": 5.8,
      "carbs": 30,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0461",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0462_藠头",
    "nameZh": "藠头（生）",
    "nameEn": "",
    "aliasesZh": [
      "藠头",
      "蔬菜",
      "调味",
      "辛香",
      "藠头（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 1.6,
      "carbs": 8.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0462",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0463_洋葱头",
    "nameZh": "洋葱头（生）",
    "nameEn": "",
    "aliasesZh": [
      "洋葱头",
      "蔬菜",
      "调味",
      "辛香",
      "洋葱头（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0463",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0464_香菇",
    "nameZh": "香菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "香菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "香菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 2.2,
      "carbs": 4.3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0464",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0465_干香菇",
    "nameZh": "干香菇",
    "nameEn": "",
    "aliasesZh": [
      "干香菇",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 296,
      "protein": 20,
      "carbs": 61.7,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0465",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0466_平菇",
    "nameZh": "平菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "平菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "平菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 24,
      "protein": 1.7,
      "carbs": 4.6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0466",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0467_金针菇",
    "nameZh": "金针菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "金针菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "金针菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 2.4,
      "carbs": 6,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0467",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0468_杏鲍菇",
    "nameZh": "杏鲍菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "杏鲍菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "杏鲍菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 1.3,
      "carbs": 8.3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0468",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0469_茶树菇",
    "nameZh": "茶树菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "茶树菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "茶树菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 2.1,
      "carbs": 7.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0469",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0470_鸡腿菇",
    "nameZh": "鸡腿菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡腿菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "鸡腿菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 2.5,
      "carbs": 4.3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0470",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0471_猴头菇",
    "nameZh": "猴头菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "猴头菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "猴头菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 21,
      "protein": 2,
      "carbs": 4.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0471",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0472_干猴头菇",
    "nameZh": "干猴头菇",
    "nameEn": "",
    "aliasesZh": [
      "干猴头菇",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 288,
      "protein": 26.3,
      "carbs": 54.8,
      "fat": 4.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0472",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0473_木耳",
    "nameZh": "木耳（生）",
    "nameEn": "",
    "aliasesZh": [
      "木耳",
      "蔬菜",
      "菌菇",
      "鲜品",
      "木耳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 1.5,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0473",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0474_黑木耳",
    "nameZh": "黑木耳（生）",
    "nameEn": "",
    "aliasesZh": [
      "黑木耳",
      "蔬菜",
      "菌菇",
      "鲜品",
      "黑木耳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 1.5,
      "carbs": 6,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0474",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0475_干木耳",
    "nameZh": "干木耳",
    "nameEn": "",
    "aliasesZh": [
      "干木耳",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 12.1,
      "carbs": 65.6,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0475",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0476_银耳",
    "nameZh": "银耳（生）",
    "nameEn": "",
    "aliasesZh": [
      "银耳",
      "蔬菜",
      "菌菇",
      "鲜品",
      "银耳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1,
      "carbs": 6.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0476",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0477_干银耳",
    "nameZh": "干银耳",
    "nameEn": "",
    "aliasesZh": [
      "干银耳",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 261,
      "protein": 10,
      "carbs": 67.3,
      "fat": 1.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0477",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0478_白木耳",
    "nameZh": "白木耳（生）",
    "nameEn": "",
    "aliasesZh": [
      "白木耳",
      "蔬菜",
      "菌菇",
      "鲜品",
      "白木耳（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1,
      "carbs": 6.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0478",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0479_竹荪",
    "nameZh": "竹荪（生）",
    "nameEn": "",
    "aliasesZh": [
      "竹荪",
      "蔬菜",
      "菌菇",
      "高档",
      "竹荪（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 15,
      "protein": 2.6,
      "carbs": 2.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0479",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0480_干竹荪",
    "nameZh": "干竹荪",
    "nameEn": "",
    "aliasesZh": [
      "干竹荪",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 17.8,
      "carbs": 60.3,
      "fat": 3.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0480",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0481_松茸",
    "nameZh": "松茸（生）",
    "nameEn": "",
    "aliasesZh": [
      "松茸",
      "蔬菜",
      "菌菇",
      "高档",
      "松茸（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 2.4,
      "carbs": 4.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0481",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0482_干松茸",
    "nameZh": "干松茸",
    "nameEn": "",
    "aliasesZh": [
      "干松茸",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 286,
      "protein": 24.2,
      "carbs": 58.4,
      "fat": 3.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0482",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0483_牛肝菌",
    "nameZh": "牛肝菌（生）",
    "nameEn": "",
    "aliasesZh": [
      "牛肝菌",
      "蔬菜",
      "菌菇",
      "野生",
      "牛肝菌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 3.3,
      "carbs": 4.5,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0483",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0484_干牛肝菌",
    "nameZh": "干牛肝菌",
    "nameEn": "",
    "aliasesZh": [
      "干牛肝菌",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 310,
      "protein": 31.8,
      "carbs": 55.8,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0484",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0485_羊肚菌",
    "nameZh": "羊肚菌（生）",
    "nameEn": "",
    "aliasesZh": [
      "羊肚菌",
      "蔬菜",
      "菌菇",
      "野生",
      "羊肚菌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 3.5,
      "carbs": 5.2,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0485",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0486_干羊肚菌",
    "nameZh": "干羊肚菌",
    "nameEn": "",
    "aliasesZh": [
      "干羊肚菌",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 312,
      "protein": 32.5,
      "carbs": 56.2,
      "fat": 4.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0486",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0487_鸡枞菌",
    "nameZh": "鸡枞菌（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡枞菌",
      "蔬菜",
      "菌菇",
      "野生",
      "鸡枞菌（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.8,
      "carbs": 5.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0487",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0488_干鸡枞菌",
    "nameZh": "干鸡枞菌",
    "nameEn": "",
    "aliasesZh": [
      "干鸡枞菌",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 295,
      "protein": 28.8,
      "carbs": 58.5,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0488",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0489_口蘑",
    "nameZh": "口蘑（生）",
    "nameEn": "",
    "aliasesZh": [
      "口蘑",
      "蔬菜",
      "菌菇",
      "鲜品",
      "口蘑（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 29,
      "protein": 3.5,
      "carbs": 5.2,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0489",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0490_草菇",
    "nameZh": "草菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "草菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "草菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.7,
      "carbs": 4.3,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0490",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0491_鲍鱼菇",
    "nameZh": "鲍鱼菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "鲍鱼菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "鲍鱼菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 2.5,
      "carbs": 4.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0491",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0492_滑子菇",
    "nameZh": "滑子菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "滑子菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "滑子菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0492",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0493_蟹味菇",
    "nameZh": "蟹味菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "蟹味菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "蟹味菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 26,
      "protein": 2.3,
      "carbs": 5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0493",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0494_白玉菇",
    "nameZh": "白玉菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "白玉菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "白玉菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.1,
      "carbs": 5.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0494",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0495_海鲜菇",
    "nameZh": "海鲜菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "海鲜菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "海鲜菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.4,
      "carbs": 5.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0495",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0496_秀珍菇",
    "nameZh": "秀珍菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "秀珍菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "秀珍菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 24,
      "protein": 2.2,
      "carbs": 4.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0496",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0497_凤尾菇",
    "nameZh": "凤尾菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "凤尾菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "凤尾菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 25,
      "protein": 2.3,
      "carbs": 4.8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0497",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0498_猪肚菇",
    "nameZh": "猪肚菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "猪肚菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "猪肚菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 27,
      "protein": 2.5,
      "carbs": 5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0498",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0499_灵芝",
    "nameZh": "灵芝（生）",
    "nameEn": "",
    "aliasesZh": [
      "灵芝",
      "蔬菜",
      "菌菇",
      "药食",
      "灵芝（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 5.2,
      "carbs": 6.8,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0499",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0500_茯苓",
    "nameZh": "茯苓（生）",
    "nameEn": "",
    "aliasesZh": [
      "茯苓",
      "蔬菜",
      "菌菇",
      "药食",
      "茯苓（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 1.2,
      "carbs": 15.8,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0500",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0501_虫草花",
    "nameZh": "虫草花（生）",
    "nameEn": "",
    "aliasesZh": [
      "虫草花",
      "蔬菜",
      "菌菇",
      "鲜品",
      "虫草花（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 2.8,
      "carbs": 6.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0501",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0502_干虫草花",
    "nameZh": "干虫草花",
    "nameEn": "",
    "aliasesZh": [
      "干虫草花",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 25.5,
      "carbs": 62.8,
      "fat": 4.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0502",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0503_姬松茸",
    "nameZh": "姬松茸（生）",
    "nameEn": "",
    "aliasesZh": [
      "姬松茸",
      "蔬菜",
      "菌菇",
      "鲜品",
      "姬松茸（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 30,
      "protein": 2.8,
      "carbs": 5.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0503",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0504_干姬松茸",
    "nameZh": "干姬松茸",
    "nameEn": "",
    "aliasesZh": [
      "干姬松茸",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 295,
      "protein": 27.8,
      "carbs": 58.5,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0504",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0505_花菇",
    "nameZh": "花菇（生）",
    "nameEn": "",
    "aliasesZh": [
      "花菇",
      "蔬菜",
      "菌菇",
      "鲜品",
      "花菇（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 28,
      "protein": 2.4,
      "carbs": 5.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0505",
      "dataType": "蔬菜"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0506_干花菇",
    "nameZh": "干花菇",
    "nameEn": "",
    "aliasesZh": [
      "干花菇",
      "蔬菜",
      "菌菇",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 302,
      "protein": 22.5,
      "carbs": 62.8,
      "fat": 3.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0506",
      "dataType": "蔬菜"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0507_红富士",
    "nameZh": "红富士",
    "nameEn": "",
    "aliasesZh": [
      "红富士",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0507",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0508_青苹果",
    "nameZh": "青苹果",
    "nameEn": "",
    "aliasesZh": [
      "青苹果",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0508",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0509_金帅",
    "nameZh": "金帅",
    "nameEn": "",
    "aliasesZh": [
      "金帅",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 0.3,
      "carbs": 14.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0509",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0510_国光",
    "nameZh": "国光",
    "nameEn": "",
    "aliasesZh": [
      "国光",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 50,
      "protein": 0.3,
      "carbs": 13.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0510",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0511_嘎啦果",
    "nameZh": "嘎啦果",
    "nameEn": "",
    "aliasesZh": [
      "嘎啦果",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 53,
      "protein": 0.3,
      "carbs": 14.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0511",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0512_花牛苹果",
    "nameZh": "花牛苹果",
    "nameEn": "",
    "aliasesZh": [
      "花牛苹果",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 0.3,
      "carbs": 14.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0512",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0513_蛇果",
    "nameZh": "蛇果",
    "nameEn": "",
    "aliasesZh": [
      "蛇果",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0513",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0514_青蛇果",
    "nameZh": "青蛇果",
    "nameEn": "",
    "aliasesZh": [
      "青蛇果",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0514",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0515_黄元帅",
    "nameZh": "黄元帅",
    "nameEn": "",
    "aliasesZh": [
      "黄元帅",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 0.3,
      "carbs": 14.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0515",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0516_乔纳金",
    "nameZh": "乔纳金",
    "nameEn": "",
    "aliasesZh": [
      "乔纳金",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 53,
      "protein": 0.3,
      "carbs": 14.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0516",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0517_王林",
    "nameZh": "王林",
    "nameEn": "",
    "aliasesZh": [
      "王林",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0517",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0518_小米蕉",
    "nameZh": "小米蕉",
    "nameEn": "",
    "aliasesZh": [
      "小米蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 91,
      "protein": 1.1,
      "carbs": 23.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0518",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0519_皇帝蕉",
    "nameZh": "皇帝蕉",
    "nameEn": "",
    "aliasesZh": [
      "皇帝蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 1.1,
      "carbs": 22.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0519",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0520_芭蕉",
    "nameZh": "芭蕉",
    "nameEn": "",
    "aliasesZh": [
      "芭蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 93,
      "protein": 1.1,
      "carbs": 24,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0520",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0521_大蕉",
    "nameZh": "大蕉",
    "nameEn": "",
    "aliasesZh": [
      "大蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 90,
      "protein": 1.1,
      "carbs": 23.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0521",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0522_红香蕉",
    "nameZh": "红香蕉",
    "nameEn": "",
    "aliasesZh": [
      "红香蕉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0522",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0523_脐橙",
    "nameZh": "脐橙",
    "nameEn": "",
    "aliasesZh": [
      "脐橙",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0523",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0524_血橙",
    "nameZh": "血橙",
    "nameEn": "",
    "aliasesZh": [
      "血橙",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 0.9,
      "carbs": 12.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0524",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0525_甜橙",
    "nameZh": "甜橙",
    "nameEn": "",
    "aliasesZh": [
      "甜橙",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0525",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0526_冰糖橙",
    "nameZh": "冰糖橙",
    "nameEn": "",
    "aliasesZh": [
      "冰糖橙",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.9,
      "carbs": 11.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0526",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0527_柳橙",
    "nameZh": "柳橙",
    "nameEn": "",
    "aliasesZh": [
      "柳橙",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 0.9,
      "carbs": 12.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0527",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0528_柑橘",
    "nameZh": "柑橘",
    "nameEn": "",
    "aliasesZh": [
      "柑橘",
      "水果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0528",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0529_蜜桔",
    "nameZh": "蜜桔",
    "nameEn": "",
    "aliasesZh": [
      "蜜桔",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0529",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0530_砂糖橘",
    "nameZh": "砂糖橘",
    "nameEn": "",
    "aliasesZh": [
      "砂糖橘",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 50,
      "protein": 0.9,
      "carbs": 12.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0530",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0531_南丰蜜桔",
    "nameZh": "南丰蜜桔",
    "nameEn": "",
    "aliasesZh": [
      "南丰蜜桔",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0531",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0532_芦柑",
    "nameZh": "芦柑",
    "nameEn": "",
    "aliasesZh": [
      "芦柑",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0532",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0533_椪柑",
    "nameZh": "椪柑",
    "nameEn": "",
    "aliasesZh": [
      "椪柑",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0533",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0534_柚子",
    "nameZh": "柚子",
    "nameEn": "",
    "aliasesZh": [
      "柚子",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0534",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0535_红心柚",
    "nameZh": "红心柚",
    "nameEn": "",
    "aliasesZh": [
      "红心柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0535",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0536_白心柚",
    "nameZh": "白心柚",
    "nameEn": "",
    "aliasesZh": [
      "白心柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0536",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0537_文旦柚",
    "nameZh": "文旦柚",
    "nameEn": "",
    "aliasesZh": [
      "文旦柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 41,
      "protein": 0.8,
      "carbs": 9.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0537",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0538_沙田柚",
    "nameZh": "沙田柚",
    "nameEn": "",
    "aliasesZh": [
      "沙田柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 41,
      "protein": 0.8,
      "carbs": 9.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0538",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0539_葡萄柚",
    "nameZh": "葡萄柚",
    "nameEn": "",
    "aliasesZh": [
      "葡萄柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 11,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0539",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0540_西柚",
    "nameZh": "西柚",
    "nameEn": "",
    "aliasesZh": [
      "西柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 11,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0540",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0541_红心西柚",
    "nameZh": "红心西柚",
    "nameEn": "",
    "aliasesZh": [
      "红心西柚",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 11,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0541",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0542_柠檬",
    "nameZh": "柠檬",
    "nameEn": "",
    "aliasesZh": [
      "柠檬",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 29,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0542",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0543_青柠檬",
    "nameZh": "青柠檬",
    "nameEn": "",
    "aliasesZh": [
      "青柠檬",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 29,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0543",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0544_黄柠檬",
    "nameZh": "黄柠檬",
    "nameEn": "",
    "aliasesZh": [
      "黄柠檬",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 29,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0544",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0545_金桔",
    "nameZh": "金桔",
    "nameEn": "",
    "aliasesZh": [
      "金桔",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 1,
      "carbs": 13,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0545",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0546_丑橘",
    "nameZh": "丑橘",
    "nameEn": "",
    "aliasesZh": [
      "丑橘",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0546",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0547_不知火",
    "nameZh": "不知火",
    "nameEn": "",
    "aliasesZh": [
      "不知火",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0547",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0548_耙耙柑",
    "nameZh": "耙耙柑",
    "nameEn": "",
    "aliasesZh": [
      "耙耙柑",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 50,
      "protein": 0.9,
      "carbs": 12.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0548",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0549_沃柑",
    "nameZh": "沃柑",
    "nameEn": "",
    "aliasesZh": [
      "沃柑",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.9,
      "carbs": 13.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0549",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0550_皇帝柑",
    "nameZh": "皇帝柑",
    "nameEn": "",
    "aliasesZh": [
      "皇帝柑",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0550",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0551_春见",
    "nameZh": "春见",
    "nameEn": "",
    "aliasesZh": [
      "春见",
      "水果",
      "柑橘"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 51,
      "protein": 0.9,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0551",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0552_牛奶草莓",
    "nameZh": "牛奶草莓",
    "nameEn": "",
    "aliasesZh": [
      "牛奶草莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 0.7,
      "carbs": 7.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0552",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0553_红颜草莓",
    "nameZh": "红颜草莓",
    "nameEn": "",
    "aliasesZh": [
      "红颜草莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0553",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0554_章姬草莓",
    "nameZh": "章姬草莓",
    "nameEn": "",
    "aliasesZh": [
      "章姬草莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0554",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0555_智利蓝莓",
    "nameZh": "智利蓝莓",
    "nameEn": "",
    "aliasesZh": [
      "智利蓝莓",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.7,
      "carbs": 14,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0555",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0556_国产蓝莓",
    "nameZh": "国产蓝莓",
    "nameEn": "",
    "aliasesZh": [
      "国产蓝莓",
      "水果",
      "国产"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 0.7,
      "carbs": 13.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0556",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0557_树莓",
    "nameZh": "树莓",
    "nameEn": "",
    "aliasesZh": [
      "树莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 1.2,
      "carbs": 12,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0557",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0558_覆盆子",
    "nameZh": "覆盆子",
    "nameEn": "",
    "aliasesZh": [
      "覆盆子",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 1.2,
      "carbs": 12,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0558",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0559_黑莓",
    "nameZh": "黑莓",
    "nameEn": "",
    "aliasesZh": [
      "黑莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 1.4,
      "carbs": 10,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0559",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0560_桑葚",
    "nameZh": "桑葚",
    "nameEn": "",
    "aliasesZh": [
      "桑葚",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 1.4,
      "carbs": 10,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0560",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0561_黑桑葚",
    "nameZh": "黑桑葚",
    "nameEn": "",
    "aliasesZh": [
      "黑桑葚",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 43,
      "protein": 1.4,
      "carbs": 10,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0561",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0562_白桑葚",
    "nameZh": "白桑葚",
    "nameEn": "",
    "aliasesZh": [
      "白桑葚",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 1.4,
      "carbs": 9.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0562",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0563_蔓越莓",
    "nameZh": "蔓越莓",
    "nameEn": "",
    "aliasesZh": [
      "蔓越莓",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.4,
      "carbs": 12,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0563",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0564_蔓越莓干",
    "nameZh": "蔓越莓干",
    "nameEn": "",
    "aliasesZh": [
      "蔓越莓干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 308,
      "protein": 0.1,
      "carbs": 82,
      "fat": 1.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0564",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0565_葡萄干",
    "nameZh": "葡萄干",
    "nameEn": "",
    "aliasesZh": [
      "葡萄干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 299,
      "protein": 3.1,
      "carbs": 79,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0565",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0566_黑加仑",
    "nameZh": "黑加仑",
    "nameEn": "",
    "aliasesZh": [
      "黑加仑",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 1.4,
      "carbs": 15,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0566",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0567_黑加仑干",
    "nameZh": "黑加仑干",
    "nameEn": "",
    "aliasesZh": [
      "黑加仑干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 283,
      "protein": 2.7,
      "carbs": 74,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0567",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0568_枸杞",
    "nameZh": "枸杞",
    "nameEn": "",
    "aliasesZh": [
      "枸杞",
      "水果",
      "药食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 258,
      "protein": 13.9,
      "carbs": 64,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0568",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0569_红枸杞",
    "nameZh": "红枸杞",
    "nameEn": "",
    "aliasesZh": [
      "红枸杞",
      "水果",
      "药食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 258,
      "protein": 13.9,
      "carbs": 64,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0569",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0570_黑枸杞",
    "nameZh": "黑枸杞",
    "nameEn": "",
    "aliasesZh": [
      "黑枸杞",
      "水果",
      "药食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 265,
      "protein": 14.5,
      "carbs": 65,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0570",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0571_蓝莓干",
    "nameZh": "蓝莓干",
    "nameEn": "",
    "aliasesZh": [
      "蓝莓干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 317,
      "protein": 2.5,
      "carbs": 80,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0571",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0572_草莓干",
    "nameZh": "草莓干",
    "nameEn": "",
    "aliasesZh": [
      "草莓干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 3,
      "carbs": 82,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0572",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0573_台农芒",
    "nameZh": "台农芒",
    "nameEn": "",
    "aliasesZh": [
      "台农芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0573",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0574_金煌芒",
    "nameZh": "金煌芒",
    "nameEn": "",
    "aliasesZh": [
      "金煌芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 0.8,
      "carbs": 15.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0574",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0575_贵妃芒",
    "nameZh": "贵妃芒",
    "nameEn": "",
    "aliasesZh": [
      "贵妃芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 0.8,
      "carbs": 14.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0575",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0576_象牙芒",
    "nameZh": "象牙芒",
    "nameEn": "",
    "aliasesZh": [
      "象牙芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 61,
      "protein": 0.8,
      "carbs": 15.2,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0576",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0577_凯特芒",
    "nameZh": "凯特芒",
    "nameEn": "",
    "aliasesZh": [
      "凯特芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 0.8,
      "carbs": 15.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0577",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0578_澳芒",
    "nameZh": "澳芒",
    "nameEn": "",
    "aliasesZh": [
      "澳芒",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 0.9,
      "carbs": 16,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0578",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0579_青芒",
    "nameZh": "青芒",
    "nameEn": "",
    "aliasesZh": [
      "青芒",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 0.8,
      "carbs": 14.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0579",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0580_榴莲",
    "nameZh": "榴莲",
    "nameEn": "",
    "aliasesZh": [
      "榴莲",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 147,
      "protein": 1.5,
      "carbs": 27,
      "fat": 5.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0580",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0581_金枕榴莲",
    "nameZh": "金枕榴莲",
    "nameEn": "",
    "aliasesZh": [
      "金枕榴莲",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 147,
      "protein": 1.5,
      "carbs": 27,
      "fat": 5.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0581",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0582_猫山王",
    "nameZh": "猫山王",
    "nameEn": "",
    "aliasesZh": [
      "猫山王",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 156,
      "protein": 1.6,
      "carbs": 28.5,
      "fat": 5.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0582",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0583_托曼尼",
    "nameZh": "托曼尼",
    "nameEn": "",
    "aliasesZh": [
      "托曼尼",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 152,
      "protein": 1.5,
      "carbs": 28,
      "fat": 5.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0583",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0584_干尧",
    "nameZh": "干尧",
    "nameEn": "",
    "aliasesZh": [
      "干尧",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 148,
      "protein": 1.5,
      "carbs": 27.2,
      "fat": 5.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0584",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0585_榴莲肉",
    "nameZh": "榴莲肉",
    "nameEn": "",
    "aliasesZh": [
      "榴莲肉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 147,
      "protein": 1.5,
      "carbs": 27,
      "fat": 5.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0585",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0586_菠萝",
    "nameZh": "菠萝",
    "nameEn": "",
    "aliasesZh": [
      "菠萝",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0586",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0587_凤梨",
    "nameZh": "凤梨",
    "nameEn": "",
    "aliasesZh": [
      "凤梨",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0587",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0588_金钻凤梨",
    "nameZh": "金钻凤梨",
    "nameEn": "",
    "aliasesZh": [
      "金钻凤梨",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 0.5,
      "carbs": 12.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0588",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0589_牛奶凤梨",
    "nameZh": "牛奶凤梨",
    "nameEn": "",
    "aliasesZh": [
      "牛奶凤梨",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 0.5,
      "carbs": 13.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0589",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0590_木瓜",
    "nameZh": "木瓜",
    "nameEn": "",
    "aliasesZh": [
      "木瓜",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.6,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0590",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0591_红心木瓜",
    "nameZh": "红心木瓜",
    "nameEn": "",
    "aliasesZh": [
      "红心木瓜",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.6,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0591",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0592_番木瓜",
    "nameZh": "番木瓜",
    "nameEn": "",
    "aliasesZh": [
      "番木瓜",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.6,
      "carbs": 10,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0592",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0593_火龙果",
    "nameZh": "火龙果",
    "nameEn": "",
    "aliasesZh": [
      "火龙果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 1.1,
      "carbs": 13,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0593",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0594_红心火龙果",
    "nameZh": "红心火龙果",
    "nameEn": "",
    "aliasesZh": [
      "红心火龙果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 1.3,
      "carbs": 13.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0594",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0595_白心火龙果",
    "nameZh": "白心火龙果",
    "nameEn": "",
    "aliasesZh": [
      "白心火龙果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 1.1,
      "carbs": 13,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0595",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0596_黄龙果",
    "nameZh": "黄龙果",
    "nameEn": "",
    "aliasesZh": [
      "黄龙果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 1.2,
      "carbs": 13.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0596",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0597_百香果",
    "nameZh": "百香果",
    "nameEn": "",
    "aliasesZh": [
      "百香果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 2.2,
      "carbs": 23,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0597",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0598_鸡蛋果",
    "nameZh": "鸡蛋果",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 2.2,
      "carbs": 23,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0598",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0599_西番莲",
    "nameZh": "西番莲",
    "nameEn": "",
    "aliasesZh": [
      "西番莲",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 2.2,
      "carbs": 23,
      "fat": 0.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0599",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0600_椰子",
    "nameZh": "椰子",
    "nameEn": "",
    "aliasesZh": [
      "椰子",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 354,
      "protein": 3.3,
      "carbs": 15,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0600",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0601_椰子肉",
    "nameZh": "椰子肉",
    "nameEn": "",
    "aliasesZh": [
      "椰子肉",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 354,
      "protein": 3.3,
      "carbs": 15,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0601",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0602_椰子水",
    "nameZh": "椰子水",
    "nameEn": "",
    "aliasesZh": [
      "椰子水",
      "水果",
      "饮品",
      "天然"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 19,
      "protein": 0.7,
      "carbs": 3.7,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0602",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0603_椰青",
    "nameZh": "椰青",
    "nameEn": "",
    "aliasesZh": [
      "椰青",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 20,
      "protein": 0.7,
      "carbs": 4,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0603",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0604_椰皇",
    "nameZh": "椰皇",
    "nameEn": "",
    "aliasesZh": [
      "椰皇",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 354,
      "protein": 3.3,
      "carbs": 15,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0604",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0605_荔枝",
    "nameZh": "荔枝",
    "nameEn": "",
    "aliasesZh": [
      "荔枝",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 66,
      "protein": 0.8,
      "carbs": 17,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0605",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0606_妃子笑",
    "nameZh": "妃子笑",
    "nameEn": "",
    "aliasesZh": [
      "妃子笑",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 66,
      "protein": 0.8,
      "carbs": 17,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0606",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0607_糯米糍",
    "nameZh": "糯米糍",
    "nameEn": "",
    "aliasesZh": [
      "糯米糍",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 0.8,
      "carbs": 17.5,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0607",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0608_桂味",
    "nameZh": "桂味",
    "nameEn": "",
    "aliasesZh": [
      "桂味",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 0.8,
      "carbs": 16.8,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0608",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0609_龙眼",
    "nameZh": "龙眼",
    "nameEn": "",
    "aliasesZh": [
      "龙眼",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 60,
      "protein": 1.1,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0609",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0610_桂圆",
    "nameZh": "桂圆",
    "nameEn": "",
    "aliasesZh": [
      "桂圆",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 1.2,
      "carbs": 16.6,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0610",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0611_桂圆干",
    "nameZh": "桂圆干",
    "nameEn": "",
    "aliasesZh": [
      "桂圆干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 277,
      "protein": 5.4,
      "carbs": 73,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0611",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0612_山竹",
    "nameZh": "山竹",
    "nameEn": "",
    "aliasesZh": [
      "山竹",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 0.6,
      "carbs": 18,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0612",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0613_红毛丹",
    "nameZh": "红毛丹",
    "nameEn": "",
    "aliasesZh": [
      "红毛丹",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 82,
      "protein": 0.7,
      "carbs": 21,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0613",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0614_莲雾",
    "nameZh": "莲雾",
    "nameEn": "",
    "aliasesZh": [
      "莲雾",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 0.5,
      "carbs": 9,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0614",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0615_释迦",
    "nameZh": "释迦",
    "nameEn": "",
    "aliasesZh": [
      "释迦",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 75,
      "protein": 1.7,
      "carbs": 23,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0615",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0616_番荔枝",
    "nameZh": "番荔枝",
    "nameEn": "",
    "aliasesZh": [
      "番荔枝",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 75,
      "protein": 1.7,
      "carbs": 23,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0616",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0617_人心果",
    "nameZh": "人心果",
    "nameEn": "",
    "aliasesZh": [
      "人心果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 83,
      "protein": 0.4,
      "carbs": 20,
      "fat": 1.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0617",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0618_杨桃",
    "nameZh": "杨桃",
    "nameEn": "",
    "aliasesZh": [
      "杨桃",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 0.6,
      "carbs": 7.4,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0618",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0619_枇杷",
    "nameZh": "枇杷",
    "nameEn": "",
    "aliasesZh": [
      "枇杷",
      "水果",
      "温带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 41,
      "protein": 0.8,
      "carbs": 10,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0619",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0620_黄皮",
    "nameZh": "黄皮",
    "nameEn": "",
    "aliasesZh": [
      "黄皮",
      "水果",
      "亚热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 0.8,
      "carbs": 9.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0620",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0621_橄榄",
    "nameZh": "橄榄",
    "nameEn": "",
    "aliasesZh": [
      "橄榄",
      "水果",
      "亚热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 115,
      "protein": 0.8,
      "carbs": 12,
      "fat": 10.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0621",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0622_青橄榄",
    "nameZh": "青橄榄",
    "nameEn": "",
    "aliasesZh": [
      "青橄榄",
      "水果",
      "亚热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 106,
      "protein": 0.8,
      "carbs": 11,
      "fat": 9.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0622",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0623_余甘子",
    "nameZh": "余甘子",
    "nameEn": "",
    "aliasesZh": [
      "余甘子",
      "水果",
      "亚热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 0.5,
      "carbs": 9.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0623",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0624_酸角",
    "nameZh": "酸角",
    "nameEn": "",
    "aliasesZh": [
      "酸角",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 239,
      "protein": 2.8,
      "carbs": 63,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0624",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0625_甜角",
    "nameZh": "甜角",
    "nameEn": "",
    "aliasesZh": [
      "甜角",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 285,
      "protein": 2.4,
      "carbs": 74,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0625",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0626_麒麟瓜",
    "nameZh": "麒麟瓜",
    "nameEn": "",
    "aliasesZh": [
      "麒麟瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 32,
      "protein": 0.6,
      "carbs": 8.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0626",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0627_8424西瓜",
    "nameZh": "8424西瓜",
    "nameEn": "",
    "aliasesZh": [
      "8424西瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 0.6,
      "carbs": 8.1,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0627",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0628_黑美人",
    "nameZh": "黑美人",
    "nameEn": "",
    "aliasesZh": [
      "黑美人",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0628",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0629_无籽西瓜",
    "nameZh": "无籽西瓜",
    "nameEn": "",
    "aliasesZh": [
      "无籽西瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0629",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0630_黄瓤西瓜",
    "nameZh": "黄瓤西瓜",
    "nameEn": "",
    "aliasesZh": [
      "黄瓤西瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 31,
      "protein": 0.6,
      "carbs": 8.1,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0630",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0631_哈密瓜",
    "nameZh": "哈密瓜",
    "nameEn": "",
    "aliasesZh": [
      "哈密瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 0.5,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0631",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0632_西州蜜",
    "nameZh": "西州蜜",
    "nameEn": "",
    "aliasesZh": [
      "西州蜜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 0.5,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0632",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0633_网纹瓜",
    "nameZh": "网纹瓜",
    "nameEn": "",
    "aliasesZh": [
      "网纹瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 36,
      "protein": 0.5,
      "carbs": 8.5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0633",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0634_香瓜",
    "nameZh": "香瓜",
    "nameEn": "",
    "aliasesZh": [
      "香瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 0.6,
      "carbs": 8.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0634",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0635_甜瓜",
    "nameZh": "甜瓜",
    "nameEn": "",
    "aliasesZh": [
      "甜瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 34,
      "protein": 0.6,
      "carbs": 8.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0635",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0636_羊角蜜",
    "nameZh": "羊角蜜",
    "nameEn": "",
    "aliasesZh": [
      "羊角蜜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0636",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0637_白兰瓜",
    "nameZh": "白兰瓜",
    "nameEn": "",
    "aliasesZh": [
      "白兰瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 36,
      "protein": 0.6,
      "carbs": 8.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0637",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0638_伊丽莎白瓜",
    "nameZh": "伊丽莎白瓜",
    "nameEn": "",
    "aliasesZh": [
      "伊丽莎白瓜",
      "水果",
      "瓜类"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 0.6,
      "carbs": 8.3,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0638",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0639_桃子",
    "nameZh": "桃子",
    "nameEn": "",
    "aliasesZh": [
      "桃子",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0639",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0640_水蜜桃",
    "nameZh": "水蜜桃",
    "nameEn": "",
    "aliasesZh": [
      "水蜜桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0640",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0641_油桃",
    "nameZh": "油桃",
    "nameEn": "",
    "aliasesZh": [
      "油桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 44,
      "protein": 1.1,
      "carbs": 11,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0641",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0642_蟠桃",
    "nameZh": "蟠桃",
    "nameEn": "",
    "aliasesZh": [
      "蟠桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 0.9,
      "carbs": 9.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0642",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0643_黄桃",
    "nameZh": "黄桃",
    "nameEn": "",
    "aliasesZh": [
      "黄桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 44,
      "protein": 1,
      "carbs": 11,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0643",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0644_白桃",
    "nameZh": "白桃",
    "nameEn": "",
    "aliasesZh": [
      "白桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 38,
      "protein": 0.9,
      "carbs": 9.8,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0644",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0645_脆桃",
    "nameZh": "脆桃",
    "nameEn": "",
    "aliasesZh": [
      "脆桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 39,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0645",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0646_黄桃罐头",
    "nameZh": "黄桃罐头",
    "nameEn": "",
    "aliasesZh": [
      "黄桃罐头",
      "水果",
      "罐头"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 0.5,
      "carbs": 16,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0646",
      "dataType": "水果"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0647_杏",
    "nameZh": "杏",
    "nameEn": "",
    "aliasesZh": [
      "杏",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 0.9,
      "carbs": 11,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0647",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0648_杏干",
    "nameZh": "杏干",
    "nameEn": "",
    "aliasesZh": [
      "杏干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 241,
      "protein": 3.4,
      "carbs": 63,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0648",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0649_李子",
    "nameZh": "李子",
    "nameEn": "",
    "aliasesZh": [
      "李子",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.7,
      "carbs": 11,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0649",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0650_黑布林",
    "nameZh": "黑布林",
    "nameEn": "",
    "aliasesZh": [
      "黑布林",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.7,
      "carbs": 11,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0650",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0651_红布林",
    "nameZh": "红布林",
    "nameEn": "",
    "aliasesZh": [
      "红布林",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 47,
      "protein": 0.7,
      "carbs": 11.2,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0651",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0652_青李",
    "nameZh": "青李",
    "nameEn": "",
    "aliasesZh": [
      "青李",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 44,
      "protein": 0.7,
      "carbs": 10.5,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0652",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0653_西梅",
    "nameZh": "西梅",
    "nameEn": "",
    "aliasesZh": [
      "西梅",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 46,
      "protein": 0.7,
      "carbs": 11,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0653",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0654_西梅干",
    "nameZh": "西梅干",
    "nameEn": "",
    "aliasesZh": [
      "西梅干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 240,
      "protein": 2.2,
      "carbs": 64,
      "fat": 0.4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0654",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0655_樱桃",
    "nameZh": "樱桃",
    "nameEn": "",
    "aliasesZh": [
      "樱桃",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 1.1,
      "carbs": 16,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0655",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0656_车厘子",
    "nameZh": "车厘子",
    "nameEn": "",
    "aliasesZh": [
      "车厘子",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 1.1,
      "carbs": 16,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0656",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0657_美早",
    "nameZh": "美早",
    "nameEn": "",
    "aliasesZh": [
      "美早",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 1.1,
      "carbs": 15.8,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0657",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0658_红灯",
    "nameZh": "红灯",
    "nameEn": "",
    "aliasesZh": [
      "红灯",
      "水果",
      "核果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 64,
      "protein": 1.1,
      "carbs": 16.2,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0658",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0659_梨",
    "nameZh": "梨",
    "nameEn": "",
    "aliasesZh": [
      "梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0659",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0660_皇冠梨",
    "nameZh": "皇冠梨",
    "nameEn": "",
    "aliasesZh": [
      "皇冠梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0660",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0661_雪花梨",
    "nameZh": "雪花梨",
    "nameEn": "",
    "aliasesZh": [
      "雪花梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 0.4,
      "carbs": 15.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0661",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0662_鸭梨",
    "nameZh": "鸭梨",
    "nameEn": "",
    "aliasesZh": [
      "鸭梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 0.4,
      "carbs": 14.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0662",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0663_香梨",
    "nameZh": "香梨",
    "nameEn": "",
    "aliasesZh": [
      "香梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 59,
      "protein": 0.4,
      "carbs": 15.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0663",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0664_库尔勒香梨",
    "nameZh": "库尔勒香梨",
    "nameEn": "",
    "aliasesZh": [
      "库尔勒香梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 59,
      "protein": 0.4,
      "carbs": 15.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0664",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0665_丰水梨",
    "nameZh": "丰水梨",
    "nameEn": "",
    "aliasesZh": [
      "丰水梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0665",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0666_秋月梨",
    "nameZh": "秋月梨",
    "nameEn": "",
    "aliasesZh": [
      "秋月梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 0.4,
      "carbs": 15.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0666",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0667_水晶梨",
    "nameZh": "水晶梨",
    "nameEn": "",
    "aliasesZh": [
      "水晶梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 0.4,
      "carbs": 14.8,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0667",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0668_砀山梨",
    "nameZh": "砀山梨",
    "nameEn": "",
    "aliasesZh": [
      "砀山梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0668",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0669_南果梨",
    "nameZh": "南果梨",
    "nameEn": "",
    "aliasesZh": [
      "南果梨",
      "水果",
      "仁果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 0.4,
      "carbs": 15.2,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0669",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0670_柿子",
    "nameZh": "柿子",
    "nameEn": "",
    "aliasesZh": [
      "柿子",
      "水果",
      "秋季"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 0.4,
      "carbs": 18,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0670",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0671_脆柿",
    "nameZh": "脆柿",
    "nameEn": "",
    "aliasesZh": [
      "脆柿",
      "水果",
      "秋季"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 0.4,
      "carbs": 18,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0671",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0672_软柿",
    "nameZh": "软柿",
    "nameEn": "",
    "aliasesZh": [
      "软柿",
      "水果",
      "秋季"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 71,
      "protein": 0.4,
      "carbs": 18,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0672",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0673_柿饼",
    "nameZh": "柿饼",
    "nameEn": "",
    "aliasesZh": [
      "柿饼",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 250,
      "protein": 1.8,
      "carbs": 63,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0673",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0674_无花果",
    "nameZh": "无花果",
    "nameEn": "",
    "aliasesZh": [
      "无花果",
      "水果",
      "秋季"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 74,
      "protein": 1.5,
      "carbs": 19,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0674",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0675_无花果干",
    "nameZh": "无花果干",
    "nameEn": "",
    "aliasesZh": [
      "无花果干",
      "水果",
      "果干"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 249,
      "protein": 3.3,
      "carbs": 64,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0675",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0676_猕猴桃",
    "nameZh": "猕猴桃",
    "nameEn": "",
    "aliasesZh": [
      "猕猴桃",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 15,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0676",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0677_绿心猕猴桃",
    "nameZh": "绿心猕猴桃",
    "nameEn": "",
    "aliasesZh": [
      "绿心猕猴桃",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 15,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0677",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0678_红心猕猴桃",
    "nameZh": "红心猕猴桃",
    "nameEn": "",
    "aliasesZh": [
      "红心猕猴桃",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 63,
      "protein": 1.2,
      "carbs": 15.5,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0678",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0679_黄心猕猴桃",
    "nameZh": "黄心猕猴桃",
    "nameEn": "",
    "aliasesZh": [
      "黄心猕猴桃",
      "水果",
      "浆果"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 1.1,
      "carbs": 15.2,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0679",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0680_奇异果",
    "nameZh": "奇异果",
    "nameEn": "",
    "aliasesZh": [
      "奇异果",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 15,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0680",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0681_金果",
    "nameZh": "金果",
    "nameEn": "",
    "aliasesZh": [
      "金果",
      "水果",
      "进口"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 1.1,
      "carbs": 15.2,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0681",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0682_雪莲果",
    "nameZh": "雪莲果",
    "nameEn": "",
    "aliasesZh": [
      "雪莲果",
      "水果",
      "根茎"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0682",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0683_人参果",
    "nameZh": "人参果",
    "nameEn": "",
    "aliasesZh": [
      "人参果",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 80,
      "protein": 0.6,
      "carbs": 18,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0683",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0684_牛油果",
    "nameZh": "牛油果",
    "nameEn": "",
    "aliasesZh": [
      "牛油果",
      "水果",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 160,
      "protein": 2,
      "carbs": 9,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0684",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0685_鳄梨",
    "nameZh": "鳄梨",
    "nameEn": "",
    "aliasesZh": [
      "鳄梨",
      "水果",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 160,
      "protein": 2,
      "carbs": 9,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0685",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0686_番石榴",
    "nameZh": "番石榴",
    "nameEn": "",
    "aliasesZh": [
      "番石榴",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 2.6,
      "carbs": 14,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0686",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0687_芭乐",
    "nameZh": "芭乐",
    "nameEn": "",
    "aliasesZh": [
      "芭乐",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 2.6,
      "carbs": 14,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0687",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0688_红心芭乐",
    "nameZh": "红心芭乐",
    "nameEn": "",
    "aliasesZh": [
      "红心芭乐",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 70,
      "protein": 2.8,
      "carbs": 14.5,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0688",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0689_白心芭乐",
    "nameZh": "白心芭乐",
    "nameEn": "",
    "aliasesZh": [
      "白心芭乐",
      "水果",
      "热带"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 2.6,
      "carbs": 14,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0689",
      "dataType": "水果"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0690_内酯豆腐",
    "nameZh": "内酯豆腐",
    "nameEn": "",
    "aliasesZh": [
      "内酯豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 49,
      "protein": 5,
      "carbs": 2.5,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0690",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0691_北豆腐",
    "nameZh": "北豆腐",
    "nameEn": "",
    "aliasesZh": [
      "北豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 10,
      "carbs": 2,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0691",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0692_南豆腐",
    "nameZh": "南豆腐",
    "nameEn": "",
    "aliasesZh": [
      "南豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 57,
      "protein": 6,
      "carbs": 2.5,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0692",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0693_冻豆腐",
    "nameZh": "冻豆腐",
    "nameEn": "",
    "aliasesZh": [
      "冻豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 76,
      "protein": 9,
      "carbs": 3,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0693",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0694_油豆腐",
    "nameZh": "油豆腐",
    "nameEn": "",
    "aliasesZh": [
      "油豆腐",
      "豆制品",
      "油炸"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 17,
      "carbs": 5,
      "fat": 17.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0694",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0695_豆泡",
    "nameZh": "豆泡",
    "nameEn": "",
    "aliasesZh": [
      "豆泡",
      "豆制品",
      "油炸"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 17,
      "carbs": 5,
      "fat": 17.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0695",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0696_千张",
    "nameZh": "千张",
    "nameEn": "",
    "aliasesZh": [
      "千张",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 262,
      "protein": 24,
      "carbs": 5,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0696",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0697_百叶",
    "nameZh": "百叶",
    "nameEn": "",
    "aliasesZh": [
      "百叶",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 262,
      "protein": 24,
      "carbs": 5,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0697",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0698_豆腐皮",
    "nameZh": "豆腐皮",
    "nameEn": "",
    "aliasesZh": [
      "豆腐皮",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 300,
      "protein": 44,
      "carbs": 5,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0698",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0699_干豆腐",
    "nameZh": "干豆腐",
    "nameEn": "",
    "aliasesZh": [
      "干豆腐",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 262,
      "protein": 24,
      "carbs": 5,
      "fat": 16
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0699",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0700_干腐竹",
    "nameZh": "干腐竹",
    "nameEn": "",
    "aliasesZh": [
      "干腐竹",
      "豆制品",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 460,
      "protein": 44,
      "carbs": 22,
      "fat": 21
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0700",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0701_豆腐干",
    "nameZh": "豆腐干",
    "nameEn": "",
    "aliasesZh": [
      "豆腐干",
      "豆制品",
      "黄豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 140,
      "protein": 16,
      "carbs": 5,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0701",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0702_香干",
    "nameZh": "香干",
    "nameEn": "",
    "aliasesZh": [
      "香干",
      "豆制品",
      "卤制"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 165,
      "protein": 16,
      "carbs": 5,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0702",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0703_熏干",
    "nameZh": "熏干",
    "nameEn": "",
    "aliasesZh": [
      "熏干",
      "豆制品",
      "烟熏"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 170,
      "protein": 16,
      "carbs": 5,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0703",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0704_茶干",
    "nameZh": "茶干",
    "nameEn": "",
    "aliasesZh": [
      "茶干",
      "豆制品",
      "卤制"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 15,
      "carbs": 5,
      "fat": 7.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0704",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0705_素鸡",
    "nameZh": "素鸡",
    "nameEn": "",
    "aliasesZh": [
      "素鸡",
      "豆制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 192,
      "protein": 13,
      "carbs": 6,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0705",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0706_素鸭",
    "nameZh": "素鸭",
    "nameEn": "",
    "aliasesZh": [
      "素鸭",
      "豆制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 215,
      "protein": 14,
      "carbs": 7,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0706",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0707_素火腿",
    "nameZh": "素火腿",
    "nameEn": "",
    "aliasesZh": [
      "素火腿",
      "豆制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 200,
      "protein": 15,
      "carbs": 6,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0707",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0708_素牛肉",
    "nameZh": "素牛肉",
    "nameEn": "",
    "aliasesZh": [
      "素牛肉",
      "豆制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 235,
      "protein": 18,
      "carbs": 8,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0708",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0709_豆腐脑",
    "nameZh": "豆腐脑",
    "nameEn": "",
    "aliasesZh": [
      "豆腐脑",
      "豆制品",
      "早餐"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 15,
      "protein": 1.9,
      "carbs": 0.7,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0709",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0710_豆花",
    "nameZh": "豆花",
    "nameEn": "",
    "aliasesZh": [
      "豆花",
      "豆制品",
      "早餐"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 15,
      "protein": 1.9,
      "carbs": 0.7,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0710",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0711_黑豆豆腐",
    "nameZh": "黑豆豆腐",
    "nameEn": "",
    "aliasesZh": [
      "黑豆豆腐",
      "豆制品",
      "黑豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 8.5,
      "carbs": 2,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0711",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0712_日本豆腐",
    "nameZh": "日本豆腐",
    "nameEn": "",
    "aliasesZh": [
      "日本豆腐",
      "豆制品",
      "鸡蛋"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 3.5,
      "carbs": 4,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0712",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0713_玉子豆腐",
    "nameZh": "玉子豆腐",
    "nameEn": "",
    "aliasesZh": [
      "玉子豆腐",
      "豆制品",
      "鸡蛋"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 3.5,
      "carbs": 4,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0713",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0714_甜豆浆",
    "nameZh": "甜豆浆",
    "nameEn": "",
    "aliasesZh": [
      "甜豆浆",
      "豆制品",
      "饮品"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 3.2,
      "carbs": 8,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0714",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0715_咸豆浆",
    "nameZh": "咸豆浆",
    "nameEn": "",
    "aliasesZh": [
      "咸豆浆",
      "豆制品",
      "早餐"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 3.5,
      "carbs": 4,
      "fat": 2.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0715",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0716_无糖豆浆",
    "nameZh": "无糖豆浆",
    "nameEn": "",
    "aliasesZh": [
      "无糖豆浆",
      "豆制品",
      "无糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 33,
      "protein": 3.6,
      "carbs": 0.7,
      "fat": 1.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0716",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0717_黑豆豆浆",
    "nameZh": "黑豆豆浆",
    "nameEn": "",
    "aliasesZh": [
      "黑豆豆浆",
      "豆制品",
      "黑豆"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 4.2,
      "carbs": 2,
      "fat": 2.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0717",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0718_五谷豆浆",
    "nameZh": "五谷豆浆",
    "nameEn": "",
    "aliasesZh": [
      "五谷豆浆",
      "豆制品",
      "混合"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 58,
      "protein": 3.8,
      "carbs": 6,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0718",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0719_豆奶",
    "nameZh": "豆奶",
    "nameEn": "",
    "aliasesZh": [
      "豆奶",
      "豆制品",
      "饮品"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 45,
      "protein": 3.5,
      "carbs": 2.5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0719",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0720_维他奶",
    "nameZh": "维他奶",
    "nameEn": "",
    "aliasesZh": [
      "维他奶",
      "豆制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 2.5,
      "carbs": 6.5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0720",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0721_豆本豆",
    "nameZh": "豆本豆",
    "nameEn": "",
    "aliasesZh": [
      "豆本豆",
      "豆制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 3,
      "carbs": 5.5,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0721",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0722_植选豆奶",
    "nameZh": "植选豆奶",
    "nameEn": "",
    "aliasesZh": [
      "植选豆奶",
      "豆制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 55,
      "protein": 3.2,
      "carbs": 5.8,
      "fat": 2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0722",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0723_豆浆粉",
    "nameZh": "豆浆粉",
    "nameEn": "",
    "aliasesZh": [
      "豆浆粉",
      "豆制品",
      "冲调"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 395,
      "protein": 20,
      "carbs": 58,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0723",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0724_永和豆浆",
    "nameZh": "永和豆浆",
    "nameEn": "",
    "aliasesZh": [
      "永和豆浆",
      "豆制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 395,
      "protein": 20,
      "carbs": 58,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0724",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0725_龙王豆浆",
    "nameZh": "龙王豆浆",
    "nameEn": "",
    "aliasesZh": [
      "龙王豆浆",
      "豆制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 402,
      "protein": 22,
      "carbs": 55,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0725",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0726_黄豆",
    "nameZh": "黄豆",
    "nameEn": "",
    "aliasesZh": [
      "黄豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 389,
      "protein": 35,
      "carbs": 30,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0726",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0727_黑豆",
    "nameZh": "黑豆",
    "nameEn": "",
    "aliasesZh": [
      "黑豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 381,
      "protein": 36,
      "carbs": 33,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0727",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0728_红豆",
    "nameZh": "红豆",
    "nameEn": "",
    "aliasesZh": [
      "红豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 324,
      "protein": 20,
      "carbs": 63,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0728",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0729_赤小豆",
    "nameZh": "赤小豆",
    "nameEn": "",
    "aliasesZh": [
      "赤小豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 324,
      "protein": 20,
      "carbs": 63,
      "fat": 0.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0729",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0730_绿豆",
    "nameZh": "绿豆",
    "nameEn": "",
    "aliasesZh": [
      "绿豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 329,
      "protein": 21,
      "carbs": 62,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0730",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0731_花芸豆",
    "nameZh": "花芸豆",
    "nameEn": "",
    "aliasesZh": [
      "花芸豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 340,
      "protein": 25,
      "carbs": 61,
      "fat": 0.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0731",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0732_干蚕豆",
    "nameZh": "干蚕豆",
    "nameEn": "",
    "aliasesZh": [
      "干蚕豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 335,
      "protein": 25,
      "carbs": 61,
      "fat": 1.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0732",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0733_鹰嘴豆",
    "nameZh": "鹰嘴豆",
    "nameEn": "",
    "aliasesZh": [
      "鹰嘴豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 364,
      "protein": 19,
      "carbs": 61,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0733",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0734_干鹰嘴豆",
    "nameZh": "干鹰嘴豆",
    "nameEn": "",
    "aliasesZh": [
      "干鹰嘴豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 364,
      "protein": 19,
      "carbs": 61,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0734",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0735_白扁豆",
    "nameZh": "白扁豆",
    "nameEn": "",
    "aliasesZh": [
      "白扁豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 336,
      "protein": 23,
      "carbs": 62,
      "fat": 1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0735",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0736_干豌豆",
    "nameZh": "干豌豆",
    "nameEn": "",
    "aliasesZh": [
      "干豌豆",
      "豆制品",
      "豆类",
      "干货"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 334,
      "protein": 20,
      "carbs": 60,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0736",
      "dataType": "豆制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0737_纳豆",
    "nameZh": "纳豆",
    "nameEn": "",
    "aliasesZh": [
      "纳豆",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 212,
      "protein": 17,
      "carbs": 14,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0737",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0738_豆豉",
    "nameZh": "豆豉",
    "nameEn": "",
    "aliasesZh": [
      "豆豉",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 259,
      "protein": 24,
      "carbs": 27,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0738",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0739_豆瓣酱",
    "nameZh": "豆瓣酱",
    "nameEn": "",
    "aliasesZh": [
      "豆瓣酱",
      "豆制品",
      "调料"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 13,
      "carbs": 24,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0739",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0740_郫县豆瓣酱",
    "nameZh": "郫县豆瓣酱",
    "nameEn": "",
    "aliasesZh": [
      "郫县豆瓣酱",
      "豆制品",
      "调料"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 188,
      "protein": 14,
      "carbs": 25,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0740",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0741_黄豆酱",
    "nameZh": "黄豆酱",
    "nameEn": "",
    "aliasesZh": [
      "黄豆酱",
      "豆制品",
      "调料"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 178,
      "protein": 12,
      "carbs": 22,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0741",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0742_甜面酱",
    "nameZh": "甜面酱",
    "nameEn": "",
    "aliasesZh": [
      "甜面酱",
      "豆制品",
      "调料"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 5,
      "carbs": 38,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0742",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0743_味噌",
    "nameZh": "味噌",
    "nameEn": "",
    "aliasesZh": [
      "味噌",
      "豆制品",
      "日式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 199,
      "protein": 12,
      "carbs": 26,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0743",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0744_白味噌",
    "nameZh": "白味噌",
    "nameEn": "",
    "aliasesZh": [
      "白味噌",
      "豆制品",
      "日式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 210,
      "protein": 11,
      "carbs": 30,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0744",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0745_赤味噌",
    "nameZh": "赤味噌",
    "nameEn": "",
    "aliasesZh": [
      "赤味噌",
      "豆制品",
      "日式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 195,
      "protein": 13,
      "carbs": 24,
      "fat": 7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0745",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0746_大酱",
    "nameZh": "大酱",
    "nameEn": "",
    "aliasesZh": [
      "大酱",
      "豆制品",
      "韩式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 198,
      "protein": 13,
      "carbs": 25,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0746",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0747_韩国大酱",
    "nameZh": "韩国大酱",
    "nameEn": "",
    "aliasesZh": [
      "韩国大酱",
      "豆制品",
      "韩式"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 198,
      "protein": 13,
      "carbs": 25,
      "fat": 6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0747",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0748_豆腐乳",
    "nameZh": "豆腐乳",
    "nameEn": "",
    "aliasesZh": [
      "豆腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 153,
      "protein": 12,
      "carbs": 5,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0748",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0749_红腐乳",
    "nameZh": "红腐乳",
    "nameEn": "",
    "aliasesZh": [
      "红腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 153,
      "protein": 12,
      "carbs": 5,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0749",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0750_白腐乳",
    "nameZh": "白腐乳",
    "nameEn": "",
    "aliasesZh": [
      "白腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 145,
      "protein": 12,
      "carbs": 4,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0750",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0751_臭豆腐",
    "nameZh": "臭豆腐",
    "nameEn": "",
    "aliasesZh": [
      "臭豆腐",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 158,
      "protein": 12,
      "carbs": 4,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0751",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0752_青方腐乳",
    "nameZh": "青方腐乳",
    "nameEn": "",
    "aliasesZh": [
      "青方腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 158,
      "protein": 12,
      "carbs": 4,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0752",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0753_玫瑰腐乳",
    "nameZh": "玫瑰腐乳",
    "nameEn": "",
    "aliasesZh": [
      "玫瑰腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 160,
      "protein": 12,
      "carbs": 6,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0753",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0754_糟方腐乳",
    "nameZh": "糟方腐乳",
    "nameEn": "",
    "aliasesZh": [
      "糟方腐乳",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 148,
      "protein": 11,
      "carbs": 5,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0754",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0755_霉豆腐",
    "nameZh": "霉豆腐",
    "nameEn": "",
    "aliasesZh": [
      "霉豆腐",
      "豆制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 12,
      "carbs": 5,
      "fat": 9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0755",
      "dataType": "豆制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0756_鸡蛋_全蛋",
    "nameZh": "鸡蛋(全蛋)（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋(全蛋)",
      "蛋类",
      "全蛋",
      "鸡蛋(全蛋)（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0756",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0757_鸡蛋黄",
    "nameZh": "鸡蛋黄（生）",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋黄",
      "蛋类",
      "蛋黄",
      "鸡蛋黄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 322,
      "protein": 16,
      "carbs": 3.6,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0757",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0758_土鸡蛋",
    "nameZh": "土鸡蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "土鸡蛋",
      "蛋类",
      "散养",
      "土鸡蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 144,
      "protein": 13.3,
      "carbs": 1.1,
      "fat": 9.9
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0758",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0759_乌鸡蛋",
    "nameZh": "乌鸡蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "乌鸡蛋",
      "蛋类",
      "特色",
      "乌鸡蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 158,
      "protein": 13.5,
      "carbs": 1.2,
      "fat": 11.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0759",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0760_咸鸭蛋",
    "nameZh": "咸鸭蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "咸鸭蛋",
      "蛋类",
      "腌制",
      "咸鸭蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 190,
      "protein": 12.7,
      "carbs": 6.3,
      "fat": 13.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0760",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0761_松花蛋",
    "nameZh": "松花蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "松花蛋",
      "蛋类",
      "腌制",
      "松花蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 171,
      "protein": 14.2,
      "carbs": 4.5,
      "fat": 10.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0761",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0762_皮蛋",
    "nameZh": "皮蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "皮蛋",
      "蛋类",
      "腌制",
      "皮蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 171,
      "protein": 14.2,
      "carbs": 4.5,
      "fat": 10.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0762",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0763_咸蛋黄",
    "nameZh": "咸蛋黄（生）",
    "nameEn": "",
    "aliasesZh": [
      "咸蛋黄",
      "蛋类",
      "腌制",
      "咸蛋黄（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 378,
      "protein": 15,
      "carbs": 5,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0763",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0764_煮鸡蛋",
    "nameZh": "煮鸡蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "煮鸡蛋",
      "蛋类",
      "烹饪",
      "煮鸡蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0764",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0765_煎蛋",
    "nameZh": "煎蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "煎蛋",
      "蛋类",
      "烹饪",
      "煎蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 196,
      "protein": 13.5,
      "carbs": 1.2,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0765",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0766_炒蛋",
    "nameZh": "炒蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "炒蛋",
      "蛋类",
      "烹饪",
      "炒蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 185,
      "protein": 13,
      "carbs": 1.5,
      "fat": 14
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0766",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0767_荷包蛋",
    "nameZh": "荷包蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "荷包蛋",
      "蛋类",
      "烹饪",
      "荷包蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 196,
      "protein": 13.5,
      "carbs": 1.2,
      "fat": 15
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0767",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0768_茶叶蛋",
    "nameZh": "茶叶蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "茶叶蛋",
      "蛋类",
      "烹饪",
      "茶叶蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 158,
      "protein": 13,
      "carbs": 1.5,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0768",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0769_水波蛋",
    "nameZh": "水波蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "水波蛋",
      "蛋类",
      "烹饪",
      "水波蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 148,
      "protein": 13,
      "carbs": 1.1,
      "fat": 10
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0769",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0770_溏心蛋",
    "nameZh": "溏心蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "溏心蛋",
      "蛋类",
      "烹饪",
      "溏心蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0770",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0771_全熟蛋",
    "nameZh": "全熟蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "全熟蛋",
      "蛋类",
      "烹饪",
      "全熟蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0771",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0772_蛋花",
    "nameZh": "蛋花（生）",
    "nameEn": "",
    "aliasesZh": [
      "蛋花",
      "蛋类",
      "蛋白",
      "蛋花（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 52,
      "protein": 11,
      "carbs": 0.7,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0772",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0773_蒸蛋",
    "nameZh": "蒸蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "蒸蛋",
      "蛋类",
      "烹饪",
      "蒸蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 8,
      "carbs": 2,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0773",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0774_水蒸蛋",
    "nameZh": "水蒸蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "水蒸蛋",
      "蛋类",
      "烹饪",
      "水蒸蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 8,
      "carbs": 2,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0774",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0775_蛋羹",
    "nameZh": "蛋羹（生）",
    "nameEn": "",
    "aliasesZh": [
      "蛋羹",
      "蛋类",
      "烹饪",
      "蛋羹（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 8,
      "carbs": 3,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0775",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0776_鸡蛋羹",
    "nameZh": "鸡蛋羹",
    "nameEn": "",
    "aliasesZh": [
      "鸡蛋羹",
      "蛋类",
      "烹饪"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 8,
      "carbs": 3,
      "fat": 4
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0776",
      "dataType": "蛋类"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0777_炸蛋",
    "nameZh": "炸蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "炸蛋",
      "蛋类",
      "油炸",
      "炸蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 280,
      "protein": 13,
      "carbs": 3,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0777",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0778_虎皮蛋",
    "nameZh": "虎皮蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "虎皮蛋",
      "蛋类",
      "油炸",
      "虎皮蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 245,
      "protein": 13,
      "carbs": 2,
      "fat": 20
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0778",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0779_皮蛋瘦肉粥",
    "nameZh": "皮蛋瘦肉粥（生）",
    "nameEn": "",
    "aliasesZh": [
      "皮蛋瘦肉粥",
      "蛋类",
      "粥",
      "皮蛋瘦肉粥（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 4.2,
      "carbs": 11,
      "fat": 1.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0779",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0780_皮蛋豆腐",
    "nameZh": "皮蛋豆腐（生）",
    "nameEn": "",
    "aliasesZh": [
      "皮蛋豆腐",
      "蛋类",
      "凉菜",
      "皮蛋豆腐（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 125,
      "protein": 9,
      "carbs": 3,
      "fat": 8.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0780",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0781_卤蛋",
    "nameZh": "卤蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "卤蛋",
      "蛋类",
      "卤制",
      "卤蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 165,
      "protein": 13.5,
      "carbs": 2,
      "fat": 11.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0781",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0782_乡巴佬鸡蛋",
    "nameZh": "乡巴佬鸡蛋（生）",
    "nameEn": "",
    "aliasesZh": [
      "乡巴佬鸡蛋",
      "蛋类",
      "加工",
      "乡巴佬鸡蛋（生）"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 172,
      "protein": 13.5,
      "carbs": 3,
      "fat": 11.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0782",
      "dataType": "蛋类"
    },
    "state": "生重"
  },
  {
    "id": "bitenotes_0783_全脂牛奶",
    "nameZh": "全脂牛奶",
    "nameEn": "",
    "aliasesZh": [
      "全脂牛奶",
      "奶制品",
      "全脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 64,
      "protein": 3.3,
      "carbs": 4.8,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0783",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0784_低脂牛奶",
    "nameZh": "低脂牛奶",
    "nameEn": "",
    "aliasesZh": [
      "低脂牛奶",
      "奶制品",
      "低脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 49,
      "protein": 3.4,
      "carbs": 4.9,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0784",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0785_脱脂牛奶",
    "nameZh": "脱脂牛奶",
    "nameEn": "",
    "aliasesZh": [
      "脱脂牛奶",
      "奶制品",
      "脱脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 35,
      "protein": 3.4,
      "carbs": 5,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0785",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0786_鲜牛奶",
    "nameZh": "鲜牛奶",
    "nameEn": "",
    "aliasesZh": [
      "鲜牛奶",
      "奶制品",
      "巴氏"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 3.2,
      "carbs": 4.7,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0786",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0787_纯牛奶",
    "nameZh": "纯牛奶",
    "nameEn": "",
    "aliasesZh": [
      "纯牛奶",
      "奶制品",
      "常温"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 3,
      "carbs": 4.8,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0787",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0788_高钙牛奶",
    "nameZh": "高钙牛奶",
    "nameEn": "",
    "aliasesZh": [
      "高钙牛奶",
      "奶制品",
      "强化"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 3,
      "carbs": 4.8,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0788",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0789_有机牛奶",
    "nameZh": "有机牛奶",
    "nameEn": "",
    "aliasesZh": [
      "有机牛奶",
      "奶制品",
      "有机"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 3.3,
      "carbs": 4.8,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0789",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0790_特仑苏",
    "nameZh": "特仑苏",
    "nameEn": "",
    "aliasesZh": [
      "特仑苏",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 67,
      "protein": 3.6,
      "carbs": 5,
      "fat": 3.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0790",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0791_金典",
    "nameZh": "金典",
    "nameEn": "",
    "aliasesZh": [
      "金典",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 66,
      "protein": 3.5,
      "carbs": 4.9,
      "fat": 3.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0791",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0792_舒化奶",
    "nameZh": "舒化奶",
    "nameEn": "",
    "aliasesZh": [
      "舒化奶",
      "奶制品",
      "无乳糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 54,
      "protein": 3,
      "carbs": 4.8,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0792",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0793_水牛奶",
    "nameZh": "水牛奶",
    "nameEn": "",
    "aliasesZh": [
      "水牛奶",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 78,
      "protein": 4.2,
      "carbs": 5.5,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0793",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0794_羊奶",
    "nameZh": "羊奶",
    "nameEn": "",
    "aliasesZh": [
      "羊奶",
      "奶制品",
      "羊乳"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 69,
      "protein": 3.6,
      "carbs": 4.5,
      "fat": 4.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0794",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0795_骆驼奶",
    "nameZh": "骆驼奶",
    "nameEn": "",
    "aliasesZh": [
      "骆驼奶",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 60,
      "protein": 3.5,
      "carbs": 4.8,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0795",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0796_马奶",
    "nameZh": "马奶",
    "nameEn": "",
    "aliasesZh": [
      "马奶",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 42,
      "protein": 2.2,
      "carbs": 5.5,
      "fat": 1.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0796",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0797_原味酸奶",
    "nameZh": "原味酸奶",
    "nameEn": "",
    "aliasesZh": [
      "原味酸奶",
      "奶制品",
      "原味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 72,
      "protein": 3.5,
      "carbs": 9,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0797",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0798_希腊酸奶",
    "nameZh": "希腊酸奶",
    "nameEn": "",
    "aliasesZh": [
      "希腊酸奶",
      "奶制品",
      "高蛋白"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 97,
      "protein": 9,
      "carbs": 4,
      "fat": 5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0798",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0799_无糖酸奶",
    "nameZh": "无糖酸奶",
    "nameEn": "",
    "aliasesZh": [
      "无糖酸奶",
      "奶制品",
      "无糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 62,
      "protein": 3.5,
      "carbs": 4.5,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0799",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0800_低脂酸奶",
    "nameZh": "低脂酸奶",
    "nameEn": "",
    "aliasesZh": [
      "低脂酸奶",
      "奶制品",
      "低脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 56,
      "protein": 4,
      "carbs": 7,
      "fat": 0.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0800",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0801_脱脂酸奶",
    "nameZh": "脱脂酸奶",
    "nameEn": "",
    "aliasesZh": [
      "脱脂酸奶",
      "奶制品",
      "脱脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 48,
      "protein": 4,
      "carbs": 7,
      "fat": 0.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0801",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0802_老酸奶",
    "nameZh": "老酸奶",
    "nameEn": "",
    "aliasesZh": [
      "老酸奶",
      "奶制品",
      "传统"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 85,
      "protein": 3.2,
      "carbs": 12,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0802",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0803_风味酸奶",
    "nameZh": "风味酸奶",
    "nameEn": "",
    "aliasesZh": [
      "风味酸奶",
      "奶制品",
      "调味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 3,
      "carbs": 14,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0803",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0804_果粒酸奶",
    "nameZh": "果粒酸奶",
    "nameEn": "",
    "aliasesZh": [
      "果粒酸奶",
      "奶制品",
      "果味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 3,
      "carbs": 15,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0804",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0805_草莓酸奶",
    "nameZh": "草莓酸奶",
    "nameEn": "",
    "aliasesZh": [
      "草莓酸奶",
      "奶制品",
      "果味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 3,
      "carbs": 14,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0805",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0806_黄桃酸奶",
    "nameZh": "黄桃酸奶",
    "nameEn": "",
    "aliasesZh": [
      "黄桃酸奶",
      "奶制品",
      "果味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 3,
      "carbs": 14,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0806",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0807_蓝莓酸奶",
    "nameZh": "蓝莓酸奶",
    "nameEn": "",
    "aliasesZh": [
      "蓝莓酸奶",
      "奶制品",
      "果味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 3,
      "carbs": 14,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0807",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0808_红枣酸奶",
    "nameZh": "红枣酸奶",
    "nameEn": "",
    "aliasesZh": [
      "红枣酸奶",
      "奶制品",
      "果味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 3,
      "carbs": 15,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0808",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0809_炭烧酸奶",
    "nameZh": "炭烧酸奶",
    "nameEn": "",
    "aliasesZh": [
      "炭烧酸奶",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 105,
      "protein": 3.2,
      "carbs": 15,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0809",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0810_蒙古酸奶",
    "nameZh": "蒙古酸奶",
    "nameEn": "",
    "aliasesZh": [
      "蒙古酸奶",
      "奶制品",
      "传统"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 8,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0810",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0811_开菲尔",
    "nameZh": "开菲尔",
    "nameEn": "",
    "aliasesZh": [
      "开菲尔",
      "奶制品",
      "发酵"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 3.3,
      "carbs": 7,
      "fat": 2.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0811",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0812_养乐多",
    "nameZh": "养乐多",
    "nameEn": "",
    "aliasesZh": [
      "养乐多",
      "奶制品",
      "乳酸菌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 67,
      "protein": 1.2,
      "carbs": 15.7,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0812",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0813_优益c",
    "nameZh": "优益C",
    "nameEn": "",
    "aliasesZh": [
      "优益C",
      "奶制品",
      "乳酸菌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 68,
      "protein": 1,
      "carbs": 16,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0813",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0814_益力多",
    "nameZh": "益力多",
    "nameEn": "",
    "aliasesZh": [
      "益力多",
      "奶制品",
      "乳酸菌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 67,
      "protein": 1.2,
      "carbs": 15.7,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0814",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0815_每益添",
    "nameZh": "每益添",
    "nameEn": "",
    "aliasesZh": [
      "每益添",
      "奶制品",
      "乳酸菌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 65,
      "protein": 1,
      "carbs": 15,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0815",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0816_味全",
    "nameZh": "味全",
    "nameEn": "",
    "aliasesZh": [
      "味全",
      "奶制品",
      "乳酸菌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "ml"
    },
    "nutrientsPer100g": {
      "calories": 66,
      "protein": 1.1,
      "carbs": 15.5,
      "fat": 0.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0816",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0817_优诺酸奶",
    "nameZh": "优诺酸奶",
    "nameEn": "",
    "aliasesZh": [
      "优诺酸奶",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 105,
      "protein": 3.5,
      "carbs": 13,
      "fat": 4.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0817",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0818_安慕希",
    "nameZh": "安慕希",
    "nameEn": "",
    "aliasesZh": [
      "安慕希",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 93,
      "protein": 3.1,
      "carbs": 13.5,
      "fat": 3.1
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0818",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0819_纯甄",
    "nameZh": "纯甄",
    "nameEn": "",
    "aliasesZh": [
      "纯甄",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 92,
      "protein": 3,
      "carbs": 13.5,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0819",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0820_莫斯利安",
    "nameZh": "莫斯利安",
    "nameEn": "",
    "aliasesZh": [
      "莫斯利安",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 95,
      "protein": 3.2,
      "carbs": 14,
      "fat": 3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0820",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0821_畅轻",
    "nameZh": "畅轻",
    "nameEn": "",
    "aliasesZh": [
      "畅轻",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 88,
      "protein": 3,
      "carbs": 12,
      "fat": 3.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0821",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0822_冠益乳",
    "nameZh": "冠益乳",
    "nameEn": "",
    "aliasesZh": [
      "冠益乳",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 90,
      "protein": 3.1,
      "carbs": 12.5,
      "fat": 3.2
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0822",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0823_芝士",
    "nameZh": "芝士",
    "nameEn": "",
    "aliasesZh": [
      "芝士",
      "奶制品",
      "干酪"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 350,
      "protein": 25,
      "carbs": 1.3,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0823",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0824_切达奶酪",
    "nameZh": "切达奶酪",
    "nameEn": "",
    "aliasesZh": [
      "切达奶酪",
      "奶制品",
      "硬质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 402,
      "protein": 25,
      "carbs": 1.3,
      "fat": 33
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0824",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0825_马苏里拉",
    "nameZh": "马苏里拉",
    "nameEn": "",
    "aliasesZh": [
      "马苏里拉",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 280,
      "protein": 28,
      "carbs": 3,
      "fat": 17
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0825",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0826_奶油奶酪",
    "nameZh": "奶油奶酪",
    "nameEn": "",
    "aliasesZh": [
      "奶油奶酪",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 342,
      "protein": 6,
      "carbs": 4,
      "fat": 34
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0826",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0827_马斯卡彭",
    "nameZh": "马斯卡彭",
    "nameEn": "",
    "aliasesZh": [
      "马斯卡彭",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 429,
      "protein": 4,
      "carbs": 4,
      "fat": 44
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0827",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0828_帕玛森",
    "nameZh": "帕玛森",
    "nameEn": "",
    "aliasesZh": [
      "帕玛森",
      "奶制品",
      "硬质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 431,
      "protein": 38,
      "carbs": 4,
      "fat": 29
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0828",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0829_布里奶酪",
    "nameZh": "布里奶酪",
    "nameEn": "",
    "aliasesZh": [
      "布里奶酪",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 334,
      "protein": 21,
      "carbs": 0.5,
      "fat": 28
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0829",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0830_卡门贝尔",
    "nameZh": "卡门贝尔",
    "nameEn": "",
    "aliasesZh": [
      "卡门贝尔",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 300,
      "protein": 20,
      "carbs": 0.5,
      "fat": 24
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0830",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0831_高达奶酪",
    "nameZh": "高达奶酪",
    "nameEn": "",
    "aliasesZh": [
      "高达奶酪",
      "奶制品",
      "半硬"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 356,
      "protein": 25,
      "carbs": 2.2,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0831",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0832_瑞士奶酪",
    "nameZh": "瑞士奶酪",
    "nameEn": "",
    "aliasesZh": [
      "瑞士奶酪",
      "奶制品",
      "硬质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 380,
      "protein": 27,
      "carbs": 5,
      "fat": 28
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0832",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0833_埃曼塔尔",
    "nameZh": "埃曼塔尔",
    "nameEn": "",
    "aliasesZh": [
      "埃曼塔尔",
      "奶制品",
      "硬质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 380,
      "protein": 27,
      "carbs": 5,
      "fat": 28
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0833",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0834_蓝纹奶酪",
    "nameZh": "蓝纹奶酪",
    "nameEn": "",
    "aliasesZh": [
      "蓝纹奶酪",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 353,
      "protein": 21,
      "carbs": 2.3,
      "fat": 29
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0834",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0835_菲达奶酪",
    "nameZh": "菲达奶酪",
    "nameEn": "",
    "aliasesZh": [
      "菲达奶酪",
      "奶制品",
      "羊奶"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 264,
      "protein": 14,
      "carbs": 4.1,
      "fat": 21
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0835",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0836_山羊奶酪",
    "nameZh": "山羊奶酪",
    "nameEn": "",
    "aliasesZh": [
      "山羊奶酪",
      "奶制品",
      "羊奶"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 364,
      "protein": 22,
      "carbs": 2,
      "fat": 30
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0836",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0837_里科塔",
    "nameZh": "里科塔",
    "nameEn": "",
    "aliasesZh": [
      "里科塔",
      "奶制品",
      "软质"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 174,
      "protein": 11,
      "carbs": 3,
      "fat": 13
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0837",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0838_白干酪",
    "nameZh": "白干酪",
    "nameEn": "",
    "aliasesZh": [
      "白干酪",
      "奶制品",
      "低脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 11,
      "carbs": 3.4,
      "fat": 4.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0838",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0839_乡村奶酪",
    "nameZh": "乡村奶酪",
    "nameEn": "",
    "aliasesZh": [
      "乡村奶酪",
      "奶制品",
      "低脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 98,
      "protein": 11,
      "carbs": 3.4,
      "fat": 4.3
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0839",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0840_芝士片",
    "nameZh": "芝士片",
    "nameEn": "",
    "aliasesZh": [
      "芝士片",
      "奶制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 177,
      "protein": 11,
      "carbs": 6,
      "fat": 12
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0840",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0841_芝士粉",
    "nameZh": "芝士粉",
    "nameEn": "",
    "aliasesZh": [
      "芝士粉",
      "奶制品",
      "调味"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 420,
      "protein": 38,
      "carbs": 5,
      "fat": 26
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0841",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0842_奶酪棒",
    "nameZh": "奶酪棒",
    "nameEn": "",
    "aliasesZh": [
      "奶酪棒",
      "奶制品",
      "零食"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 328,
      "protein": 18,
      "carbs": 22,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0842",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0843_妙可蓝多",
    "nameZh": "妙可蓝多",
    "nameEn": "",
    "aliasesZh": [
      "妙可蓝多",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 328,
      "protein": 18,
      "carbs": 22,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0843",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0844_百吉福",
    "nameZh": "百吉福",
    "nameEn": "",
    "aliasesZh": [
      "百吉福",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 330,
      "protein": 18,
      "carbs": 23,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0844",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0845_伊利奶酪棒",
    "nameZh": "伊利奶酪棒",
    "nameEn": "",
    "aliasesZh": [
      "伊利奶酪棒",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 325,
      "protein": 17,
      "carbs": 22,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0845",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0846_光明奶酪棒",
    "nameZh": "光明奶酪棒",
    "nameEn": "",
    "aliasesZh": [
      "光明奶酪棒",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 328,
      "protein": 18,
      "carbs": 22,
      "fat": 19
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0846",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0847_奶粉",
    "nameZh": "奶粉",
    "nameEn": "",
    "aliasesZh": [
      "奶粉",
      "奶制品",
      "全脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 496,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0847",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0848_全脂奶粉",
    "nameZh": "全脂奶粉",
    "nameEn": "",
    "aliasesZh": [
      "全脂奶粉",
      "奶制品",
      "全脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 496,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0848",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0849_脱脂奶粉",
    "nameZh": "脱脂奶粉",
    "nameEn": "",
    "aliasesZh": [
      "脱脂奶粉",
      "奶制品",
      "脱脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 362,
      "protein": 36,
      "carbs": 52,
      "fat": 0.8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0849",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0850_低脂奶粉",
    "nameZh": "低脂奶粉",
    "nameEn": "",
    "aliasesZh": [
      "低脂奶粉",
      "奶制品",
      "低脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 420,
      "protein": 32,
      "carbs": 48,
      "fat": 8
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0850",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0851_中老年奶粉",
    "nameZh": "中老年奶粉",
    "nameEn": "",
    "aliasesZh": [
      "中老年奶粉",
      "奶制品",
      "配方"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 480,
      "protein": 24,
      "carbs": 45,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0851",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0852_高钙奶粉",
    "nameZh": "高钙奶粉",
    "nameEn": "",
    "aliasesZh": [
      "高钙奶粉",
      "奶制品",
      "强化"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 480,
      "protein": 25,
      "carbs": 42,
      "fat": 23
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0852",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0853_学生奶粉",
    "nameZh": "学生奶粉",
    "nameEn": "",
    "aliasesZh": [
      "学生奶粉",
      "奶制品",
      "配方"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 490,
      "protein": 25,
      "carbs": 48,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0853",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0854_孕妇奶粉",
    "nameZh": "孕妇奶粉",
    "nameEn": "",
    "aliasesZh": [
      "孕妇奶粉",
      "奶制品",
      "配方"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 480,
      "protein": 24,
      "carbs": 46,
      "fat": 22
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0854",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0855_女士奶粉",
    "nameZh": "女士奶粉",
    "nameEn": "",
    "aliasesZh": [
      "女士奶粉",
      "奶制品",
      "配方"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 460,
      "protein": 26,
      "carbs": 48,
      "fat": 18
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0855",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0856_雀巢奶粉",
    "nameZh": "雀巢奶粉",
    "nameEn": "",
    "aliasesZh": [
      "雀巢奶粉",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 510,
      "protein": 24,
      "carbs": 42,
      "fat": 26
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0856",
      "dataType": "奶制品"
    },
    "state": "干重"
  },
  {
    "id": "bitenotes_0857_伊利",
    "nameZh": "伊利",
    "nameEn": "",
    "aliasesZh": [
      "伊利",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 496,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0857",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0858_蒙牛",
    "nameZh": "蒙牛",
    "nameEn": "",
    "aliasesZh": [
      "蒙牛",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 496,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0858",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0859_光明",
    "nameZh": "光明",
    "nameEn": "",
    "aliasesZh": [
      "光明",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 495,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0859",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0860_三元",
    "nameZh": "三元",
    "nameEn": "",
    "aliasesZh": [
      "三元",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 495,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0860",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0861_完达山",
    "nameZh": "完达山",
    "nameEn": "",
    "aliasesZh": [
      "完达山",
      "奶制品",
      "品牌"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 496,
      "protein": 26,
      "carbs": 38,
      "fat": 27
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0861",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0862_淡奶油",
    "nameZh": "淡奶油",
    "nameEn": "",
    "aliasesZh": [
      "淡奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0862",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0863_稀奶油",
    "nameZh": "稀奶油",
    "nameEn": "",
    "aliasesZh": [
      "稀奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0863",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0864_浓奶油",
    "nameZh": "浓奶油",
    "nameEn": "",
    "aliasesZh": [
      "浓奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0864",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0865_鲜奶油",
    "nameZh": "鲜奶油",
    "nameEn": "",
    "aliasesZh": [
      "鲜奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0865",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0866_动物性奶油",
    "nameZh": "动物性奶油",
    "nameEn": "",
    "aliasesZh": [
      "动物性奶油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 345,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 37
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0866",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0867_植物奶油",
    "nameZh": "植物奶油",
    "nameEn": "",
    "aliasesZh": [
      "植物奶油",
      "奶制品",
      "人造"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 312,
      "protein": 0.5,
      "carbs": 8,
      "fat": 32
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0867",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0868_人造奶油",
    "nameZh": "人造奶油",
    "nameEn": "",
    "aliasesZh": [
      "人造奶油",
      "奶制品",
      "人造"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 312,
      "protein": 0.5,
      "carbs": 8,
      "fat": 32
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0868",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0869_无盐黄油",
    "nameZh": "无盐黄油",
    "nameEn": "",
    "aliasesZh": [
      "无盐黄油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 717,
      "protein": 0.9,
      "carbs": 0.1,
      "fat": 81
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0869",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0870_有盐黄油",
    "nameZh": "有盐黄油",
    "nameEn": "",
    "aliasesZh": [
      "有盐黄油",
      "奶制品",
      "高脂"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 717,
      "protein": 0.9,
      "carbs": 0.1,
      "fat": 81
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0870",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0871_发酵黄油",
    "nameZh": "发酵黄油",
    "nameEn": "",
    "aliasesZh": [
      "发酵黄油",
      "奶制品",
      "特色"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 720,
      "protein": 0.9,
      "carbs": 0.2,
      "fat": 81.5
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0871",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0872_植物黄油",
    "nameZh": "植物黄油",
    "nameEn": "",
    "aliasesZh": [
      "植物黄油",
      "奶制品",
      "人造"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 534,
      "protein": 0,
      "carbs": 0,
      "fat": 60
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0872",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0873_人造黄油",
    "nameZh": "人造黄油",
    "nameEn": "",
    "aliasesZh": [
      "人造黄油",
      "奶制品",
      "人造"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 534,
      "protein": 0,
      "carbs": 0,
      "fat": 60
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0873",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0874_麦淇淋",
    "nameZh": "麦淇淋",
    "nameEn": "",
    "aliasesZh": [
      "麦淇淋",
      "奶制品",
      "人造"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 534,
      "protein": 0,
      "carbs": 0,
      "fat": 60
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0874",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0875_酥油",
    "nameZh": "酥油",
    "nameEn": "",
    "aliasesZh": [
      "酥油",
      "奶制品",
      "精炼"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fat": 100
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0875",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0876_炼乳",
    "nameZh": "炼乳",
    "nameEn": "",
    "aliasesZh": [
      "炼乳",
      "奶制品",
      "甜"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 321,
      "protein": 7.9,
      "carbs": 54,
      "fat": 8.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0876",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0877_甜炼乳",
    "nameZh": "甜炼乳",
    "nameEn": "",
    "aliasesZh": [
      "甜炼乳",
      "奶制品",
      "甜"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 321,
      "protein": 7.9,
      "carbs": 54,
      "fat": 8.7
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0877",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0878_淡炼乳",
    "nameZh": "淡炼乳",
    "nameEn": "",
    "aliasesZh": [
      "淡炼乳",
      "奶制品",
      "无糖"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 127,
      "protein": 6.8,
      "carbs": 9.3,
      "fat": 7.6
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0878",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0879_奶精",
    "nameZh": "奶精",
    "nameEn": "",
    "aliasesZh": [
      "奶精",
      "奶制品",
      "咖啡"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 545,
      "protein": 4.5,
      "carbs": 52,
      "fat": 35
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0879",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0880_咖啡伴侣",
    "nameZh": "咖啡伴侣",
    "nameEn": "",
    "aliasesZh": [
      "咖啡伴侣",
      "奶制品",
      "咖啡"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 545,
      "protein": 4.5,
      "carbs": 52,
      "fat": 35
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0880",
      "dataType": "奶制品"
    },
    "state": "成品"
  },
  {
    "id": "bitenotes_0881_植脂末",
    "nameZh": "植脂末",
    "nameEn": "",
    "aliasesZh": [
      "植脂末",
      "奶制品",
      "加工"
    ],
    "aliasesEn": [],
    "serving": {
      "amount": 100,
      "unit": "g"
    },
    "nutrientsPer100g": {
      "calories": 545,
      "protein": 4.5,
      "carbs": 52,
      "fat": 35
    },
    "source": {
      "name": "BiteNotes Common Foods",
      "externalId": "foods_complete_0881",
      "dataType": "奶制品"
    },
    "state": "成品"
  }
];

export default commonFoods;

// 兼容 CommonJS 调试脚本。
if (typeof module !== 'undefined' && module.exports) {
  module.exports = commonFoods;
}
