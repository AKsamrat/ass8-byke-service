import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

interface ITokenPayload {
  email: string;
  role?: string;

}
const generateToken = (payload: ITokenPayload, secret: Secret, expiresIn: string): string => {
  try {
    const token = jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn,
    } as SignOptions);

    return token;
  } catch (error) {
    throw new Error('Failed to generate token');
  }


};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
}

export const jwtHelpers = {
  generateToken,
  verifyToken
}