// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/omikuji', (req, res) => {
  const results = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];
  const random = results[Math.floor(Math.random() * results.length)];
  res.json({ result: random });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
