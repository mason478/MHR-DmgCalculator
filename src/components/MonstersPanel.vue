<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MonsterStatus, allMonsters, type Monster } from '@/scripts/data/Monsters'
import monsterData from '@/scripts/data/Monsters'

const monsterForm = ref(null)

interface FormData {
  monsterId: number
  status: MonsterStatus
  monsterPartId: number
}

const formData = reactive<FormData>({
  monsterId: 1,
  status: MonsterStatus.NORMAL,
  monsterPartId: 1
})

function makeMonster(): Monster {
  var monster = structuredClone(monsterData.getMonsterById(formData.monsterId))
  let parts = monsterData.getMonsterPartsByMonsterId(formData.monsterId)
  let p = parts.find((p) => p.id == formData.monsterPartId)
  if (p) {
    monster.parts = [p]
  }
  monster.status = formData.status
  return monster
}

defineExpose({
  makeMonster,
  formData,
  monsterForm
})

// var monster = structuredClone(monsterData.getMonsterById(monsterId.value))
// monster.parts = monsterData.getMonsterPartsByMonsterId(monsterId.value)
// const emitMonster = defineEmits(['monster'])
//
// emitMonster('monster', monster)
// function onSelect() {
// if (!monsterId.value) return
//
// monster = structuredClone(monsterData.getMonsterById(monsterId.value))
// let parts = monsterData.getMonsterPartsByMonsterId(monsterId.value)
// let p = parts.find((p) => p.id == monsterPartId.value)
// if (p) {
// monster.parts = [p]
// }
// monster.status = status.value
// emitMonster('monster', monster)
// }
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/monsters/rathian.jpg`" class="header-icon" />
      <h1 class="header-title">怪物信息</h1>
    </div>

    <el-form id="monsterForm" ref="monsterForm" :model="formData" label-position="top">
      <el-form-item label="怪物" prop="monster">
        <el-select id="monster" v-model="formData.monsterId" placeholder="请选择狩猎的怪物">
          <el-option v-for="m in allMonsters" :key="m.id" :label="m.name" :value="m.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="怪物部位" prop="monsterPartId">
        <el-select v-model="formData.monsterPartId" placeholder="请选择怪物部位">
          <el-option
            v-for="mp in monsterData.getMonsterPartsByMonsterId(
              formData.monsterId ? formData.monsterId : 0
            )"
            :key="mp.id"
            :label="mp.name"
            :value="mp.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="怪物状态" prop="status">
        <el-select id="status" v-model="formData.status" placeholder="请选择怪物状态">
          <el-option label="普通" :value="MonsterStatus.NORMAL" />
          <el-option label="愤怒" :value="MonsterStatus.RAGE" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
