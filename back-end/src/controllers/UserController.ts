import { Request, Response } from 'express';

import CreateUserService from '../services/user/CreateUserService';
import UpdateUserService from '../services/user/UpdateUserService';
import DeleteUserService from '../services/user/DeleteUserService';
import ListUserService from '../services/user/ListUserService';
import { getRepository } from 'typeorm';
import User from '../models/User';
import FilterByIdService from '../services/user/FilterByIdService';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, surname, email, password } = request.body;

      const userRepository = getRepository(User);
      console.log(name,
        surname,
        email,
        password,)
      const user = await new CreateUserService(userRepository).execute({
        name,
        surname,
        email,
        password,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, surname, email, password } = request.body;

      const userRepository = getRepository(User);

      const userUpdated = await new UpdateUserService(userRepository).execute({
        id,
        name,
        surname,
        email,
        password,
      });

      return response.json(userUpdated);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const userRepository = getRepository(User);

      const userDeleted = await new DeleteUserService(userRepository).execute({
        id,
      });

      return response.json(userDeleted);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await new ListUserService(userRepository).execute();
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async filterById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const userRepository = getRepository(User);
      const donates = await new FilterByIdService(userRepository).execute({id});

      return response.json(donates);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}

export default UserController;
