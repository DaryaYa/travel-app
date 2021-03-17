import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getShortDataAction } from '../../store/action-creators/countryActionCreater';
import CountryCard from '../../components/CountryCard/CountryCard';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';

import './Main.scss';
import Rating2 from '../../components/Rating2/Rating2';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!shorData) {
      dispatch(getShortDataAction());
    }
  }, []);

  const { loading, shorData } = useTypesSelector(state => state.country);

  const history = useHistory();
  const cardClickHandler = (id: string | undefined) => {
    history.push(`/country/${id}`);
  };

  return (
    <>
      <Layout>
        {!loading && (
          <div className="row">
            {shorData?.map(country => (
              <CountryCard
                key={country._id}
                capinalName={country.capitalEN}
                countryFoto={country.photo}
                countryName={country.nameEN}
                classNames="main-page__country-card col-12 col-xl-4 col-lg-4  col-md-6 mb-3"
                onClick={() => cardClickHandler(country?._id)}
              />
            ))}
          </div>
        )}
        {loading && (
          <div className="row">
            <Spinner classNames="main-page__spinner" />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Main;
