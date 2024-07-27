<script setup lang="ts">
import { ref } from 'vue'
import ItemsData from '../scripts/data/Items'
import { type Item, ItemType, ItemLevel, type LevelValue } from '../scripts/data/Items'

const hasPowerCharm = ref<Boolean>(false)
const hasPowerTalon = ref<Boolean>(false)
const hasDemonPowder = ref<Boolean>(false)
const hasMightSeed = ref<Boolean>(false)

const demonDrugLevel = ref<number>(ItemLevel.UNKNOWN)
const dangoLevel = ref<number>(ItemLevel.UNKNOWN)
let items: Array<Item> = []

const emitItems = defineEmits(['items'])

function onCheck(itemId: number, checked: boolean) {
  const idx = items.findIndex((i) => i.id == itemId)
  console.log('onCheck', idx)

  if (!checked) {
    if (idx != -1) {
      // if exists, remove
      items.splice(idx, 1)
    }
  } else if (idx == -1) {
    // if not exists, add
    const item = ItemsData.getItemById(itemId)
    items.push(item)
  }
  emitItems('items', items)
}

function findLevelValue(item: Item, level: ItemLevel): LevelValue | undefined {
  for (const levelValue of item.levelValues) {
    if (levelValue.level == level) {
      return levelValue
    }
  }
}

function onSelect(itemId: number, itemLv: ItemLevel) {
  console.log('onSelect', itemId, itemLv)
  const idx = items.findIndex((i) => i.id == itemId)

  if (idx != -1) {
    let newItem = structuredClone(items[idx])
    const lvs = findLevelValue(newItem, itemLv)
    newItem.levelValues = lvs ? [lvs] : []
    // replace
    items[idx] = newItem
  } else {
    // add
    const newItem = structuredClone(ItemsData.getItemById(itemId))
    const lvs = findLevelValue(newItem, itemLv)
    newItem.levelValues = lvs ? [lvs] : []
    items.push(newItem)
  }
  emitItems('items', items)
}

function generateLevelLabel(
  item: Item,
  level: ItemLevel | undefined,
  alias: string | undefined
): string {
  if (alias) {
    return alias
  }
  if (level == undefined) {
    return item.name
  } else {
    return item.name + 'Lv' + level
  }
}
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/items/seed.png`" class="header-icon" />
      <h1 class="header-title">道具</h1>
    </div>
    <form id="items">
      <el-checkbox
        v-model="hasPowerCharm"
        @change="onCheck(ItemsData.PowerCharm.id, hasPowerCharm.valueOf())"
        >{{ ItemsData.PowerCharm.name }}</el-checkbox
      >
      <el-checkbox
        v-model="hasPowerTalon"
        @change="onCheck(ItemsData.PowerTalon.id, hasPowerTalon.valueOf())"
        >{{ ItemsData.PowerTalon.name }}</el-checkbox
      >
      <el-checkbox
        v-model="hasMightSeed"
        @change="onCheck(ItemsData.MightSeed.id, hasMightSeed.valueOf())"
        >{{ ItemsData.MightSeed.name }}</el-checkbox
      >
      <br />

      <label for="demonDrugLevel">{{ ItemsData.DemonDrug.name }}</label>
      <el-select
        id="demonDrugLevel"
        name="demonDrugLevel"
        v-model="demonDrugLevel"
        @change="onSelect(ItemsData.DemonDrug.id, demonDrugLevel)"
        placeholder="请选择"
      >
        >
        <el-option
          v-for="lv in ItemsData.DemonDrug.levelValues"
          :key="lv.level"
          :value="lv.level"
          :label="generateLevelLabel(ItemsData.DemonDrug, lv.level, lv.alias)"
        >
        </el-option>
      </el-select>

      <label for="dango">团子</label>
      <el-select
        id="dango"
        name="dango"
        @change="onSelect(ItemsData.DangoBooster.id, dangoLevel)"
        v-model="dangoLevel"
        placeholder="请选择"
      >
        <el-option
          v-for="d in ItemsData.DangoBooster.levelValues"
          :key="d.level"
          :value="d.level"
          :label="generateLevelLabel(ItemsData.DangoBooster, d.level, d.alias)"
        />
      </el-select>
    </form>
  </div>
</template>
