import Video from '@/components/screens/Video/Video';
import React from 'react';

export const metadata = {
  title: 'Відео будівельної компанії Андезян',
  description:
    'Відео модульні будинки, відкатні ворота, СТО під ключ, Будівельна компанія Андезян',
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/video',
  },
};

const VideoPage = () => {
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
          '@id': 'https://andezyan-build-site.vercel.app/video',
          name: 'Відео',
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
      <Video />
    </>
  );
};

export default VideoPage;
