<script setup lang="ts">
import { ref, reactive } from 'vue'
import 'element-plus/dist/index.css'
import {
  type Skill,
  SkillLevel,
  type LevelValue,
  allSkills,
  getSkillById
} from '../scripts/data/Skills'

interface SelectedSkill {
  skill: Skill
  lv: SkillLevel
}

interface FormData {
  selectedSkills: Array<SelectedSkill>
}

const selectedSkillsDefault: Array<SelectedSkill> = []
for (const skill of allSkills) {
  selectedSkillsDefault.push({ skill: structuredClone(skill), lv: SkillLevel.UNKNOWN })
}

const skillsForm = ref(null)
const skillsFormData = reactive<FormData>({
  selectedSkills: selectedSkillsDefault
})

function findLevelValue(skillId: number, level: SkillLevel): LevelValue {
  let result = undefined
  let skill = getSkillById(skillId)
  for (var levelValue of skill.levelValues) {
    if (levelValue.level === level) {
      result = levelValue
      break
    }
  }
  if (result == undefined) {
    throw new Error('Unknown skill level: ' + level + skill.name)
  }
  return result
}

function makeSkills(): Array<Skill> {
  let skills: Array<Skill> = []
  for (var s of skillsFormData.selectedSkills) {
    var levelValue = findLevelValue(s.skill.id, s.lv)
    if (levelValue?.level != SkillLevel.UNKNOWN) {
      s.skill.levelValues = [levelValue]
      skills.push(s.skill)
    }
  }
  return skills
}

defineExpose({
  makeSkills,
  skillsForm
})
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/increased_attack.png`" class="header-icon" />
      <h1 class="header-title">技能</h1>
    </div>
    <el-form label-position="top" :ref="skillsForm" :model="skillsFormData">
      <el-form-item v-for="skill in allSkills" :key="skill.id" :label="skill.name">
        <el-select
          placeholder="请选择"
          v-model="skillsFormData.selectedSkills[allSkills.indexOf(skill)].lv"
        >
          <el-option
            v-for="lv in skill.levelValues"
            :key="lv.level"
            :value="lv.level"
            :label="lv.level == SkillLevel.UNKNOWN ? '无' : skill.name + 'Lv' + lv.level"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
