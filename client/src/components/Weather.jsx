import React, { useState, useEffect } from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsDropletHalf } from 'react-icons/bs';
import { GiWindsock, GiPerson } from 'react-icons/gi';
import { useTranslation } from 'react-i18next'; // trans

const REACT_APP_OPEN_WEATHER = '985407983380c5d99fa1bb48a8e0eec0';

export const Weather = ({ city, language }) => {
  const { t } = useTranslation(); // trans

  const [weather, setWeather] = useState({
    temp: 0,
    humidity: 0,
    feels_like: 0,
    description: ' ',
    iconCode: '',
    wind: 0,
  });

  // const [lang, setLang] = useState(language);

  // useEffect(()=> {
  //   setLang(localStorage.getItem('i18nextLng'));
  // }, [lang])

  useEffect(() => {
    const fetchData = async () => {
      const res = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${language}&units=metric&APPID=${REACT_APP_OPEN_WEATHER}`,
      );
      const data1 = await res;
      const data2 = await data1.json();
      const data = data2.list[0];

      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        description: data.weather[0].description,
        iconCode: data.weather[0].icon,
        wind: data.wind.speed,
      });

      return data;
    };
    fetchData();
  }, [city, language]);

  const url = 'https://openweathermap.org/img/wn/';

  return (
    <div className="weather d-inline-flex flex-column justify-content-center">
      <img
        alt="weather icon"
        className="mx-auto d-block"
        src={`${url}${weather.iconCode}@2x.png`}
      />
      {(language !== 'hy') ? <div className="weather-parameter description">
          {weather.description}
        </div> : <div className="weather-parameter description"></div>}
      <div className="weather-parameter temperature">
        <FaTemperatureHigh />
        <span className="text">{Math.round(weather.temp)}°C</span>
      </div>
      <div className="weather-parameter humidity">
        <BsDropletHalf />
        <span className="text">{weather.humidity}%</span>
      </div>
      <div className="weather-parameter feels-like">
        <GiPerson />
        <span className="text">{Math.round(weather.feels_like)}°C</span>
      </div>
      <div className="weather-parameter wind-speed">
        <GiWindsock />
        <span className="text">
          {Math.round(weather.wind)}
          {t('Weather.1')}
        </span>
      </div>
    </div>
  );
};