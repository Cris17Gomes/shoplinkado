const express = require("express");
const cors = require("cors");
const path = require("path");
const rotas = require("./rotas");

const app = express();
const PORT = 3000


app.use(cors());
app.use(express.json());

// Adicione esta linha para servir arquivos estáticos

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(rotas);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
