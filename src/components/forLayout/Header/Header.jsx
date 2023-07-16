'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData } from '@/data/navigation.data';
import styles from './Header.module.css';

const Header = () => {
  const [nav, setNav] = useState(true);

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          className={styles.imgLogo}
          src="/Andezyan_logo_mini.svg"
          alt="Logo mini"
          width={88}
          height={88}
        />
      </Link>

      <ul
        className={
          nav ? styles.menuNav : styles.menuBurger + ' ' + styles.activeBurger
        }
      >
        {navigationData.map(el => (
          <li key={el.id}>
            <Link
              href={el.path}
              onClick={() => setNav(true)}
              className={styles.link}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.btnOrder}>Замовити дзвінок</button>
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
  );
};

export default Header;
