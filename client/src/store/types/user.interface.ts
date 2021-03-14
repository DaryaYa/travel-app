import { UserResponseInterface } from '../../types/user.interface';
import { UserActionTypes } from '../actionsTypes/user.actionTypes';

export interface LoginActionInterface {
  type: UserActionTypes.LOGIN;
}

export interface LoginSuccessActionInterface {
  type: UserActionTypes.LOGIN_SUCCESS;
  payload: UserResponseInterface;
}

export interface LoginFailureActionInterface {
  type: UserActionTypes.LOGIN_FAILURe;
  payload: string;
}

export type UserActionInterface =
  | LoginActionInterface
  | LoginFailureActionInterface
  | LoginSuccessActionInterface;

export interface UserStateInterface {
  loading: boolean;
  user: UserResponseInterface | null;
  error: string | null;
}
