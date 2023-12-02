import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import AuthRepository from "../repositories/AuthRepository.js";

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 1800 });

const loginService = async (body) => {
  const { email, password } = body;

  if (!email || !password) throw new Error("Wrong password or username");

  const user = await AuthRepository.loginRepository(email);

  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
