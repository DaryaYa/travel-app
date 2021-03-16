import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CountryInterface } from '../../../../src/resources/countries/country.types';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';

import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import Widget from '../../components/Widget';
import PhotoGallery from '../../components/PhotoGallery';
import Video from '../../components/Video';
import YandexMap from '../../components/YandexMap/YandexMap';
import { getCountryAction } from '../../store/action-creators/countryActionCreater';
import { AttractionResponseInterface } from '../../types/atraction.interface';

import './Country.scss';
import { CountryResponseInterface } from '../../types/country.interface';

const Country = () => {
  let { id } = useParams<{ id: string }>();

  const { loading, countries } = useTypesSelector(state => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.find(el => String(el._id) === id)) {
      dispatch(getCountryAction(id));
    }
  }, []);

  const currentCountry = countries.find(el => String(el._id) === id);

  let images = currentCountry?.attractions.map(el => {
    return {
      original: el.photo,
      thumbnail: el.photo,
      description: el.attractionNameEN,
    };
  });

  return (
    <>
      {loading || !currentCountry ? (
        <Spinner />
      ) : (
        <Layout>
          <img
            src={currentCountry?.photo}
            style={{ width: '200px' }}
            alt={currentCountry?.nameEN}
          />
          <div>{currentCountry?.nameEN}</div>
          <div>{currentCountry?.capitalEN}</div>
          <img
            src={currentCountry?.flag}
            style={{ width: '50px' }}
            alt={currentCountry?.nameEN}
          />
          <Widget
            timeZone={currentCountry?.capitalTimezone}
            language={'en-GB'}
            currency={currentCountry?.currencies[0].code}
            city={currentCountry?.capitalEN}
          />

          {images && <PhotoGallery images={images} />}

          <Video videoId={currentCountry?.videoId} />
          <YandexMap
            latitude={currentCountry?.latlng[0]}
            longitude={currentCountry?.latlng[1]}
            geoData={currentCountry?.geoData[0]}
          />
        </Layout>
      )}
    </>
  );
};

export default Country;
