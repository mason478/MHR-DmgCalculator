<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import baseLogic from '../scripts/logic/CalculateDmg'
import weaponData from '../scripts/data/Weapons'

function consoleName() {
  console.log(weaponData.getWeaponName())
}
</script>

<template>
  <div>
    <h1>武器基础信息</h1>
    <form>
      <label for="weaponType">武器类型</label>
      <el-select id="weaponType" name="weaponType">
        <el-option value="greatSword" key="大剑" label="大剑" />
      </el-select>
    </form>
    <button @click="consoleName">Button1</button>
  </div>
</template>
