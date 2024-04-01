// Monsters data, reference: https://hyperwiki.jp/mhr/monster/
import { PhysicAttackType, Element } from './Common'

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
  hitRates: Map<PhysicAttackType, number>
  // element hit rate: {element -> hit rate}
  elementHitRates: Map<Element, number>
}

interface Monster {
  id: number
  name: string
  parts: Array<MonsterPart>
}

// All monsters data --start--

// the frog in the training ground
const KarakuriFrog: Monster = {
  id: 1,
  name: '神童蛙',
  parts: [
    {
      id: 1,
      name: '头',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 100],
        [PhysicAttackType.HITTING, 100],
        [PhysicAttackType.SHOTTING, 100]
      ]),
      elementHitRates: new Map([
        [Element.FIRE, 30],
        [Element.WATER, 30],
        [Element.THUNDER, 30],
        [Element.ICE, 30],
        [Element.DRAGON, 30]
      ])
    },
    {
      id: 2,
      name: '身体',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 60],
        [PhysicAttackType.HITTING, 60],
        [PhysicAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [Element.FIRE, 20],
        [Element.WATER, 20],
        [Element.THUNDER, 20],
        [Element.ICE, 20],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 3,
      name: '手足',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 40],
        [PhysicAttackType.HITTING, 40],
        [PhysicAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [Element.FIRE, 15],
        [Element.WATER, 15],
        [Element.THUNDER, 15],
        [Element.ICE, 15],
        [Element.DRAGON, 15]
      ])
    },
    {
      id: 4,
      name: '背',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 20],
        [PhysicAttackType.HITTING, 20],
        [PhysicAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [Element.FIRE, 5],
        [Element.WATER, 5],
        [Element.THUNDER, 5],
        [Element.ICE, 5],
        [Element.DRAGON, 5]
      ])
    },
    {
      id: 5,
      name: '甲壳上部',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 80],
        [PhysicAttackType.HITTING, 80],
        [PhysicAttackType.SHOTTING, 80]
      ]),
      elementHitRates: new Map([
        [Element.FIRE, 25],
        [Element.WATER, 25],
        [Element.THUNDER, 25],
        [Element.ICE, 25],
        [Element.DRAGON, 25]
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
        [PhysicAttackType.SLASHING, 70],
        [PhysicAttackType.HITTING, 75],
        [PhysicAttackType.SHOTTING, 65]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 15],
        [Element.THUNDER, 20],
        [Element.ICE, 15],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 2,
      // neck
      name: '颈',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 40],
        [PhysicAttackType.HITTING, 45],
        [PhysicAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [Element.THUNDER, 5],
        [Element.DRAGON, 15]
      ])
    },
    {
      id: 3,
      // body
      name: '身体',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 35],
        [PhysicAttackType.HITTING, 30],
        [PhysicAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 4,
      // back
      name: '背',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 35],
        [PhysicAttackType.HITTING, 30],
        [PhysicAttackType.SHOTTING, 25]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 5,
      // wings
      name: '翼',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 45],
        [PhysicAttackType.HITTING, 45],
        [PhysicAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 10],
        [Element.THUNDER, 15],
        [Element.ICE, 10],
        [Element.DRAGON, 25]
      ])
    },
    {
      id: 6,
      // foot
      name: '脚',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 40],
        [PhysicAttackType.HITTING, 40],
        [PhysicAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [Element.THUNDER, 10],
        [Element.DRAGON, 15]
      ])
    },
    {
      id: 7,
      // tail
      name: '尾',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 45],
        [PhysicAttackType.HITTING, 40],
        [PhysicAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
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
        [PhysicAttackType.SLASHING, 65],
        [PhysicAttackType.HITTING, 70],
        [PhysicAttackType.SHOTTING, 60]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 15],
        [Element.THUNDER, 20],
        [Element.ICE, 15],
        [Element.DRAGON, 30]
      ])
    },
    {
      id: 2,
      // neck
      name: '颈',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 35],
        [PhysicAttackType.HITTING, 40],
        [PhysicAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.DRAGON, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 3,
      // back
      name: '背',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 25],
        [PhysicAttackType.HITTING, 25],
        [PhysicAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 4,
      // abdomen
      name: '腹',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 25],
        [PhysicAttackType.HITTING, 25],
        [PhysicAttackType.SHOTTING, 20]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 5,
      // tail
      name: '尾',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 45],
        [PhysicAttackType.HITTING, 40],
        [PhysicAttackType.SHOTTING, 35]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 5],
        [Element.THUNDER, 10],
        [Element.ICE, 5],
        [Element.DRAGON, 20]
      ])
    },
    {
      id: 6,
      // wings
      name: '翼',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 50],
        [PhysicAttackType.HITTING, 45],
        [PhysicAttackType.SHOTTING, 40]
      ]),
      elementHitRates: new Map([
        [Element.WATER, 10],
        [Element.THUNDER, 15],
        [Element.ICE, 10],
        [Element.DRAGON, 25]
      ])
    },
    {
      id: 7,
      // foot
      name: '脚',
      hitRates: new Map([
        [PhysicAttackType.SLASHING, 35],
        [PhysicAttackType.HITTING, 35],
        [PhysicAttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [Element.THUNDER, 5],
        [Element.DRAGON, 15]
      ])
    }
  ]
}

// All monsters data --end--
export const allMonstersMap = new Map<number, Monster>([
  [1, Rathalos],
  [2, Rathian]
])

export const allMonsters: Array<Monster> = Array.from(allMonstersMap.values())

export default {
  getMonsterPartsByMonsterId: (monsterId: number): Array<MonsterPart> => {
    const monster = allMonstersMap.get(monsterId)
    if (!monster) {
      return []
    }
    return monster.parts
  }
}
