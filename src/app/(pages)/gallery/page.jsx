import Gallery from '@/components/screens/Gallery/Gallery';
import React from 'react';

export const metadata = {
  title: 'Будівельна компанія Андезян',
  description:
    'Будівництво будинки, ангари, магазини, склади, альтанки, бетонні роботи, асфальтування та Розробка документації',
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/gallery',
  },
};

const GalleryPage = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default GalleryPage;
