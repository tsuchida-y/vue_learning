<script setup>
// HelloWorldコンポーネントは使用しないため、インポートを削除しました。
import { ref } from 'vue'
import axios from 'axios'

const result = ref(null)

const drawOmikuji = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/omikuji');
    result.value = res.data.result;
  } catch (error) {
    console.error("おみくじの取得に失敗しました:", error);
    result.value = "取得失敗"; // エラー時にもユーザーにフィードバック
  }
}
</script>

<template>
  <div>
    <h1>おみくじ</h1>
    <button @click="drawOmikuji">引く</button>
    <p v-if="result">結果: {{ result }}</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>