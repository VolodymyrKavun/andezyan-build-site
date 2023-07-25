import DesignCategory from '@/components/screens/DesingCategory/DesignCategory';
import React from 'react';

export async function generateMetadata({ params }) {
  const category = await params.category;

  if (category === 'sertificate') {
    return {
      title: `Проектна документація та Візуалізація | Сертифікати`,
      description:
        'Сертифікати, виготовлення документації, розробка документації, інженер проектувальник',
    };
  } else if (category === 'documentation') {
    return {
      title: `Проектна документація та Візуалізація | Документація`,
      description:
        'Документація, робочий проект, розробка проекту, реконструкція будівлі, Проєктування',
    };
  } else if (category === 'visualization') {
    return {
      title: `Проектна документація та Візуалізація | Візуалізація`,
      description: 'Візуалізація, Ангари, Реконструкція, Навіси, Зерносховище',
    };
  } else {
    return {
      title: `Проектна документація та Візуалізація | ${category}`,
      description: 'Будівництво, Металоконструкція, Будівельна компанія',
    };
  }
}

const DesignCategoryPage = ({ params }) => {
  return (
    <>
      <DesignCategory params={params} />
    </>
  );
};

export default DesignCategoryPage;
