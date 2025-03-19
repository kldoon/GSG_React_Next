'use server';

import { compareSync, hashSync } from "bcryptjs";
import * as jose from 'jose';
const JWT_SECRET = process.env.JWT_SECRET || '';

const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
}

const hashPassword = (password: string): string => {
  return hashSync(password);
}

const generateToken = async (user: News.IUser) => {
  const token = await new jose.SignJWT({ email: user.email, role: user.role, displayName: user.displayName })
    .setExpirationTime('1w')
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(JWT_SECRET));

  return token;
}

const verifyToken = async (token: string): Promise<News.IUser | null> => {
  try {
    const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return payload as unknown as News.IUser;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export {
  comparePassword,
  hashPassword,
  generateToken,
  verifyToken
}