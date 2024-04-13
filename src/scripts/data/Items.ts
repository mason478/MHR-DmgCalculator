/*Items could affect damage

data source:
    1. https://hyperwiki.jp/mhr/system-power/
    2. https://gamecat.fun/index.php?title=%E6%8A%80%E8%83%BD%E4%B8%8E%E9%A5%B0%E5%93%81
*/

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
  value: number
}

const PowerCharm: Item = {
  id: 1,
  name: '力量之护符',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  value: 6
}

const PowerTalon: Item = {
  id: 2,
  name: '力量之爪',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  value: 9
}

const MightSeed: Item = {
  id: 3,
  name: '怪力之种',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 10
}

const DemonDrug: Item = {
  id: 4,
  name: '鬼人药',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 5
}

const MegaDemonDrug: Item = {
  id: 5,
  name: '鬼人药G',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 7
}

const DemonPowder: Item = {
  id: 6,
  name: '鬼人粉尘',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 10
}

const DangoBoosterLv1: Item = {
  id: 7,
  name: '催眠薄荷大福Lv1',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  value: 6
}

const DangoBoosterLv2: Item = {
  id: 8,
  name: '催眠薄荷大福Lv2',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  value: 9
}

const DangoBoosterLv3: Item = {
  id: 9,
  name: '催眠薄荷大福Lv3',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  value: 12
}

const DangoBoosterLv4: Item = {
  id: 10,
  name: '催眠薄荷大福Lv4',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  value: 15
}

const Petalace: Item = {
  id: 11,
  name: '花链',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  value: 20
}

const allItemsMap: Map<number, Item> = new Map([
  [PowerCharm.id, PowerCharm],
  [PowerTalon.id, PowerTalon],
  [MightSeed.id, MightSeed],
  [DemonDrug.id, DemonDrug],
  [MegaDemonDrug.id, MegaDemonDrug],
  [DemonPowder.id, DemonPowder],
  [DangoBoosterLv1.id, DangoBoosterLv1],
  [DangoBoosterLv2.id, DangoBoosterLv2],
  [DangoBoosterLv3.id, DangoBoosterLv3],
  [DangoBoosterLv4.id, DangoBoosterLv4],
  [Petalace.id, Petalace]
])

export { allItemsMap, type Item, Petalace, PowerCharm }
