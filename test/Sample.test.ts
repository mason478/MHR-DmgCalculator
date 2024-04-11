import { physicsDamageCalculator, Context } from '../src/scripts/logic/DmgCalculator'
import { WeaponType, Weapon, Sharpness } from '../src/scripts/data/Weapons'
import { PhysicsAttackType } from '../src/scripts/data/Common'
import { allMonstersMap, MonsterStatus } from '../src/scripts/data/Monsters'

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
        items:
            ...
        monster: KarakuriFrog
*/

const monster = allMonstersMap[1]
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
      abnormalStatusCorrection: 1.5
    }
  ],
  sharpness: Sharpness.BLUE,
  physicsAttack: 100
}

describe('Test weapon1 damage', () => {
  const context1: Context = {
    weapon: weapon1,
    monster: monster,
    monsterStatus: MonsterStatus.NORMAL
    //   monster: Monster
    //   monsterStatus: MonsterStatus
    //   skills: Array<Skill>
  }
  const c = new physicsDamageCalculator(context1)

  test('calculate attack', () => {
    expect(c.calcAttack()).toEqual(100)
  })
})
