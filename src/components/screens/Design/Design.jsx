'use client';
import Image from 'next/image';
import React from 'react';
import styles from './Design.module.css';

const Design = () => {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.itemWrapper}>
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/sprite/icon_document-scanner-outline.svg"
                  alt="Icon"
                  fill={true}
                  className={styles.icon}
                />
              </div>
              <h2 className={styles.title}>Сертифікати</h2>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, molestias sequi consectetur accusantium libero quos.
                Omnis expedita culpa voluptates accusantium.
              </p>
              <button className={styles.button}>Детальніше</button>
            </div>
          </li>
          <li className={styles.itemWrapper}>
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/sprite/icon_line.svg"
                  alt="Icon"
                  fill={true}
                  className={styles.icon}
                />
              </div>

              <h2 className={styles.title}>Розробка документації</h2>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, molestias sequi consectetur accusantium libero quos.
                Omnis expedita culpa voluptates accusantium.
              </p>
              <button className={styles.button}>Детальніше</button>
            </div>
          </li>
          <li className={styles.itemWrapper}>
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/sprite/search.svg"
                  alt="Icon"
                  fill={true}
                  className={styles.icon}
                />
              </div>
              <h2 className={styles.title}>Виготовлення та візуалізація</h2>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, molestias sequi consectetur accusantium libero quos.
                Omnis expedita culpa voluptates accusantium.
              </p>
              <button className={styles.button}>Детальніше</button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Design;
