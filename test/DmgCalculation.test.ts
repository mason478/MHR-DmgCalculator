import { physicsDamageCalculator, Context } from '../src/scripts/logic/DmgCalculator'
import { WeaponType, Weapon, Sharpness } from '../src/scripts/data/Weapons'
import weaponData from '../src/scripts/data/Weapons'
import { PhysicsAttackType, AttackType } from '../src/scripts/data/Common'
import { allMonstersMap, MonsterStatus } from '../src/scripts/data/Monsters'
import {
  BASIC_CRITICAL_CORRECTION,
  Skill,
  SkillCategory,
  Scope,
  SkillLevel,
  CalcMethod
} from '../src/scripts/data/Skills'
import { ItemLevel } from '../src/scripts/data/Items'
import items from '../src/scripts/data/Items'
import exp from 'constants'

/*
    Test Great Sword:
        weapons:
            1. weapon1: blue sharpness, no element, no critical
            2. weapon2: blue sharpness, with element, no critical
            3. weapon3: blue sharpness, with critical, no element
        skills:
            1. skill1: attack boost
            2. skill2: critical eyes
            3. skill3: critical boost
            ...
        items: Petalace, PowerCharm
            ...
        monster: KarakuriFrog
*/

const karakuriFrog = allMonstersMap.get(1)
const weapon1: Weapon = {
  weaponType: WeaponType.GREAT_SWORD,
  name: 'Weapon1',
  motions: [
    {
      id: 4,
      name: '蓄力斩Lv3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 105,
      elementCorrection: 1.5,
      abnormalStatusCorrection: 1.5,
      extraPhysicsCorrection: 1.3
    }
    //{
    //  // STRONG_CHARGED_SLASH_LV3
    //  id: 9,
    //  name: '强蓄力斩Lv3',
    //  attackType: PhysicsAttackType.SLASHING,
    //  motionValue: 52,
    //  elementCorrection: 2.25,
    //  abnormalStatusCorrection: 2.25
    //}
  ],
  sharpness: Sharpness.YELLOW,
  physicsAttack: 90
}

const skill1: Skill = {
  id: 1,
  name: '攻击',
  category: SkillCategory.ATTACK,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: SkillLevel.LEVEL4,
      calcMethod: CalcMethod.MIX,
      valueP: 7,
      valueM: 0.05
    }
  ]
}

const skill2: Skill = {
  id: 2,
  name: '看破',
  category: SkillCategory.CRITICAL_RATE,
  attackType: AttackType.PHYSICS,
  scope: Scope.PARTIAL,
  levelValues: [
    {
      level: SkillLevel.LEVEL4,
      calcMethod: CalcMethod.PLUS,
      valueP: 20
    }
  ]
}

const item1 = items.Petalace
item1.levelValues = [{ level: ItemLevel.LV1, value: 20 }]

const item2 = items.PowerCharm

describe('Test weapon1 damage', () => {
  const context1: Context = {
    weapon: weapon1,
    // @ts-ignore
    monster: karakuriFrog,
    // skills: [skill1, skill2]
    items: [item1, item2]
  }
  const c = new physicsDamageCalculator(context1)

  test('calculate attack', () => {
    let expectedAttack =
      (weapon1.physicsAttack ?? 0) + item1.levelValues[0].value + item2.levelValues[0].value
    expect(c.calcAttack()).toEqual(expectedAttack)
  })

  test('get monster hit rate', () => {
    const at = PhysicsAttackType.SLASHING
    expect(c.getMonsterHitRate(1)).toEqual(karakuriFrog?.parts[0].hitRates.get(at)) // head
    expect(c.getMonsterHitRate(2)).toEqual(karakuriFrog?.parts[1].hitRates.get(at)) // body
    expect(c.getMonsterHitRate(3)).toEqual(karakuriFrog?.parts[2].hitRates.get(at))
    expect(c.getMonsterHitRate(4)).toEqual(karakuriFrog?.parts[3].hitRates.get(at))
    expect(c.getMonsterHitRate(5)).toEqual(karakuriFrog?.parts[4].hitRates.get(at))
  })

  test('get sharpness correction', () => {
    const logSpy = jest.spyOn(global.console, 'log')
    console.log('sharpness correction: ' + c.getSharpnessCorrection())
    expect(logSpy).toHaveBeenCalled()

    expect(c.getSharpnessCorrection()).toEqual(
      // @ts-ignore
      weaponData.getSharpnessAttribute(context1.weapon.sharpness).physicsCorrection
    )
  })

  // no critical
  test('calculate critical rate', () => {
    expect(c.calcCriticalRate()).toEqual(0)
  })

  // no critical boost
  test('calculate critical correction', () => {
    expect(c.calcCriticalCorrection()).toEqual([BASIC_CRITICAL_CORRECTION, 1])
  })

  test('calculate damage', () => {
    expect(c.calcDamage()).toEqual([158, 198, 158])
  })
})
