import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    surname,
    email,
    password,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExist = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new Error('email address already used');
    }

    if (password.length < 8) {
      throw new Error('password should have at least 8 digits');
    }

    const hashPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      surname,
      email,
      password: hashPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
