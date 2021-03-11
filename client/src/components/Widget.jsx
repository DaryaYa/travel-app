import React from 'react';
import { Clock } from './Clock';
import { Weather } from './Weather';

export const  Widget = ({lat, lng, timeZone, language}) => {
    return (
      <div>
        <Clock timeZone={'Europe/Oslo'} language={language} />
        <Weather city={'Oslo'} language={'ru'} />
      </div>
    );
}