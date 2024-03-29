<script setup lang="ts">
import { ref } from 'vue'
import { MonsterStatus, allMonsters } from '@/scripts/data/Monsters'

const monsterId = ref<Number>()
</script>

<template>
  <div>
    <h1>怪物信息</h1>
    <form id="monsterForm">
      <label for="monster">怪物</label>
      <el-select v-model="monsterId" placeholder="请选择狩猎的怪物">
        <el-option v-for="m in allMonsters" :key="m.id" :label="m.name" :value="m.id" />
      </el-select>
    </form>
  </div>
</template>
