import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CountryInterface } from '../../../../src/resources/countries/country.types';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';

import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import { getCountryAction } from '../../store/action-creators/countryActionCreater';
import { AttractionResponseInterface } from '../../types/atraction.interface';

import './Country.scss';

const Country = () => {

  let { id } = useParams<{ id: string }>();

  const { loading, countries } = useTypesSelector(state => state.country)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.find((el) => String(el._id) === id)) {
      dispatch(getCountryAction(id))
    }
  }, [])

  return (
    <>
      {loading ? <Spinner /> : <Layout>Country Page</Layout>}
      
    </>
  );
};

export default Country;
