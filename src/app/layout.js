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
    icon: '/public/logo_gold_transparent.svg',
  },
  openGraph: {
    title: 'Будівельна компанія Андезян',
    url: 'https://andezyan-build-site.vercel.app/',
    description:
      'Ангар, склад, навіс, металоконструкції, реконструкція, Проектування будівельних споруд, Моделювання, Візуалізація та Розробка документації',
    type: 'website',
    images: [
      {
        url: '/public/Andezyan_logo_big.svg',
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
    google: 'OoGsIEPKMjlWq8YrLV7q5T6jKIp9DAvYgspoq-mDVAw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
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
