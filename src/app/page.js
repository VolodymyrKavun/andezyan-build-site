// import HomePage from '@/components/screens/Home/HomePage';
import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() =>
  import('@/components/screens/Home/HomePage')
);

export default function Home() {
  return (
    <main>
      {/* <HomePage /> */}
      <DynamicHomePage />
    </main>
  );
}
