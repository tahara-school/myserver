const express = require("express");
const app = express();
const port = 3000;

// POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({ extended: true }));

// ルーティングの設定
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("/ へアクセスがありました");
});
// ファイル名をパラメーター
app.get("/image/:file", (req, res) => {
  const file = req.params.file;

  res.sendFile(`${__dirname}/public/image/${file}`);
  console.log(`/image/${file} へアクセスがありました`);
});
// ポスト
app.post("/", (req, res) => {
  const name = req.body.name;
  res.send(`君の名は ${name}`);
  console.log("/ へアクセスがありました");
});
// パラメーターを使った加算API
app.get("/add/", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const data = {
    'formula': `${a}+${b}`,
    'value': `${a + b}`
  };
  res.json(data);
})

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
