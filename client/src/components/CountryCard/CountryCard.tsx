import React from 'react';
import cn from 'classnames';

import './CountryCard.scss';
import Card from '../Card/Card';

interface CountryCardInterface {
  classNames?: string;
  countryName: string;
  capinalName: string;
  countryFoto: string;
  onClick?(): void;
}

const CountryCard = ({
  classNames,
  capinalName,
  countryFoto,
  countryName,
  onClick,
}: CountryCardInterface) => {
  return (
    <div className={cn('country-card', classNames)}>
      <Card
        onClick={onClick}
        cardSubTitle={capinalName}
        cardTitle={countryName}
        imgTopSrc={countryFoto}
      ></Card>
    </div>
  );
};

export default CountryCard;
