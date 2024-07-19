<!-- code reference: https://github.com/dzxrly/MHWIBDmgCalculator/blob/main/mhwdmgcalculator/src/components/Footer.vue -->
<template>
  <div class="footer-wrap">
    <div class="footer-divider"></div>
    <div class="text-row">
      <span>Based on Vue.js and Element-Plus </span>
      <a href="https://github.com/dzxrly/MHWIBDmgCalculator" target="_blank">
        <img :src="gitIconSrc" width="12" height="12" />Github
      </a>
    </div>
  </div>
</template>

<script setup></script>

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

.author-name {
  font-size: 12px;
  font-weight: lighter;
}

.author-name a {
  text-decoration: none;
  border-bottom: 1px solid white;
}

.author-name a:link,
.author-name a:hover,
.author-name a:visited {
  color: white;
}

.author-name a:active {
  color: #333333;
}

.author-id {
  margin: 0px 5px;
  font-size: 12px;
  font-weight: lighter;
  color: #666666;
}

.author-id a {
  text-decoration: none;
}

.author-id a:link,
.author-id a:hover,
.author-id a:visited {
  color: white;
}

.author-id a:active {
  color: #333333;
}
</style>
