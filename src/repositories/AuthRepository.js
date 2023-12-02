import User from "../models/UserModel.js";

class AuthRepository {
  async loginRepository(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (error) {
      throw new Error("Erro ao buscar usuário por email");
    }
  }
}

export default new AuthRepository();
