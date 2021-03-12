import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Rating from './components/Rating';
import LeaveRatingForm from './components/LeaveRatingForm';
import Footer from './components/Footer';

const App = () => {
  // HARDCODE START
  const [reviewsArr, setReviewsArr] = useState([1, 3]);
  const [rating, setRating] = 
    useState( reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length );

  useEffect(() => {
    setRating(reviewsArr.reduce((acc, cur) => acc + cur) / reviewsArr.length);
  }, [reviewsArr])

  const onChangeHandler= (val: number) => {
    setReviewsArr([...reviewsArr, val]);
  }

  const RenderRating: React.FC = () => (
    <>
      <Rating value={rating} text={`${reviewsArr.length} reviews`} />
    </>
  )
  // HARDCODE END

  return (
    <>
      <Header />
      <main>
        <RenderRating />
        <LeaveRatingForm
          onChangeHandler={onChangeHandler}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
