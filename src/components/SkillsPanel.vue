<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import weaponData from '../scripts/data/Weapons'
import { WeaponType, allWeaponTypes, allSharpness, Sharpness } from '../scripts/data/Weapons'
import { elementNamesMap, ElementType } from '../scripts/data/Common'
</script>

<template>
  <div>
    <h1>技能信息</h1>
    <form id="weaponForm">
      <label for="weaponType">武器类型</label>
      <el-select id="weaponType" name="weaponType" v-model="wt" placeholder="请选择一种武器">
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
          :key="m.id"
          :value="m.id"
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
      <label for="rawAttack">武器原始攻击力</label>
      <el-input
        id="rawAttack"
        name="rawAttack"
        v-model="rawAttack"
        placeholder="请输入武器原始攻击力"
      />
      <!-- <el-select> </el-select> -->
      <label for="element">武器属性</label>
      <el-select id="element" name="element" v-model="element" placeholder="">
        <el-option
          v-for="e in Array.from(elementNamesMap.keys())"
          :key="e"
          :value="e"
          :label="elementNamesMap.get(e)"
        />
      </el-select>
      <label for="elementAttack" v-if="element !== ElementType.UNKNOWN">武器属性攻击力</label>
      <el-input
        id="elementAttack"
        v-if="element !== ElementType.UNKNOWN"
        v-model="elementAttack"
        placeholder="请输入武器属性攻击力"
      />
      <label for="criticalRate">请输入武器会心率（%）</label>
      <br />
      <el-input
        id="criticalRate"
        type="number_percent"
        max="100"
        min="-100"
        name="criticalRate"
        v-model="criticalRate"
        validate-event="true"
        placeholder="请输入武器会心率"
      >
        <template #append>%</template> </el-input
      ><br /><br />
      <!-- <el-input type="submit" value="Calculate!" size="medium" /> -->
    </form>
    <div>
      <!-- <el-button @click="out" type="primary">Button1</el-button> -->
      <el-button type="primary" form="weaponForm" value="Submit">Calculate!</el-button>
    </div>
  </div>
</template>
