// TelefoneModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db.config.js');
const UserModel = require('./UserModel.js');

const TelefoneModel = sequelize.define('Telefone', {
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ddd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

TelefoneModel.belongsTo(UserModel);

TelefoneModel.sync()
  .then(() => {
    console.log("Modelo Telefone sincronizado com o banco de dados.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelo Telefone:", err);
  });

module.exports = TelefoneModel;
