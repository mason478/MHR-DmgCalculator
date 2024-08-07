<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MonsterStatus, allMonsters, type Monster } from '@/scripts/data/Monsters'
import monsterData from '@/scripts/data/Monsters'
import { PhysicsAttackType, ElementType } from '@/scripts/data/Common'

const monsterForm = ref(null)

const CUSTOMIZED_MONSTER_ID = -1

interface FormData {
  monsterId: number
  status: MonsterStatus
  monsterPartId: number
  customizedHitRates: number
  customizedElementHitRates: number
}

const formData = reactive<FormData>({
  monsterId: 1,
  status: MonsterStatus.NORMAL,
  monsterPartId: 1,
  customizedHitRates: 0,
  customizedElementHitRates: 0
})

function makeCustomizedMonster(): Monster {
  const monster: Monster = {
    id: CUSTOMIZED_MONSTER_ID,
    name: 'CUSTOMIZED',
    parts: [
      {
        id: 1,
        name: 'CUSTOMIZED',
        hitRates: new Map([
          [PhysicsAttackType.SLASHING, formData.customizedHitRates],
          [PhysicsAttackType.HITTING, formData.customizedHitRates],
          [PhysicsAttackType.SHOTTING, formData.customizedHitRates]
        ]),
        elementHitRates: new Map([
          [ElementType.FIRE, formData.customizedElementHitRates],
          [ElementType.WATER, formData.customizedElementHitRates],
          [ElementType.THUNDER, formData.customizedElementHitRates],
          [ElementType.ICE, formData.customizedElementHitRates],
          [ElementType.DRAGON, formData.customizedElementHitRates]
        ])
      }
    ]
  }
  return monster
}

function makeMonster(): Monster {
  // if monster is customized, use custom data
  if (formData.monsterId == CUSTOMIZED_MONSTER_ID) {
    return makeCustomizedMonster()
  }
  const monster = structuredClone(monsterData.getMonsterById(formData.monsterId))
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
          <el-option :value="CUSTOMIZED_MONSTER_ID" label="自定义">自定义</el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="怪物部位"
        prop="monsterPartId"
        v-if="formData.monsterId != CUSTOMIZED_MONSTER_ID"
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

      <el-form-item label="自定义部位肉质" v-if="formData.monsterId === CUSTOMIZED_MONSTER_ID">
        <el-input
          v-model.number="formData.customizedHitRates"
          placeholder="请输入部位肉质"
          type="number"
          max="100"
          min="0"
        ></el-input>
      </el-form-item>
      <el-form-item label="自定义部位属性肉质" v-if="formData.monsterId === CUSTOMIZED_MONSTER_ID">
        <el-input
          v-model.number="formData.customizedElementHitRates"
          placeholder="请输入部位属性肉质"
          type="number"
          max="100"
          min="0"
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
