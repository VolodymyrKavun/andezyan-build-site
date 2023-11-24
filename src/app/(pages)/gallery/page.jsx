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
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://andezyan-build-site.vercel.app/',
          name: 'Будівельна компанія Андезян',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': 'https://andezyan-build-site.vercel.app/gallery',
          name: 'Галерея',
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;
