import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.text}>Copyright © 2023 Webevery. Всі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
