<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import weaponData from '../scripts/data/Weapons'
import { WeaponType, allWeaponTypes, allSharpness, Sharpness } from '../scripts/data/Weapons'
import { elementNamesMap, ElementType } from '../scripts/data/Common'
import { AttackBoost, type Skill, CriticalEyes, CriticalBoost } from '../scripts/data/Skills'

const skills = ref<Array<Skill>>([])
const skill1 = ref<Skill>()
const skill2 = ref<Skill>()
const skill3 = ref<Skill>()

// 怎么优化？
if (skill1.value != undefined) {
  skills.value.push(skill1.value)
}

if (skill2.value != undefined) {
  skills.value.push(skill2.value)
}
</script>

<template>
  <div>
    <h1>技能</h1>
    <form id="skills">
      <label for="attackBoost">攻击</label>
      <el-select id="attackBoost" name="attackBoost" v-model="skill1" placeholder="选择攻击技能">
        <el-option
          v-for="lv in AttackBoost.levelValue"
          :key="lv.level"
          :value="lv.level"
          :label="lv ? AttackBoost.name + 'Lv' + lv.level : '无'"
        />
      </el-select>

      <label for="criticalEyes">看破</label>
      <el-select id="criticalEyes" name="criticalEyes" v-model="skill2" placeholder="选择看破等级">
        <el-option
          v-for="lv in CriticalEyes.levelValue"
          :key="lv.level"
          :value="lv.level"
          :label="CriticalEyes.name + 'Lv' + lv.level"
        />
      </el-select>

      <label>超会心</label>
      <el-select
        id="criticalBoost"
        name="criticalBoost"
        v-model="skill3"
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
