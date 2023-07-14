'use client';
import React from 'react';
import { getProductByCategory } from '@/utils/getProductByGroup';
import Image from 'next/image';
import styles from './DesignCategory.module.css';
import { designCategory } from '@/data/designCategory.data';
import { useRouter } from 'next/navigation';

const DesignCategory = ({ params }) => {
  const router = useRouter();
  const products = getProductByCategory(params.category, designCategory);
  return (
    <>
      <section className={styles.container}>
        <h2>{params.category}</h2>
        <ul className={styles.list}>
          {products.map(item => (
            <li key={item.id}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill={true}
                  className={styles.img}
                />
              </div>
            </li>
          ))}
        </ul>
        <button className={styles.buttonToBack} onClick={() => router.back()}>
          Back
        </button>
      </section>
    </>
  );
};

export default DesignCategory;
