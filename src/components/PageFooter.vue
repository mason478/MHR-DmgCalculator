<!-- code reference: https://github.com/dzxrly/MHWIBDmgCalculator/blob/main/mhwdmgcalculator/src/components/Footer.vue -->
<script setup></script>
<template>
  <div class="footer-wrap">
    <div class="footer-divider"></div>
    <div class="text-row">
      <a href="https://github.com/mason478/MHR-DmgCal" target="_blank">
        <img :src="`/github.svg`" width="18" height="18" style="vertical-align: middle" /> Github
      </a>
    </div>
  </div>
</template>

<style scoped>
.footer-wrap {
  box-shadow:
    0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  background-color: black;

  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.footer-divider {
  height: 8px;
  background: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
}

.text-row {
  margin: 10px 0px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
