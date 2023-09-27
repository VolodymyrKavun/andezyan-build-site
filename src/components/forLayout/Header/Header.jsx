'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/data/navigation.data';
// import ModalTransition from '@/components/share/ModalTransition/ModalTransition';
// import Form from '@/components/share/Form/Form';

import styles from './Header.module.css';
import dynamic from 'next/dynamic';

const DynamicModalTransition = dynamic(() =>
  import('@/components/share/ModalTransition/ModalTransition')
);
const DynamicForm = dynamic(() => import('@/components/share/Form/Form'));

const Header = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <ModalTransition active={showModal} closeModal={closeModal}> */}
      <DynamicModalTransition active={showModal} closeModal={closeModal}>
        {/* <Form closeModal={closeModal} /> */}
        <DynamicForm closeModal={closeModal} />
        {/* </ModalTransition> */}
      </DynamicModalTransition>
      <header className={styles.container}>
        <Link href="/">
          <Image
            className={styles.imgLogoMobile}
            src="/logo_gold_transparent.svg"
            alt="Logo mini"
            width={40}
            height={44}
            placeholder="blur"
            blurDataURL="/logo_gold_transparent.svg"
          />
          <Image
            className={styles.imgLogo}
            src="/logo_bg_black_small.svg"
            alt="Logo mini"
            width={88}
            height={88}
            placeholder="blur"
            blurDataURL="/logo_bg_black_small.svg"
          />
        </Link>

        <ul
          className={
            nav ? styles.menuNav : `${styles.menuBurger} ${styles.activeBurger}`
          }
        >
          {navigationData.map(el => (
            <li key={el.id}>
              <Link
                href={el.path}
                onClick={() => setNav(true)}
                className={
                  pathname === el.path
                    ? `${styles.link} ${styles.linkActive}`
                    : styles.link
                }
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.btnOrder} onClick={() => setShowModal(true)}>
          Замовити дзвінок
        </button>
        <button
          onClick={() => setNav(!nav)}
          className={styles.mobileBtnNav}
          aria-label="BurgerMenu"
        >
          {nav ? (
            <Image
              src="/sprite/icon_burger.svg"
              width={32}
              height={19}
              alt="Icon"
            />
          ) : (
            <Image
              src="/sprite/icon_close_white.svg"
              width={35}
              height={35}
              alt="Icon"
            />
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
