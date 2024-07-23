// data reference: https://hyperwiki.jp/mhr/system-damage/

enum OtherFactorType {
  UNKNOWN = 0,
  BOW_CHARGING_LEVEL = 1,
  BOW_DISTANCE = 2,
  BOW_BOTTLE = 3
}

// other factors that could affect damage
interface otherFactor {
  id: number
  type: OtherFactorType
  name: string
  physicsCorrection: number
  elementCorrection?: number
}

const otherFactors: Array<otherFactor> = [
  {
    id: 1,
    name: '蓄力Lv1',
    type: OtherFactorType.BOW_CHARGING_LEVEL,
    physicsCorrection: 0.65,
    elementCorrection: 0.8
  },
  {
    id: 2,
    type: OtherFactorType.BOW_CHARGING_LEVEL,
    name: '蓄力Lv2',
    physicsCorrection: 1.0,
    elementCorrection: 1.0
  },
  {
    id: 3,
    type: OtherFactorType.BOW_CHARGING_LEVEL,
    name: '蓄力Lv3',
    physicsCorrection: 1.25,
    elementCorrection: 1.1
  },
  {
    id: 4,
    type: OtherFactorType.BOW_CHARGING_LEVEL,
    name: '蓄力Lv4',
    physicsCorrection: 1.35,
    elementCorrection: 1.2
  },
  {
    id: 5,
    name: '正常距离',
    type: OtherFactorType.BOW_DISTANCE,
    physicsCorrection: 1.0
  },
  {
    id: 6,
    type: OtherFactorType.BOW_DISTANCE,
    name: '远距离',
    physicsCorrection: 0.2
  },
  {
    id: 7,
    type: OtherFactorType.BOW_DISTANCE,
    name: '近距离',
    physicsCorrection: 0.8
  },
  {
    id: 8,
    type: OtherFactorType.BOW_BOTTLE,
    name: '无',
    physicsCorrection: 1.0
  },
  {
    id: 9,
    type: OtherFactorType.BOW_BOTTLE,
    name: '接击瓶',
    physicsCorrection: 1.2
  },
  {
    id: 10,
    name: '强击瓶',
    type: OtherFactorType.BOW_BOTTLE,
    physicsCorrection: 1.35
  }
]

function getOtherFactorsById(id: number): otherFactor {
  const r = otherFactors.find((c) => c.id === id)
  if (!r) {
    throw new TypeError('Unknown other factor: ' + id)
  }
  return r
}
function getOtherFactorsByType(t: OtherFactorType): Array<otherFactor> {
  return otherFactors.filter((c) => c.type === t)
}

export {
  getOtherFactorsById,
  getOtherFactorsByType,
  otherFactors,
  type otherFactor,
  OtherFactorType
}
