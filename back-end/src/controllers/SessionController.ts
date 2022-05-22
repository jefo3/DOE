import { Request, Response } from 'express';
import AutenticateUserService from '../services/AutenticateUserService';

class SessionController {
  async create(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const { user, token } = await new AutenticateUserService().execute({
        email,
        password,
      });

      return response.json({ user, token });
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}

export default SessionController;
