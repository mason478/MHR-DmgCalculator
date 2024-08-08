/*Items could affect damage

data source:
    1. https://hyperwiki.jp/mhr/system-power/
    2. https://gamecat.fun/index.php?title=%E6%8A%80%E8%83%BD%E4%B8%8E%E9%A5%B0%E5%93%81
*/

enum ItemLevel {
  UNKNOWN = 0,
  LV1 = 1,
  LV2 = 2,
  LV3 = 3,
  LV4 = 4,
  LV5 = 5
}

interface LevelValue {
  level?: ItemLevel
  value: number
  // name alias
  alias?: string
}

// items that affect attack power modes
const enum EffectMode {
  UNKNOWN = 0,
  ATTACK_BOOST = 1,
  // weaken monster
  WEAKENING = 2
}

const enum ItemType {
  UNKNOWN = 0,
  POSSESSION = 1,
  EDIBILITY = 2,
  // 团子
  DANGO = 3
}

const enum CalcMethod {
  UNKNOWN = 0,
  PLUS = 1,
  MULTI = 2
}

interface Item {
  id: number
  name: string
  effectMode: EffectMode
  itemType: ItemType
  calcMethod: CalcMethod
  levelValues: Array<LevelValue>
}

const PowerCharm: Item = {
  id: 1,
  name: '力之护符',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  levelValues: [{ value: 6 }]
}

const PowerTalon: Item = {
  id: 2,
  name: '力量之爪',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  levelValues: [{ value: 9 }]
}

const MightSeed: Item = {
  id: 3,
  name: '怪力之种',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  levelValues: [{ value: 10 }]
}

const DemonDrug: Item = {
  id: 4,
  name: '鬼人药',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  levelValues: [
    { level: ItemLevel.UNKNOWN, value: 0, alias: '无' },
    { value: 5, level: ItemLevel.LV1, alias: '鬼人药' }, // 鬼人药
    { value: 7, level: ItemLevel.LV2, alias: '鬼人药G' }, // 鬼人药G
    { value: 10, level: ItemLevel.LV3, alias: '鬼人粉尘' } // 鬼人粉尘
  ]
}

const DangoBooster: Item = {
  id: 5,
  name: '催眠薄荷大福（团子短期催眠术）',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  levelValues: [
    { level: ItemLevel.UNKNOWN, value: 0, alias: '无' },
    { value: 6, level: ItemLevel.LV1 },
    { value: 9, level: ItemLevel.LV2 },
    { value: 12, level: ItemLevel.LV3 },
    { value: 15, level: ItemLevel.LV4 }
  ]
}

const Petalace: Item = {
  id: 6,
  name: '花链',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  levelValues: [{ level: ItemLevel.UNKNOWN, value: 0 }]
}

// {item.id: item}
const allItemsMap: Map<number, Item> = new Map([
  [PowerCharm.id, PowerCharm],
  [PowerTalon.id, PowerTalon],
  [MightSeed.id, MightSeed],
  [DemonDrug.id, DemonDrug],
  [DangoBooster.id, DangoBooster],
  [Petalace.id, Petalace]
])

export default {
  allItemsMap,
  PowerCharm,
  PowerTalon,
  MightSeed,
  DemonDrug,
  DangoBooster,
  Petalace,

  getItemByType(type: ItemType): Array<Item> {
    const allItems = [...allItemsMap.values()]
    const items = allItems.filter((i) => i.itemType == type)

    if (!items) {
      throw new TypeError('Unknown item type: ' + type)
    }
    return items
  },

  getItemById(itemId: number): Item {
    const item = allItemsMap.get(itemId)
    if (!item) {
      throw new TypeError('Unknown item id: ' + itemId)
    }
    return item
  }
}

export { type Item, ItemType, ItemLevel, type LevelValue }
