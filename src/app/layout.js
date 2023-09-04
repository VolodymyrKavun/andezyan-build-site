import './globals.css';
import { KoHo } from 'next/font/google';
import Footer from '@/components/forLayout/Footer/Footer';
import Header from '@/components/forLayout/Header/Header';
import BackToTop from '@/components/ui/BackToTop/BackToTop';
import SocLinksButton from '@/components/share/SocLinksButton/SocLinksButton';

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
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/favicons/apple-touch-icon.png',
    // },
    // android: [
    //   { url: '/favicons/android-chrome-192x192.png' },
    //   {
    //     url: '/favicons/android-chrome-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    // ],
  },
  themeColor: '#ffffff',
  manifest: `${process.env.NEXT_PUBLIC_MAIN_URL}favicons/site.webmanifest`,
  openGraph: {
    title: 'Будівельна компанія Андезян',
    url: 'https://andezyan-build-site.vercel.app/',
    description:
      'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
    type: 'website',
    images: [
      {
        url: '/favicons/favicon.ico',
        type: 'image/svg',
        width: 1200,
        height: 630,
        alt: 'Андезян лого',
      },
    ],
  },
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
          type="image/png"
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
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={koHo.className}>
        <Header />
        {children}
        <SocLinksButton />
        <Footer />
        <BackToTop />
        <div id="modal"></div>
      </body>
    </html>
  );
}
