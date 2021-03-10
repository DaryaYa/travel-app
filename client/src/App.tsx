import React from 'react';
import Header from './components/Header';
import Rating from './components/Rating';
import Footer from './components/Footer';

const App = () => {
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
      }
    ];

    return (
      <div>
        {attractionRating.map(el => (
          <Rating value={el.stars} text={`${el.numReviews} reviews`} />
        ))}
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <RenderRating />
      </main>
      <Footer />
    </>
  );
}

export default App;
