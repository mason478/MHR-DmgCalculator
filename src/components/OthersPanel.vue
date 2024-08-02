<script setup lang="ts">
import { ref, reactive } from 'vue'

import {
  getOtherFactorsById,
  getOtherFactorsByType,
  OtherFactorType,
  type otherFactor
} from '../scripts/data/Others'
const bowChargingLvId = ref<number>(1)
const bowDistanceId = ref<number>(getOtherFactorsByType(OtherFactorType.BOW_DISTANCE)[0].id)
const bowBottleId = ref<number>(getOtherFactorsByType(OtherFactorType.BOW_BOTTLE)[0].id)

var otherFactors: Array<otherFactor> = [
  getOtherFactorsById(bowChargingLvId.value),
  getOtherFactorsById(bowDistanceId.value),
  getOtherFactorsById(bowBottleId.value)
]

const weaponForm = ref(null)
const formData = reactive({})

const emitOthers = defineEmits(['others'])

emitOthers('others', otherFactors)

function onSelect(otherFactorId: number) {
  console.log('bowSelectedChargingLv', bowChargingLvId.value)
  var otherFactors: Array<otherFactor> = []
  otherFactors.push(getOtherFactorsById(otherFactorId))

  emitOthers('others', otherFactors)
}
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <!-- <img class="header-icon" /> -->
      <h1 class="header-title">其他</h1>
    </div>
    <form id="others">
      <label>弓-蓄力等级</label>
      <el-select
        id="bowChargingLvId"
        name="bowChargingLvId"
        @change="onSelect(bowChargingLvId)"
        v-model="bowChargingLvId"
        placeholder="选择蓄力等级"
      >
        <el-option
          v-for="lv in getOtherFactorsByType(OtherFactorType.BOW_CHARGING_LEVEL)"
          :key="lv.id"
          :value="lv.id"
          :label="lv.name"
        />
      </el-select>

      <label>弓-距离</label>
      <el-select
        id="bowDistanceId"
        name="bowDistanceId"
        @change="onSelect(bowDistanceId)"
        v-model="bowDistanceId"
        placeholder="选择弓距离"
      >
        <el-option
          v-for="lv in getOtherFactorsByType(OtherFactorType.BOW_DISTANCE)"
          :key="lv.id"
          :value="lv.id"
          :label="lv.name"
        />
      </el-select>

      <label>弓-瓶子</label>
      <el-select
        id="bowBottleId"
        name="bowBottleId"
        @change="onSelect(bowBottleId)"
        v-model="bowBottleId"
        placeholder="选择瓶子"
      >
        <el-option
          v-for="bottle in getOtherFactorsByType(OtherFactorType.BOW_BOTTLE)"
          :key="bottle.id"
          :value="bottle.id"
          :label="bottle.name"
        />
      </el-select>
    </form>
  </div>
</template>
