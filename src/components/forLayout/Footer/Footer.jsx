import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.text}>
          Copyright &copy; 2023
          <span className={styles.textNeon}>Webevery</span>. Всі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
