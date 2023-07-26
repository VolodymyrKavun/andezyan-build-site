'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/data/navigation.data';
import Modal from '@/components/share/Modal/Modal';
import Form from '@/components/share/Form/Form';

import styles from './Header.module.css';

const Header = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal active={showModal} closeModal={closeModal}>
        <Form closeModal={closeModal} />
      </Modal>
      <header className={styles.container}>
        <Link href="/" >
          <Image
            className={styles.imgLogoMobile}
            src="/logo_gold_transparent.svg"
            alt="Logo mini"
            width={40}
            height={44}
          />
          <Image
            className={styles.imgLogo}
            src="/logo_bg_black_small.svg"
            alt="Logo mini"
            width={88}
            height={88}
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
              className={styles.icon}
            />
          ) : (
            <Image
              src="/sprite/icon_close_white.svg"
              width={35}
              height={35}
              alt="Icon"
              className={styles.icon}
            />
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
