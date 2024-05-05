<script setup lang="ts">
import { ref } from 'vue'
import { allItemsMap, type Item, PowerCharm, PowerTalon } from '../scripts/data/Items'

const items = ref<Array<Item>>([])
const hasPowerCharm = ref<Boolean>(false)
const hasPowerTalon = ref<Boolean>(false)
const emitItems = defineEmits(['items'])

function onSelect() {
  console.info('This is a test of item onSelect!' + hasPowerCharm.value)
}
</script>

<template>
  <div>
    <h1>道具</h1>
    <form id="items">
      <el-checkbox v-model="hasPowerCharm" @change="onSelect">{{ PowerCharm.name }}</el-checkbox>
      <el-checkbox v-model="hasPowerTalon">{{ PowerTalon.name }}</el-checkbox>
      <!--
        道具的选择应该分为两种： 勾选框和下拉选择框
    -->
      <label for="attackBoostLv">攻击</label>

      <label for="criticalEyesLv">看破</label>

      <label>超会心</label>
    </form>
  </div>
</template>
