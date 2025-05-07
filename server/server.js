const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ビルド済みのフロントエンド（dist）フォルダの絶対パスを取得
const distPath = path.resolve(__dirname, '../frontend/dist');

// 静的ファイルを配信
app.use(express.static(distPath));

// SPA対応：全ルートをindex.htmlにフォールバック
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
