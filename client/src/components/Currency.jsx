import React, { useState, useEffect } from 'react';

const REACT_APP_CUR_CONVERTER1 = 'fb007c3111e224ca901d';

export const Currency = ({ currency }) => {
  const [rate, setRate] = useState({ usd: 1, eur: 1, rub: 1 });

  useEffect(() => {
    const fetchRates = async () => {
      const res = fetch(
        `https://free.currconv.com/api/v7/convert?q=${currency}_USD,${currency}_EUR&compact=ultra&apiKey=${REACT_APP_CUR_CONVERTER1}`,
      );
      const res1 = fetch(
        `https://free.currconv.com/api/v7/convert?q=${currency}_RUB&compact=ultra&apiKey=${REACT_APP_CUR_CONVERTER1}`,
      );
      const data1 = await res;
      const data2 = await data1.json();
      const data3 = await res1;
      const data4 = await data3.json();

      let rate1 = Object.entries(data2);
      let rate2 = Object.entries(data4);

      setRate({
        usd: rate1[0],
        eur: rate1[1],
        rub: rate2[0],
      });
    };
    fetchRates();
  }, [currency]);

  return (
    <span className="d-inline-flex flex-column justify-content-center border border-success rounded">
      <span>
        {currency} to USD: {rate.usd[1]}
      </span>
      <span>
        {currency} to EUR: {rate.eur[1]}
      </span>
      <span>
        {currency} to RUB: {rate.rub[1]}
      </span>
    </span>
  );
};
