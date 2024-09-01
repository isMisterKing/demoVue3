<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <button @click="save">点击按钮</button>
  <button @click="redirect">跳转按钮</button>
  <br>
  <iframe src="/customIframe" frameborder="1"></iframe>
</template>

<script setup>
import { computed, ref } from 'vue';
import { saveList } from '@/axios/api';
import { useRouter } from 'vue-router';
const router = useRouter();

const msg = computed(() => {
  return process.env.VUE_APP_BASE_URL;
})

function save() {
  saveList({id: '001'}).then(res => {
    window.alert(res.message)
  })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
