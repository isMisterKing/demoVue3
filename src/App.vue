<template>
  <HelloWorld :msg=msg />
  <button @click="save">点击按钮</button>
</template>

<script setup>
import { saveList } from '@/axios/api';
import { computed } from 'vue';

const msg = computed(() => {
  return process.env.VUE_APP_BASE_URL;
})

function save() {
  saveList({id: '001'}).then(res => {
    window.alert(res.message)
  })
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
