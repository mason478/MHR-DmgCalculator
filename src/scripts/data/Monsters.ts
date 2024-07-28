// Monsters data, reference: https://hyperwiki.jp/mhr/monster/
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

// All monsters data --end--

export const allMonstersMap = new Map<number, Monster>([
  [KarakuriFrog.id, KarakuriFrog],
  [Rathalos.id, Rathalos],
  [Rathian.id, Rathian]
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
