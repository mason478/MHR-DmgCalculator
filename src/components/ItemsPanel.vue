<script setup lang="ts">
import { ref, reactive } from 'vue'
import ItemsData from '../scripts/data/Items'
import { type Item, ItemLevel } from '../scripts/data/Items'

const itemsForm = ref(null)
const formData = reactive({
  hasPowerCharm: false,
  hasPowerTalon: false,
  hasMightSeed: false,
  demonDrugLevel: ItemsData.DemonDrug.levelValues[0],
  dangoLevel: ItemsData.DangoBooster.levelValues[0],
  // petalace attack booster value
  petalace: 0
})

function makeItems() {
  let items: Array<Item> = []
  if (formData.hasPowerCharm) {
    items.push(ItemsData.PowerCharm)
  }
  if (formData.hasPowerTalon) {
    items.push(ItemsData.PowerTalon)
  }
  if (formData.hasMightSeed) {
    items.push(ItemsData.MightSeed)
  }

  if (formData.demonDrugLevel.level != ItemLevel.UNKNOWN) {
    const demonDrug = structuredClone(ItemsData.DemonDrug)
    demonDrug.levelValues = [formData.demonDrugLevel]
    items.push(demonDrug)
  }

  if (formData.dangoLevel.level != ItemLevel.UNKNOWN) {
    const dango = structuredClone(ItemsData.DangoBooster)
    dango.levelValues = [formData.dangoLevel]
    items.push(dango)
  }

  if (formData.petalace > 0) {
    const p = structuredClone(ItemsData.Petalace)
    p.levelValues = [{ level: ItemLevel.LV1, value: formData.petalace }]
    items.push(p)
  }

  return items
}

defineExpose({
  itemsForm,
  makeItems
})

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
    <el-form label-position="top" :ref="itemsForm" :model="formData">
      <el-form-item prop="hasPowerCharm" class="inline-form-item">
        <el-checkbox v-model="formData.hasPowerCharm">{{ ItemsData.PowerCharm.name }}</el-checkbox>
      </el-form-item>

      <el-form-item prop="hasPowerTalon" class="inline-form-item">
        <el-checkbox v-model="formData.hasPowerTalon">{{ ItemsData.PowerTalon.name }}</el-checkbox>
      </el-form-item>
      <el-form-item prop="hasMightSeed" class="inline-form-item">
        <el-checkbox v-model="formData.hasMightSeed">{{ ItemsData.MightSeed.name }}</el-checkbox>
      </el-form-item>
      <el-form-item prop="demonDrugLevel" :label="ItemsData.DemonDrug.name">
        <el-select name="demonDrugLevel" v-model="formData.demonDrugLevel" placeholder="请选择">
          <el-option
            v-for="lv in ItemsData.DemonDrug.levelValues"
            :key="lv.level"
            :value="lv"
            :label="generateLevelLabel(ItemsData.DemonDrug, lv.level, lv.alias)"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="dangoLevel" :label="ItemsData.DangoBooster.name">
        <el-select v-model="formData.dangoLevel" placeholder="请选择">
          <el-option
            v-for="d in ItemsData.DangoBooster.levelValues"
            :key="d.level"
            :value="d"
            :label="generateLevelLabel(ItemsData.DangoBooster, d.level, d.alias)"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="petalace" :label="ItemsData.Petalace.name">
        <el-input v-model.number="formData.petalace" type="number" min="0" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.inline-form-item {
  display: inline-block;
  margin-right: 10px;
}
</style>
