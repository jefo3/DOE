import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';

interface Request {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    surname,
    email,
    password,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

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
      const checkEmailExist = await userRepository.findOne({
        where: { email },
      });

      if (checkEmailExist) {
        throw new Error('email address already used');
      }

      user.email = email;
    }

    if (password) {
      if (password.length >= 8) {
        const hashPassword = await hash(password, 8);
        user.password = hashPassword;
      } else {
        throw new Error('Password should have at least 8 digits');
      }
    }

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
