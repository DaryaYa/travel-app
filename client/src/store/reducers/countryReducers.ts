import { store } from '..';
import { CountryResponseInterface } from './../../types/country.interface';
import { CountryActionTypes } from './../actionsTypes/country.actionTypes';
import {
  CountryStateInterface,
  CountryActionInterface,
} from './../types/country.interface';
const initialState: CountryStateInterface = {
  loading: false,
  shorData: null,
  error: null,
  countries: [],
};

export const countryReducer = (
  state = initialState,
  action: CountryActionInterface,
): CountryStateInterface => {
  switch (action.type) {
    case CountryActionTypes.GET_CURRENT_COUNTRY:
      return { ...state, loading: true, error: null };

    case CountryActionTypes.GET_CURRENT_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: [...state.countries, action.payload],
        error: null,
        loading: false,
      };

    case CountryActionTypes.GET_CURRENT_COUNTRY_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case CountryActionTypes.GET_SHORT_DATA:
      return { ...state, loading: true, error: null };

    case CountryActionTypes.GET_SHORT_DATA_SUCCESS:
      return { ...state, loading: false, shorData: action.payload };

    case CountryActionTypes.GET_SHORT_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case CountryActionTypes.UPDATE_STARS: {
      const { attractId, countryId, updatedData } = action.payload;
      const myStore = { ...state };
      let countries = [...myStore.countries];
      let country = myStore.countries.find(el => el._id === countryId);

      if (country) {
        let attractions = [...country?.attractions];
        let attrIdx = attractions.findIndex(el => el._id === attractId);
        let countIdx = countries.findIndex(el => el._id === countryId);
        attractions.splice(attrIdx, 1, updatedData);
        country = { ...country, attractions: attractions };
        countries.splice(countIdx, 1, country);

        return { ...state, countries: countries };
      }

      return state;
    }

    default:
      return state;
  }
};
