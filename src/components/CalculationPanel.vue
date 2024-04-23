<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import { type Weapon } from '../scripts/data/Weapons'
import { type Monster } from '../scripts/data/Monsters'
import { type Context, physicsDamageCalculator } from '../scripts/logic/DmgCalculator'
import SkillsPanel from './SkillsPanel.vue'
import WeaponPanel from './WeaponPanel.vue'
import MonstersPanel from './MonstersPanel.vue'

const skillsP = ref<Array<Skill>>([])
const weaponP = ref<Weapon>()
const monsterP = ref<Monster>()

const normalPhyDmg = ref<number>(0)
const criticalPhyDmg = ref<number>(0)
const expectedPhyDmg = ref<number>(0)

function makeContext(): Context {
  return {
    weapon: weaponP.value!,
    monster: monsterP.value!,
    skills: skillsP.value
  }
}

function onCalculate() {
  const ctx = makeContext()
  const c = new physicsDamageCalculator(ctx)
  let r = c.calcDamage()
  normalPhyDmg.value = r[0]
  criticalPhyDmg.value = r[1]
  expectedPhyDmg.value = r[2]
}
</script>

<template>
  <br /><br />
  <WeaponPanel @weapon="(weapon) => (weaponP = weapon)" />
  <br /><br />
  <MonstersPanel @monster="(monster) => (monsterP = monster)" />
  <br /><br />
  <SkillsPanel @skills="(skills) => (skillsP = skills)" />
  <br /><br />
  <div>
    <h1>计算结果</h1>
    <div>
      <span>物理伤害 </span>
      <br />
      <span>期望伤害（加权平均）：{{ expectedPhyDmg }}</span>
      <br />
      <span>一般伤害：{{ normalPhyDmg }}</span>
      <br />
      <span>会心伤害：{{ criticalPhyDmg }}</span>
      <br />
      <el-button type="primary" plain @click="onCalculate">Calculate</el-button>
    </div>
  </div>
  <br /><br />
</template>
