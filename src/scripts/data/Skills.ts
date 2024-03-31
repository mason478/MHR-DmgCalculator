// Skills data, including weapon's and character's skills,
// there are 4 categories of skills that could influence damage:
//      attack,critical rate, enforcement and others

import { HitType } from './Common'
import { WeaponType } from './Weapons'

const enum Category {
  UNKNOWN = 0,
  ATTACK = 1,
  CRITICAL_RATE = 2,
  ENFORCEMENT = 3,
  OTHER = 4
}

// attack calculation methods
const enum CalcMethod {
  UNKNOWN = 0,
  ADD = 1,
  MULTI = 2,
  // add or multi, but pick the max one, max(add,multi)
  MIX = 3
}

// skill's scope that could affect attack
const enum Scope {
  UNKNOWN = 0,
  GLOBAL = 1,
  // valid for only specific weapon types
  SPECIFIC_WEAPONS = 2,
  RAMPAGE = 3
}

// skill levels
const enum Level {
  UNKNOWN = 0,
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
  LEVEL_5 = 5,
  LEVEL_6 = 6,
  LEVEL_7 = 7
}

interface LevelValue {
  level: Level
  value: number
}

interface Skill {
  id: number
  name: string
  hitType: HitType
  calcMethod: CalcMethod
  scope: Scope
  levelValue: Array<LevelAndValue>
  // TODO: add Precondition enum
  preCondition?: string
  description?: string
  availableWeaponTypes?: Array<WeaponType>
}

// const AttackBoost: Skill = {
//   id: 1,
//   name: '攻击加成',
//   hitType: HitType.PHYSIC,
//   calcMethod: CalcMethod.ADD,
//   scope: Scope.GLOBAL,
//   level: Level.LEVEL_5,
//   value: 0.1
// }
