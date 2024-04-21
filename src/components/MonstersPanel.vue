<script setup lang="ts">
import { ref } from 'vue'
import { MonsterStatus, allMonsters } from '@/scripts/data/Monsters'
import monsterData from '@/scripts/data/Monsters'

const monsterId = ref<number>()
const status = ref<MonsterStatus>(MonsterStatus.NORMAL)
const monsterPart = ref<number>()

const emitMonster = defineEmits(['monster'])

function onSelect() {}
</script>

<template>
  <div>
    <h1>怪物信息</h1>
    <form id="monsterForm">
      <label for="monster">怪物</label>
      <el-select id="monster" v-model="monsterId" placeholder="请选择狩猎的怪物">
        <el-option v-for="m in allMonsters" :key="m.id" :label="m.name" :value="m.id" />
      </el-select>

      <label for="monsterPart">怪物部位</label>
      <el-select id="monsterPart" v-model="monsterPart" placeholder="请选择怪物部位">
        <el-option
          v-for="mp in monsterData.getMonsterPartsByMonsterId(monsterId ? monsterId : 0)"
          :key="mp.id"
          :label="mp.name"
          :value="mp"
        />
      </el-select>

      <label for="monsterStatus">怪物状态</label>
      <el-select id="monsterStatus" v-model="status" placeholder="怪物状态，可选">
        <el-option label="普通" :value="MonsterStatus.NORMAL" />
        <el-option label="愤怒" :value="MonsterStatus.RAGE" />
      </el-select>
    </form>
  </div>
</template>
