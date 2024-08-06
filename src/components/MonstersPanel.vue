<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MonsterStatus, allMonsters, type Monster } from '@/scripts/data/Monsters'
import monsterData from '@/scripts/data/Monsters'

const monsterForm = ref(null)
const otherValue = ref('')

const CUSTOM_MONSTER_ID = -1

interface FormData {
  monsterId: number
  status: MonsterStatus
  monsterPartId: number
  customHitRates?: number
  customElementHitRates?: number
}

const formData = reactive<FormData>({
  monsterId: 1,
  status: MonsterStatus.NORMAL,
  monsterPartId: 1,
  customHitRates: 0,
  customElementHitRates: 0
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
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/monsters/rathian.jpg`" class="header-icon" />
      <h1 class="header-title">怪物信息</h1>
    </div>

    <el-form id="monsterForm" :ref="monsterForm" :model="formData" label-position="top">
      <el-form-item label="怪物" prop="monster">
        <el-select id="monster" v-model="formData.monsterId" placeholder="请选择狩猎的怪物">
          <el-option v-for="m in allMonsters" :key="m.id" :label="m.name" :value="m.id" />
          <el-option :value="CUSTOM_MONSTER_ID" label="自定义">自定义</el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="怪物部位"
        prop="monsterPartId"
        v-if="formData.monsterId != CUSTOM_MONSTER_ID"
      >
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

      <el-form-item label="自定义部位肉质" v-if="formData.monsterId === CUSTOM_MONSTER_ID">
        <el-input
          v-model="formData.customHitRates"
          placeholder="请输入部位肉质"
          type="number"
        ></el-input>
      </el-form-item>
      <el-form-item label="自定义部位属性肉质" v-if="formData.monsterId === CUSTOM_MONSTER_ID">
        <el-input
          v-model="formData.customElementHitRates"
          placeholder="请输入部位属性肉质"
          type="number"
        ></el-input>
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
