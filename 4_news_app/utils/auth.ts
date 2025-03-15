'use server';

import { compareSync, hashSync } from "bcryptjs";
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || '';

const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
}

const hashPassword = (password: string): string => {
  return hashSync(password);
}

const generateToken = (user: News.IUser): string => {
  console.log(JWT_SECRET);

  const token = jwt.sign(
    { email: user.email, role: user.role, displayName: user.displayName },
    JWT_SECRET,
    { expiresIn: '1w' }
  );

  return token;
}

const verifyToken = async (token: string): Promise<News.IUser | null> => {
  try {
    const user = jwt.verify(token, JWT_SECRET);

    return user as News.IUser;
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