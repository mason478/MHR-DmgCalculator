<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import weaponData from '../scripts/data/Weapons'
import { WeaponType, allWeaponTypes, allSharpness, Sharpness } from '../scripts/data/Weapons'
import { elementNamesMap, ElementType } from '../scripts/data/Common'

const wt = ref<WeaponType>()
// motion type
const mt = ref<number>()
const sp = ref<Sharpness>(Sharpness.UNKNOWN)
const rawAttack = ref<number>(0)
const element = ref<ElementType>(ElementType.UNKNOWN)
const elementAttack = ref<number>(0)
const criticalRate = ref<number>(0)

// function out() {
// console.info('Weapon type:' + wt.value + ' Motion type' + mt.value)
// }
function onChange() {
  console.info('This is a test of onChange!')
  mt.value = undefined
}

const sharpnessColormap = new Map<Sharpness, string>([
  [Sharpness.UNKNOWN, '#212121'],
  [Sharpness.RED, '#F44336'],
  [Sharpness.ORANGE, '#FF6600'],
  [Sharpness.YELLOW, '#FFDE0A'],
  [Sharpness.GREEN, '#70D92C'],
  [Sharpness.BLUE, '#42A5F5'],
  [Sharpness.WHITE, '#EEEEEE'],
  [Sharpness.PURPLE, '#CC99FF']
])

const colors = [
  {
    value: '#E63415',
    label: Sharpness.RED
  },
  {
    value: '#FF6600',
    label: Sharpness.ORANGE
  },
  {
    value: '#FFDE0A',
    label: Sharpness.YELLOW
  },
  {
    value: '#1EC79D',
    label: Sharpness.GREEN
  },
  {
    value: '#14CCCC',
    label: 'cyan'
  },
  {
    value: '#4167F0',
    label: 'blue'
  },
  {
    value: '#6222C9',
    label: 'purple'
  }
]
</script>

<template>
  <div>
    <h1>武器基础信息</h1>
    <form id="weaponForm">
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
        >
          <div class="flex items-center">
            <el-tag :color="sharpnessColormap.get(sp)" style="margin-right: 8px" size="small" />
            <span size="small">{{ weaponData.getSharpnessAttribute(sp).name }}</span>
          </div>
        </el-option>
        <!--<template #tag>
        //  <el-tag v-for="color in colors" :key="color.label" :color="color" />
        //</template>-->
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
    </form>
    <div>
      <!-- <el-button @click="out" type="primary">Button1</el-button> -->
      <el-button type="primary" form="weaponForm" value="Submit">Calculate!</el-button>
    </div>
  </div>
</template>
