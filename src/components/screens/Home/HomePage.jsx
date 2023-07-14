import Image from 'next/image';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapLogo}>
          <Image
            className={styles.imgLogo}
            src="/Andezyan_logo_big.svg"
            alt="Logo big"
            width={172}
            height={189}
          />
        </div>
        <h1 className={styles.text}>
          Ми будуємо найкраще для <span className={styles.selection}>Вас</span>
        </h1>
        <button className={styles.btnOrder}>Залишити заявку</button>
      </div>
    </>
  );
};

export default HomePage;
