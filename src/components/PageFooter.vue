<!-- code reference: https://github.com/dzxrly/MHWIBDmgCalculator/blob/main/mhwdmgcalculator/src/components/Footer.vue -->
<template>
  <div class="footer-wrap">
    <div class="footer-divider"></div>
    <div class="text-row">
      <span class="author-name"
        >一个基于Vue的前端项目 By
        <a href="https://api.xiaoheihe.cn/v3/bbs/app/api/web/share?link_id=43202292" target="_blank"
          >鎧羅突擊弩賊</a
        ></span
      >
      <span class="author-id"
        >小黑盒ID:1310911&nbsp;&nbsp;Ver.1.1.6&nbsp;<a
          href="https://github.com/dzxrly/MHWIBDmgCalculator"
          target="_blank"
          ><img :src="gitIconSrc" width="12" height="12" />Github</a
        ></span
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-wrap {
  box-shadow:
    0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  /* background-color: black; */

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
