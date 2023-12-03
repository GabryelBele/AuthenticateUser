import authService from "../services/AuthService.js";

class AuthController {

  async loginController(req, res){
    const body = req.body;
  
    try {
      const token = await authService.loginService(body);
      return res.send({ token: token });
    } catch (e) {
      res.status(401).send({error: e.message});
    }
  };

}

export default new AuthController();
