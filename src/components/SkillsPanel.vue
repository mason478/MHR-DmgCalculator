<script setup lang="ts">
import { ref, type Ref } from 'vue'
import 'element-plus/dist/index.css'
import {
  AttackBoost,
  type Skill,
  CriticalEyes,
  CriticalBoost,
  SkillLevel,
  type LevelValue
} from '../scripts/data/Skills'

const attackBoostLv = ref<SkillLevel>()
const criticalEyesLv = ref<SkillLevel>()
const criticalBoostLv = ref<SkillLevel>()

const skillsLevels: Array<Ref> = [attackBoostLv, criticalEyesLv, criticalBoostLv]

const emitSkills = defineEmits(['skills'])

function findLevelValue(skill: Skill, level: SkillLevel): LevelValue | undefined {
  for (const levelValue of skill.levelValue) {
    if (levelValue.level == level) {
      return levelValue
    }
  }
}

function makeSkill(skill: Skill, level: SkillLevel): Skill {
  let newSkill = structuredClone(skill)
  const levelValue = findLevelValue(skill, level)

  newSkill.levelValue = levelValue ? [levelValue] : []
  return newSkill
}

function onSelect(skill: Skill) {
  console.info('This is a test of skill onSelect!, origin data' + skill.name)
  let skills: Array<Skill> = []
  for (var sl of skillsLevels) {
    if (sl.value != undefined) {
      skills.push(makeSkill(skill, sl.value))
    }
  }
  console.info('skills count' + skills.length)
  emitSkills('skills', skills)
}
</script>

<template>
  <div class="inline-flex">
    <h1>技能</h1>
    <form id="skills">
      <label for="attackBoostLv">攻击</label>
      <el-select
        id="attackBoostLv"
        name="attackBoostLv"
        v-model="attackBoostLv"
        @change="onSelect(AttackBoost)"
        placeholder="选择攻击技能"
      >
        <el-option
          v-for="lv in AttackBoost.levelValue"
          :key="lv.level"
          :value="lv.level"
          :label="lv ? AttackBoost.name + 'Lv' + lv.level : '无'"
        />
      </el-select>

      <label for="criticalEyesLv">看破</label>
      <el-select
        id="criticalEyesLv"
        name="criticalEyesLv"
        v-model="criticalEyesLv"
        @change="onSelect(CriticalEyes)"
        placeholder="选择看破等级"
      >
        <el-option
          v-for="lv in CriticalEyes.levelValue"
          :key="lv.level"
          :value="lv.level"
          :label="CriticalEyes.name + 'Lv' + lv.level"
        />
      </el-select>

      <label>超会心</label>
      <el-select
        id="criticalBoostLv"
        name="criticalBoostLv"
        v-model="criticalBoostLv"
        @change="onSelect(CriticalBoost)"
        placeholder="选择超会心等级"
      >
        <el-option
          v-for="lv in CriticalBoost.levelValue"
          :key="lv.level"
          :value="lv.level"
          :label="CriticalBoost.name + 'Lv' + lv.level"
        />
      </el-select>
    </form>
  </div>
</template>
