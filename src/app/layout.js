import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/forLayout/Footer/Footer';
import Header from '@/components/forLayout/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Будівельна компанія Андезян',
  description: 'Ангари, склади, навіси, металоконструкції',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
