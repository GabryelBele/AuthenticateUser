// UserModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db.config.js');

const UserModel = sequelize.define('User', {
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

UserModel.sync()
  .then(() => {
    console.log("Modelo User sincronizado com o banco de dados.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelo User:", err);
  });

module.exports = UserModel;
