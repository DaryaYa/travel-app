import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { UserActionTypes } from './../actionsTypes/user.actionTypes';
import {
  UserRequestInterface,
  UserResponseInterface,
} from './../../types/user.interface';

import { UserActionInterface } from '../types/user.interface';
import { Toast } from 'react-toastify/dist/components';

export const getUserAction = (userData: UserRequestInterface | null = null) => {
  return async (dispatch: Dispatch<UserActionInterface>) => {
    try {
      let user: UserResponseInterface;
      dispatch({ type: UserActionTypes.LOGIN });
      if (localStorage.getItem('user')) {
        let strUser = localStorage.getItem('user');
        user = strUser && JSON.parse(strUser);
      } else {
        const response: AxiosResponse<UserResponseInterface> = await axios.post(
          '/api/user/login',
          userData,
        );

        user = response.data;
      }

      dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: user });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      dispatch({
        type: UserActionTypes.LOGIN_FAILURe,
        payload: e.response.data.message,
      });
      toast.error(e.response.data.message);
    }
  };
};

export const logoutUserAction = () => {
  return {
    type: UserActionTypes.LOGOUT,
    payload: null,
  };
};
