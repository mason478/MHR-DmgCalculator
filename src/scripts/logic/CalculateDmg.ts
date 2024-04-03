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
import { todo } from 'node:test'
import { PhysicsAttackType, ElementType } from '@/scripts/data/Common'
import { WeaponType, type Weapon } from '@/scripts/data/Weapons'
import { MonsterStatus, type Monster } from '@/scripts/data/Monsters'
import { type Skill, CalcMethod, Scope, SkillCategory, AttackBoost } from '@/scripts/data/Skills'
// TODO：definition by class

interface Context {
  // raw physics attack
  physicsAttack: number
  // element attack
  elementAttack: number
  weapon: Weapon
  monsterStatus: MonsterStatus
  monster: Monster
  skills: Array<Skill>
  // # TODO: items, and others
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
  abstract calcAttack(): number
  abstract calcMonsterHitRate(): number
  abstract calcSharpnessCorrection(): number
  abstract calcCriticalCorrection(): number
  abstract calcOtherCorrection(): number
  // return normal damage ,critical damage and expected damage
  abstract calcDamage(): typeof R
}
// TODO: Skill calculation
class physicsDamageCalculator extends C {
  /**
   * Find out all the skills that affect attack, and calculate the attack multi correction type 1
   */
  private calcMultiCorrection1(): number {
    let total: number = 1

    //  skills that affect attack
    const attackSkills = this.ctx.skills.filter(
      (skill) => skill.category === SkillCategory.ATTACK && skill.scope === Scope.PARTIAL
    )
    for (const skill of attackSkills) {
      for (const levelValue of skill.levelValue) {
        if (
          (levelValue.calcMethod === CalcMethod.MULTI || levelValue.calcMethod) ===
            CalcMethod.MIX &&
          levelValue.valueM != undefined
        ) {
          total += levelValue.valueM
        }
      }
    }
    // TODO: calculate items that affect attack
    return total
  }

  private calcMultiCorrection2(): number {
    let total: number = 1

    const attackSkills = this.ctx.skills.filter(
      (skill) => skill.category === SkillCategory.ATTACK && skill.scope === Scope.GLOBAL
    )

    for (const skill of attackSkills) {
      for (const levelValue of skill.levelValue) {
        if (
          (levelValue.calcMethod === CalcMethod.MULTI ||
            levelValue.calcMethod === CalcMethod.MIX) &&
          levelValue.valueP != undefined
        ) {
          total += levelValue.valueP
        }
      }
    }
    return total
  }

  private calcPlusCorrection(): number {
    let total: number = 0

    // todo: encapsulation
    //  skills that affect attack
    const attackSkills = this.ctx.skills.filter(
      (skill) => skill.category === SkillCategory.ATTACK && skill.scope === Scope.PARTIAL
    )
    // todo: encapsulation
    for (const skill of attackSkills) {
      for (const levelValue of skill.levelValue) {
        if (
          (levelValue.calcMethod === CalcMethod.PLUS || levelValue.calcMethod === CalcMethod.MIX) &&
          levelValue.valueP != undefined
        ) {
          total += levelValue.valueP
        }
      }
    }

    // TODO: calculate items that affect attack

    return total
  }

  /*

   * Calculate the physics attack power:
   * PhysicAttack = ((RawAttack * MultiCorrection1) + PlusCorrection) * MultiCorrection2
   *
   * @return Physics attack power
   */
  calcAttack(): number {
    // TODO: check preCondition
    const raw = this.ctx.physicsAttack
    const multi1 = this.calcMultiCorrection1()
    const multi2 = this.calcMultiCorrection2()
    const p = this.calcPlusCorrection()
    return (raw * multi1 + p) * multi2
  }

  /**
   * Calculate the monster's hit rate, impact factors: weapon type && type, monster parts and maybe skills
   *
   */
  calcMonsterHitRate(): number {}

  calcSharpnessCorrection(): number {}

  calcCriticalCorrection(): number {}

  calcOtherCorrection(): number {}
  calcDamage(): typeof R {}
}

// Physics damage calculation

function calcCriticalRate(): number {
  todo
}

function calcCriticalCorrection(): number {
  todo
}

function calcOtherPhysicCorrection(): number {
  todo
}
function calcPhysicDamge(): number {
  todo
}

// Element damage calculation
function calcElementCorrection(): number {
  todo
}
function calcCriticalElementRate(): number {
  todo
}

function calcCriticalElementCorrection(): number {
  todo
}

function calcOtherElementCorrection(): number {
  todo
}

function calcElementDamage(): number {
  todo
}
