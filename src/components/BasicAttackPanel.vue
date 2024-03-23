<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import baseLogic from '../scripts/logic/CalculateDmg'
//const weapon = ref(0)
//const value = ref('')
//const response = ref(0)
//
//const options: Array<{ value: string; label: string }> = [
//  {
//    value: 'Option1',
//    label: 'Option1'
//  },
//  {
//    value: 'Option2',
//    label: 'Option2'
//  }
//]
//function calculate() {
//  response.value = baseLogic.calculateDmg(weapon.value)
//}
</script>

<template>
  <!-- <div><el-input-number id="weapon" v-model="weapon" /> 武器类型</div>
  <div>
    <el-button @click="calculate">Calculate!</el-button>
  </div>
  <div>Response: {{ response }}</div>
  <div>
    <el-select v-model="value" placeholder="select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div> -->
  <div>
    <h1>武器基础信息</h1>
    <form>
      <label for="weaponType">武器类型</label>
      <el-select id="weaponType" name="weaponType">
        <el-option value="greatSword" key="大剑" label="大剑" />
        <option value="longSword">太刀</option>
      </el-select>
    </form>
  </div>
</template>
