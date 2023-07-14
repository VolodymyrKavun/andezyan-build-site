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

      <ul className={nav ? styles.menuNav : styles.menuBurger}>
        {navigationData.map(el => (
          <li key={el.id}>
            <Link href={el.path} className={styles.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.btnOrder}>Замовити дзвінок</button>
      <button
        // onClick={() => setNav(!nav)}
        className={styles.mobileBtnNav}
        aria-label="BurgerMenu"
      ></button>
    </header>
  );
};

export default Header;
