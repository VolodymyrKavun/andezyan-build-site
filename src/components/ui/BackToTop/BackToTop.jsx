'use client';
import React from 'react';
import styles from './BackToTop.module.css';
import Image from 'next/image';

const BackToTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      // backToTop.style.display = 'block';
      backToTop.className = styles.backToTop__visible;
    } else {
      // backToTop.style.display = 'none';
      backToTop.className = styles.backToTop;
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        id="backToTop"
        type="button"
        onClick={topFunction}
        className={`${styles.backToTop} ${scrollFunction()}`}
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
