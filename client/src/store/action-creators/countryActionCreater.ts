import { UpdateStarsActionInterface } from '../types/country.interface';
import { AttractionResponseInterface } from './../../types/atraction.interface';
import { toast } from 'react-toastify';
import { CountryInterface } from './../../../../src/resources/countries/country.types';
import { Response } from 'express';
import {
  CountryResponseInterface,
  CountryShortResponseInterface,
} from './../../types/country.interface';
import { CountryActionTypes } from './../actionsTypes/country.actionTypes';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { CountryActionInterface } from '../types/country.interface';

export const getShortDataAction = () => {
  return async (dispatch: Dispatch<CountryActionInterface>) => {
    try {
      dispatch({ type: CountryActionTypes.GET_SHORT_DATA });
      const response: AxiosResponse<
        CountryShortResponseInterface[]
      > = await axios.get('/api/country/shortdata');
      dispatch({
        type: CountryActionTypes.GET_SHORT_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: CountryActionTypes.GET_SHORT_DATA_FAILURE,
        payload: err.response.data.message,
      });
      toast.error(err.response.data.message);
    }
  };
};

export const getCountryAction = (id: string) => {
  return async (dispatch: Dispatch<CountryActionInterface>) => {
    try {
      dispatch({ type: CountryActionTypes.GET_CURRENT_COUNTRY });

      const response: AxiosResponse<CountryResponseInterface> = await axios.get(
        `/api/country/${id}`,
      );
      dispatch({
        type: CountryActionTypes.GET_CURRENT_COUNTRY_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: CountryActionTypes.GET_CURRENT_COUNTRY_FAILURE,
        payload: err.response.data.message,
      });
      toast.error(err.response.data.message);
    }
  };
};

export const UpdateStarsAction = (
  countryId: string,
  attractId: string,
  data: { user: string; countStar: number },
) => {
  return async (dispatch: Dispatch<CountryActionInterface>) => {
    try {
      const response = await axios.put(`/api/attractions/${attractId}`, data);
      const response2: AxiosResponse<CountryResponseInterface> = await axios.get(
        `/api/country/${countryId}`,
      );
      dispatch({
        type: CountryActionTypes.UPDATE_STARS,
        payload: { countryId: countryId, updatedCountry: response2.data },
      });
    } catch (e) {
      toast.error(e.resoinse.data.message);
    }
  };
  //  {
  //   type: CountryActionTypes.UPDATE_STARS,
  //   payload: { countryId, attractId, updatedData },
  // } as UpdateStarsActionInterface;
};
