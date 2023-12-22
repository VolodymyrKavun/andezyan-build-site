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
      <div
        itemScope
        itemType="https://schema.org/Organization"
        style={{ display: 'none' }}
      >
        <meta itemProp="name" content="Будівельна компанія Андезян" />
        <link itemProp="url" href="https://andezyan-build-site.vercel.app/" />
        <link
          itemProp="logo"
          href="https://andezyan-build-site.vercel.app/favicon.ico"
        />
        <meta
          itemProp="description"
          content="Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації."
        />
        <meta
          itemProp="keywords"
          content="Будівельна компанія Андезян, Будівництво ангарів, Ангар, Склад"
        />
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <meta itemProp="addressLocality" content="Біла Церква, Україна" />
          <meta itemProp="postalCode" content="09100" />
          <meta itemProp="streetAddress" content="вул. Київська, 96" />
        </div>
        <div
          itemProp="ContactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <meta itemProp="email" content="aoandezyan@gmail.com" />
          <meta itemProp="email" content="lotos0712@ukr.net" />
          <meta itemProp="telephone" content="+380675909988" />
          <meta itemProp="telephone" content="+380674630606" />
          <meta itemProp="telephone" content="+380674630606" />
          <meta itemProp="telephone" content="+380456051228" />
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
