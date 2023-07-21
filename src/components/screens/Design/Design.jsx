'use client';
import Image from 'next/image';
import React from 'react';
import styles from './Design.module.css';
import { designData } from '@/data/design.data';
import Link from 'next/link';

const Design = () => {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {designData.map(item => (
            <li className={styles.itemWrapper} key={item.id}>
              <div className={styles.item}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill={true}
                    className={styles.icon}
                  />
                </div>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
                <Link href={`/design/${item.category}`} className={styles.link}>
                  <button className={styles.button}>{item.textButton}</button>
                </Link>
                <div className={styles.blobWrapper}>
                  <Image
                    src="/sprite/icon_blob_yellow.svg"
                    alt="Blob yellow"
                    fill={true}
                    className={styles.iconBlob}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Design;
