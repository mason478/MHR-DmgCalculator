// All the weapons data, including types, sharpness, motion value
// data source: https://hyperwiki.jp/mhr/

export enum WeaponType {
  UNKNOWN = 0,
  GREAT_SWORD = 1,
  LONG_SWORD = 2,
  BOW = 3
}
// const m: {
// WeaponType.GREAT_SWORD:
// }
const m = new Map<WeaponType, string>([
  [WeaponType.GREAT_SWORD, '大剑'],
  [WeaponType.LONG_SWORD, '太刀']
])

export default {
  getWeaponName(wt: WeaponType = WeaponType.GREAT_SWORD): string {
    const name = m.get(wt)
    if (name == undefined) {
      return 'UNKNOWN'
    } else {
      return name
    }
  }
}

// enum MotionValue {}
