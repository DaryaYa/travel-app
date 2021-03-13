import React, { useState, useEffect } from 'react';

export const Clock = ({ timeZone, language }) => {

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
    return today.toLocaleString(language, options);
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
    <span className="border border-danger rounded">
      {time}
    </span>
  );
};
