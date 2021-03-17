import { OtherActinTypes } from '../actionsTypes/other.actionYpes';
import {
  ChangeSeachValueACtionInterface,
  ChangeLanguageActionInterface,
} from './../types/other.interface';

export const ChangeSearchValueAction = (searchValue: string) => {
  return {
    type: OtherActinTypes.CHANGE_SEARCH_VALUE,
    payload: searchValue,
  } as ChangeSeachValueACtionInterface;
};

export const ChangeLanguageAction = (language: string) => {
  return {
    type: OtherActinTypes.CHANGE_LANGUAGE,
    payload: language,
  } as ChangeLanguageActionInterface;
};
