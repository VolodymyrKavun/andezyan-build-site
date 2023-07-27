import Video from '@/components/screens/Video/Video';
import React from 'react';

export const metadata = {
  title: 'Відео будівельної компанії Андезян',
  description:
    'Відео модульні будинки, відкатні ворота, СТО під ключ, Будівельна компанія Андезян',
  // alternates: {
  //   canonical: 'https://andezyan-build-site.vercel.app/video',
  // },
  metadataBase: new URL('https://acme.com'),
};

const VideoPage = () => {
  return (
    <>
      <Video />
    </>
  );
};

export default VideoPage;
