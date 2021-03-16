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
