import GallerySlider from '@/components/screens/GallerySlider/GallerySlider';
import React from 'react';

const GalleryCategoryPage = ({ params }) => {
  return (
    <>
      <GallerySlider params={params} />
    </>
  );
};

export default GalleryCategoryPage;
