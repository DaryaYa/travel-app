import React from 'react';
import Layout from '../../components/Layout/Layout';
import Rating from '../../components/Rating';
import { Widget } from '../../components/Widget';

import './Main.scss';

const Main = () => {
  // HARDCODE
  const RenderRating: React.FC = () => {
    const attractionRating = [
      {
        stars: 1,
        numReviews: 3,
      },
      {
        stars: 1.5,
        numReviews: 12,
      },
      {
        stars: 3,
        numReviews: 6,
      },
      {
        stars: 2,
        numReviews: 9,
      },
      {
        stars: 5,
        numReviews: 54,
      },
    ];

    return (
      <div>
        {attractionRating.map(el => (
          <Rating value={el.stars} text={`${el.numReviews} reviews`} />
        ))}
      </div>
    );
  };
  return (
    <>
      <Layout>
        Main page
        <RenderRating />
        <Widget
          timeZone={'Europe/Moscow'}
          language={'en-GB'}
          currency={'NOK'}
        />
      </Layout>
    </>
  );
};

export default Main;
