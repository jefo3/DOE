import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  id: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  public async execute({ id, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error('user dont exist');
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
      const hashPassword = await hash(password, 8);
      user.password = hashPassword;
    }

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
