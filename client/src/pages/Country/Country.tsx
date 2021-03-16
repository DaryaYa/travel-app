import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CountryInterface } from '../../../../src/resources/countries/country.types';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';

import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import Widget from '../../components/Widget';
import PhotoGallery from '../../components/PhotoGallery';
import Rating from '../../components/Rating';
import LeaveRatingForm from '../../components/LeaveRatingForm';
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

  // HARDCODE START
  const [reviewsArr, setReviewsArr] = useState([1, 3]);
  const [rating, setRating] = 
    useState( reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length );

  useEffect(() => {
    setRating(reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length);
  }, [reviewsArr])

  const onChangeHandler= (val: number) => {
    setReviewsArr([...reviewsArr, val]);
  }
  // HARDCODE END

  return (
        <Layout>
          {loading || !currentCountry ? 
            <Spinner classNames='main-spinner' />
           : (
          <>
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

          <Rating
            value={rating}
            text={`${reviewsArr.length.toString()} reviews`}
          />

          <LeaveRatingForm onChangeHandler={onChangeHandler} />

          <Video videoId={currentCountry?.videoId} />
          <YandexMap
            latitude={currentCountry?.latlng[0]}
            longitude={currentCountry?.latlng[1]}
            geoData={currentCountry?.geoData[0]}
          />
          </>
        )}
        </Layout>
  );
};

export default Country;
