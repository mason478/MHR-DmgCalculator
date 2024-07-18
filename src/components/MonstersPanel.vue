<script setup lang="ts">
import { ref } from 'vue'
import { MonsterStatus, allMonsters } from '@/scripts/data/Monsters'
import monsterData from '@/scripts/data/Monsters'

const monsterId = ref<number>(1)
const status = ref<MonsterStatus>(MonsterStatus.NORMAL)
const monsterPartId = ref<number>(1)

var monster = structuredClone(monsterData.getMonsterById(monsterId.value))
monster.parts = monsterData.getMonsterPartsByMonsterId(monsterId.value)
const emitMonster = defineEmits(['monster'])

emitMonster('monster', monster)
function onSelect() {
  if (!monsterId.value) return

  monster = structuredClone(monsterData.getMonsterById(monsterId.value))
  let parts = monsterData.getMonsterPartsByMonsterId(monsterId.value)
  let p = parts.find((p) => p.id == monsterPartId.value)
  if (p) {
    monster.parts = [p]
  }
  monster.status = status.value
  emitMonster('monster', monster)
}
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/monsters/rathian.jpg`" class="header-icon" />
      <h1 class="header-title">怪物信息</h1>
    </div>
    <form id="monsterForm">
      <label for="monster">怪物</label>
      <el-select id="monster" v-model="monsterId" placeholder="请选择狩猎的怪物" @change="onSelect">
        <el-option v-for="m in allMonsters" :key="m.id" :label="m.name" :value="m.id" />
      </el-select>

      <label for="monsterPart">怪物部位</label>
      <el-select
        id="monsterPart"
        v-model="monsterPartId"
        placeholder="请选择怪物部位"
        @change="onSelect"
      >
        <el-option
          v-for="mp in monsterData.getMonsterPartsByMonsterId(monsterId ? monsterId : 0)"
          :key="mp.id"
          :label="mp.name"
          :value="mp.id"
        />
      </el-select>

      <label for="monsterStatus">怪物状态</label>
      <el-select id="monsterStatus" v-model="status" placeholder="怪物状态" @change="onSelect">
        <el-option label="普通" :value="MonsterStatus.NORMAL" />
        <el-option label="愤怒" :value="MonsterStatus.RAGE" />
      </el-select>
    </form>
  </div>
</template>
