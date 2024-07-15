<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import { type Weapon } from '../scripts/data/Weapons'
import { type Monster } from '../scripts/data/Monsters'
import { type Item } from '../scripts/data/Items'
import {
  type Context,
  physicsDamageCalculator,
  elementDamageCalculator
} from '../scripts/logic/DmgCalculator'
import SkillsPanel from './SkillsPanel.vue'
import WeaponPanel from './WeaponPanel.vue'
import MonstersPanel from './MonstersPanel.vue'
import ItemsPanel from './ItemsPanel.vue'

const skillsP = ref<Array<Skill>>([])
const weaponP = ref<Weapon>()
const monsterP = ref<Monster>()
const itemsP = ref<Array<Item>>()

const normalPhyDmg = ref<number>(0)
const criticalPhyDmg = ref<number>(0)
const expectedPhyDmg = ref<number>(0)

const normalElementDmg = ref<number>(0)
const criticalElementDmg = ref<number>(0)
const expectedElementDmg = ref<number>(0)

function makeContext(): Context {
  return {
    weapon: weaponP.value!,
    monster: monsterP.value!,
    skills: skillsP.value,
    items: itemsP.value
  }
}

function onCalculate() {
  const ctx = makeContext()
  const phyDmgCalc = new physicsDamageCalculator(ctx)
  const elementDmgCalc = new elementDamageCalculator(ctx)

  let r1 = phyDmgCalc.calcDamage()
  let r2 = elementDmgCalc.calcDamage()

  normalPhyDmg.value = r1[0]
  criticalPhyDmg.value = r1[1]
  expectedPhyDmg.value = r1[2]

  normalElementDmg.value = r2[0]
  criticalElementDmg.value = r2[1]
  expectedElementDmg.value = r2[2]
}
</script>

<template>
  <br /><br />
  <WeaponPanel @weapon="(weapon) => (weaponP = weapon)" />
  <br /><br />
  <MonstersPanel @monster="(monster) => (monsterP = monster)" />
  <br /><br />
  <SkillsPanel @skills="(skills) => (skillsP = skills)" />
  <br /><br />
  <ItemsPanel @items="(items) => (itemsP = items)" />
  <br /><br />
  <div class="inline-flex fixed-box">
    <h1>计算结果</h1>
    <div>
      <h2>物理伤害</h2>
      <span>期望伤害（加权平均）：{{ expectedPhyDmg }}</span>
      <br />
      <span>一般伤害：{{ normalPhyDmg }}</span>
      <br />
      <span>会心伤害：{{ criticalPhyDmg }}</span>
      <br />
    </div>

    <br />
    <div>
      <h2>属性伤害</h2>
      <span>期望属性伤害（加权平均）：{{ expectedElementDmg }}</span>
      <br />
      <span>一般属性伤害：{{ normalElementDmg }}</span>
      <br />
      <span>会心属性伤害：{{ criticalElementDmg }}</span>
      <br />
    </div>
    <br />
    <el-button type="primary" plain @click="onCalculate">Calculate!</el-button>
  </div>
  <br /><br />
</template>

<style>
.fixed-box {
  position: fixed;
  top: 4%;
  right: 2.5%;
  width: 40%;

  box-shadow:
    0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);

  padding: 2% 2% 2% 2%;
}
</style>
