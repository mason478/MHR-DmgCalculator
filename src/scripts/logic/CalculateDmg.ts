// Logic of damage calculation,formula:
// TotalDamage = ROUND(PhysicDamage) + ROUND(ElementDamage),
// PhysicDamage = MotionValue * (Attack/100) * (MonsterHitRate/100) * SharpnessCorrection * CriticalCorrection * OtherCorrection;
// ElementDamage = ElementValue * (MonsterHitRate/100) * ElementCorrection * CriticalElementCorrection * SharpnessCorrection * OtherCorrection;

import { todo } from 'node:test'
// TODO：definition by class

interface Context {}

class DamageCalcultion {
  readonly ctx: Context
  constructor(context: Context) {
    this.ctx = context
  }

  calcAttack(): number {
    return 1
  }
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

function calcElementDamge(): number {
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
