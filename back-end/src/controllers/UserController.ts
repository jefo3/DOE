import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUserService from '../services/ListUserService';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, surname, email, password } = request.body;

      const user = await new CreateUserService().execute({
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
      const { email, password } = request.body;

      const userUpdated = await new UpdateUserService().execute({
        id,
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

      const userDeleted = await new DeleteUserService().execute({
        id,
      });

      return response.json(userDeleted);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async list(request: Request, response: Response) {
    const users = await new ListUserService().execute();
    return response.json(users);
  }
}

export default UserController;
