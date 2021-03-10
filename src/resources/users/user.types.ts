import { Document, Types } from 'mongoose';

export interface UserInterface {
  email: string;
  username: string;
  password: string;
  imgSrc: string;
  _id?: Types.ObjectId;
}

export interface CreateUserRequestInterface {
  email: string;
  username: string;
  password: string;
  imgSrc: string;
}

export interface UserGetByEmailResponseInterface extends Document {
  email: string;
  username: string;
  password: string;
  imgSrc: string;
}

export interface LogInUserRequestInterface {
  email: string;
  password: string;
}
