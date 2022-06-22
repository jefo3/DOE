import { getRepository } from 'typeorm';

import User from '../../models/User';

interface IUsersRepository{
  find(): Promise<User[]>
}

class ListUserService {
  constructor(private userRepository: IUsersRepository){}

  public async execute(): Promise<User[]> {
    // const userRepository = getRepository(User);
    const users = await this.userRepository.find();

    return users;
  }
}

export default ListUserService;
