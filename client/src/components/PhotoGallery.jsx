import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = ({ images }) => {

  return (
    <>
      <ImageGallery items={images} />;
    </>
  )
}

export default PhotoGallery
