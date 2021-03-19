import { OtherActinTypes } from './../actionsTypes/other.actionYpes';

export interface ChangeSeachValueACtionInterface {
  type: OtherActinTypes.CHANGE_SEARCH_VALUE;
  payload: string;
}

export interface ChangeLanguageActionInterface {
  type: OtherActinTypes.CHANGE_LANGUAGE;
  payload: string;
}

export type OtherActionInterface =
  | ChangeSeachValueACtionInterface
  | ChangeLanguageActionInterface;

export interface OtherStateInterface {
  searchValue: string;
  language: string;
}
