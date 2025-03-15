import { compareSync, hashSync } from "bcryptjs";

const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
}

const hashPassword = (password: string): string => {
  return hashSync(password);
}

export {
  comparePassword,
  hashPassword
}