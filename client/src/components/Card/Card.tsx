import React, { ReactNode } from 'react';
import cn from 'classnames';

import './Card.scss';

interface CardInterface {
  classNames?: string;
  children?: ReactNode;
  imgTopSrc?: string;
  cardTitle?: string;
  cardSubTitle?: string;
  onClick?(): void;
}

const Card = ({
  classNames,
  children,
  imgTopSrc = '',
  cardTitle,
  cardSubTitle,
  onClick,
}: CardInterface) => {
  return (
    <div className={cn('card', classNames)} onClick={onClick}>
      {!!imgTopSrc && (
        <img src={imgTopSrc} className="card-img-top" alt="..." />
      )}
      <div className="card-body">
        {!!cardTitle && <h5 className="card-title">{cardTitle}</h5>}
        {!!cardSubTitle && (
          <h6 className="card-subtitle mb-2 text-muted">{cardSubTitle}</h6>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
