'use client';
import { useState } from 'react';
import Image from 'next/image';
// import ModalTransition from '@/components/share/ModalTransition/ModalTransition';
// import Form from '@/components/share/Form/Form';
import styles from './HomePage.module.css';
import dynamic from 'next/dynamic';

const DynamicModalTransition = dynamic(() =>
  import('@/components/share/ModalTransition/ModalTransition')
);
const DynamicForm = dynamic(() => import('@/components/share/Form/Form'));

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <ModalTransition
        active={showModal}
        closeModal={() => setShowModal(false)}
      > */}
      <DynamicModalTransition
        active={showModal}
        closeModal={() => setShowModal(false)}
      >
        {/* <Form closeModal={() => setShowModal(false)} /> */}
        <DynamicForm closeModal={() => setShowModal(false)} />
        {/* </ModalTransition> */}
      </DynamicModalTransition>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.imgLogo}
            src="/logo_gold_transparent.svg"
            alt="Logo big"
            width={172}
            height={189}
            placeholder="blur"
            blurDataURL="/logo_gold_transparent.svg"
          />
        </div>
        <h1 className={styles.text}>
          Ми будуємо найкраще для <span className={styles.selection}>ВАС</span>
        </h1>
        <button
          className={styles.btnRequisition}
          onClick={() => setShowModal(true)}
        >
          Залишити заявку
        </button>
      </div>
    </>
  );
};

export default HomePage;
