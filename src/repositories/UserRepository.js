import User from "../models/UserModel.js";
import Telefone from "../models/TelefoneModel.js";

class UserRepository {
  async findByIdUserRepository(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error("Error finding user by ID in the repository:", error);
    }
  }

  async createUser(nome, email, hashedPassword) {
    try {
      const user = await User.create({ nome, email, password: hashedPassword });
      return user;
    } catch (error) {
      throw new Error("Error creating user in the repository:", error);
    }
  }

  async createTelefones(telefones, userId) {
    try {
      const telefoneData = telefones.map((tel) => ({
        ...tel,
        UserId: userId,
      }));
      await Telefone.bulkCreate(telefoneData);
    } catch (error) {
      throw new Error("Error creating telefones in the repository:", error);
    }
  }

  async findUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (error) {
      throw new Error('Erro ao buscar usuário por e-mail:', error);
    }
  }
}

export default new UserRepository();
