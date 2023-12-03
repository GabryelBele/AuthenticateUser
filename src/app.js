import dotenv from 'dotenv';
dotenv.config();
import { testConnection } from "./database/db.config.js";
import express from "express";
import Routes from "./routes/routes.js";
import { syncTelefoneModel } from './models/TelefoneModel.js';

syncTelefoneModel()
  .then(() => {
    console.log("Modelos sincronizados. Inicializando o servidor...");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelos:", err);
  });


testConnection()
  .then(() => {
    startServer();
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.use(Routes);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
