import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Form.module.css';

const Form = ({ closeModal }) => {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');

  const [dirtyUserName, setDirtyUserName] = useState(false);
  const [dirtyPhone, setDirtyPhone] = useState(false);

  const [errorUserName, setErrorUserName] = useState('Заповніть це поле');
  const [errorPhone, setErrorPhone] = useState('Заповніть це поле');

  const [validForm, setValidForm] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (errorUserName || errorPhone) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [errorUserName, errorPhone]);

  const validateName = value => {
    if (value.length < 2) {
      setErrorUserName('Ім’я має бути довшим');
      if (value.length === 0) {
        setErrorUserName('Заповніть це поле');
      }
    } else {
      setErrorUserName('');
    }
  };

  function validatePhone(phone) {
    let re = /^\+\d{12}$/;

    if (!re.test(phone)) {
      setErrorPhone('+380123456789');
    } else {
      setErrorPhone('');
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        if (evt.target.value.length > 30) return;
        validateName(value);
        setUserName(value);
        break;

      case 'phone':
        if (evt.target.value.length > 13) return;
        validatePhone(value);
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleBlur = evt => {
    switch (evt.target.name) {
      case 'name':
        setDirtyUserName(true);
        break;

      case 'phone':
        setDirtyPhone(true);
        break;

      default:
        return;
    }
  };

  const formSubmit = evt => {
    evt.preventDefault();

    const data = {
      name: userName,
      tel: phone,
    };
    setSubmit(true);
    console.log('data:', data);

    setTimeout(() => {
      closeModal();
      reset();
    }, 3000);
  };

  const reset = () => {
    setUserName('');
    setPhone('');
    setDirtyUserName(false);
    setDirtyPhone(false);
    setErrorUserName('Заповніть це поле');
    setErrorPhone('Заповніть це поле');
    setSubmit(false);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.ellipseBlack}></div>
        {!submit ? (
          <div className={styles.wrapperYoungMan}>
            <Image
              src="/sprite/icon_young_man.svg"
              fill={true}
              alt="icon_young_man"
              className={styles.iconYoungMan}
            />
          </div>
        ) : (
          <div className={styles.wrapperYoungManHappy}>
            <Image
              src="/sprite/happy_smiling_young_man.svg"
              fill={true}
              alt="icon_young_man"
              className={styles.iconYoungMan}
            />
          </div>
        )}

        <div className={styles.wrapperBuble}>
          <Image
            src="/sprite/icon_yellow_buble.svg"
            fill={true}
            alt="iconBuble"
            className={styles.yellowBuble}
          />
        </div>
        <button className={styles.closeBtn} onClick={closeModal}>
          <Image
            src="/sprite/icon_close_white.svg"
            fill={true}
            alt="iconClose"
            className={styles.closeIcon}
          />
        </button>
        <div className={styles.ellipsePink}></div>
        {!submit ? (
          <form className={styles.form} onSubmit={formSubmit}>
            <div className={styles.wrapError}>
              {dirtyUserName && errorUserName && (
                <div className={styles.error}>{errorUserName}</div>
              )}
              <label htmlFor="">
                <p className={styles.textInput}>Ім’я</p>
                <input
                  type="text"
                  name="name"
                  value={userName}
                  placeholder="Введіть ім’я"
                  autoComplete="off"
                  className={
                    errorUserName && dirtyUserName
                      ? styles.input + ' ' + styles.inputError
                      : styles.input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
            </div>

            <div className={styles.wrapError}>
              {dirtyPhone && errorPhone && (
                <div className={styles.error}>{errorPhone}</div>
              )}
              <label htmlFor="">
                <p className={styles.textInput}>Номер</p>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  placeholder="Введіть номер телефону"
                  autoComplete="off"
                  className={
                    errorPhone && dirtyPhone
                      ? styles.input + ' ' + styles.inputError
                      : styles.input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
            </div>
            <button
              className={
                !validForm
                  ? styles.submitBtn + ' ' + styles.submitBtnDis
                  : styles.submitBtn
              }
              disabled={!validForm}
            >
              Залишити заявку
            </button>
          </form>
        ) : (
          <div className={styles.helloWrap}>
            <h2 className={styles.helloTitle}>Вітаємо</h2>
            <p className={styles.helloText}>
              Вашу заявку відправлено до менеджера
            </p>
            <div className={styles.wrapLine}>
              <Image
                src="/sprite/icon_long_arrow.svg"
                fill={true}
                alt="icon_line"
                className={styles.iconLine}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Form;
