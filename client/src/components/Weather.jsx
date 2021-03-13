import React, { useState, useEffect } from 'react';

export const Weather = ({city, language}) => {

    const [weather, setWeather] = useState({
      temp: 0,
      humidity: 0,
      feels_like: 0,
      description: " ",
      iconCode: "",
      wind: 0,
    });

    useEffect(() => {

       const fetchData = async () => {
      
           const res = fetch(
             `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${language}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER}`,
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
       } 
       fetchData();
    },[city, language])

     const url='https://openweathermap.org/img/wn/'

    return (
      <div className="d-inline-flex flex-column justify-content-center border border-info rounded">
        <img
          alt="weather icon"
          className="mx-auto d-block"
          src={`${url}${weather.iconCode}@2x.png`}
        />
        <span>description: {weather.description}</span>
        <span>temperature: {Math.round(weather.temp)}°C</span>
        <span>humidity: {weather.humidity}%</span>
        <span>feels like: {Math.round(weather.feels_like)}°C</span>
        <span>wind speed: {Math.round(weather.wind)}m/s</span>
      </div>
    );
    
}