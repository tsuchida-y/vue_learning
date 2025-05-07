<script setup>
// javascriptの部分
import { ref } from 'vue'; // 画面に表示するデータが変化したときに、画面を再描画するためのもの
import axios from 'axios'; // バックエンドサーバと通信するためのライブラリ

const result = ref(null);
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // .env で設定したベースURLを使用
});

const drawOmikuji = async () => {
  try {
    // api.get を使ってリクエストを送る
    const res = await api.get('/api/omikuji'); // api.get を使う
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
