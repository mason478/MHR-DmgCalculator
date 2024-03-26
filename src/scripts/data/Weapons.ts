// All the weapons data, including types, sharpness, motion value
// Data source: https://hyperwiki.jp/mhr/ (in Japanese)

export enum WeaponType {
  UNKNOWN = 0,
  GREAT_SWORD = 1,
  LONG_SWORD = 2,
  BOW = 3,
}

export enum MotionType {
  UNKNOWN = 0,
  // Great sword motions
  OVERHEAD_SLASH = 1,
  CHARGED_SLASH_LV1 = 2,
  CHARGED_SLASH_LV2 = 3,
  CHARGED_SLASH_LV3 = 4,
  SIDE_BLOW = 5,
  STRONG_CHARGED_SLASH_LV0 = 6,
  STRONG_CHARGED_SLASH_LV1 = 7,
  STRONG_CHARGED_SLASH_LV2 = 8,
  STRONG_CHARGED_SLASH_LV3 = 9,
}

interface WeaponMotion {
  // motion data reference: https://hyperwiki.jp/mhr/motion-value/
  motionType: MotionType
  // motion name
  name: string
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
  physicCorrection?: number
  // extra physic damage correction, optional
  extraPhysicCorrection?: number
}

interface Weapon {
  // definition of a weapon
  weaponType: WeaponType
  // weapon's name
  name: string
  //weapon's motions, one weapon may have kinds of motions
  motions: Array<WeaponMotion>
}

// All weapons --start--
const greatSword: Weapon = {
  weaponType: WeaponType.GREAT_SWORD,
  name: '大剑',
  motions: [
    {
      motionType: MotionType.OVERHEAD_SLASH,
      //	Overhead Slash
      name: '直斩',
      motionValue: 48
    },
    {
      // Charged Slash level 1
      motionType: MotionType.CHARGED_SLASH_LV1,
      name: '蓄力斩Lv1',
      motionValue: 48,
      elementCorrection: 1.1,
      abnormalStatusCorrection: 1.1
    },
    {
      // Charged Slash level 2
      motionType: MotionType.CHARGED_SLASH_LV2,
      name: '蓄力斩Lv2',
      motionValue: 77,
      elementCorrection: 1.2,
      abnormalStatusCorrection: 1.2
    },
    {
      // Charged Slash level 3
      motionType: MotionType.CHARGED_SLASH_LV3,
      name: '蓄力斩Lv3',
      motionValue: 105,
      elementCorrection: 1.5,
      abnormalStatusCorrection: 1.5
    },
    {      
      motionType:MotionType.SIDE_BLOW,
      name: "横拍",
      motionValue:16,
      faintValue:20,
      feeblenessValue: 15
    },
    {
      motionType:MotionType.STRONG_CHARGED_SLASH_LV0,
      name:"强蓄力斩Lv0",
      motionValue:65,
    },
    {
      motionType:MotionType.STRONG_CHARGED_SLASH_LV1,
      name:"强蓄力斩Lv1",
      motionValue:65,
      elementCorrection:1.65,
      abnormalStatusCorrection:1.65
    },
    {
      motionType:MotionType.STRONG_CHARGED_SLASH_LV2,
      name:"强蓄力斩Lv2",
      motionValue:90,
      elementCorrection:1.8,
      abnormalStatusCorrection:1.8
    },
    {
      motionType:MotionType.STRONG_CHARGED_SLASH_LV3,
      name:"强蓄力斩Lv3",
      motionValue:115,
      elementCorrection:2.25,
      abnormalStatusCorrection:2.25
    },
  ]
}

const longSword: Weapon = {
  weaponType: WeaponType.LONG_SWORD,
  name: '太刀',
  motions: [
    {
      motionType: MotionType.UNKNOWN,
      name: '直斩',
      motionValue: 48,
      physicCorrection: 1,
      elementCorrection: 1,}
  ]
}

// All weapons --end--

const allWeaponsMap = new Map<WeaponType, Weapon>([
  [WeaponType.GREAT_SWORD, greatSword],
  [WeaponType.LONG_SWORD, longSword]
])

export const allWeaponTypes: Array<WeaponType> = Array.from(allWeaponsMap.keys())
export default {
  getWeaponName(wt: WeaponType): string {
    const weapon = allWeaponsMap.get(wt)
    if (weapon == undefined) {
      return 'UNKNOWN'
    } else {
      const name = weapon.name
      return name
    }
  }
}

// enum MotionValue {}
