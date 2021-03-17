import React, { useState, useEffect } from 'react';
import usa from '../assets/images/usa.png';
import euro from '../assets/images/euro.png';
import russia from '../assets/images/russia.png';
import { GiWallet } from 'react-icons/gi';

const REACT_APP_CUR_CONVERTER1 = 'fb007c3111e224ca901d';
const REACT_APP_CUR_CONVERTER = 'f474c406f8fb4cb30e80';

export const Currency = ({ currency }) => {
  const [rate, setRate] = useState({ usd: 1, eur: 1, rub: 1 });

  useEffect(() => {
    const fetchRates = async () => {
      const res = fetch(
        `https://free.currconv.com/api/v7/convert?q=USD_${currency},EUR_${currency}&compact=ultra&apiKey=${REACT_APP_CUR_CONVERTER}`,
      );
      const res1 = fetch(
        `https://free.currconv.com/api/v7/convert?q=RUB_${currency}&compact=ultra&apiKey=${REACT_APP_CUR_CONVERTER}`,
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
    <div className="currency d-inline-flex flex-column justify-content-center">
      <div className="currency-icon">
        <GiWallet />
      </div>
      
      <div className="currency-ratio">
       <img src={usa} />
       <span>1 USD = {rate.usd[1]} {currency}</span>
      </div>

      <div className="currency-ratio">
       <img src={euro} />
       <span>1 EUR = {rate.eur[1]} {currency}</span>
      </div>

      <div className="currency-ratio">
       <img src={russia} />
       <span>100 RUB = {(rate.rub[1]*100)} {currency}</span>
      </div>
    </div>
  );
};