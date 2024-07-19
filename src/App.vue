<script setup lang="ts">
import CalculationPanel from './components/CalculationPanel.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template class="panel">
  <div>
    <PageHeader />
    <CalculationPanel />
    <PageFooter />
  </div>
</template>

<style>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
