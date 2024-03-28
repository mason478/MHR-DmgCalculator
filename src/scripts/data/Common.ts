// some common data

// weapon's or motion's attack type
export enum AttackType {
  UNKNOWN = 0,
  // slashing type, like long sword, great sword
  SLASHING = 1,
  // hitting type, like hammer
  HITTING = 2,
  // shooting type, like bow
  SHOTTING = 3
}

// element types
export enum Element {
  UNKNOWN = 0,
  FIRE = 1,
  WATER = 2,
  THUNDER = 3,
  ICE = 4,
  DRAGON = 5
}

export const elementNamesMap = new Map<Element, string>([
  [Element.UNKNOWN, '无'],
  [Element.FIRE, '火'],
  [Element.WATER, '水'],
  [Element.THUNDER, '雷'],
  [Element.ICE, '冰'],
  [Element.DRAGON, '龙']
])
