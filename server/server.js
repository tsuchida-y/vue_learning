const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// distフォルダを静的に配信
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// SPA対応（ルーティングがすべてindex.htmlに落ちるように）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
