import userService from '../services/UserService.js';

class UserController {

  async createUser(req, res) {
    try {
      const body = req.body

      const createdUser = await userService.createUserWithTelefones(body);

      const responseData = {
        id: createdUser.id,
        data_criacao: createdUser.data_criacao,
        data_atualizacao: createdUser.data_atualizacao,
        ultimo_login: createdUser.ultimo_login,
        token: createdUser.token,
      };

      res.status(201).json(responseData);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async findByIdUserController(req, res) {
    const userId = req.params.id;
    const userIdLogged = req.userId;
  
    try {
      const user = await userService.findUserByIdService(userId, userIdLogged);
      return res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
}

export default new UserController();
