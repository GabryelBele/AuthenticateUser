// UserModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.config.js';

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

export const syncUserModel = async () => {
  try {
    await UserModel.sync();
    console.log("Modelo User sincronizado com o banco de dados.");
  } catch (err) {
    console.error("Erro ao sincronizar modelo User:", err);
  }
};

export default UserModel;
