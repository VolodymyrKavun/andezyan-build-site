import './globals.css';
import { KoHo } from 'next/font/google';
// import Footer from '@/components/forLayout/Footer/Footer';
// import Header from '@/components/forLayout/Header/Header';
// import BackToTop from '@/components/ui/BackToTop/BackToTop';
// import SocLinksButton from '@/components/share/SocLinksButton/SocLinksButton';
import Head from 'next/head';
import dynamic from 'next/dynamic';

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
  title: 'Будівельна компанія Андезян',
  description:
    'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
  keywords: ['Ангар', 'склад', 'реконструкція'],
  alternates: {
    canonical: 'https://andezyan-build-site.vercel.app/',
  },
  icons: {
    icon: [{ url: 'favicon.ico' }],
    shortcut: ['favicon.ico'],
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
      { url: '/favicons/android-chrome-192x192.png' },
      {
        url: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      { url: '/favicons/android-chrome-512x512.png' },
      {
        url: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  themeColor: '#161616',
  manifest: `${process.env.NEXT_PUBLIC_MAIN_URL}site.webmanifest`,
  openGraph: {
    title: 'Будівельна компанія Андезян',
    url: 'https://andezyan-build-site.vercel.app/',
    description:
      'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
    type: 'website',
    siteName: 'Будівельна компанія Андезян',
    images: [
      {
        url: 'favicon.ico',
        type: 'image/svg',
        width: 800,
        height: 600,
        alt: 'Андезян лого',
      },
      {
        url: 'favicon.ico',
        type: 'image/svg',
        width: 1200,
        height: 630,
        alt: 'Андезян лого',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <Head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/favicon-48x48.png"
        /> */}

        <link rel="preload" href="/hero-bg.webp" as="image" />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <body className={koHo.className}>
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
    </html>
  );
}
