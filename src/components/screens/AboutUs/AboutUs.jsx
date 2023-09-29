import React from 'react';
import styles from './AboutUs.module.css';
import { aboutUsData } from '@/data/aboutUs.data';
import seoStyles from '@/app/seoStyles.module.css';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>Про будівельну компанію Андезян</h1>
      <h2 className={styles.titleAboutUs}>About us</h2>
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
