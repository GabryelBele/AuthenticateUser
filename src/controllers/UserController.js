const UserService = require('../services/UserService.js');

class UserController {
  async createUser(req, res) {
    try {
      const { nome, email, password, telefones } = req.body;

      if (!nome || !email || !password || !telefones) {
        return res.status(400).json({ error: 'Por favor, forneça todos os campos obrigatórios.' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'O email fornecido não é válido.' });
      }

      if (!Array.isArray(telefones) || telefones.length === 0) {
        return res.status(400).json({ error: 'Por favor, forneça ao menos um telefone.' });
      }

      for (const telefone of telefones) {
        if (!telefone.numero || !telefone.ddd) {
          return res.status(400).json({ error: 'Cada telefone deve conter um número e um DDD.' });
        }
      }

      const createdUser = await UserService.createUserWithTelefones(nome, email, password, telefones);

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
}

module.exports = new UserController();
