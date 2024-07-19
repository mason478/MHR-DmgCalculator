<!-- code reference: https://github.com/dzxrly/MHWIBDmgCalculator/blob/main/mhwdmgcalculator/src/views/CalculatorView.vue -->
<template>
  <div class="header-wrap">
    <div class="title-text-row">
      <span class="page-name">MHR伤害计算器</span>
    </div>
    <div class="divider-row"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.header-wrap {
  box-shadow:
    0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);

  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.header-wrap .title-text-row {
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background-color: #0f0f0f;
  padding: 0 0;
}
.header-wrap .title-text-row .page-name {
  margin: 0 20px;
  color: white;
  font-size: 20px;
}
.header-wrap .divider-row {
  height: 8px;
  background: linear-gradient(to left, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
}
</style>
