// Monsters data, reference: https://hyperwiki.jp/mhr/monster/
import { AttackType, Element } from './Common'

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
  // physical hit rate: {attack type -> hit rate}
  hitRates: Map<AttackType, number>
  // element hit rate: {element -> hit rate}
  elementHitRates: Map<Element, number>
}

interface Monster {
  id: number
  name: string
  parts: Array<MonsterPart>
}

// All monsters data --start--

const Rathian: Monster = {
  id: 1,
  //Rathian (リオレイア, 雌火龙)
  name: '雌火龙',
  parts: [
    {
      id: 1,
      // head
      name: '头',
      hitRates: new Map([
        [AttackType.SLASHING, 70],
        [AttackType.HITTING, 75],
        [AttackType.SHOTTING, 65]
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
        [AttackType.SLASHING, 40],
        [AttackType.HITTING, 45],
        [AttackType.SHOTTING, 35]
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
        [AttackType.SLASHING, 35],
        [AttackType.HITTING, 30],
        [AttackType.SHOTTING, 25]
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
        [AttackType.SLASHING, 35],
        [AttackType.HITTING, 30],
        [AttackType.SHOTTING, 25]
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
        [AttackType.SLASHING, 45],
        [AttackType.HITTING, 45],
        [AttackType.SHOTTING, 35]
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
        [AttackType.SLASHING, 40],
        [AttackType.HITTING, 40],
        [AttackType.SHOTTING, 35]
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
        [AttackType.SLASHING, 45],
        [AttackType.HITTING, 40],
        [AttackType.SHOTTING, 35]
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
  id: 2,
  // Rathalos (リオレウス,雄火龙)
  name: '雄火龙',
  parts: [
    {
      id: 1,
      // head
      name: '头',
      hitRates: new Map([
        [AttackType.SLASHING, 65],
        [AttackType.HITTING, 70],
        [AttackType.SHOTTING, 60]
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
        [AttackType.SLASHING, 35],
        [AttackType.HITTING, 40],
        [AttackType.SHOTTING, 30]
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
        [AttackType.SLASHING, 25],
        [AttackType.HITTING, 25],
        [AttackType.SHOTTING, 20]
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
        [AttackType.SLASHING, 25],
        [AttackType.HITTING, 25],
        [AttackType.SHOTTING, 20]
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
        [AttackType.SLASHING, 45],
        [AttackType.HITTING, 40],
        [AttackType.SHOTTING, 35]
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
        [AttackType.SLASHING, 50],
        [AttackType.HITTING, 45],
        [AttackType.SHOTTING, 40]
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
        [AttackType.SLASHING, 35],
        [AttackType.HITTING, 35],
        [AttackType.SHOTTING, 30]
      ]),
      elementHitRates: new Map([
        [Element.THUNDER, 5],
        [Element.DRAGON, 15]
      ])
    }
  ]
}

// All monsters data --end--
