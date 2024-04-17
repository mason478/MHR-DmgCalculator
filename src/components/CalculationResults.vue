<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import SkillsPanel from '../components/SkillsPanel.vue'

let skillsP = ref<Array<Skill>>()

function onchange() {
  console.info('Skills length: ' + skillsP.value?.length)
  for (const skill of skillsP.value ?? []) {
    console.info('Skill name:!' + skill.name)
  }
}
</script>

<template>
  <SkillsPanel @skills="(skills) => (skillsP = skills)" />
  <div>
    <h1>计算结果</h1>
    <div>
      <span>物理伤害 </span>
      <span> Skills:{{ skillsP }}</span>
      <el-button @click="onchange">Default</el-button>
    </div>
  </div>
</template>
