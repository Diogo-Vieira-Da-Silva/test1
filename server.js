const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post("/api/cadastro", (req, res) => {
  const data = req.body;
  res.json({ sucesso: true, recebido: data });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});