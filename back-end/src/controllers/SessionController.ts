import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../models/User';
import AutenticateUserService from '../services/AutenticateUserService';

class SessionController {
  async create(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const userRepository = getRepository(User);

      const { user, token } = await new AutenticateUserService(userRepository, compare, sign).execute({
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
