
import User from '../../models/User';

interface IUsersRepository{
  find(): Promise<User[]>
}

class ListUserService {
  constructor(private userRepository: IUsersRepository){}

  public async execute(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      if (error as Error) throw error;
      throw new Error('Internal server error, please try again');
    }
  }
}

export default ListUserService;
