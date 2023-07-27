import DesignCategory from '@/components/screens/DesingCategory/DesignCategory';
import React from 'react';

export async function generateMetadata({ params }) {
  const category = await params.category;
  const siteURL = 'https://andezyan-build-site.vercel.app/design';

  if (category === 'sertificate') {
    return {
      title: `Проектна документація та Візуалізація | Сертифікати`,
      description:
        'Сертифікати, виготовлення документації, розробка документації, інженер проектувальник',
      alternates: {
        canonical: `${siteURL}/${category}`,
      },
    };
  } else if (category === 'documentation') {
    return {
      title: `Проектна документація та Візуалізація | Документація`,
      description:
        'Документація, робочий проект, розробка проекту, реконструкція будівлі, Проєктування',
      alternates: {
        canonical: `${siteURL}/${category}`,
      },
    };
  } else if (category === 'visualization') {
    return {
      title: `Проектна документація та Візуалізація | Візуалізація`,
      description: 'Візуалізація, Ангари, Реконструкція, Навіси, Зерносховище',
      alternates: {
        canonical: `${siteURL}/${category}`,
      },
    };
  } else {
    return {
      title: `Проектна документація та Візуалізація | ${category}`,
      description: 'Будівництво, Металоконструкція, Будівельна компанія',
      alternates: {
        canonical: `${siteURL}/${category}`,
      },
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
