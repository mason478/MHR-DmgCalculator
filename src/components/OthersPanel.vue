<script setup lang="ts">
import { ref, reactive } from 'vue'

import { getOtherFactorsByType, OtherFactorType, type otherFactor } from '../scripts/data/Others'

const othersForm = ref(null)
const formData = reactive({
  bowChargingLv: getOtherFactorsByType(OtherFactorType.BOW_CHARGING_LEVEL)[0],
  bowDistance: getOtherFactorsByType(OtherFactorType.BOW_DISTANCE)[0],
  bowBottle: getOtherFactorsByType(OtherFactorType.BOW_BOTTLE)[0]
})

function makeOtherFactors(): Array<otherFactor> {
  let otherFactors: Array<otherFactor> = []
  for (const k in formData) {
    // @ts-ignore
    otherFactors.push(formData[k])
  }
  console.log('makeOtherFactors', otherFactors)
  return otherFactors
}

defineExpose({
  formData,
  makeOtherFactors
})
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <h1 class="header-title">其他</h1>
    </div>
    <el-form id="others" :model="formData" label-position="top" ref="othersForm">
      <el-form-item label="弓-蓄力等级" prop="bowChargingLv">
        <el-select v-model="formData.bowChargingLv" value-key="id" @change="makeOtherFactors">
          <el-option
            v-for="lv in getOtherFactorsByType(OtherFactorType.BOW_CHARGING_LEVEL)"
            :key="lv.id"
            :value="lv"
            :label="lv.name"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="弓-距离" prop="bowDistance">
        <el-select v-model="formData.bowDistance" value-key="id">
          <el-option
            v-for="d in getOtherFactorsByType(OtherFactorType.BOW_DISTANCE)"
            :key="d.id"
            :value="d"
            :label="d.name"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="弓-瓶子" prop="bowBottle">
        <el-select v-model="formData.bowBottle" value-key="id">
          <el-option
            v-for="b in getOtherFactorsByType(OtherFactorType.BOW_BOTTLE)"
            :key="b.id"
            :value="b"
            :label="b.name"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
