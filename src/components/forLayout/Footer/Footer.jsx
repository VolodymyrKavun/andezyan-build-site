import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.text}>(c)2022. Всі права захищено</p>
      </div>
    </footer>
  );
};

export default Footer;
