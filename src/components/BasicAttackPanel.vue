<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import baseLogic from '../scripts/logic/CalculateDmg'
import weaponData from '../scripts/data/Weapons'
import { WeaponType, allWeaponTypes, MotionType } from '../scripts/data/Weapons'

// function consoleName(wt: WeaponType) {
// console.log(weaponData.getWeaponName(wt))
// }
const wt = ref<WeaponType>()
</script>

<template>
  <div>
    <h1>武器基础信息</h1>
    <form>
      <label for="weaponType">武器类型</label>
      <el-select id="weaponType" name="weaponType" v-model="wt" placeholder="请选择一种武器">
        <el-option
          v-for="t in allWeaponTypes"
          :key="t"
          :value="t"
          :label="weaponData.getWeaponName(t)"
        />
      </el-select>
    </form>
    <!-- <button @click="consoleName(wt)">Button1</button> -->
  </div>
</template>
