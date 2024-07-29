// Monsters data, reference: https://hyperwiki.jp/mhr/monster/
import type { ModuleName } from 'typescript'
import { PhysicsAttackType, ElementType } from './Common'

export enum MonsterStatus {
  /*
  There are only two status for monster: normal and rage,
  when a monster is in rage mode, it will be more harder or easier to make damage.
  */
  UNKNOWN = 0,
  NORMAL = 1,
  RAGE = 2
}

interface MonsterPart {
  id: number
  name: string
  // physical hit rate(肉质): {attack type -> hit rate}
  hitRates: Map<PhysicsAttackType, number>
  // element hit rate: {element -> hit rate}
  elementHitRates: Map<ElementType, number>
}

export interface Monster {
  id: number
  name: string
  parts: Array<MonsterPart>
  status?: MonsterStatus
}

// All monsters data --start--

// the frog in the training ground
const KarakuriFrog: Monster = {
  id: 1,
  name: '机关蛙',
  parts: [
    {
      id: 1,
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 100],
        [PhysicsAttackType.HITTING, 100],
        [PhysicsAttackType.SHOTTING, 100]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 30],
        [ElementType.WATER, 30],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 30],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 2,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 60],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 3,
      name: '手足',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 4,
      name: '背',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 20],
        [PhysicsAttackType.HITTING, 20],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 5,
      name: '甲壳上部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 80],
        [PhysicsAttackType.HITTING, 80],
        [PhysicsAttackType.SHOTTING, 80]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 25]
      ])
    }
  ]
}

const Rathian: Monster = {
  id: 2,
  //Rathian (リオレイア, 雌火龙)
  name: '雌火龙',
  parts: [
    {
      id: 1,
      // head
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 75],
        [PhysicsAttackType.SHOTTING, 65]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 2,
      // neck
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 3,
      // body
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 4,
      // back
      name: '背',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 5,
      // wings
      name: '翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 6,
      // foot
      name: '脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 10],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 7,
      // tail
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    }
  ]
}

const Rathalos: Monster = {
  id: 3,
  // Rathalos (リオレウス,雄火龙)
  name: '雄火龙',
  parts: [
    {
      id: 1,
      // head
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 2,
      // neck
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.DRAGON, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 3,
      // back
      name: '背',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 4,
      // abdomen
      name: '腹',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 5,
      // tail
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 6,
      // wings
      name: '翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 7,
      // foot
      name: '脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 15]
      ])
    }
  ]
}

const Rajang: Monster = {
  id: 4,
  // Rajang (金獅子)
  name: '金獅子',
  parts: [
    {
      id: 1,
      // head
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 67],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 30]
      ])
    },
    {
      id: 2,
      // body
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 3,
      // front foot
      name: '前脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 4,
      name: '前脚2（硬化）',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 10],
        [PhysicsAttackType.HITTING, 10],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 5,
      name: '后脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 6,
      // tail
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 32],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 7,
      name: '尾2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.ICE, 25]
      ])
    }
  ]
}

const Anjanath: Monster = {
  id: 5,
  name: '蛮颚龙',
  parts: [
    {
      id: 1,
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 2,
      // nose
      name: '鼻',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 80],
        [PhysicsAttackType.HITTING, 75],
        [PhysicsAttackType.SHOTTING, 65]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 3,
      // body
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 4,
      name: '翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 5,
      name: '脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 6,
      name: '脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 15],
        [ElementType.WATER, 5],
        [ElementType.WATER, 10]
      ])
    },
    {
      id: 7,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 60],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 8,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 0]
      ])
    }
  ]
}

const Barioth: Monster = {
  id: 6,
  name: '冰牙龙',
  parts: [
    {
      id: 1,
      name: '头',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 2,
      name: '颈・背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 3,
      name: '腹部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 4,
      name: '棘1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 30],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 25],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 5,
      name: '棘2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 6,
      name: '翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.THUNDER, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 8,
      name: '后脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 9,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 23],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.THUNDER, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 10,
      name: '尾端',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.THUNDER, 10],
        [ElementType.DRAGON, 5]
      ])
    }
  ]
}

const Arzuros: Monster = {
  id: 7,
  name: '青熊兽',
  parts: [
    {
      id: 1,
      name: '头部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 2,
      name: '上半身',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 62]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15]
      ])
    },
    {
      id: 3,
      name: '前脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 33],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 28]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 30],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 20]
      ])
    },
    {
      id: 4,
      name: '前脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 42],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 36]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 38],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 38],
        [ElementType.ICE, 20]
      ])
    },
    {
      id: 5,
      name: '臀部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 66],
        [PhysicsAttackType.HITTING, 66],
        [PhysicsAttackType.SHOTTING, 43]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 20]
      ])
    },
    {
      id: 6,
      name: '腹部/后脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 38]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 20]
      ])
    }
  ]
}

const Bazelgeuse: Monster = {
  id: 8,
  name: '爆鳞龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 80],
        [PhysicsAttackType.HITTING, 85],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 3,
      name: '腹部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 4,
      name: '腹部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 5,
      name: '背中1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 6,
      name: '背中2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 8,
      name: '脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 36],
        [PhysicsAttackType.HITTING, 34],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 9,
      name: '翼1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 10,
      name: '翼2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 11,
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 12,
      name: '尾2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 75],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    }
  ]
}

const GreatBaggi: Monster = {
  id: 13,
  name: '眠狗龙王',
  parts: [
    {
      id: 1,
      name: '头部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 75],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 40],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20]
      ])
    },
    {
      id: 2,
      name: '体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 40],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20]
      ])
    }
  ]
}

const KushalaDaora: Monster = {
  id: 10,
  name: '钢龙',
  parts: [
    {
      id: 1,
      name: '头部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 2,
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 3,
      name: '腹部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 4,
      name: '背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 23],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 5,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 20],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 6,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 20],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 7,
      name: '後脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 8,
      name: '翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 23],
        [PhysicsAttackType.HITTING, 23],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    }
  ]
}

const Magnamalos: Monster = {
  id: 11,
  name: '怨虎龙',
  parts: [
    {
      id: 1,
      name: '头部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 2,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 3,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 4,
      name: '後脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 5,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 6,
      name: '背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 7,
      name: '腕刃',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 8,
      name: '尾刃',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    }
  ]
}

const Mizutsune: Monster = {
  id: 12,
  name: '泡狐龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 63],
        [PhysicsAttackType.HITTING, 63],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 63],
        [PhysicsAttackType.HITTING, 63],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 3,
      name: '頭部3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 63],
        [PhysicsAttackType.HITTING, 63],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 4,
      name: '頭部4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 73],
        [PhysicsAttackType.HITTING, 73],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 5,
      name: '頭部5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 73],
        [PhysicsAttackType.HITTING, 73],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 6,
      name: '颈1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 8],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 7,
      name: '颈2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 8],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 8,
      name: '颈3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 8],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 9,
      name: '颈4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 53],
        [PhysicsAttackType.HITTING, 53],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 10,
      name: '颈5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 53],
        [PhysicsAttackType.HITTING, 53],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 8]
      ])
    },
    {
      id: 11,
      name: '左爪1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 12,
      name: '左爪2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 13,
      name: '左爪3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 28],
        [PhysicsAttackType.HITTING, 28],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 14,
      name: '左爪4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 29],
        [PhysicsAttackType.HITTING, 29],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 15,
      name: '左爪5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 29],
        [PhysicsAttackType.HITTING, 29],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },

    {
      id: 16,
      name: '前脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 28],
        [PhysicsAttackType.HITTING, 28],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 17,
      name: '前脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 28],
        [PhysicsAttackType.HITTING, 28],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 18,
      name: '前脚3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 28],
        [PhysicsAttackType.HITTING, 28],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 19,
      name: '前脚4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 33],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 20,
      name: '前脚5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 33],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 21,
      name: '後脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 22,
      name: '後脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 23,
      name: '後脚3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 24,
      name: '後脚4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 25,
      name: '後脚5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },

    {
      id: 26,
      name: '身体1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 27,
      name: '身体2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 28,
      name: '身体3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 29,
      name: '身体4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 30,
      name: '身体5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 31,
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 32,
      name: '尾2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 33,
      name: '尾3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 34,
      name: '尾4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 53],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 35,
      name: '尾5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 53],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 36,
      name: '背1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 8],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 37,
      name: '背2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 38,
      name: '背3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 8],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 39,
      name: '背4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 48],
        [PhysicsAttackType.HITTING, 48],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 40,
      name: '背5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 48],
        [PhysicsAttackType.HITTING, 48],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 41,
      name: '右爪1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 42,
      name: '右爪2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 43,
      name: '右爪3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 28],
        [PhysicsAttackType.HITTING, 28],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 44,
      name: '右爪4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 29],
        [PhysicsAttackType.HITTING, 29],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    },
    {
      id: 45,
      name: '右爪5',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 29],
        [PhysicsAttackType.HITTING, 29],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 30]
      ])
    }
  ]
}

const Nargacuga: Monster = {
  id: 13,
  name: '迅龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 67],
        [PhysicsAttackType.HITTING, 72],
        [PhysicsAttackType.SHOTTING, 42]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 3,
      name: '颈/背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 4,
      name: '腹部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 5,
      name: '刃翼',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 21],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 21]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 35],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 6,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 43],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '后脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 8,
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 46],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 9,
      name: '尾2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 10,
      name: '尾端1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 11,
      name: '尾端2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 36],
        [PhysicsAttackType.SHOTTING, 42]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 30],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 10]
      ])
    }
  ]
}

const Teostra: Monster = {
  id: 14,
  name: '炎王龙',
  parts: [
    {
      id: 1,
      name: '頭部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 2,
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 33],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 3,
      name: '腹部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 4,
      name: '背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 24],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 5,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 38],
        [PhysicsAttackType.HITTING, 38],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 6,
      name: '後脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '翼1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 8,
      name: '翼2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 9,
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 33],
        [PhysicsAttackType.SHOTTING, 38]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    }
  ]
}

const Chameleos: Monster = {
  id: 15,
  name: '霞龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 3,
      name: '翼1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 22],
        [PhysicsAttackType.HITTING, 22],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 4,
      name: '翼2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 22],
        [PhysicsAttackType.HITTING, 22],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 5,
      name: '背中1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 22],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 6,
      name: '背中2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 22],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 7,
      name: '腹部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 22]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 8,
      name: '腹部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 9,
      name: '前脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 10,
      name: '前脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 11,
      name: '後脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 12,
      name: '後脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 13,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 22],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    }
  ]
}

const ThunderSerpentNarwa: Monster = {
  id: 16,
  name: '雷神龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 75],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 3,
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 4,
      name: '背中（帯電）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 5,
      name: '背中（帯電）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 6,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 20],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '翼腕',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 8,
      name: '翼腕（帯電）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 9,
      name: '翼腕（帯電）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 10,
      name: '脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 20],
        [PhysicsAttackType.HITTING, 20],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 11,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 12,
      name: '尾端（帯電）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 13,
      name: '尾端（帯電）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 14,
      name: '胸部（帯電）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 15,
      name: '胸部（帯電）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 16,
      name: '腹部（发电器官）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 5]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 17,
      name: '腹部（发电器官）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 90],
        [PhysicsAttackType.HITTING, 90],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 25]
      ])
    }
  ]
}

const WindSerpentIbushi: Monster = {
  id: 17,
  name: '风神龙',
  parts: [
    {
      id: 1,
      name: '頭部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 2,
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 20]
      ])
    },
    {
      id: 3,
      name: '背中（風袋）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 60],
        [PhysicsAttackType.HITTING, 55],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 4,
      name: '背中（風袋）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 5,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 6,
      name: '翼腕',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '翼腕（風袋）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 60],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 8,
      name: '翼腕（風袋）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 9,
      name: '脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 10,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 11,
      name: '尾端（風袋）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 35]
      ])
    },
    {
      id: 12,
      name: '尾端（風袋）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 13,
      name: '胸部（風袋）1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 80],
        [PhysicsAttackType.HITTING, 80],
        [PhysicsAttackType.SHOTTING, 75]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 25]
      ])
    },
    {
      id: 14,
      name: '胸部（風袋）2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 5],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    }
  ]
}

const Tigrex: Monster = {
  id: 18,
  name: '轰龙',
  parts: [
    {
      id: 1,
      name: '頭部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 2,
      name: '背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 3,
      name: '腹部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 4,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 5,
      name: '後脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 6,
      name: '尾根',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 10],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 15]
      ])
    }
  ]
}

const TobiKadachi: Monster = {
  id: 19,
  name: '飞雷龙',
  parts: [
    {
      id: 1,
      name: '頭部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 48],
        [PhysicsAttackType.HITTING, 48],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 30],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 2,
      name: '颈',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 48],
        [PhysicsAttackType.HITTING, 48],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 3,
      name: '身体',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 4,
      name: '背中',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 48]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 5,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 35],
        [PhysicsAttackType.HITTING, 35],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 6,
      name: '後脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 30],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 15]
      ])
    },
    {
      id: 7,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 10]
      ])
    }
  ]
}

const Zinogre: Monster = {
  id: 20,
  name: '雷狼龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 70]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 65],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 70]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 10]
      ])
    },
    {
      id: 3,
      name: '身体1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 4,
      name: '身体2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 5,
      name: '背中1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 40],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 6,
      name: '背中2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 70],
        [PhysicsAttackType.HITTING, 65],
        [PhysicsAttackType.SHOTTING, 55]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 30],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 7,
      name: '脚根1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 44],
        [PhysicsAttackType.HITTING, 44],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 8,
      name: '脚根2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 9,
      name: '前脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 10,
      name: '前脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 43],
        [PhysicsAttackType.HITTING, 46],
        [PhysicsAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 11,
      name: '後脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 10],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 12,
      name: '後脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 50],
        [PhysicsAttackType.HITTING, 50],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 10],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 13,
      name: '尾',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 5],
        [ElementType.WATER, 5],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 5],
        [ElementType.DRAGON, 5]
      ])
    },
    {
      id: 14,
      name: '尾端',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 21],
        [PhysicsAttackType.HITTING, 19],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 10],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 5]
      ])
    }
  ]
}

const CrimsonGlowValstrax: Monster = {
  id: 21,
  name: '天彗龙',
  parts: [
    {
      id: 1,
      name: '頭部1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 60],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 2,
      name: '頭部2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 55],
        [PhysicsAttackType.HITTING, 60],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 3,
      name: '頭部3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 57],
        [PhysicsAttackType.HITTING, 62],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 4,
      name: '頭部4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 57],
        [PhysicsAttackType.HITTING, 62],
        [PhysicsAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 5,
      name: '颈1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 15]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 6,
      name: '颈2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 40],
        [PhysicsAttackType.HITTING, 30],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 7,
      name: '身体1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 8,
      name: '身体2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 30],
        [PhysicsAttackType.HITTING, 25],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 9,
      name: '翼脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 10,
      name: '前脚',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 11,
      name: '後脚1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 12,
      name: '後脚2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 15],
        [ElementType.THUNDER, 15],
        [ElementType.ICE, 15],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 13,
      name: '後脚3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 14,
      name: '後脚4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 25],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 15,
      name: '翼1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 22],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 25],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 25],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 16,
      name: '翼2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 64],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 17,
      name: '翼3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 22],
        [PhysicsAttackType.HITTING, 45],
        [PhysicsAttackType.SHOTTING, 10]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 18,
      name: '翼4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 64],
        [PhysicsAttackType.HITTING, 70],
        [PhysicsAttackType.SHOTTING, 45]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 19,
      name: '尾1',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 20,
      name: '尾2',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 20],
        [ElementType.WATER, 20],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 20],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 21,
      name: '尾3',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 22,
      name: '尾4',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 45],
        [PhysicsAttackType.HITTING, 24],
        [PhysicsAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 0],
        [ElementType.WATER, 0],
        [ElementType.THUNDER, 0],
        [ElementType.ICE, 0],
        [ElementType.DRAGON, 0]
      ])
    },
    {
      id: 23,
      name: '胸部',
      hitRates: new Map([
        [PhysicsAttackType.SLASHING, 80],
        [PhysicsAttackType.HITTING, 90],
        [PhysicsAttackType.SHOTTING, 50]
      ]),
      elementHitRates: new Map([
        [ElementType.FIRE, 15],
        [ElementType.WATER, 25],
        [ElementType.THUNDER, 20],
        [ElementType.ICE, 25],
        [ElementType.DRAGON, 0]
      ])
    }
  ]
}

// All monsters data --end--

export const allMonstersMap = new Map<number, Monster>([
  [KarakuriFrog.id, KarakuriFrog],
  [Rathalos.id, Rathalos],
  [Rathian.id, Rathian],
  [Rajang.id, Rajang],
  [Anjanath.id, Anjanath],
  [Barioth.id, Barioth],
  [Arzuros.id, Arzuros],
  [Bazelgeuse.id, Bazelgeuse],
  [GreatBaggi.id, GreatBaggi],
  [KushalaDaora.id, KushalaDaora],
  [Magnamalos.id, Magnamalos],
  [Mizutsune.id, Mizutsune],
  [Nargacuga.id, Nargacuga],
  [Teostra.id, Teostra],
  [Chameleos.id, Chameleos],
  [ThunderSerpentNarwa.id, ThunderSerpentNarwa],
  [WindSerpentIbushi.id, WindSerpentIbushi],
  [Tigrex.id, Tigrex],
  [TobiKadachi.id, TobiKadachi],
  [Zinogre.id, Zinogre],
  [CrimsonGlowValstrax.id, CrimsonGlowValstrax]
])

export const allMonsters: Array<Monster> = Array.from(allMonstersMap.values())

export default {
  getMonsterById: (monsterId: number): Monster => {
    const monster = allMonstersMap.get(monsterId)
    if (!monster) {
      throw new TypeError('Unknown monster id: ' + monsterId)
    }
    return monster
  },
  getMonsterPartsByMonsterId: (monsterId: number): Array<MonsterPart> => {
    const monster = allMonstersMap.get(monsterId)
    if (!monster) {
      return []
    }
    return monster.parts
  }
}
