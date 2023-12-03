// TelefoneModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.config.js';
import { syncUserModel } from './UserModel.js';

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

export const syncTelefoneModel = async () => {
  try {
    await syncUserModel();
    await TelefoneModel.sync();
    TelefoneModel.belongsTo(UserModel);
    console.log("Modelo Telefone sincronizado com o banco de dados.");
  } catch (err) {
    console.error("Erro ao sincronizar modelo Telefone:", err);
  }
};

export default TelefoneModel;
