import { CountryActionTypes } from './../actionsTypes/country.actionTypes';
import { CountryShortResponseInterface } from './../../types/country.interface';
import { CountryInterface } from './../../../../src/resources/countries/country.types';

export interface CountryStateInterface {
  loading: boolean;
  countries: CountryInterface[];
  shorData: CountryShortResponseInterface[] | null;
  error: string | null;
}

interface GetCountryActionInterface {
  type: CountryActionTypes.GET_CURRENT_COUNTRY;
}

interface GetCountrySuccessActionInterface {
  type: CountryActionTypes.GET_CURRENT_COUNTRY_SUCCESS;
  payload: CountryInterface;
}

interface GetCountryFailureActionInterface {
  type: CountryActionTypes.GET_CURRENT_COUNTRY_FAILURE;
  payload: string;
}

interface GetShortDataActionInterface {
  type: CountryActionTypes.GET_SHORT_DATA;
}

interface GetShortDataSuccessActionInterface {
  type: CountryActionTypes.GET_SHORT_DATA_SUCCESS;
  payload: CountryShortResponseInterface[];
}

interface GetShortDataFailureActionInterface {
  type: CountryActionTypes.GET_SHORT_DATA_FAILURE;
  payload: string;
}

export type CountryActionInterface =
  | GetCountryActionInterface
  | GetCountrySuccessActionInterface
  | GetCountryFailureActionInterface
  | GetShortDataActionInterface
  | GetShortDataSuccessActionInterface
  | GetShortDataFailureActionInterface;
