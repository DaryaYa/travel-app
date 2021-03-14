import { CountryShortResponseInterface } from './../../types/country.interface';
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
      > = await axios.get('/api/county/shortdata');
      dispatch({
        type: CountryActionTypes.GET_SHORT_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: CountryActionTypes.GET_SHORT_DATA_FAILURE,
        payload: err.response.data.message,
      });
    }
  };
};
