import './globals.css';
import { KoHo } from 'next/font/google';
// import Footer from '@/components/forLayout/Footer/Footer';
// import Header from '@/components/forLayout/Header/Header';
// import BackToTop from '@/components/ui/BackToTop/BackToTop';
// import SocLinksButton from '@/components/share/SocLinksButton/SocLinksButton';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import GoogleAnalytics from './GoogleAnalytics';
import { PHProvider, PostHogPageview } from './providers';
import { Suspense } from 'react';

const DynamicGoogleAnalytics = dynamic(() => import('./GoogleAnalytics'));

const DynamicHeader = dynamic(() =>
  import('@/components/forLayout/Header/Header')
);
const DynamicSocLinksButton = dynamic(() =>
  import('@/components/share/SocLinksButton/SocLinksButton')
);
const DynamicFooter = dynamic(() =>
  import('@/components/forLayout/Footer/Footer')
);
const DynamicBackToTop = dynamic(() =>
  import('@/components/ui/BackToTop/BackToTop')
);

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://andezyan-build-site.vercel.app/'),
  title: 'Будівельна компанія Андезян',
  description:
    'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
  keywords: ['Ангар', 'склад', 'реконструкція'],
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png' },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
    android: [
      { url: '/android-chrome-192x192.png' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      { url: '/android-chrome-512x512.png' },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  themeColor: '#161616',

  openGraph: {
    title: 'Будівельна компанія Андезян',
    url: 'https://andezyan-build-site.vercel.app/',
    description:
      'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
    type: 'website',
    siteName: 'Будівельна компанія Андезян',
    images: [
      {
        url: '/opengraph-image.png',
        type: 'image/png',
        width: 400,
        height: 300,
        alt: 'Малий скрін',
      },
      {
        url: '/twitter-image.png',
        type: 'image/png',
        width: 800,
        height: 600,
        alt: 'Середній скрін',
      },
      {
        url: '/opengraph-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Великий скрін',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  author: 'Будівельна компанія Андезян',
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    nocache: true,
    googleBot: {
      index: true,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SC,
  },
  generator: 'Будівельна компанія Андезян',
  applicationName: 'Будівельна компанія Андезян',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Ангар',
    'Склад',
    'Реконструкція',
    'Будівельна компанія Андезян',
    'Будівництво ангарів',
  ],
  authors: [
    { name: 'Андезян' },
    { name: 'Андезян', url: 'https://andezyan-build-site.vercel.app/' },
  ],
  creator: 'Андезян',
  publisher: 'Андезян',
  appLinks: {
    ios: {
      url: 'https://andezyan-build-site.vercel.app/',
      app_name: 'Будівельна компанія Андезян',
    },
    android: {
      url: 'https://andezyan-build-site.vercel.app/',
      package: 'https://andezyan-build-site.vercel.app/',
      app_name: 'Будівельна компанія Андезян',
    },
    web: {
      url: 'https://andezyan-build-site.vercel.app/',
      should_fallback: true,
    },
  },
  assets: ['https://andezyan-build-site.vercel.app/'],
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Будівельна компанія Андезян',
    url: 'https://andezyan-build-site.vercel.app/',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+380675909988',
        email: 'aoandezyan@gmail.com',
        contactType: 'customer service',
      },
    ],
    keywords:
      'Будівництво ангарів. Реконструкція. Склад. Ангар. Будівельна компанія Андезян',
  };
  return (
    <html lang="uk">
      <Head>
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
          type="image/png"
        /> */}

        <link rel="preload" href="/hero-bg.webp" as="image" />

        <link rel="mask-icon" href="/favicon.ico" color="#161616" />
      </Head>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={koHo.className}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {/* <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
        </Script> */}
          {/* <GoogleAnalytics /> */}
          <DynamicGoogleAnalytics />
          {/* <Header /> */}
          <DynamicHeader />
          {children}
          {/* <SocLinksButton /> */}
          <DynamicSocLinksButton />
          {/* <Footer /> */}
          <DynamicFooter />
          {/* <BackToTop /> */}
          <DynamicBackToTop />
          <div id="modal"></div>
        </body>
      </PHProvider>
    </html>
  );
}
