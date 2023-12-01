require('dotenv').config();

const { sequelize, testConnection } = require('./database/db.config.js'); // Importe a configuração do Sequelize

// Testa a conexão antes de iniciar o servidor Express
testConnection().then(() => {
  startServer();
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

function startServer() {
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Iniciando servidor Express");
  });

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
