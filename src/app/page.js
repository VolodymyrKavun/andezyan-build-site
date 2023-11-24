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
        <div
          itemscope
          itemtype="https://schema.org/Organization"
          style={{ display: 'none' }}
        >
          <meta itemprop="name" content="Будівельна компанія Андезян" />
          <link itemprop="url" href="https://andezyan-build-site.vercel.app/" />
          <link
            itemprop="logo"
            href="https://andezyan-build-site.vercel.app/favicon.ico"
          />
          <meta
            itemprop="description"
            content="Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації."
          />
          <meta
            itemprop="keywords"
            content="Будівельна компанія Андезян, Будівництво ангарів, Ангар, Склад"
          />
          <div
            itemprop="address"
            itemscope
            itemtype="https://schema.org/PostalAddress"
          >
            <meta itemprop="addressLocality" content="Біла Церква, Україна" />
            <meta itemprop="postalCode" content="09100" />
            <meta itemprop="streetAddress" content="вул. Київська, 96" />
          </div>
          <div
            itemprop="ContactPoint"
            itemscope
            itemtype="https://schema.org/ContactPoint"
          >
            <meta itemprop="email" content="aoandezyan@gmail.com" />
            <meta itemprop="email" content="lotos0712@ukr.net" />
            <meta itemprop="telephone" content="+380675909988" />
            <meta itemprop="telephone" content="+380674630606" />
            <meta itemprop="telephone" content="+380674630606" />
            <meta itemprop="telephone" content="+380456051228" />
          </div>
        </div>
        {/* <HomePage /> */}
        <DynamicHomePage />
      </main>
    </>
  );
}
