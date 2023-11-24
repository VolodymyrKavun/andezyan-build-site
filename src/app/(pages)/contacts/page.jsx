import Contacts from '@/components/screens/Contacts/Contacts';
import React from 'react';

export const metadata = {
  title: 'Контактна інформація будівельної компанії Андезян',
  description:
    'Проектування будівельних споруд, Проектування, Моделювання, Візуалізація та Розробка документації',
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/contacts',
  },
};

const ContactsPage = () => {
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
          '@id': 'https://andezyan-build-site.vercel.app/contacts',
          name: 'Контакти',
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
      <Contacts />
    </>
  );
};

export default ContactsPage;
