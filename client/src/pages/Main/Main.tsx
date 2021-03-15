import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Rating from '../../components/Rating';
import { Widget } from '../../components/Widget';
import LeaveRatingForm from '../../components/LeaveRatingForm';
import PhotoGallery from '../../components/PhotoGallery';

import './Main.scss';

const Main = () => {
  // HARDCODE
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

  // Attractions data for PhotoGallery
  const attractions: { photo: string, attractionNameEN: string }[] = [
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-prague-castle.jpg",
      attractionNameEN: "Prague Castle",
    },
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-charles-bridge.jpg",
      attractionNameEN: "Prague's Charles Bridge",
    },
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-st-vitus-cathedral.jpg",
      attractionNameEN: "St. Vitus Cathedral",
    },
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-cesky-krumlov-castle-2.jpg",
      attractionNameEN: "Ceský Krumlov Castle",
    },
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-brno-cathedral-of-st-peter-paul.jpg",
      attractionNameEN: "Brno's Cathedral of St. Peter and Paul",
    },
    {
      photo: "https://www.planetware.com/photos-large/CZ/czech-republic-crypts-tombs-cemeteries.jpg",
      attractionNameEN: "Bone Collectors: Czech Crypts, Tombs, and Cemeteries",
    },
  ];

  let images: {
    original: string,
    thumbnail: string,
    description: string
  }[] = attractions.map((el)=>{
    return {
      original: el.photo,
      thumbnail: el.photo,
      description: el.attractionNameEN,
    }
  })

  return (
    <>
      <Layout>
        Main page
        <RenderRating />
        <LeaveRatingForm
          onChangeHandler={onChangeHandler}
        />
        <Widget
          timeZone={'Europe/Moscow'}
          language={'en-GB'}
          currency={'NOK'}
        />
        <PhotoGallery images={images} />
      </Layout>
    </>
  );
};

export default Main;
