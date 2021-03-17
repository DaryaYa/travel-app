import { CountryActionTypes } from './../actionsTypes/country.actionTypes';
import {
  CountryResponseInterface,
  CountryShortResponseInterface,
} from './../../types/country.interface';
import { AttractionResponseInterface } from '../../types/atraction.interface';

export interface CountryStateInterface {
  loading: boolean;
  countries: CountryResponseInterface[];
  shorData: CountryShortResponseInterface[] | null;
  error: string | null;
}

interface GetCountryActionInterface {
  type: CountryActionTypes.GET_CURRENT_COUNTRY;
}

interface GetCountrySuccessActionInterface {
  type: CountryActionTypes.GET_CURRENT_COUNTRY_SUCCESS;
  payload: CountryResponseInterface;
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

export interface UpdateStarsActionInterface {
  type: CountryActionTypes.UPDATE_STARS;
  payload: {
    countryId: string;
    updatedData: AttractionResponseInterface;
    attractId: string;
  };
}

export type CountryActionInterface =
  | GetCountryActionInterface
  | GetCountrySuccessActionInterface
  | GetCountryFailureActionInterface
  | GetShortDataActionInterface
  | GetShortDataSuccessActionInterface
  | GetShortDataFailureActionInterface
  | UpdateStarsActionInterface;
