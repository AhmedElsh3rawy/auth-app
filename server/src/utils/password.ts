import bcrypt from "bcrypt";

const pepper = process.env.BCRYPT_PASSWORD_PEPPER;

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(`${pepper}${password}`, 10);
};

export const comparePasswords = (password: string, hashed: string) => {
  return bcrypt.compareSync(`${pepper}${password}`, hashed);
};
