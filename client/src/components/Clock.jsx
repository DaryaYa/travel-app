import React, { useState, useEffect } from 'react';
import { GiWatch } from 'react-icons/gi';

export const Clock = ({ timeZone, language }) => {

  let locale = 'en-US';
  language === 'en'
  ? locale = 'en-US'
  : language === 'ru'
  ? locale = 'ru-RU'
  : locale = 'hy-AM'

  const [time, setTime] = useState(Date().toLocaleString().slice(16, 25));

  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timeZone,
  };
  let today = new Date();

  const nowTime = () => {
    if(language && options) {
      return today.toLocaleString(locale, options);
    }
    return []
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(nowTime);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="time">
      <div className="time-icon">
        <GiWatch />
      </div>
      
      <div className="time-value">{time}</div>
    </div>
  );
};
