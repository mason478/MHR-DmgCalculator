// some common data

export enum AttackType {
  UNKNOWN = 0,
  PHYSICS = 1,
  ELEMENT = 2
}

// weapon's or motion's physical attack type
enum PhysicsAttackType {
  UNKNOWN = 0,
  // slashing type, like long sword, great sword
  SLASHING = 1,
  // hitting type, like hammer
  HITTING = 2,
  // shooting type, like bow
  SHOTTING = 3
}

// element types
enum ElementType {
  UNKNOWN = 0,
  FIRE = 1,
  WATER = 2,
  THUNDER = 3,
  ICE = 4,
  DRAGON = 5
}

const elementNamesMap = new Map<ElementType, string>([
  [ElementType.UNKNOWN, '无'],
  [ElementType.FIRE, '火'],
  [ElementType.WATER, '水'],
  [ElementType.THUNDER, '雷'],
  [ElementType.ICE, '冰'],
  [ElementType.DRAGON, '龙']
])

export { PhysicsAttackType, ElementType, elementNamesMap }
