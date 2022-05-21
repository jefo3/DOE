import { getRepository } from 'typeorm';

import User from '../models/User';

class ListUserService {
  public async execute(): Promise<User[]> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return users;
  }
}

export default ListUserService;
