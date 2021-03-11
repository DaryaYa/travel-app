import React, { ReactNode } from 'react';
import cn from 'classnames';

import './Card.scss';

interface CardInterface {
  classNames?: string;
  children?: ReactNode;
}

const Card = ({ classNames, children }: CardInterface) => {
  return (
    <div className={cn('card', classNames)}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
