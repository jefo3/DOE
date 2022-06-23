import { FindOneOptions } from 'typeorm';
import { Secret, sign, SignOptions } from 'jsonwebtoken';

import authConfig from '../config/auth';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

interface IUserRepository{
  findOne(options?: FindOneOptions<User | undefined>): Promise<User | undefined>;
}

class AutenticateUserService {

  constructor(
    private userRepository: IUserRepository,
    private compare: (s: string, hash: string) => Promise<boolean>,
    private sign: (
      payload: string | object | Buffer,
      secretOrPrivateKey: Secret,
      options?: SignOptions | undefined
    ) => string
  ){}

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await this.compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = this.sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AutenticateUserService;
