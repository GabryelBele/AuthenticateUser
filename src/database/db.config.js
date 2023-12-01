const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida ao banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

module.exports = { sequelize, testConnection };
