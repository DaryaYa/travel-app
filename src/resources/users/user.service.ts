import {
  checkHashPassword,
  generateHashPassword,
} from '../../common/hashHelper';
import {
  UserInterface,
  LogInUserRequestInterface,
  CreateUserRequestInterface,
} from './user.types';
import userRepo from './user.DB.repository';

const create = async (userData: CreateUserRequestInterface) => {
  const { password } = userData;
  const hashPassword = await generateHashPassword(password);
  return userRepo.create({ ...userData, password: hashPassword });
};

const login = async (userData: LogInUserRequestInterface) => {
  const { email, password } = userData;
  const user = await getByEmail(email);

  if (!user) return null;

  const userObj = user.toObject() as UserInterface;

  const { password: hashPassword, username, imgSrc, _id } = userObj;
  const comparePaswords = await checkHashPassword(password, hashPassword);
  if (!comparePaswords) return null;
  console.log(email, username, imgSrc, _id);
  return { email, username, imgSrc, _id };
};

const getByEmail = async (email: string) => userRepo.getByIdEmail(email);

export default { create, login, getByEmail };
