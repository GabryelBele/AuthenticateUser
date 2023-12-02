import User from "../models/UserModel.js";
import Telefone from "../models/TelefoneModel.js";
import AuthService from "./AuthService.js";
import bcrypt from "bcrypt";

class UserService {

  async createUserWithTelefones(body) {
    const { nome, email, password, telefones } = body;

    if (!nome || !email || !password || !telefones) {
      throw new Error('Por favor, forneça todos os campos obrigatórios.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('O email fornecido não é válido.');
    }

    if (!Array.isArray(telefones) || telefones.length === 0) {
      throw new Error('Por favor, forneça ao menos um telefone.');
    }

    for (const telefone of telefones) {
      if (!telefone.numero || !telefone.ddd) {
        throw new Error('Cada telefone deve conter um número e um DDD.');
      }
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ nome, email, password: hashedPassword });

      const telefoneData = telefones.map((tel) => ({
        ...tel,
        UserId: user.id,
      }));

      await Telefone.bulkCreate(telefoneData);

      const token = AuthService.generateToken(user.id);

      const response = {
        id: user.id,
        data_criacao: user.createdAt,
        data_atualizacao: user.updatedAt,
        ultimo_login: "2023-12-01T00:00:00.000Z",
        token: token,
      };

      return response;
    } catch (error) {
      throw new Error("Erro ao criar usuário com telefones:", error);
    }
  }

  async findUserByIdService(userIdParam, userIdLogged) {
    let idParam;
    if (!userIdParam) {
      userIdParam = userIdLogged;
      idParam = userIdParam;
    } else {
      idParam = userIdParam;
    }
    if (!idParam)
      throw new Error("Send an id in the parameters to search for the user");
  
    const user = await userRepositories.findByIdUserRepository(idParam);
  
    if (!user) throw new Error("User not found");
  
    return user;
  }
}

export default new UserService();
