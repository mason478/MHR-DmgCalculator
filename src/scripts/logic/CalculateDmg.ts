/* Logic of damage calculation,formula:
TotalDamage = round(PhysicDamage) + round(ElementDamage),
PhysicDamage = MotionValue * (PhysicAttack/100) * (MonsterHitRate/100) * SharpnessCorrection * CriticalCorrection * OtherCorrection;
           1. MotionValue: depends on weapon type or motion type
           2. PhysicAttack = ((RawAttack * MultiCorrection1) + PlusCorrection1) * MultiCorrection2
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
import { type Skill, CalcMethod, SkillCategory, AttackBoost } from '@/scripts/data/Skills'
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

class physicsDamageCalculator extends C {
  /**
   * Calculate the attack multi correction type 1
   */
  private calcMultiCorrection1(): number {
    let total: number = 1

    //  skills that affect attack
    const attackSkills = this.ctx.skills.filter((skill) => skill.category === SkillCategory.ATTACK)
    for (const skill of attackSkills) {
      for (const levelValue of skill.levelValue) {
        const m: number =
          levelValue.calcMethod === CalcMethod.MULTI
            ? levelValue.valueM != undefined
              ? levelValue.valueM
              : 0
            : 1
        total += m
      }
    }
    return total
  }

  /*
   * Calculate the physics attack power:
   * PhysicAttack = ((RawAttack * MultiCorrection1) + PlusCorrection1) * MultiCorrection2
   *
   * @return Physics attack power
   */
  calcAttack(): number {
    const raw = this.ctx.physicsAttack
  }

  /**
   * Calculate the monster's hit rate.
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

export default {
  /**
   * Calculate the total damage based on weapon attack power.
   * @param weaponAttack Power of weapon's attack.
   * @return Total damage of weapon.
   */
  calculateDmg(weaponAttack: number): number {
    // Formula: TotalDamage = PhysicDamage + ElementDamage,
    // PhysicDamage = MotionValue*(Attack/100)*(HitRate/100)*SharpnessCorrection*
    let response: number = 0
    response = weaponAttack * 2 // PhysicDamage
    return response
  }
}
