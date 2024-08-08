<!-- Weapon basic attack values selection form-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
// import 'element-plus/dist/index.css'
import weaponData from '../scripts/data/Weapons'
import {
  WeaponType,
  allWeaponTypes,
  allSharpness,
  Sharpness,
  type Weapon,
  type WeaponMotion,
  sharpnessAvailableWeaponTypes
} from '../scripts/data/Weapons'
import { elementNamesMap, ElementType, PhysicsAttackType } from '../scripts/data/Common'

const weaponIconBaseUrl = '/icons/weapons/'
const elementIconBaseUrl = '/icons/elements/'

const weaponForm = ref(null)
const CUSTOMIZED_MOTION_ID = -1

interface FormData {
  weaponType: WeaponType | undefined
  motionId: number | undefined
  sp: Sharpness
  rawAttack: number
  element: ElementType
  elementAttack: number
  criticalRate: number
  customizedMotionValue: number
}

let formData = reactive<FormData>({
  weaponType: undefined,
  motionId: undefined,
  sp: Sharpness.UNKNOWN,
  rawAttack: 0,
  element: ElementType.UNKNOWN,
  elementAttack: 0,
  criticalRate: 0,
  customizedMotionValue: 0
})

const sharpnessColormap = new Map<Sharpness, string>([
  [Sharpness.UNKNOWN, '#212121'],
  [Sharpness.RED, '#F44336'],
  [Sharpness.ORANGE, '#FF6600'],
  [Sharpness.YELLOW, '#FFDE0A'],
  [Sharpness.GREEN, '#70D92C'],
  [Sharpness.BLUE, '#42A5F5'],
  [Sharpness.WHITE, '#EEEEEE'],
  [Sharpness.PURPLE, '#CC99FF']
])

function makeWeaponMotion(): WeaponMotion {
  return {
    id: CUSTOMIZED_MOTION_ID,
    name: 'CustomizedMotion',
    attackType: PhysicsAttackType.SLASHING,
    motionValue: formData.customizedMotionValue,
    elementCorrection: 1,
    extraPhysicsCorrection: 1
  }
}

function makeWeapon(formData: FormData): Weapon {
  if (formData.weaponType == undefined || formData.motionId == undefined) {
    throw new Error('weaponType is not selected')
  }
  const newWeapon = structuredClone(weaponData.getWeaponByType(formData.weaponType))
  if (formData.motionId == CUSTOMIZED_MOTION_ID) {
    newWeapon.motions = [makeWeaponMotion()]
  } else {
    const motions = weaponData.getWeaponMotionsByWeaponType(formData.motionId)
    const motion = motions.find((m) => m.id == formData.motionId)
    if (motion == undefined) {
      throw new Error('motion is not available')
    }
    newWeapon.motions = [motion]
  }

  newWeapon.sharpness = formData.sp
  newWeapon.physicsAttack = formData.rawAttack
  newWeapon.elementType = formData.element
  newWeapon.criticalRate = formData.criticalRate
  newWeapon.elementAttack = formData.elementAttack

  return newWeapon
}

defineExpose({
  formData,
  weaponForm,
  makeWeapon
})
</script>

<template>
  <div class="inline-flex">
    <div class="header-container">
      <img :src="`/icons/weapons/weapon.png`" class="header-icon" />
      <h1 class="header-title">武器信息</h1>
    </div>
    <el-form id="weaponForm" ref="weaponForm" :model="formData" label-position="top">
      <el-form-item
        label="武器类型"
        prop="weaponType"
        :rules="[{ required: true, message: '请选择一个选项' }]"
      >
        <el-select
          id="weaponType"
          name="weaponType"
          v-model="formData.weaponType"
          placeholder="请选择一种武器"
        >
          <el-option
            v-for="t in allWeaponTypes"
            :key="t"
            :value="t"
            :label="weaponData.getWeaponByType(t).name"
          >
            <img
              :src="`${weaponIconBaseUrl}${weaponData.getWeaponByType(t).name}.png`"
              class="select-icon"
            />
            <span class="select-label">{{ weaponData.getWeaponByType(t).name }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="武器动作"
        prop="motionId"
        :rules="[{ required: true, message: '请选择一种武器动作' }]"
        style="width: 900px"
      >
        <el-select name="motionId" v-model="formData.motionId" placeholder="请选择一种动作">
          <el-option
            v-for="m in formData.weaponType == undefined
              ? []
              : weaponData.getWeaponMotionsByWeaponType(formData.weaponType)"
            :key="m.id"
            :value="m.id"
            :label="m.name"
          >
          </el-option>
          <el-option :value="CUSTOMIZED_MOTION_ID" label="自定义">自定义</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自定义武器动作值" v-if="formData.motionId == CUSTOMIZED_MOTION_ID">
        <el-input
          label="自定义动作值"
          placeholder="请输入自定义动作值"
          v-model.number="formData.customizedMotionValue"
          type="number"
          min="0"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="武器斩味（锋利度）"
        prop="sharpness"
        v-if="
          formData.weaponType != undefined && sharpnessAvailableWeaponTypes.has(formData.weaponType)
        "
      >
        <el-select name="sharpness" v-model="formData.sp" placeholder="请选择武器斩味（可选）">
          <el-option
            v-for="sp in allSharpness"
            :key="sp"
            :value="sp"
            :label="weaponData.getSharpnessAttribute(sp).name"
          >
            <!--color-->
            <div class="flex items-center">
              <el-tag
                :color="sharpnessColormap.get(sp)"
                style="margin-right: 8px; vertical-align: center"
                size="small"
                class="select-icon"
              />
              <span size="small" class="select-label">{{
                weaponData.getSharpnessAttribute(sp).name
              }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="武器原始攻击力"
        prop="rawAttack"
        :rules="[
          { required: true, message: '请输入武器原始攻击力' },
          { type: 'number', message: '武器攻击力必须为数字值' },
          {
            // @ts-ignore
            validator: (rule, value, callback) => {
              if (value <= 0) {
                callback(new Error('武器攻击力必须为正数'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]"
      >
        <el-input
          name="rawAttack"
          v-model.number="formData.rawAttack"
          placeholder="请输入武器原始攻击力"
        />
      </el-form-item>

      <el-form-item label="武器属性" prop="element">
        <el-select name="element" v-model="formData.element">
          <el-option
            v-for="e in Array.from(elementNamesMap.keys())"
            :key="e"
            :value="e"
            :label="elementNamesMap.get(e)"
          >
            <img
              :src="`${elementIconBaseUrl}${ElementType[e].toLowerCase()}.jpg`"
              class="select-icon"
            />
            <span class="select-label">{{ elementNamesMap.get(e) }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="武器属性攻击力"
        prop="elementAttack"
        :rules="[{ type: 'number', message: '属性攻击必须为数字值' }]"
      >
        <el-input v-model.number="formData.elementAttack" placeholder="请输入武器属性攻击力" />
      </el-form-item>

      <el-form-item
        label="武器会心率（%）"
        prop="criticalRate"
        :rules="[{ type: 'number', message: '必须为数字值' }]"
      >
        <el-input
          id="criticalRate"
          type="number_percent"
          max="100"
          min="-100"
          name="criticalRate"
          v-model.number="formData.criticalRate"
          validate-event="true"
          placeholder="请输入武器会心率"
        >
          <template #append>%</template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.select-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.select-label {
  vertical-align: middle;
}
</style>
