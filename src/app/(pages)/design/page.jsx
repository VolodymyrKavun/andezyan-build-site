import Design from '@/components/screens/Design/Design';
import React from 'react';

export const metadata = {
  title: 'Проектна документація та Візуалізація',
  description:
    'Проектування будівельних споруд, Проектування, Моделювання, Візуалізація та Розробка документації',
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/design',
  },
};

const DesignPage = () => {
  return (
    <>
      <Design />
    </>
  );
};

export default DesignPage;
