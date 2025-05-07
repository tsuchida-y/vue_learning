<script setup>
//javascriptの部分
import { ref } from 'vue'//画面に表示するデータが変化したときに、画面を再描画するためのもの
import axios from 'axios'//バックエンドサーバと通信するためのライブラリ

const result = ref(null)
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const drawOmikuji = async () => {
  try {
    const res = await axios.get(`${apiBaseUrl}/api/omikuji`);
    result.value = res.data.result;
  } catch (error) {
    console.error("おみくじの取得に失敗しました:", error);
    result.value = "取得失敗"; // エラー時にもユーザーにフィードバック
  }
}
</script>

<template>
  <!-- HTMLの部分 -->
  <div>
    <h1>おみくじ</h1>
    <button @click="drawOmikuji">引く</button>
    <p v-if="result">結果: {{ result }}</p>
  </div>
</template>

<!-- <style scoped>
/* CSSの部分 */
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
</style> -->