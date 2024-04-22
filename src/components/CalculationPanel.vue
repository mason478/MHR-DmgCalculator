<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import { type Weapon } from '../scripts/data/Weapons'
import { type Monster } from '../scripts/data/Monsters'
import { type Context, physicsDamageCalculator } from '../scripts/logic/DmgCalculator'
import SkillsPanel from './SkillsPanel.vue'
import WeaponPanel from './WeaponPanel.vue'
import MonstersPanel from './MonstersPanel.vue'
import { isContext } from 'vm'

let skillsP = ref<Array<Skill>>()
let weaponP = ref<Weapon>()
let monsterP = ref<Monster>()

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
  console.info(c.calcDamage() + 'damage is here')
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
      <el-button @click="onCalculate">Default</el-button>
    </div>
  </div>
  <br /><br />
</template>
