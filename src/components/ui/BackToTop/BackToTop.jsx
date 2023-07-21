'use client';
import React, { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';
import Image from 'next/image';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleIsVisible);

    return () => {
      window.removeEventListener('scroll', toggleIsVisible);
    };
  }, []);

  return (
    <>
      <button
        id="backToTop"
        type="button"
        onClick={scrollToTop}
        className={isVisible ? styles.visible : styles.notVisible}
        aria-label="backToTop"
      >
        <div className={styles.iconBackWrapper}>
          <Image
            src="/sprite/icon_arrow-down-circle.svg"
            alt="Кнопка до гори"
            fill={true}
            className={styles.backToTopIcon}
          />
        </div>
      </button>
    </>
  );
};

export default BackToTop;
