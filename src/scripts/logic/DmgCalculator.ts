/* Logic of damage calculation,formula:
TotalDamage = round(PhysicDamage) + round(ElementDamage),
PhysicDamage = MotionValue * (PhysicAttack/100) * (MonsterHitRate/100) * SharpnessCorrection * CriticalCorrection * OtherCorrection;
           1. MotionValue: depends on weapon type or motion type
           2. PhysicAttack = ((RawAttack * MultiCorrection1) + PlusCorrection) * MultiCorrection2
           3. MonsterHitRate: depends on weapon's hit type and monster's part
           4. SharpnessCorrection: depends on weapon's type or some skills
           5. CriticalCorrection = (BaseCriticalCorrection + CriticalBoost)* CriticalRate/100 + (1-CriticalRate/100),
              it's a mathematic expectation value

ElementDamage = ElementAttack * (MonsterHitRate/100) * ElementCorrection * CriticalElementCorrection * SharpnessCorrection * OtherCorrection;

Data source: https://hyperwiki.jp/mhr/system-power/
*/

import { type Weapon } from '../data/Weapons'
import weaponsData from '../data/Weapons'
import { type Monster } from '../data/Monsters'
import {
  type Skill,
  CalcMethod,
  Scope,
  SkillCategory,
  BASIC_CRITICAL_CORRECTION,
  BASIC_ELEMENT_CRITICAL_CORRECTION
} from '../data/Skills'
import { type Item } from '../data/Items'
import { type otherFactor } from '../data/Others'

export interface Context {
  weapon: Weapon
  monster: Monster
  skills?: Array<Skill>
  items?: Array<Item>
  others?: Array<otherFactor>
}

let R: [number, number, number]

abstract class C {
  protected ctx: Context
  constructor(context: Context) {
    // if ((context.skills.length) > 1) {
    // throw new Error('Too many skills!')
    // }
    // TODO: check ids && level, 不允许重复
    this.ctx = context
  }

  findSkills(category: SkillCategory, scope: Scope): Array<Skill> {
    if (this.ctx.skills === undefined) {
      return []
    }
    const skills = this.ctx.skills.filter(
      (skill) => skill.category === category && skill.scope === scope
    )
    return skills
  }

  private getWeaponCriticalRate(): number {
    const weapon = this.ctx.weapon
    let criticalRate: number = 0
    if (weapon.criticalRate != undefined) {
      criticalRate = weapon.criticalRate
    }
    return criticalRate
  }

  calcCriticalRate(): number {
    let criticalRate = this.getWeaponCriticalRate()
    const skills = this.findSkills(SkillCategory.CRITICAL_RATE, Scope.PARTIAL)

    for (const skill of skills) {
      for (const levelValue of skill.levelValues) {
        if (levelValue.calcMethod === CalcMethod.PLUS && levelValue.valueP != undefined) {
          criticalRate += levelValue.valueP
        }
      }
    }

    return criticalRate
  }

  abstract calcAttack(): number
  abstract getMonsterHitRate(partId: number): number
  abstract getSharpnessCorrection(): number

  /*
    CriticalCorrection = (BaseCriticalCorrection + CriticalBoost)* 1,
    ExpectedCriticalCorrection = (BaseCriticalCorrection + CriticalBoost)* CriticalRate/100 + (1-CriticalRate/100) * 1,
    @return: [CriticalCorrection, ExpectedCriticalCorrection] 
  */
  abstract calcCriticalCorrection(): [number, number]
  abstract calcOtherCorrection(): number

  /**
   * @return:  normal damage ,critical damage and expected damage
   */
  abstract calcDamage(): typeof R
}

// Physics damage calculation
class physicsDamageCalculator extends C {
  private calcSkillsMultiCorrection(skills: Array<Skill>): number {
    let total: number = 1
    for (const skill of skills) {
      for (const levelValue of skill.levelValues) {
        if (
          (levelValue.calcMethod === CalcMethod.MULTI || levelValue.calcMethod == CalcMethod.MIX) &&
          levelValue.valueM != undefined
        ) {
          total += levelValue.valueM
        }
      }
    }
    return total
  }

  /**
   * Find out all the skills and items that affect attack, and calculate the attack multi correction type 1
   */
  private calcMultiCorrection1(): number {
    //  skills that affect attack
    const attackSkills = this.findSkills(SkillCategory.ATTACK, Scope.PARTIAL)
    const total = this.calcSkillsMultiCorrection(attackSkills)

    return total
  }

  private calcMultiCorrection2(): number {
    const attackSkills = this.findSkills(SkillCategory.ATTACK, Scope.GLOBAL)
    const total = this.calcSkillsMultiCorrection(attackSkills)

    return total
  }

  private calcPlusCorrection(): number {
    let total: number = 0
    //  skills that affect attack
    const attackSkills = this.findSkills(SkillCategory.ATTACK, Scope.PARTIAL)
    for (const skill of attackSkills) {
      for (const levelValue of skill.levelValues) {
        if (
          (levelValue.calcMethod === CalcMethod.PLUS || levelValue.calcMethod === CalcMethod.MIX) &&
          levelValue.valueP != undefined
        ) {
          total += levelValue.valueP
        }
      }
    }

    // calculate items that affect attack
    if (this.ctx.items != undefined) {
      for (const item of this.ctx.items) {
        total += item.levelValues[0].value
      }
    }

    return total
  }

  /*
   * Calculate the physics attack power:
   * PhysicAttack = (RawAttack * MultiCorrection1 + PlusCorrection) * MultiCorrection2
   *
   * @return Physics attack power
   */
  calcAttack(): number {
    // TODO: check preCondition
    const raw = this.ctx.weapon.physicsAttack ?? 0
    const m1 = this.calcMultiCorrection1()
    const m2 = this.calcMultiCorrection2()
    const p = this.calcPlusCorrection()
    return (raw * m1 + p) * m2
  }

  /**
   * Calculate the monster's hit rate, impact factors: weapon or motion type, monster parts and maybe skills
   *
   */
  getMonsterHitRate(partId: number): number {
    const part = this.ctx.monster.parts.find((p) => p.id == partId)
    if (part == undefined) {
      return 0
    }
    const attackType = this.ctx.weapon.motions[0].attackType
    const hr = part.hitRates.get(attackType)
    const result = hr != undefined ? hr : 0
    return result
  }

  getSharpnessCorrection(): number {
    const weapon = this.ctx.weapon
    const sharpness = weapon.sharpness
    if (sharpness == undefined) {
      return 1
    }
    const sa = weaponsData.getSharpnessAttribute(sharpness)
    return sa.physicsCorrection
  }

  private getWeaponMotionValue(): number {
    const weapon = this.ctx.weapon
    let motionValue: number = 0
    if (weapon.motions.length > 0) {
      motionValue = weapon.motions[0].motionValue
    }
    return motionValue
  }

  /*  
    CriticalCorrection = (BaseCriticalCorrection + CriticalBoost)* 1,
    ExpectedCriticalCorrection = (BaseCriticalCorrection + CriticalBoost)* CriticalRate/100 + (1-CriticalRate/100) * 1,
    @return [CriticalCorrection, ExpectedCriticalCorrection]
  */
  calcCriticalCorrection(): [number, number] {
    const criticalRate = this.calcCriticalRate()

    let skills: Array<Skill> = []
    if (this.ctx.skills != undefined) {
      skills = this.ctx.skills.filter(
        (skill) => skill.category === SkillCategory.CRITICAL_ENFORCEMENT
      )
    }

    let boost: number = 0

    if (skills.length != 0) {
      boost = skills[0].levelValues[0].valueP ?? 0
    }
    return [
      BASIC_CRITICAL_CORRECTION + boost,
      ((BASIC_CRITICAL_CORRECTION + boost) * criticalRate) / 100 + (1 - criticalRate / 100)
    ]
  }

  calcOtherCorrection(): number {
    // weapon's other correction
    let total: number = 1
    const weapon = this.ctx.weapon
    const m = weapon.motions[0]
    total *= m.extraPhysicsCorrection ?? 1

    //and some other correction
    if (this.ctx.others != undefined) {
      for (const other of this.ctx.others) {
        if (
          other.exclusiveWeaponTypes != undefined &&
          !other.exclusiveWeaponTypes.includes(weapon.weaponType)
        ) {
          continue
        }
        total *= other.physicsCorrection
      }
    }

    return total
  }

  /**
   * Calculate physics damage:
     PhysicDamage = MotionValue * (PhysicAttack/100) * (MonsterHitRate/100) * SharpnessCorrection * CriticalCorrection * OtherCorrection;

   * @return:  normal damage ,critical damage and expected damage
   */
  calcDamage(): typeof R {
    const mv = this.getWeaponMotionValue()
    const attack = this.calcAttack()
    const hitRate = this.getMonsterHitRate(this.ctx.monster.parts[0].id)
    const sharpnessCorrection = this.getSharpnessCorrection()
    const criticalCorrection = this.calcCriticalCorrection()
    const otherCorrection = this.calcOtherCorrection()

    const normalDmg = mv * (attack / 100) * (hitRate / 100) * sharpnessCorrection * otherCorrection
    const criticalDmg = normalDmg * criticalCorrection[0]
    const expectedDmg = normalDmg * criticalCorrection[1]

    return [Math.round(normalDmg), Math.round(criticalDmg), Math.round(expectedDmg)]
  }
}

// Element damage calculation
class elementDamageCalculator extends C {
  calcAttack(): number {
    const attack = this.ctx.weapon.elementAttack ?? 0
    return attack
  }

  getMonsterHitRate(partId: number): number {
    let result: number = 0
    const part = this.ctx.monster.parts.find((p) => p.id == partId)
    if (!part) {
      return result
    }
    const elementType = this.ctx.weapon.elementType
    if (!elementType) {
      return result
    }

    const hr = part.elementHitRates.get(elementType)
    result = hr != undefined ? hr : 0
    return result
  }

  getSharpnessCorrection(): number {
    let result: number = 1
    const sharpness = this.ctx.weapon.sharpness

    if (sharpness == undefined) {
      return result
    }

    const sa = weaponsData.getSharpnessAttribute(sharpness)
    result = sa.elementCorrection
    return result
  }

  calcCriticalCorrection(): [number, number] {
    const criticalRate = this.calcCriticalRate()

    let skills: Array<Skill> = []

    if (this.ctx.skills != undefined) {
      skills = this.ctx.skills.filter(
        (skill) => skill.category === SkillCategory.ElEMENT_CRITICAL_ENFORCEMENT
      )
    }

    let boost: number = 0

    if (skills.length != 0) {
      boost = skills[0].levelValues[0].valueP ?? 0
    }
    return [
      BASIC_ELEMENT_CRITICAL_CORRECTION + boost,
      ((BASIC_ELEMENT_CRITICAL_CORRECTION + boost) * criticalRate) / 100 + (1 - criticalRate / 100)
    ]
  }

  calcOtherCorrection(): number {
    let total: number = 1

    // weapon's other correction
    const weapon = this.ctx.weapon
    const m = weapon.motions[0]
    total *= m.elementCorrection ?? 1

    //and other correction
    if (this.ctx.others != undefined) {
      for (const other of this.ctx.others) {
        total *= other.elementCorrection ?? 1
      }
    }
    return total
  }

  /*
  
  ElementDamage = ElementAttack * (MonsterHitRate/100) * ElementCorrection * CriticalElementCorrection * SharpnessCorrection * OtherCorrection;
  */
  calcDamage(): typeof R {
    const attack = this.calcAttack()
    const hitRate = this.getMonsterHitRate(this.ctx.monster.parts[0].id)
    const sharpnessCorrection = this.getSharpnessCorrection()
    const criticalCorrection = this.calcCriticalCorrection()
    const otherCorrection = this.calcOtherCorrection()

    const normalDmg = attack * (hitRate / 100) * sharpnessCorrection * otherCorrection
    const criticalDmg = normalDmg * criticalCorrection[0]
    const expectedDmg = normalDmg * criticalCorrection[1]

    return [Math.round(normalDmg), Math.round(criticalDmg), Math.round(expectedDmg)]
  }
}

export { physicsDamageCalculator, elementDamageCalculator }
