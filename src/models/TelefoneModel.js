const { DataTypes } = require('sequelize');
const db = require('../database/db.config.js');

const Telefone = db.sequelize.define('Telefone', {
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ddd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronização do modelo com o banco de dados
Telefone.sync().then(() => {
  console.log('Modelo Telefone sincronizado com o banco de dados.');
}).catch((err) => {
  console.error('Erro ao sincronizar modelo Telefone:', err);
});

module.exports = Telefone;
