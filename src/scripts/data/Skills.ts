/* 
Skills data, including weapon's and character's skills,
  there are 4 categories of skills that could influence damage:
       1. attack: boost physics or element attack
       2. critical rate: boost critical rate
       3. enforcement: extra correction 比如 火やられ特効
  data source:
      1. https://hyperwiki.jp/mhr/system-power/
      2. https://gamecat.fun/index.php?title=%E6%8A%80%E8%83%BD%E4%B8%8E%E9%A5%B0%E5%93%81
*/

import { AttackType } from './Common'
import { WeaponType } from './Weapons'

const BASIC_CRITICAL_CORRECTION: number = 1.25
const BASIC_ELEMENT_CRITICAL_CORRECTION: number = 1

const enum Category {
  UNKNOWN = 0,
  ATTACK = 1,
  CRITICAL_RATE = 2,
  CRITICAL_ENFORCEMENT = 3,
  ElEMENT_CRITICAL_ENFORCEMENT = 4,
  OTHER_ENFORCEMENT = 5
}

// attack calculation methods
const enum CalcMethod {
  UNKNOWN = 0,
  PLUS = 1,
  MULTI = 2,
  //plus and multi
  MIX = 3
}

// skill influence's scope
const enum Scope {
  UNKNOWN = 0,
  // partial: influence correction1
  PARTIAL = 1,
  // global: influence correction2
  GLOBAL = 2
  // valid for only specific weapon types
  // SPECIFIC_WEAPONS = 2,
  // RAMPAGE = 3
}

// skill levels
const enum Level {
  UNKNOWN = 0,
  LEVEL1 = 1,
  LEVEL2 = 2,
  LEVEL3 = 3,
  LEVEL4 = 4,
  LEVEL5 = 5,
  LEVEL6 = 6,
  LEVEL7 = 7
}

export interface LevelValue {
  level: Level
  calcMethod: CalcMethod
  // for plus
  valueP?: number
  // for multi
  valueM?: number
}

// the precondition of the skill could be activated or valid
const enum Precondition {
  UNKNOWN = 0,
  // when critical attack happens, the skill can be valid
  CRITICAL_ATTACK = 1,
  // when monster is at rage status, the skill can be activated
  MONSTER_RAGE = 2,
  // TODO: improve this
  // hit rate >= 40%
  HIT_RATE_ABOVE_40 = 3
}

export interface Skill {
  id: number
  name: string
  category: Category
  // the attack type that the skill affects
  attackType: AttackType
  scope: Scope
  levelValues: Array<LevelValue>
  // if not null, the skill will be activated when the precondition is met
  preCondition?: Precondition
  // if not null, the skill will be activated when the weapon type is in the array
  availableWeaponTypes?: Array<WeaponType>
}

const AttackBoost: Skill = {
  id: 1,
  name: '攻击',
  category: Category.ATTACK,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 3,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 6,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      calcMethod: CalcMethod.PLUS,
      valueP: 9
    },
    {
      level: Level.LEVEL4,
      calcMethod: CalcMethod.MIX,
      valueP: 7,
      valueM: 0.05
    },
    {
      level: Level.LEVEL5,
      calcMethod: CalcMethod.MIX,
      valueP: 8,
      valueM: 0.06
    },
    {
      level: Level.LEVEL6,
      calcMethod: CalcMethod.MIX,
      valueP: 9,
      valueM: 0.08
    },
    {
      level: Level.LEVEL7,
      calcMethod: CalcMethod.MIX,
      valueP: 10,
      valueM: 0.1
    }
  ]
}

const CriticalEyes: Skill = {
  id: 2,
  name: '看破',
  category: Category.CRITICAL_RATE,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      calcMethod: CalcMethod.PLUS,
      valueP: 5
    },
    {
      level: Level.LEVEL2,
      calcMethod: CalcMethod.PLUS,
      valueP: 10
    },
    {
      level: Level.LEVEL3,
      calcMethod: CalcMethod.PLUS,
      valueP: 15
    },
    {
      level: Level.LEVEL4,
      calcMethod: CalcMethod.PLUS,
      valueP: 20
    },
    {
      level: Level.LEVEL5,
      calcMethod: CalcMethod.PLUS,
      valueP: 25
    },
    {
      level: Level.LEVEL6,
      calcMethod: CalcMethod.PLUS,
      valueP: 30
    },
    {
      level: Level.LEVEL7,
      calcMethod: CalcMethod.PLUS,
      valueP: 40
    }
  ]
}
const CriticalBoost: Skill = {
  id: 3,
  name: '超会心',
  category: Category.CRITICAL_ENFORCEMENT,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      calcMethod: CalcMethod.PLUS,
      valueP: 0.05
    },
    {
      level: Level.LEVEL2,
      calcMethod: CalcMethod.PLUS,
      valueP: 0.1
    },
    {
      level: Level.LEVEL3,
      calcMethod: CalcMethod.PLUS,
      valueP: 0.15
    }
  ],
  preCondition: Precondition.CRITICAL_ATTACK
}

// 挑战者，影响物理攻击
const AgitatorAttack: Skill = {
  id: 4,
  name: '挑战者',
  category: Category.ATTACK,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 4,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 8,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 12,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 16,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 20,
      calcMethod: CalcMethod.PLUS
    }
  ]
}

// 挑战者，影响会心
const AgitatorCriticalRate: Skill = {
  id: 5,
  name: '挑战者',
  category: Category.CRITICAL_RATE,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 3,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 5,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 7,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL4,
      valueP: 10,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL5,
      valueP: 15,
      calcMethod: CalcMethod.PLUS
    }
  ]
}

const PeakPerformance: Skill = {
  id: 6,
  name: '无伤',
  category: Category.ATTACK,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 5,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 10,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 20,
      calcMethod: CalcMethod.PLUS
    }
  ]
}

const WeaknessExploit: Skill = {
  id: 7,
  name: '弱点特效',
  category: Category.CRITICAL_RATE,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  preCondition: Precondition.HIT_RATE_ABOVE_40,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 15,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 30,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 50,
      calcMethod: CalcMethod.PLUS
    }
  ]
}

const LatentPower: Skill = {
  id: 8,
  name: '力量解放',
  category: Category.CRITICAL_RATE,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: Level.UNKNOWN,
      valueP: 0,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL1,
      valueP: 10,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL2,
      valueP: 20,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL3,
      valueP: 30,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL4,
      valueP: 40,
      calcMethod: CalcMethod.PLUS
    },
    {
      level: Level.LEVEL5,
      valueP: 50,
      calcMethod: CalcMethod.PLUS
    }
  ]
}

const allSkills: Skill[] = [
  AttackBoost,
  CriticalEyes,
  CriticalBoost,
  PeakPerformance,
  WeaknessExploit,
  LatentPower
]
export {
  Category as SkillCategory,
  Scope,
  CalcMethod,
  AttackBoost,
  CriticalEyes,
  CriticalBoost,
  BASIC_CRITICAL_CORRECTION,
  BASIC_ELEMENT_CRITICAL_CORRECTION,
  Level as SkillLevel,
  allSkills
}
