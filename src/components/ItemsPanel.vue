<script setup lang="ts">
import { ref } from 'vue'
import ItemsData from '../scripts/data/Items'
import { type Item, ItemType } from '../scripts/data/Items'

const hasPowerCharm = ref<Boolean>(false)
const hasPowerTalon = ref<Boolean>(false)
const hasDemonPowder = ref<Boolean>(false)
const hasMightSeed = ref<Boolean>(false)

const demonDrugId = ref<number>(0)
const dangoId = ref<number>()

const emitItems = defineEmits(['items'])

function onSelect(itemId: number) {
  if (itemId == 0) {
    return
  }
  let items: Array<Item> = []
  const item = ItemsData.getItemById(itemId)
  items.push(item)

  emitItems('items', items)
}
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/items/seed.png`" class="header-icon" />
      <h1 class="header-title">道具</h1>
    </div>
    <form id="items">
      <el-checkbox v-model="hasPowerCharm" @change="onSelect(ItemsData.PowerCharm.id)">{{
        ItemsData.PowerCharm.name
      }}</el-checkbox>
      <el-checkbox v-model="hasPowerTalon" @change="onSelect(ItemsData.PowerTalon.id)">{{
        ItemsData.PowerTalon.name
      }}</el-checkbox>
      <el-checkbox v-model="hasMightSeed" @change="onSelect(ItemsData.MightSeed.id)">{{
        ItemsData.MightSeed.name
      }}</el-checkbox>
      <el-checkbox v-model="hasDemonPowder">{{ ItemsData.DemonPowder.name }}</el-checkbox>
      <br />

      <label for="demonDrugId">{{ ItemsData.DemonDrug.name }}</label>
      <el-select
        id="demonDrugId"
        name="demonDrugId"
        v-model="demonDrugId"
        placeholder="请选择"
        @onChange="onSelect(demonDrugId)"
      >
        >
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

      <label for="dango" @onChange="onSelect(dangoId ?? 0)">团子</label>
      <el-select id="dango" name="dango" v-model="dangoId" placeholder="请选择">
        <el-option
          v-for="t in ItemsData.getItemByType(ItemType.DANGO)"
          :key="t.id"
          :value="t.id"
          :label="t.name"
        />
      </el-select>
    </form>
  </div>
</template>
