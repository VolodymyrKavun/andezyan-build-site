import './globals.css';
import { KoHo } from 'next/font/google';
import Footer from '@/components/forLayout/Footer/Footer';
import Header from '@/components/forLayout/Header/Header';
import BackToTop from '@/components/ui/BackToTop/BackToTop';

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Будівельна компанія Андезян',
  description: 'Ангари, склади, навіси, металоконструкції',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={koHo.className}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <div id="modal"></div>
      </body>
    </html>
  );
}
