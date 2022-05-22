import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // validação do token JWT
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token JWT is missing');
  }

  const [_, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // as tokenPayload força o decoded a ser do tipo tokenPaload
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new Error('token JWT invalid ');
  }
}
