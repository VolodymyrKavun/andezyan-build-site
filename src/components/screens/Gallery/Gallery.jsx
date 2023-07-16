"use client";
import React from 'react';
import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { imageGroupsData } from '@/data/imageGroups.data';

const Gallery = () => {
  return <div className={styles.container}>
    {imageGroupsData.map(item => (
      <Link key={item.id} href={item.url} className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={item.img}
            alt={item.title}
            width={380}
            height={380}
          />
          <h1 className={styles.title}>{item.title}</h1>
        </div>
      </Link>
    ))}
  </div>;
};

export default Gallery;
