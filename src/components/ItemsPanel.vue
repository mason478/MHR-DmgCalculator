<script setup lang="ts">
import { ref } from 'vue'
import ItemsData from '../scripts/data/Items'
import { type Item } from '../scripts/data/Items'

const items = ref<Array<Item>>([])
const hasPowerCharm = ref<Boolean>(false)
const hasPowerTalon = ref<Boolean>(false)
const hasDemonPowder = ref<Boolean>(false)
const hasMightSeed = ref<Boolean>(false)

const demonDrugId = ref<number>(0)
// const hasDemonDrug = ref<Boolean>(false)
// const hasDemonDrug = ref<Boolean>(false)

const emitItems = defineEmits(['items'])

function onSelect() {
  console.info('This is a test of item onSelect!' + hasPowerCharm.value)
}
</script>

<template>
  <div>
    <h1>道具</h1>
    <form id="items">
      <el-checkbox v-model="hasPowerCharm" @change="onSelect">{{
        ItemsData.PowerCharm.name
      }}</el-checkbox>
      <el-checkbox v-model="hasPowerTalon">{{ ItemsData.PowerTalon.name }}</el-checkbox>
      <el-checkbox v-model="hasMightSeed">{{ ItemsData.MightSeed.name }}</el-checkbox>
      <el-checkbox v-model="hasDemonPowder">{{ ItemsData.DemonPowder.name }}</el-checkbox>
      <!--
        道具的选择应该分为两种： 勾选框和下拉选择框
    -->
      <br />

      <label for="demonDrugId">鬼人药</label>
      <el-select id="demonDrugId" name="demonDrugId" v-model="demonDrugId" placeholder="请选择">
        <el-option :key="0" :value="0" label="无"> </el-option>
        <el-option
          :key="ItemsData.DemonDrug.id"
          :value="ItemsData.DemonDrug.id"
          :label="ItemsData.DemonDrug.name"
        >
        </el-option>

        <el-option
          :key="ItemsData.MegaDemonDrug.id"
          :value="ItemsData.MegaDemonDrug.id"
          :label="ItemsData.MegaDemonDrug.name"
        >
        </el-option>
      </el-select>

      <label for="dango">看破</label>

      <label>超会心</label>
    </form>
  </div>
</template>
