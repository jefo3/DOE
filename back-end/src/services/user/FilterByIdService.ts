import { FindOneOptions } from 'typeorm';
import User from '../../models/User';

interface Request {
  id: string;
}

interface IUserRepository{
  findOne(options?: FindOneOptions<User | undefined>): Promise<User | undefined>;
  findOneOrFail(options?: FindOneOptions<User> | undefined): Promise<User>;
}

class UpdateUserService {
  constructor(private userRepository: IUserRepository){}
  public async execute({
    id,
  }: Request): Promise<User> {

    try {
      const user = await this.userRepository.findOneOrFail({
        where: { id }
      });

      if (!user) {
        throw new Error('user dont exist');
      }

      return user;
    } catch (error) {
      if (error) throw error;
      throw new Error('Server internal error, please try again!');
    }
  }
}

export default UpdateUserService;
