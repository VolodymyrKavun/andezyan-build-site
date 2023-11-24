// import HomePage from '@/components/screens/Home/HomePage';
import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() =>
  import('@/components/screens/Home/HomePage')
);

export default function Home() {
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
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* <HomePage /> */}
        <DynamicHomePage />
      </main>
    </>
  );
}
