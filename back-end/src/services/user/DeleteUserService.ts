import { DeleteResult, FindConditions, FindOneOptions, getRepository, ObjectID } from 'typeorm';

import User from '../../models/User';

interface Request {
  id: string;
}

interface IUserRepository{
  findOne(id?: string | number | Date | ObjectID | undefined, options?: FindOneOptions<User> | undefined): Promise<User>
  delete(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<User>): Promise<DeleteResult>
}

class DeleteUserService {

  constructor(private userRepository: IUserRepository){}

  public async execute({ id }: Request): Promise<User> {

    try {
      // const userRepository = getRepository(User);
      const user = await this.userRepository.findOne(id);

      if (!user) {
        throw new Error(`user doesn't exist`);
      }

      await this.userRepository.delete(user.id);

      return user;
    } catch (error) {
      if (error) throw error;
      throw new Error('Server internal error');
    }


  }
}

export default DeleteUserService;
