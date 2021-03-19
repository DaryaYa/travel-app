import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

type PhotoGalleryProps = {
  images: {
    original: string;
    thumbnail: string;
    description: string;
  }[];

  onBefoeSlide(a: number): number;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  onBefoeSlide,
}) => {
  return (
    <>
      <ImageGallery
        items={images}
        onBeforeSlide={nextIdx => onBefoeSlide(nextIdx)}
      />
    </>
  );
};

export default PhotoGallery;
