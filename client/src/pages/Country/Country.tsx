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
import { ChangeLanguageAction } from '../../store/action-creators/other.ActionCreate';
import { OtherStateInterface } from '../../store/types/other.interface';

import './Country.scss';
import { CountryResponseInterface } from '../../types/country.interface';
import Rating2 from '../../components/Rating2/Rating2';

const Country = () => {
  const { t, i18n } = useTranslation();
  let { id } = useParams<{ id: string }>();
  const [attractId, setAttractId] = useState(0);

  const { loading, countries } = useTypesSelector(state => state.country);
  const { user } = useTypesSelector(state => state.user);
  const { language } = useTypesSelector(state => state.other);
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
          description:
            language === 'en'
              ? el.attractionNameEN
              : language === 'ru'
              ? el.attractionNameRU
              : el.attractionNameAM,
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
          <div className="country-image col-lg-4 col-md-6">
            <img src={currentCountry?.photo} alt={currentCountry?.nameEN} />
          </div>

          <div className="country-info col-lg-3 col-md-6">
            <h1>
              {language === 'en'
                ? currentCountry?.nameEN
                : language === 'ru'
                ? currentCountry?.nameRU
                : currentCountry?.nameAM}
            </h1>

            <div className="country-capital">
              {language === 'en'
                ? currentCountry?.capitalEN
                : language === 'ru'
                ? currentCountry?.capitalRU
                : currentCountry?.capitalAM}
            </div>

            <div className="country-flag">
              <img
                src={currentCountry?.flag}
                style={{ width: '50px' }}
                alt={currentCountry?.nameEN}
              />
            </div>
          </div>

          <div className="country-widgets col-lg-5 col-md-12">
            <Widget
              timeZone={currentCountry?.capitalTimezone}
              language={language}
              currency={currentCountry?.currencies[0].code}
              city={currentCountry?.capitalEN}
            />
          </div>

          <div className="country-description col-xs-12">
            <div className="description-table">
              <div className="table-row dt-region">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.1')}
                </div>
                <div className="dt-value">
                  {language === 'en'
                    ? currentCountry?.regionEN
                    : language === 'ru'
                    ? currentCountry?.regionRU
                    : currentCountry?.regionAM}
                </div>
              </div>

              <div className="table-row dt-language">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.2')}
                </div>
                <div className="dt-value">
                  {language === 'en'
                    ? currentCountry?.languages[0].nameEN
                    : language === 'ru'
                    ? currentCountry?.languages[0].nameRU
                    : currentCountry?.languages[0].nameAM}
                </div>
              </div>

              <div className="table-row dt-population">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.3')}
                </div>
                <div className="dt-value">
                  {`${currentCountry?.population} ${t(
                    'CountryDescriptionTable.7',
                  )}`}
                </div>
              </div>

              <div className="table-row dt-area">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.4')}
                </div>
                <div className="dt-value">{`${currentCountry?.area} km²`}</div>
              </div>

              <div className="table-row dt-currency">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.5')}
                </div>
                <div className="dt-value">
                  {language === 'en'
                    ? currentCountry?.currencies[0].nameEN
                    : language === 'ru'
                    ? currentCountry?.currencies[0].nameRU
                    : currentCountry?.currencies[0].nameAM}
                </div>
              </div>

              <div className="table-row dt-borders">
                <div className="dt-parameter">
                  {t('CountryDescriptionTable.6')}
                </div>
                <div className="dt-value">
                  {language === 'en'
                    ? currentCountry?.bordersEN?.map((el, idx) => {
                        return <span key={idx}>{el}</span>;
                      })
                    : language === 'ru'
                    ? currentCountry?.bordersRU?.map((el, idx) => {
                        return <span key={idx}>{el}</span>;
                      })
                    : currentCountry?.bordersAM?.map((el, idx) => {
                        return <span key={idx}>{el}</span>;
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
                  <p>
                    {language === 'en'
                      ? currentCountry.attractions[attractId].descriptionEN
                      : language === 'ru'
                      ? currentCountry.attractions[attractId].descriptionRU
                      : currentCountry.attractions[attractId].descriptionAM}
                  </p>
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
            language={language}
          />
        </>
      )}
    </Layout>
  );
};

export default Country;
