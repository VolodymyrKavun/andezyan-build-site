import GallerySlider from '@/components/screens/GallerySlider/GallerySlider';
import React from 'react';

export async function generateMetadata({ params }) {
  const category = await params.category;

  if (category === 'houses') {
    return {
      title: `Будівництво будинків Андезян | Будинки`,
      description:
        'Будівництво будинків, виготовлення документації, Каркасні будинки, Модульні будинки',
    };
  } else if (category === 'angars') {
    return {
      title: `Логістичний центр Андезян | Ангари`,
      description:
        'Ангари, Логістичний центр, розробка проекту, реконструкція будівлі, склади',
    };
  } else if (category === 'asphalt') {
    return {
      title: `Асфальтування Андезян | Асфальтобетонні роботи`,
      description:
        'Асфальтні роботи, Асфальт, Реконструкція, Зерносховище, Асфальтування доріг',
    };
  } else if (category === 'beton') {
    return {
      title: `Проектна документація та Візуалізація | Бетонні роботи`,
      description:
        'Бетонування, Полімер, Реконструкція, Навіси, Бетон фундамент, бетонщики',
    };
  } else if (category === 'shops') {
    return {
      title: `Проектна документація та Візуалізація | Магазини`,
      description:
        'Візуалізація та будівництво МАФ, магазин, будівельна компанія Андезян',
    };
  } else {
    return {
      title: `Проектна документація та Візуалізація | ${category}`,
      description: 'Будівництво, Металоконструкція, Будівельна компанія',
    };
  }
}

const GalleryCategoryPage = ({ params }) => {
  return (
    <>
      <GallerySlider params={params} />
    </>
  );
};

export default GalleryCategoryPage;
