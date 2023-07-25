import React from 'react';
import AboutUs from '@/components/screens/AboutUs/AboutUs';
import Head from 'next/head';

export const metadata = {
  title: 'Про будівельну компанію Андезян',
  description:
    'Ангари під зерно та техніку. Ангари для бізнесу. Складські приміщення для всіх сфер діяльності. Будівлі з металоконструкцій від виробника',
};

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
