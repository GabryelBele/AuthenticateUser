import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import AuthRepository from "../repositories/AuthRepository.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

class AuthService {

  generateToken(id) {
    jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 1800 });
  }

  async loginService(body) {
    const { email, password } = body;

    if (!email || !password) throw new Error("Email ou Senha Inválidos");

    const user = await AuthRepository.loginRepository(email);

    if (!user) throw new Error("Email ou Senha Inválidos");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Email ou Senha inválidos");

    const token = this.generateToken(user.id);

    return token;
  };
}

export default new AuthService();
