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

  const { loading, countries } = useTypesSelector(state => state.country)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.find((el) => String(el._id) === id)) {
      dispatch(getCountryAction(id))
    }
  }, [])

  // let currentCountry: CountryResponseInterface | undefined = countries.find((el) => String(el._id) === id);

  // let images = countries[0].attractions.map((el) => {
  //   return {
  //     original: el.photo,
  //     thumbnail: el.photo,
  //     description: el.attractionNameEN,
  //   }
  // })

  return (
    <>
      {loading 
        ? <Spinner />
        : <Layout>
            <img
              src={countries[0].photo}
              style={{width: '200px'}}
              alt={countries[0].nameEN}
            />
            <div>{countries[0].nameEN}</div>
            <div>{countries[0].capitalEN}</div>
            <img
              src={countries[0].flag}
              style={{width: '50px'}}
              alt={countries[0].nameEN}
            />
            <Widget
              timeZone={countries[0].capitalTimezone}
              language={'en-GB'}
              currency={countries[0].currencies[0].code}
              city={countries[0].capitalEN}
            />
            {/* <PhotoGallery images={images} /> */}
            <Video videoId={countries[0].videoID} />
            <YandexMap
              latitude={countries[0].latlng[0]}
              longitude={countries[0].latlng[1]}
              geoData={countries[0].geoData[0]}
            />
          </Layout>
        }
    </>
  );
};

export default Country;
