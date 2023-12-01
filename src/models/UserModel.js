const { DataTypes } = require('sequelize');
const db = require('../database/db.config.js');

const User = db.sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync().then(() => {
  console.log('Modelo User sincronizado com o banco de dados.');
}).catch((err) => {
  console.error('Erro ao sincronizar modelo User:', err);
});

module.exports = User;
