import React from 'react';
import AboutUs from '@/components/screens/AboutUs/AboutUs';
import Head from 'next/head';

export const metadata = {
  title: 'Про будівельну компанію Андезян',
  description:
    'Ангари під зерно та техніку. Ангари для бізнесу. Складські приміщення для всіх сфер діяльності. Будівлі з металоконструкцій від виробника',
};

const AboutUsPage = () => {
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
          '@id': 'https://andezyan-build-site.vercel.app/aboutUs',
          name: 'About us',
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
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
