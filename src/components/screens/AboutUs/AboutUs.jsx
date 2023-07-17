import React from 'react';
import styles from './AboutUs.module.css';
import { aboutUsData } from '@/data/aboutUs.data';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.listAboutUs}>
        {aboutUsData.map(item => (
          <li key={item.id} className={styles.itemAboutUs}>
            <p className={styles.textAboutUs}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutUs;
