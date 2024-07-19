<script setup lang="ts">
import CalculationPanel from './components/CalculationPanel.vue'
import PageHeader from './components/PageHeader.vue'
</script>

<template class="panel">
  <div>
    <PageHeader />
    <CalculationPanel />
  </div>
</template>

<style>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
