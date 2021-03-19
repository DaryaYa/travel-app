import React, { useState, useEffect } from 'react';
import { GiWatch } from 'react-icons/gi';
import { TimeTransl } from './helper';

export const Clock = ({ timeZone, language }) => {

  let locale = 'en-US';
  language === 'en'
  ? locale = 'en-US'
  : language === 'ru'
  ? locale = 'ru-RU'
  : locale = 'hy-AM'

  const [time, setTime] = useState(Date().toLocaleString().slice(16, 25));
   const [day, setDay] = useState(new Date().getDay());
   const [date, setDate] = useState(new Date().getDate());
   const [month, setMonth] = useState(new Date().getMonth());

  const options = {
    weekday: 'short',
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
      return today.toLocaleString(language, options).slice(12, 21);
    }
    return []
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(nowTime);
    }, 1000);

     setDay(TimeTransl.weekDay[new Date().getDay()][language]);
     setMonth(TimeTransl.monthDay[new Date().getMonth()][language]);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);  

  return (
    <div className="time">
      <div className="time-icon">
        <GiWatch />
      </div>
      <div className="time-value">
        {day}, {date} {month}, {time}
      </div>
    </div>
  );
};
