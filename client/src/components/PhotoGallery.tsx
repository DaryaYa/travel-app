import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

type PhotoGalleryProps = {
  images: {
    original: string;
    thumbnail: string;
    description: string;
  }[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <>
      <ImageGallery items={images} />;
    </>
  );
};

export default PhotoGallery;
