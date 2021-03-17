import { UserActionTypes } from '../actionsTypes/user.actionTypes';
import {
  UserActionInterface,
  UserStateInterface,
} from '../types/user.interface';

const initialState: UserStateInterface = {
  loading: false,
  user: null,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionInterface,
): UserStateInterface => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_FAILURe:
      return { ...state, loading: false, error: action.payload, user: null };
    case UserActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    case UserActionTypes.LOGOUT:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};