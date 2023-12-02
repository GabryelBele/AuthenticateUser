import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida ao banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

export default sequelize;
