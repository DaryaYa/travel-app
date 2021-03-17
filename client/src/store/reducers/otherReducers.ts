import { OtherActinTypes } from '../actionsTypes/other.actionYpes';
import {
  OtherStateInterface,
  OtherActionInterface,
} from './../types/other.interface';

const initialState: OtherStateInterface = {
  searchValue: '',
  language: 'en',
};

export const otherReducer = (
  state = initialState,
  action: OtherActionInterface,
): OtherStateInterface => {
  switch (action.type) {
    case OtherActinTypes.CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };

    case OtherActinTypes.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
