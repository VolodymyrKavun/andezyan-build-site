'use client';
import React from 'react';
import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { imageGroupsData } from '@/data/imageGroups.data';
import seoStyles from '@/app/seoStyles.module.css';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Галерея будівельної компанії Андезян
      </h1>
      <ul className={styles.list}>
        {imageGroupsData.map(item => (
          <li key={item.id}>
            <Link href={item.url}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={item.img}
                  alt={item.title}
                  width={380}
                  height={380}
                />
                <h2 className={styles.title}>{item.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
