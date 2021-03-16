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

export const getUserAction = (userData: UserRequestInterface) => {
  return async (dispatch: Dispatch<UserActionInterface>) => {
    try {
      dispatch({ type: UserActionTypes.LOGIN });
      const response: AxiosResponse<UserResponseInterface> = await axios.post(
        '/api/user/login',
        userData,
      );
      dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: UserActionTypes.LOGIN_FAILURe,
        payload: e.response.data.message,
      });
      toast.error(e.response.data.message);
    }
  };
};
