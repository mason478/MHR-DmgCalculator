// All the weapons data, including types, sharpness, motion value
// Data resources: https://hyperwiki.jp/mhr/ (in Japanese)
import { PhysicsAttackType } from './Common'
import { ElementType } from './Common'

export enum WeaponType {
  UNKNOWN = 0,
  GREAT_SWORD = 1,
  LONG_SWORD = 2,
  SWORD_AND_SHIELD = 3,
  DUAL_BLADES = 4,
  LANCE = 5,
  GUNLANCE = 6,
  HAMMER = 7,
  HUNTING_HORN = 8,
  SWITCH_AXE = 9,
  CHARGE_BLADE = 10,
  INSECT_GLAIVE = 11,
  LIGHT_BOW_GUN = 12,
  HEAVY_BOW_GUN = 13,
  BOW = 14
}

export interface WeaponMotion {
  // motion data reference: https://hyperwiki.jp/mhr/motion-value/
  // and https://www.gamersky.com/handbook/202207/1497282.shtml
  id: number
  // motion name
  name: string
  attackType: PhysicsAttackType
  motionValue: number
  // element attack value TODO: maybe should be deleted?
  elementValue?: number
  // 气绝 眩晕
  faintValue?: number
  // 灭气
  feeblenessValue?: number
  // element damage correction of the motion
  elementCorrection?: number
  abnormalStatusCorrection?: number
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
  // raw physics attack
  physicsAttack?: number
  elementAttack?: number
  elementType?: ElementType
  criticalRate?: number
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
      motionValue: 52
    },
    {
      // Charged Slash level 1
      id: 2,
      name: '蓄力斩Lv1',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 52,
      elementCorrection: 1.1,
      abnormalStatusCorrection: 1.1,
      extraPhysicsCorrection: 1.1
    },
    {
      // Charged Slash level 2
      id: 3,
      name: '蓄力斩Lv2',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 77,
      elementCorrection: 1.2,
      abnormalStatusCorrection: 1.2,
      extraPhysicsCorrection: 1.2
    },
    {
      // Charged Slash level 3
      id: 4,
      name: '蓄力斩Lv3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 105,
      elementCorrection: 1.5,
      abnormalStatusCorrection: 1.5,
      extraPhysicsCorrection: 1.3
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
      abnormalStatusCorrection: 2.65,
      extraPhysicsCorrection: 1.1
    },
    {
      //STRONG_CHARGED_SLASH_LV2,
      id: 8,
      name: '强蓄力斩Lv2',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 90,
      elementCorrection: 1.8,
      abnormalStatusCorrection: 1.8,
      extraPhysicsCorrection: 1.2
    },
    {
      // STRONG_CHARGED_SLASH_LV3
      id: 9,
      name: '强蓄力斩Lv3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 128,
      elementCorrection: 2.25,
      abnormalStatusCorrection: 2.25,
      extraPhysicsCorrection: 1.3
    }
  ]
}

const longSword: Weapon = {
  weaponType: WeaponType.LONG_SWORD,
  name: '太刀',
  motions: [
    {
      id: 1,
      name: '踏步斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 26
    },
    {
      id: 2,
      name: '突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 14
    },
    {
      id: 3,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 26
    },
    {
      id: 4,
      name: '气刃斩Ⅰ（无气）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 16
    },
    {
      id: 5,
      name: '气刃斩Ⅰ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 31
    },
    {
      id: 6,
      name: '气刃斩Ⅱ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 33
    },
    {
      id: 7,
      name: '气刃斩Ⅲ 1',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 13
    },
    {
      id: 8,
      name: '气刃斩Ⅲ 2',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 15
    },
    {
      id: 9,
      name: '气刃斩Ⅲ 3',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 37
    },
    {
      id: 10,
      name: '突刺（接气刃Ⅰ）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 15
    },
    {
      id: 11,
      name: '袈裟斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 24
    },
    {
      id: 12,
      name: '气刃大迴旋斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 42
    },
    {
      id: 13,
      name: '一字斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    },
    {
      id: 14,
      name: '水月',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 40
    },
    {
      id: 15,
      name: '拔刀二连斩（1stHit）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 20
    },
    {
      id: 16,
      name: '拔刀二连斩（2ndHit）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 35
    },
    {
      id: 17,
      name: '居合斩（小居合）（1stHit）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 25
    },
    {
      id: 18,
      name: '居合斩（小居合）（2ndHit）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    },
    {
      id: 19,
      name: '居合气刃（大居合）（1st Hit）（失败）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 28
    },
    {
      id: 20,
      name: '居合气刃（大居合）（1st Hit）（成功）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 35
    }
  ]
}

const swordAndShield: Weapon = {
  weaponType: WeaponType.SWORD_AND_SHIELD,
  name: '单手剑',
  motions: [
    {
      id: 1,
      name: '穿斩（多段）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 10
    },
    {
      id: 2,
      name: '下坠突刺（多段）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 14
    },
    {
      id: 3,
      name: '灭·升龙击（反击追击）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    },
    {
      id: 4,
      name: '蓄力斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 40
    },
    {
      id: 5,
      name: '劈斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 18
    },
    {
      id: 6,
      name: '横斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 17
    },
    {
      id: 7,
      name: '剑盾连击（盾）',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 12,
      faintValue: 15
    },
    {
      id: 8,
      name: '剑盾连击（剑）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 24
    },
    {
      id: 9,
      name: '水平斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 26
    },
    {
      id: 10,
      name: '回斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 26
    },
    {
      id: 11,
      name: '盾攻击',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 10
    },
    {
      id: 12,
      name: '里拳攻击（防御斩GP成功）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 10
    },
    {
      id: 13,
      name: '奋力强锤',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 37
    },
    {
      id: 14,
      name: '突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 22
    },
    {
      id: 15,
      name: '穿斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 28
    },
    {
      id: 16,
      name: '突击斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 22
    }
  ]
}

const dualBlades: Weapon = {
  weaponType: WeaponType.DUAL_BLADES,
  name: '双剑',
  motions: [
    {
      id: 1,
      name: '二连斩（右）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 8
    },
    {
      id: 2,
      name: '二连斩（左）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 10
    },
    {
      id: 3,
      name: '二连回斩（右）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 9
    },
    {
      id: 4,
      name: '二连回斩（左）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 10
    },
    {
      id: 5,
      name: '二连回斩（左）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 10
    },
    {
      id: 6,
      name: '车轮斩（初击）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 12
    },
    {
      id: 7,
      name: '车轮斩（2击目 左/右）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 14
    },
    {
      id: 8,
      name: '挥斩（左/右）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 3
    },
    {
      id: 9,
      name: '挥斩完结（左/右）',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 5
    },
    {
      id: 10,
      name: '[鬼人化] 鬼人反手斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 11
    }
  ]
}

// ;(' ⅢⅣⅤ')
const lance: Weapon = {
  weaponType: WeaponType.LANCE,
  name: '长枪',
  motions: [
    {
      id: 1,
      name: '飞身跃入突刺 多段',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 20
    },
    {
      id: 2,
      name: '中段突刺 Ⅰ/Ⅱ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 27
    },
    {
      id: 3,
      name: '中段突刺 Ⅲ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 33
    },
    {
      id: 4,
      name: '上段突刺 Ⅰ/Ⅱ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 27
    },
    {
      id: 5,
      name: '上段突刺 Ⅲ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 33
    },
    {
      id: 6,
      name: '飞身跃入突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 24
    },
    {
      id: 7,
      name: '横扫斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 28
    },
    {
      id: 8,
      name: '盾攻击',
      attackType: PhysicsAttackType.HITTING,
      faintValue: 20,
      motionValue: 15
    },
    {
      id: 9,
      name: '防御突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 15
    },
    {
      id: 10,
      name: '抵消突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 22
    },
    {
      id: 11,
      name: '反击突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 70
    },
    {
      id: 12,
      name: '突进',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 11
    },
    {
      id: 13,
      name: '终结突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 50
    },
    {
      id: 14,
      name: '跳跃突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    }
  ]
}

const gunlance: Weapon = {
  weaponType: WeaponType.GUNLANCE,
  name: '铳枪',
  motions: [
    {
      id: 1,
      name: '踏步上突刺',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    },
    {
      id: 2,
      name: '水平突刺 Ⅰ/Ⅱ/Ⅲ',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 24
    },
    {
      id: 3,
      name: '上捞斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 30
    },
    {
      id: 4,
      name: '敲打',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 48
    },
    {
      id: 5,
      name: '横扫斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 68
    },
    {
      id: 6,
      name: '龙杭炮',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 28
    }
  ]
}

const hammer: Weapon = {
  weaponType: WeaponType.HAMMER,
  name: '大锤',
  motions: [
    {
      id: 1,
      name: '纵挥 Ⅰ',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 42
    },
    {
      id: 2,
      name: '纵挥 Ⅱ',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 23
    },
    {
      id: 3,
      name: '横挥',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 15
    },
    {
      id: 4,
      name: '猛挥（拔刀）',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 20
    },
    {
      id: 5,
      name: '蓄力猛挥',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 23
    },
    {
      id: 6,
      name: '反挥',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 16
    },
    {
      id: 7,
      name: '蓄力反挥',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 25
    },
    {
      id: 8,
      name: '回转攻击（开始）',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 26
    },
    {
      id: 9,
      name: '回转攻击（旋转1st/2nd/3rd）',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 18
    }
  ]
}

const huntingHorn: Weapon = {
  weaponType: WeaponType.HUNTING_HORN,
  name: '狩猎笛',
  motions: [
    {
      id: 1,
      name: '左/右挥',
      attackType: PhysicsAttackType.HITTING,
      motionValue: 36
    }
  ]
}

const switchAxe: Weapon = {
  weaponType: WeaponType.SWITCH_AXE,
  name: '斩斧',
  motions: [
    {
      id: 1,
      name: '斧 直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 50
    },
    {
      id: 2,
      name: '斧 横斩/剑 变形斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 23
    },
    {
      id: 3,
      name: '斧 突进斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 19
    },
    {
      id: 4,
      name: '斧 挥舞(左/右)',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 22
    },
    {
      id: 5,
      name: '剑 直斩/斧 变形斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 32
    },
    {
      id: 6,
      name: '剑 上捞斩(左/右)',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 25
    },
    {
      id: 7,
      name: '剑 跳跃斩/斧 跳跃变形斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 32
    }
  ]
}

const chargeBlade: Weapon = {
  weaponType: WeaponType.CHARGE_BLADE,
  name: '盾斧',
  motions: [
    {
      id: 1,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48
    }
  ]
}

const insectGlaive: Weapon = {
  weaponType: WeaponType.INSECT_GLAIVE,
  name: '操虫棍',
  motions: [
    {
      id: 1,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48
    }
  ]
}

const lightBowGun: Weapon = {
  weaponType: WeaponType.LIGHT_BOW_GUN,
  name: '轻弩',
  motions: [
    {
      id: 1,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48
    }
  ]
}

const heavyBowGun: Weapon = {
  weaponType: WeaponType.HEAVY_BOW_GUN,
  name: '重弩',
  motions: [
    {
      id: 1,
      name: '直斩',
      attackType: PhysicsAttackType.SLASHING,
      motionValue: 48
    }
  ]
}

const bow: Weapon = {
  weaponType: WeaponType.BOW,
  name: '弓',
  motions: [
    {
      id: 1,
      name: '连射Lv1',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 14
    },
    {
      id: 2,
      name: '连射Lv2',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 9
    },
    {
      id: 3,
      name: '连射Lv3',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 10
    },
    {
      id: 4,
      name: '连射Lv4',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 11
    },
    {
      id: 5,
      name: '连射Lv5',
      attackType: PhysicsAttackType.SHOTTING,
      motionValue: 11
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

// weapon types that have sharpness
export const sharpnessAvailableWeaponTypes: Set<WeaponType> = new Set([
  WeaponType.GREAT_SWORD,
  WeaponType.LONG_SWORD,
  WeaponType.SWORD_AND_SHIELD,
  WeaponType.CHARGE_BLADE,
  WeaponType.DUAL_BLADES,
  WeaponType.SWITCH_AXE
])

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
  [WeaponType.LONG_SWORD, longSword],
  [WeaponType.SWORD_AND_SHIELD, swordAndShield],
  [WeaponType.DUAL_BLADES, dualBlades],
  [WeaponType.LANCE, lance],
  [WeaponType.GUNLANCE, gunlance],
  [WeaponType.HAMMER, hammer],
  [WeaponType.HUNTING_HORN, huntingHorn],
  [WeaponType.SWITCH_AXE, switchAxe],
  [WeaponType.CHARGE_BLADE, chargeBlade],
  [WeaponType.INSECT_GLAIVE, insectGlaive],
  [WeaponType.LIGHT_BOW_GUN, lightBowGun],
  [WeaponType.HEAVY_BOW_GUN, heavyBowGun],
  [WeaponType.BOW, bow]
])

export const allWeaponTypes: Array<WeaponType> = Array.from(allWeaponsMap.keys())
export const allSharpness: Array<Sharpness> = Array.from(sharpnessAttributesMap.keys())

export default {
  getWeaponByType(wt: WeaponType): Weapon {
    const weapon = allWeaponsMap.get(wt)
    if (weapon == undefined) {
      throw new TypeError('Unknown weapon type: ' + wt)
    }

    return weapon
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
  getWeaponMotionsByWeaponType(wt: WeaponType): Array<WeaponMotion> {
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
