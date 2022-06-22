import { FindManyOptions, FindOneOptions, getRepository, ObjectID } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';

interface Request {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

interface IUserRepository{
  findOne(options?: FindOneOptions<User | undefined>): Promise<User | undefined>;
  save(user: Request): Promise<User>;
  findOneOrFail(options?: FindOneOptions<User> | undefined): Promise<User>;
}

class UpdateUserService {

  constructor(private userRepository: IUserRepository){}

  public async execute({
    id,
    name,
    surname,
    email,
    password,
  }: Request): Promise<User> {

    try {
      const user = await this.userRepository.findOneOrFail({
        where: { id }
      });

      if (!user) {
        throw new Error('user dont exist');
      }

      if (name) {
        user.name = name;
      }

      if (surname) {
        user.surname = surname;
      }

      if (email) {
        const checkEmailExist = await this.userRepository.findOne({
          where: { email },
        });

        if (checkEmailExist) {
          throw new Error('email address already used');
        }

        user.email = email;
      }

      if (password) {
        const hashPassword = await hash(password, 8);
        user.password = hashPassword;
      }

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      if (error) throw error;
      throw new Error('Server internal error, please try again!');
    }
  }
}

export default UpdateUserService;
