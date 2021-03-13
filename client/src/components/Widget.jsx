import React from 'react';
import { Clock } from './Clock';
import { Weather } from './Weather';
import { Currency } from './Currency';

export const  Widget = ({ timeZone, language, currency }) => {
    return (
      <div className="d-flex justify-content-center">
        <Weather city={'Oslo'} language={'ru'} />
        <diV className="d-inline-flex flex-column justify-content-between border border-info rounded">
          <Clock timeZone={'Europe/Oslo'} language={language} />
          <Currency currency={currency} />
        </diV>
      </div>
    );
}