import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Rating from '../../components/Rating';
import { Widget } from '../../components/Widget';
import LeaveRatingForm from '../../components/LeaveRatingForm';

import './Main.scss';
import { useDispatch } from 'react-redux';
import { getShortDataAction } from '../../store/action-creators/countryActionCreater';

const Main = () => {
  // HARDCODE
  const [reviewsArr, setReviewsArr] = useState([1, 3]);
  const [rating, setRating] = useState(
    reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length,
  );

  useEffect(() => {
    setRating(reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length);
  }, [reviewsArr]);

  const onChangeHandler = (val: number) => {
    setReviewsArr([...reviewsArr, val]);
  };

  const RenderRating: React.FC = () => (
    <>
      <Rating value={rating} text={`${reviewsArr.length} reviews`} />
    </>
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShortDataAction());
  });

  return (
    <>
      <Layout>
        Main page
        <RenderRating />
        <LeaveRatingForm onChangeHandler={onChangeHandler} />
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
