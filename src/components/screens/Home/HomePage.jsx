import Image from 'next/image';
import SLButton from '../../screens/SLButton/SLButton';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapLogo}>
          <Image
            className={styles.imgLogo}
            src="/Logo_Andezyan_dark.svg"
            alt="Logo big"
            width={172}
            height={189}
          />
        </div>
        <h1 className={styles.text}>
          Ми будуємо найкраще для <span className={styles.selection}>Вас</span>
        </h1>
        <button className={styles.btnOrder}>Залишити заявку</button>
        <SLButton />
      </div>
    </>
  );
};

export default HomePage;
