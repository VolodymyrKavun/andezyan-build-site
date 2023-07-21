import React from 'react';
import styles from './Form.module.css';
import Image from 'next/image';

const Form = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.ellipseBlack}></div>
        <div className={styles.wrapperYoungMan}>
          <Image
            src="/sprite/icon_young_man.svg"
            fill={true}
            alt="icon_young_man"
            className={styles.iconYoungMan}
          />
        </div>
        <div className={styles.wrapperBuble}>
          <Image
            src="/sprite/icon_yellow_buble.svg"
            fill={true}
            alt="iconBuble"
            className={styles.yellowBuble}
          />
        </div>
        <button className={styles.closeBtn}>
          <Image
            src="/sprite/icon_close_white.svg"
            fill={true}
            alt="iconClose"
            className={styles.closeIcon}
          />
        </button>
        <div className={styles.ellipsePink}></div>
        <form className={styles.form}>
          <label htmlFor="">
            <p className={styles.textInput}>Ім’я</p>
            <input
              type="text"
              name="name"
              placeholder="Введіть ім’я"
              autoComplete="off"
              className={styles.input}
            />
          </label>
          <label htmlFor="">
            <p className={styles.textInput}>Номер</p>
            <input
              type="text"
              name="name"
              placeholder="Введіть номер телефону"
              autoComplete="off"
              className={styles.input}
            />
          </label>
          <button className={styles.submitBtn}>Залишити заявку</button>
        </form>
      </section>
    </>
  );
};

export default Form;
