import { getRepository } from 'typeorm';

import User from '../../models/User';

interface Request {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: Request): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error('user dont exist');
    }

    await userRepository.delete(user.id);

    return user;
  }
}

export default DeleteUserService;
