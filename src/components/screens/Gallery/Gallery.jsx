"use client";
import React from 'react';
import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { imageGroupsData } from '@/data/imageGroups.data';


const Gallery = () => {
  return <section className={styles.container}>
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
              <h1 className={styles.title}>{item.title}</h1>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>;
};


export default Gallery;