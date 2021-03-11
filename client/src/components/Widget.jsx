import React from 'react';
import { Clock } from './Clock';
import { Weather } from './Weather';

export const  Widget = ({lat, lng, timeZone, language}) => {
    return (
      <div>
        <Clock timeZone={"Europe/Moscow"} language={"ru"} />
        <Weather city={"Tokio"} language={"en"} />
       
      </div>
    );
}