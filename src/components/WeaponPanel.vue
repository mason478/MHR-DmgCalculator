<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref } from 'vue'
// import 'element-plus/dist/index.css'
import weaponData from '../scripts/data/Weapons'
import {
  WeaponType,
  allWeaponTypes,
  allSharpness,
  Sharpness,
  type Weapon
} from '../scripts/data/Weapons'
import { elementNamesMap, ElementType } from '../scripts/data/Common'

const emitWeapon = defineEmits(['weapon'])

const wt = ref<WeaponType>()
// motion type
const mt = ref<number>()
const sp = ref<Sharpness>(Sharpness.UNKNOWN)
const rawAttack = ref<number>(0)
const element = ref<ElementType>(ElementType.UNKNOWN)
const elementAttack = ref<number>(0)
const criticalRate = ref<number>(0)

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
let newWeapon: Weapon

function onSelectWeapon() {
  console.info('This is a test of onSelect!')
  if (wt.value == undefined) return

  // @ts-ignore
  newWeapon = structuredClone(weaponData.getWeaponByType(wt.value))

  emitWeapon('weapon', newWeapon)
}

function onSelectMotion() {
  // find out motion value
  if (mt.value == undefined) return

  // @ts-ignore
  const motions = weaponData.getWeaponMotionsByWeaponType(wt.value)
  const motion = motions.find((m) => m.id == mt.value)

  if (motion == undefined) return
  newWeapon.motions = [motion]

  emitWeapon('weapon', newWeapon)
}

function onSelectSharpness() {
  newWeapon.sharpness = sp.value
  emitWeapon('weapon', newWeapon)
}

function onSelectElement() {
  newWeapon.elementType = element.value
  emitWeapon('weapon', newWeapon)
}

function onInputAttack() {
  newWeapon.physicsAttack = rawAttack.value
  emitWeapon('weapon', newWeapon)
}

function onInputCriticalRate() {
  newWeapon.criticalRate = criticalRate.value
  emitWeapon('weapon', newWeapon)
}

function onInputElementAttack() {
  newWeapon.elementAttack = elementAttack.value
  emitWeapon('weapon', newWeapon)
}
</script>

<template>
  <div class="inline-flex">
    <h1>武器基础信息</h1>
    <form id="weaponForm">
      <label for="weaponType">武器类型</label>
      <el-select
        id="weaponType"
        name="weaponType"
        v-model="wt"
        @change="onSelectWeapon"
        placeholder="请选择一种武器"
      >
        <el-option
          v-for="t in allWeaponTypes"
          :key="t"
          :value="t"
          :label="weaponData.getWeaponByType(t).name"
        />
      </el-select>

      <label for="motionType">武器动作</label>
      <el-select
        id="motionType"
        name="motionType"
        v-model="mt"
        @change="onSelectMotion"
        placeholder="请选择一种招式"
      >
        <el-option
          v-for="m in weaponData.getWeaponMotionsByWeaponType(wt)"
          :key="m.id"
          :value="m.id"
          :label="m.name"
        />
      </el-select>

      <label for="sharpness">武器斩味（锋利度）</label>
      <el-select
        id="sharpness"
        name="sharpness"
        v-model="sp"
        @change="onSelectSharpness"
        placeholder="请选择武器斩味（可选）"
      >
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
        @change="onInputAttack"
      />
      <!-- <el-select> </el-select> -->
      <label for="element">武器属性</label>
      <el-select
        id="element"
        name="element"
        v-model="element"
        @change="onSelectElement"
        placeholder=""
      >
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
        @change="onInputElementAttack"
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
        @change="onInputCriticalRate"
      >
        <template #append>%</template> </el-input
      ><br /><br />
    </form>
  </div>
</template>

<style>
/* .inline-flex { */
/* box-shadow: */
/* 0 2px 5px 0 rgba(0, 0, 0, 0.16), */
/* 0 2px 10px 0 rgba(0, 0, 0, 0.12); */
/* padding: 16px 24px; */
/* } */
</style>
