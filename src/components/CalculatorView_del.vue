<!-- View page of the calculator-->
<script setup lang="ts">
import { ref } from 'vue'

//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
const c = ref(0)
const f = ref(32)

function c2f(e, v: number = +e.target.value) {
  c.value = v
  f.value = v * (9 / 5) + 32
}

function f2c(e, v: number = +e.target.value) {
  f.value = v
  c.value = (v - 32) * (5 / 9)
}
</script>
<template>
  <h1>HelloWorld!</h1>
  <h2>Calculator</h2>
  <input id="celcuis" :value="c" type="number" v-on:change="c2f" />
  <label for="celcuis">Celcuis=</label>

  <input id="feh" :value="f" type="number" v-on:change="f2c" />
  <label for="feh">Fahrenheit</label>
</template>
