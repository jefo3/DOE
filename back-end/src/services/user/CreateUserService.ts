import { FindOneOptions, getRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import User from '../../models/User';

interface Request {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface IUsersRepository{
  create(user: Request): Promise<User>;
  findOne(options?: FindOneOptions<User | undefined>): Promise<User | undefined>;
  save(user: Request): Promise<User>;
}

class CreateUserService {

  constructor(private userRepository: IUsersRepository){}

  public async execute({
    name,
    surname,
    email,
    password,
  }: Request): Promise<User> {

    try {

      const checkUserExist = await this.userRepository.findOne({
        where: { email },
      });

      if (checkUserExist) {
        throw new Error('email address already used');
      }

      const hashPassword = await hash(password, 8);

      const user = await this.userRepository.create({
        name,
        surname,
        email,
        password: hashPassword,
      });

      await this.userRepository.save(user);

      return user;

    } catch (error) {
      if (error as Error) throw error;
      throw new Error('Internal server error, please try again');
    }
  }
}

export default CreateUserService;
