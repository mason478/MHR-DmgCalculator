// Monsters data, reference: https://hyperwiki.jp/mhr/monster/
import { AttackType, Element } from './Common'

const enum MonsterPartType {
  HEAD = 1,
  NECK = 2,
  BODY = 3,
  WING = 4,
  LEG = 5,
  TAIL = 6
}

interface MonsterParts {
  name: string
  hitRate: number
  elementHitRate: number
}

interface Monster {
  id: string
  name: string
  hitZones: Map<AttackType, number>
  elementHitZones: Array<HitZone>
}
