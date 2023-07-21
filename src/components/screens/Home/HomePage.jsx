'use client';
import { useState } from 'react';
import Image from 'next/image';
import SLButton from '../../screens/SLButton/SLButton';
import Modal from '@/components/screens/Modal/Modal';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal active={showModal} closeModal={() => setShowModal(false)}>
        <h2> Modal Content</h2>
        <h2> Modal Content</h2>
        <h2> Modal Content</h2>
      </Modal>
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
        <button className={styles.btnOrder} onClick={() => setShowModal(true)}>
          Залишити заявку
        </button>
        <SLButton />
      </div>
    </>
  );
};

export default HomePage;
