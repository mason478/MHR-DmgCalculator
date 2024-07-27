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

const attackBoostLv = ref<SkillLevel>(SkillLevel.UNKNOWN)
const criticalEyesLv = ref<SkillLevel>(SkillLevel.UNKNOWN)
const criticalBoostLv = ref<SkillLevel>(SkillLevel.UNKNOWN)

const skillsLevels: Array<Ref> = [attackBoostLv, criticalEyesLv, criticalBoostLv]
const skills: Array<Skill> = []

const emitSkills = defineEmits(['skills'])

function findLevelValue(skill: Skill, level: SkillLevel): LevelValue | undefined {
  for (const levelValue of skill.levelValues) {
    if (levelValue.level == level) {
      return levelValue
    }
  }
}

function makeSkill(skill: Skill, level: SkillLevel): Skill {
  let newSkill = structuredClone(skill)
  const levelValue = findLevelValue(skill, level)

  newSkill.levelValues = levelValue ? [levelValue] : []
  return newSkill
}

function replaceOrAddSkill(skill: Skill, lv: SkillLevel) {
  let sk = makeSkill(skill, lv)
  const idx = skills.findIndex((s) => s.id == sk.id)
  if (idx != -1) {
    skills[idx] = sk
  } else {
    skills.push(sk)
  }
}

function onSelect(skill: Skill, lv: SkillLevel) {
  replaceOrAddSkill(skill, lv)
  emitSkills('skills', skills)
}
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/increased_attack.png`" class="header-icon" />
      <h1 class="header-title">技能</h1>
    </div>
    <form id="skills">
      <label for="attackBoostLv">攻击</label>
      <el-select
        id="attackBoostLv"
        name="attackBoostLv"
        v-model="attackBoostLv"
        @change="onSelect(AttackBoost, attackBoostLv)"
        placeholder="选择攻击技能"
      >
        <el-option
          v-for="lv in AttackBoost.levelValues"
          :key="lv.level"
          :value="lv.level"
          :label="lv.level == SkillLevel.UNKNOWN ? '无' : AttackBoost.name + 'Lv' + lv.level"
        />
      </el-select>

      <label for="criticalEyesLv">看破</label>
      <el-select
        id="criticalEyesLv"
        name="criticalEyesLv"
        v-model="criticalEyesLv"
        @change="onSelect(CriticalEyes, criticalEyesLv)"
        placeholder="选择看破等级"
      >
        <el-option
          v-for="lv in CriticalEyes.levelValues"
          :key="lv.level"
          :value="lv.level"
          :label="lv.level == SkillLevel.UNKNOWN ? '无' : CriticalEyes.name + 'Lv' + lv.level"
        />
      </el-select>

      <label>超会心</label>
      <el-select
        id="criticalBoostLv"
        name="criticalBoostLv"
        v-model="criticalBoostLv"
        @change="onSelect(CriticalBoost, criticalBoostLv)"
        placeholder="选择超会心等级"
      >
        <el-option
          v-for="lv in CriticalBoost.levelValues"
          :key="lv.level"
          :value="lv.level"
          :label="lv.level == SkillLevel.UNKNOWN ? '无' : CriticalBoost.name + 'Lv' + lv.level"
        />
      </el-select>
    </form>
  </div>
</template>
