import { UserInterface, UserGetByEmailResponseInterface } from './user.types';
import { Types, Document } from 'mongoose';

import { User } from './user.models';

const create = async (userData: UserInterface) => {
  const newUser = await User.create(userData);
  return newUser;
};

const getByIdEmail = async (email: string) => {
  return User.findOne({ email });
};

export default { create, getByIdEmail };
