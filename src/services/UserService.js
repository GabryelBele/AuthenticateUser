const User = require("../models/UserModel.js");
const Telefone = require("../models/TelefoneModel.js");

class UserService {
  async createUserWithTelefones(nome, email, password, telefones) {
    try {
      const user = await User.create({ nome, email, password });

      const telefoneData = telefones.map((tel) => ({
        ...tel,
        UserId: user.id,
      }));

     await Telefone.bulkCreate(telefoneData);

      const response = {
        id: user.id,
        data_criacao: user.createdAt,
        data_atualizacao: user.updatedAt,
        ultimo_login: "2023-12-01T00:00:00.000Z",
        token: "seu token JWT aqui",
      };

      return response;
    } catch (error) {
      throw new Error("Erro ao criar usuário com telefones:", error);
    }
  }
}

module.exports = new UserService();
