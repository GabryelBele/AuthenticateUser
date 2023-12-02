import AuthService from "./AuthService.js";
import bcrypt from "bcrypt";
import UserRepository from "../repositories/UserRepository.js";

class UserService {

  async createUserWithTelefones(body){
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
      const hashedPassword = await bcrypt.hash(password, 10);

      const userExists = await UserRepository.findUserByEmail(email);
      if (userExists) {
        throw new Error('E-mail já cadastrado');
      }
      
      const user = await UserRepository.createUser(nome, email, hashedPassword);

      await UserRepository.createTelefones(telefones, user.id);

      const token = AuthService.generateToken(user.id);

      const response = {
        id: user.id,
        data_criacao: user.createdAt,
        data_atualizacao: user.updatedAt,
        ultimo_login: new Date().toISOString(),
        token: token,
      };

      return response;
  }

  async findUserByIdService(userIdParam, userIdLogged) {
    const idParam = userIdParam || userIdLogged;
  
    if (!idParam) {
      throw new Error("Send an id in the parameters to search for the user");
    }
  
    const user = await UserRepository.findByIdUserRepository(idParam);
  
    if (!user) {
      throw new Error("User not found");
    }
  
    return user;
  }

}

export default new UserService();


