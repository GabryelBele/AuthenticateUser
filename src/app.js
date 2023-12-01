require("dotenv").config();
const { testConnection } = require("./database/db.config");
const User = require("./models/UserModel.js");
const Telefone = require("./models/TelefoneModel.js");
const Routes = require("./routes/routes.js");

testConnection()
  .then(() => {
    startServer();
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

function startServer() {
  const express = require("express");
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.use("/api", Routes);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
