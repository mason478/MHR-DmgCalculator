<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import baseLogic from '../scripts/logic/CalculateDmg'
import weaponData from '../scripts/data/Weapons'
import {
  WeaponType,
  allWeaponTypes,
  MotionType,
  allSharpness,
  Sharpness
} from '../scripts/data/Weapons'

// function consoleName(wt: WeaponType) {
// console.log(weaponData.getWeaponName(wt))
// }
const wt = ref<WeaponType>()
const mt = ref<MotionType>()
const sp = ref<Sharpness>(Sharpness.UNKNOWN)

function out() {
  console.info('Weapon type:' + wt.value + ' Motion type' + mt.value)
}
function onChange() {
  console.info('This is a test of onChange!')
  mt.value = MotionType.UNKNOWN
}
</script>

<template>
  <div>
    <h1>武器基础信息</h1>
    <form>
      <label for="weaponType">武器类型</label>
      <el-select
        id="weaponType"
        name="weaponType"
        v-model="wt"
        @change="onChange"
        placeholder="请选择一种武器"
      >
        <el-option
          v-for="t in allWeaponTypes"
          :key="t"
          :value="t"
          :label="weaponData.getWeaponName(t)"
        />
      </el-select>

      <label for="motionType">武器动作</label>
      <el-select id="motionType" name="motionType" v-model="mt" placeholder="请选择一种招式">
        <el-option
          v-for="m in weaponData.getWeaponMotionsByWeaponType(wt)"
          :key="m.motionType"
          :value="m.motionType"
          :label="m.name"
        />
      </el-select>

      <label for="sharpness">武器斩味（锋利度）</label>
      <el-select id="sharpness" name="sharpness" v-model="sp" placeholder="请选择武器斩味（可选）">
        <el-option
          v-for="sp in allSharpness"
          :key="sp"
          :value="sp"
          :label="weaponData.getSharpnessAttribute(sp).name"
        />
      </el-select>
    </form>

    <div>
      <el-button @click="out" type="primary">Button1</el-button>
    </div>
  </div>
</template>
