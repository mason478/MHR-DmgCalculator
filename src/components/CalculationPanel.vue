<script setup lang="ts">
import { ref } from 'vue'
import { type Skill } from '../scripts/data/Skills'
import { type Weapon } from '../scripts/data/Weapons'
import { type Monster } from '../scripts/data/Monsters'
import { type Item } from '../scripts/data/Items'
import { type otherFactor } from '../scripts/data/Others'
import {
  type Context,
  physicsDamageCalculator,
  elementDamageCalculator
} from '../scripts/logic/DmgCalculator'
import SkillsPanel from './SkillsPanel.vue'
import WeaponPanel from './WeaponPanel.vue'
import MonstersPanel from './MonstersPanel.vue'
import ItemsPanel from './ItemsPanel.vue'
import OthersPanel from './OthersPanel.vue'

const othersP = ref<Array<otherFactor>>()

const normalPhyDmg = ref<number>(0)
const criticalPhyDmg = ref<number>(0)
const expectedPhyDmg = ref<number>(0)

const normalElementDmg = ref<number>(0)
const criticalElementDmg = ref<number>(0)
const expectedElementDmg = ref<number>(0)

const weaponFormRef = ref(null)
const monsterFormRef = ref(null)
const skillsFormRef = ref(null)
const itemsFormRef = ref(null)

function makeContext(): Context {
  // @ts-ignore
  const weapon: Weapon = weaponFormRef.value.makeWeapon(weaponFormRef.value.formData)
  // @ts-ignore
  const monster: Monster = monsterFormRef.value.makeMonster()
  // @ts-ignore
  const skills: Array<Skill> = skillsFormRef.value.makeSkills()
  // @ts-ignore
  const items: Array<Item> = itemsFormRef.value.makeItems()

  return {
    weapon: weapon,
    monster: monster,
    skills: skills,
    items: items,
    others: othersP.value
  }
}

function onCalculate() {
  // @ts-ignore
  weaponFormRef.value.weaponForm.validate()
  const ctx = makeContext()
  console.log('context', ctx)
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
  <WeaponPanel ref="weaponFormRef" />
  <br /><br />
  <MonstersPanel ref="monsterFormRef" />
  <br /><br />
  <SkillsPanel ref="skillsFormRef" />
  <br /><br />
  <ItemsPanel ref="itemsFormRef" />
  <br /><br />
  <OthersPanel @others="(others) => (othersP = others)" />
  <br /><br />
  <div class="inline-flex fixed-box">
    <h1>计算结果</h1>
    <div>
      <h2>总伤害</h2>
      <span>期望总伤害（加权平均）：{{ expectedPhyDmg + expectedElementDmg }}</span>
    </div>
    <el-divider></el-divider>

    <div>
      <h2>物理伤害</h2>
      <span>期望伤害（加权平均）：{{ expectedPhyDmg }}</span>
      <br />
      <span>一般伤害：{{ normalPhyDmg }}</span>
      <br />
      <span>会心伤害：{{ criticalPhyDmg }}</span>
      <br />
    </div>
    <el-divider></el-divider>

    <div>
      <h2>属性伤害</h2>
      <span>期望属性伤害（加权平均）：{{ expectedElementDmg }}</span>
      <br />
      <span>一般属性伤害：{{ normalElementDmg }}</span>
      <br />
      <span>会心属性伤害：{{ criticalElementDmg }}</span>
      <br />
    </div>
    <el-divider></el-divider>
    <el-button @click="onCalculate" style="background-color: #000000; color: #ffffff"
      >计算!</el-button
    >
  </div>
  <br /><br />
</template>

<style>
.fixed-box {
  box-shadow:
    0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);

  padding: 2% 2% 2% 2%;
}
</style>
