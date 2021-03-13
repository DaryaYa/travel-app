import { UserActionTypes } from '../actionsTypes/user.actionTypes';
import {
  UserActionInterface,
  AppStateInterface,
} from '../types/user.interface';

const initialState: AppStateInterface = {
  loading: false,
  user: null,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionInterface,
): AppStateInterface => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_FAILURe:
      return { ...state, loading: false, error: action.payload, user: null };
    case UserActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    default:
      return state;
  }
};
