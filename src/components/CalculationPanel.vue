<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import { type Weapon } from '../scripts/data/Weapons'
import { type Monster } from '../scripts/data/Monsters'
import SkillsPanel from './SkillsPanel.vue'
import WeaponPanel from './WeaponPanel.vue'
import MonstersPanel from './MonstersPanel.vue'

let skillsP = ref<Array<Skill>>()
let weaponP = ref<Weapon>()
let monsterP = ref<Monster>()

function onchange() {
  console.info('Skills length: ' + skillsP.value?.length)
  for (const skill of skillsP.value ?? []) {
    console.info('Skill name:!' + skill.name)
  }
}
</script>

<template>
  <br /><br />
  <WeaponPanel @weapon="(weapon) => (weaponP = weapon)" />
  <br /><br />
  <MonstersPanel />
  <br /><br />
  <SkillsPanel @skills="(skills) => (skillsP = skills)" />
  <br /><br />

  <div>
    <h1>计算结果</h1>
    <div>
      <span>物理伤害 </span>
      <el-button @click="onchange">Default</el-button>
    </div>
  </div>
  <br /><br />
</template>
