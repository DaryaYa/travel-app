import { UserActionTypes } from './../actionsTypes/user.actionTypes';
import {
  UserRequestInterface,
  UserResponseInterface,
} from './../../types/user.interface';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { UserActionInterface } from '../types/user.interface';

export const getUserAction = (userData: UserRequestInterface) => {
  return async (dispatch: Dispatch<UserActionInterface>) => {
    try {
      dispatch({ type: UserActionTypes.LOGIN });
      const response: AxiosResponse<UserResponseInterface> = await axios.post(
        '/api/user/login',
        userData,
      );
      console.log(response.data);
      dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: UserActionTypes.LOGIN_FAILURe,
        payload: e.response.data.message,
      });
    }
  };
};
