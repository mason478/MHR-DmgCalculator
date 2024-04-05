// All the weapons data, including types, sharpness, motion value
// Data resources: https://hyperwiki.jp/mhr/ (in Japanese)
import { PhysicsAttackType } from './Common'

export enum WeaponType {
  UNKNOWN = 0,
  GREAT_SWORD = 1,
  LONG_SWORD = 2,
  BOW = 3
}

interface WeaponMotion {
  // motion data reference: https://hyperwiki.jp/mhr/motion-value/
  id: number
  // motion name
  name: string
  attackType: PhysicsAttackType
  motionValue: number
  // element attack value
  elementValue?: number
  // 气绝 眩晕
  faintValue?: number
  // 灭气
  feeblenessValue?: number
  // element damage correction of the motion
  elementCorrection?: number
  abnormalStatusCorrection?: number
  // physic damage correction of the motion, optional
  physicsCorrection?: number
  // extra physics damage correction, optional
  extraPhysicsCorrection?: number
}

export interface Weapon {
  // definition of a weapon
  weaponType: WeaponType
  // weapon's name
  name: string
  //weapon's motions, one weapon may have kinds of motions
  motions: Array<WeaponMotion>
  sharpness?: Sharpness
}

// All weapons --start--
const greatSword: Weapon = {
  weaponType: WeaponType.GREAT_SWORD,
  name: '大剑',
  motions: [
    {
      id: 1,
      //	Overhead Slash
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48
    },
    {
      // Charged Slash level 1
      id: 2,
      name: '蓄力斩Lv1',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48,
      elementCorrection: 1.1,
      abnormalStatusCorrection: 1.1
    },
    {
      // Charged Slash level 2
      id: 3,
      name: '蓄力斩Lv2',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 77,
      elementCorrection: 1.2,
      abnormalStatusCorrection: 1.2
    },
    {
      // Charged Slash level 3
      id: 4,
      name: '蓄力斩Lv3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 105,
      elementCorrection: 1.5,
      abnormalStatusCorrection: 1.5
      // TODO: extra correction
    },
    {
      //SIDE_BLOW
      id: 5,
      name: '横拍',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 16,
      faintValue: 20,
      feeblenessValue: 15
    },
    {
      //STRONG_CHARGED_SLASH_LV0,
      id: 6,
      name: '强蓄力斩Lv0',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 65
    },
    {
      //STRONG_CHARGED_SLASH_LV1,
      id: 7,
      name: '强蓄力斩Lv1',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 65,
      elementCorrection: 1.65,
      abnormalStatusCorrection: 1.65
    },
    {
      //STRONG_CHARGED_SLASH_LV2,
      id: 8,
      name: '强蓄力斩Lv2',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 90,
      elementCorrection: 1.8,
      abnormalStatusCorrection: 1.8
    },
    {
      // STRONG_CHARGED_SLASH_LV3
      id: 9,
      name: '强蓄力斩Lv3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 115,
      elementCorrection: 2.25,
      abnormalStatusCorrection: 2.25
    }
  ]
}

const longSword: Weapon = {
  weaponType: WeaponType.LONG_SWORD,
  name: '太刀',
  motions: [
    {
      id: 1,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48,
      physicsCorrection: 1,
      elementCorrection: 1
    }
  ]
}

// All weapons --end--

// Weapons' sharpness, represented by color
// Data resources: https://hyperwiki.jp/mhr/system-damage/ (in Japanese)
export enum Sharpness {
  UNKNOWN = 0,
  RED = 1,
  ORANGE = 2,
  YELLOW = 3,
  GREEN = 4,
  BLUE = 5,
  WHITE = 6,
  PURPLE = 7
}

interface SharpnessAttributes {
  sharpness: Sharpness
  name: string
  physicsCorrection: number
  elementCorrection: number
}

const sharpnessAttributesMap = new Map<Sharpness, SharpnessAttributes>([
  [
    Sharpness.UNKNOWN,
    {
      sharpness: Sharpness.UNKNOWN,
      name: '无',
      physicsCorrection: 1,
      elementCorrection: 1
    }
  ],
  [
    Sharpness.RED,
    {
      sharpness: Sharpness.RED,
      name: '红',
      physicsCorrection: 0.5,
      elementCorrection: 0.25
    }
  ],
  [
    Sharpness.ORANGE,
    {
      sharpness: Sharpness.ORANGE,
      name: '橙',
      physicsCorrection: 0.75,
      elementCorrection: 0.5
    }
  ],
  [
    Sharpness.YELLOW,
    {
      sharpness: Sharpness.YELLOW,
      name: '黄',
      physicsCorrection: 1.0,
      elementCorrection: 0.75
    }
  ],
  [
    Sharpness.GREEN,
    {
      sharpness: Sharpness.GREEN,
      name: '绿',
      physicsCorrection: 1.05,
      elementCorrection: 1.0
    }
  ],
  [
    Sharpness.BLUE,
    {
      sharpness: Sharpness.BLUE,
      name: '青',
      physicsCorrection: 1.2,
      elementCorrection: 1.0625
    }
  ],
  [
    Sharpness.WHITE,
    {
      sharpness: Sharpness.WHITE,
      name: '白',
      physicsCorrection: 1.32,
      elementCorrection: 1.15
    }
  ],
  [
    Sharpness.PURPLE,
    {
      sharpness: Sharpness.PURPLE,
      name: '紫',
      physicsCorrection: 1.39,
      elementCorrection: 1.25
    }
  ]
])

// TODO：考虑是否拔刀

// Sharpness --end--

const allWeaponsMap = new Map<WeaponType, Weapon>([
  [WeaponType.GREAT_SWORD, greatSword],
  [WeaponType.LONG_SWORD, longSword]
])

export const allWeaponTypes: Array<WeaponType> = Array.from(allWeaponsMap.keys())
export const allSharpness: Array<Sharpness> = Array.from(sharpnessAttributesMap.keys())

export default {
  getWeaponName(wt: WeaponType): string {
    const weapon = allWeaponsMap.get(wt)
    if (weapon == undefined) {
      return 'UNKNOWN'
    } else {
      const name = weapon.name
      return name
    }
  },
  getMotionName(mId: number, wt: WeaponType): string {
    const weapon = allWeaponsMap.get(wt)
    let mName: string = 'UNKNOWN'
    if (weapon != undefined) {
      for (const m of weapon.motions) {
        if (m.id == mId) {
          mName = m.name
          break
        }
      }
    }
    return mName
  },
  getWeaponMotionsByWeaponType(wt: WeaponType | undefined): Array<WeaponMotion> {
    if (wt == undefined) {
      return []
    }

    const weapon = allWeaponsMap.get(wt)
    if (weapon == undefined) {
      return []
    }
    return weapon.motions
  },
  getSharpnessAttribute(sp: Sharpness): SharpnessAttributes {
    const sa = sharpnessAttributesMap.get(sp)
    if (sa == undefined) {
      throw new TypeError('Unknown sharpness: ' + sp)
    }
    return sa
  }
}

// enum MotionValue {}
