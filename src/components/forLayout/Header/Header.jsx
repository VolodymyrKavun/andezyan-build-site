'use client';
import Link from 'next/link';
import React from 'react';
import { navigationData } from '@/data/navigation.data';

import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/Andezyan_logo_mini.svg"
          alt="Logo mini"
          width={88}
          height={88}
        />
      </Link>

      <div className={styles.links}>
        {navigationData.map(el => (
          <Link key={el.id} href={el.path} className={styles.link}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
