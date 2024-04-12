//Items could affect damage

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
  name: string
  effectMode: EffectMode
  itemType: ItemType
  calcMethod: CalcMethod
  value: number
}

const PowerCharm: Item = {
  name: '力量之护符',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  value: 6
}

const Powertalon: Item = {
  name: '力量之爪',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.POSSESSION,
  calcMethod: CalcMethod.PLUS,
  value: 9
}

const MightSeed: Item = {
  name: '怪力之种',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 10
}

const DemonDrug: Item = {
  name: '鬼人药',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 5
}

const MegaDemonDrug: Item = {
  name: '鬼人药G',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 7
}

const DemonPowder: Item = {
  name: '鬼人粉尘',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.EDIBILITY,
  calcMethod: CalcMethod.PLUS,
  value: 10
}

const DangoBooster: Item = {
  name: '催眠薄荷大福',
  effectMode: EffectMode.ATTACK_BOOST,
  itemType: ItemType.DANGO,
  calcMethod: CalcMethod.PLUS,
  value: 9
}

// const DangoWeaker: Item = {
//   name: '祈愿芋团子',
//   effectMode: EffectMode.WEAKENING,
//   itemType: ItemType.DANGO,
//   calcMethod: CalcMethod.PLUS,
//   value: 9
// }
