import bcrypt from 'bcrypt';

export const generateHashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const checkHashPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
