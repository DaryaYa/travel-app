import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CountryInterface } from '../../../../src/resources/countries/country.types';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';

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
import Rating2 from '../../components/Rating2/Rating2';

const Country = () => {
  const { t, i18n } = useTranslation();
  let { id } = useParams<{ id: string }>();
  const [attractId, setAttractId] = useState(0);

  const { loading, countries } = useTypesSelector(state => state.country);
  const { user } = useTypesSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.find(el => String(el._id) === id)) {
      dispatch(getCountryAction(id));
    }
  }, []);

  const onBeforeSlide = (idSlide: number): number => {
    setAttractId(idSlide);
    return idSlide;
  };

  const currentCountry = countries.find(el => String(el._id) === id);
  const [img, setimg] = useState<
    | {
        original: string;
        thumbnail: string;
        description: string;
      }[]
    | undefined
  >();

  useEffect(() => {
    if (currentCountry) {
      let images = currentCountry?.attractions.map(el => {
        return {
          original: el.photo,
          thumbnail: el.photo,
          description: el.attractionNameEN,
        };
      });
      setimg(images);
    }
  }, [id, loading]);

  return (
    <Layout classNames={'row'}>
      {loading || !currentCountry ? (
        <Spinner classNames="main-spinner" />
      ) : (
        <>
          <div className="country-image col-lg-4 col-md-3">
            <img src={currentCountry?.photo} alt={currentCountry?.nameEN} />
          </div>

          <div className="country-info col-lg-2 col-md-3">
            <h1>{currentCountry?.nameEN}</h1>

            <div className="country-capital">{currentCountry?.capitalEN}</div>

            <div className="country-flag">
              <img
                src={currentCountry?.flag}
                style={{ width: '50px' }}
                alt={currentCountry?.nameEN}
              />
            </div>
          </div>

          <div className="country-widgets col-md-6">
            <Widget
              timeZone={currentCountry?.capitalTimezone}
              language={'en-GB'}
              currency={currentCountry?.currencies[0].code}
              city={currentCountry?.capitalEN}
            />
          </div>

          <div className="country-description col-xs-12">
            <div className="description-table">
              <div className="table-row dt-region">
                <div className="dt-parameter">{t('CountryDescriptionTable.1')}</div>
                <div className="dt-value">{currentCountry?.regionEN}</div>
              </div>

              <div className="table-row dt-language">
                <div className="dt-parameter">{t('CountryDescriptionTable.2')}</div>
                <div className="dt-value">{currentCountry?.languages[0].nameEN}</div>
              </div>

              <div className="table-row dt-population">
                <div className="dt-parameter">{t('CountryDescriptionTable.3')}</div>
                <div className="dt-value">{`${currentCountry?.population} people`}</div>
              </div>

              <div className="table-row dt-area">
                <div className="dt-parameter">{t('CountryDescriptionTable.4')}</div>
                <div className="dt-value">{`${currentCountry?.area} km²`}</div>
              </div>

              <div className="table-row dt-currency">
                <div className="dt-parameter">{t('CountryDescriptionTable.5')}</div>
                <div className="dt-value">{currentCountry?.currencies[0].nameEN}</div>
              </div>

              <div className="table-row dt-borders">
                <div className="dt-parameter">{t('CountryDescriptionTable.6')}</div>
                <div className="dt-value">
                  {currentCountry?.bordersEN?.map((el) => {
                    return <span>{el}</span>
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="country-media col col-xs-12">
            <div className="row">
              <div className="country-gallery-slider col-lg-7 col-xs-12">
                {img && (
                  <PhotoGallery images={img} onBefoeSlide={onBeforeSlide} />
                )}
              </div>

              <div className="country-gallery-info col-lg-5 col-xs-12">
                <Rating2
                  countryId={id}
                  arrStars={currentCountry.attractions[attractId].stars}
                  user={user || undefined}
                  attrctId={currentCountry.attractions[attractId]._id}
                />

                <div className="coutry-sight-descr">
                  <p>{currentCountry.attractions[attractId].descriptionAM}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="country-video col-xs-12">
            <Video videoId={currentCountry?.videoId} />
          </div>

          <YandexMap
            latitude={currentCountry?.latlng[0]}
            longitude={currentCountry?.latlng[1]}
            geoData={currentCountry?.geoData}
          />
        </>
      )}
    </Layout>
  );
};

export default Country;
