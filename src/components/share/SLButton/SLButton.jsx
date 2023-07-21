import Link from 'next/link';
import Image from 'next/image';
import styles from './SLButton.module.css';

const SLButton = () => {
  return (
    <div className={styles.dropdown}>
      <span className={styles.label}>
        <Image
          className={styles.menu}
          src="/sprite/icon_message-circle.svg"
          alt="menu-circle"
          width={32}
          height={32}
        />
      </span>
      <ul className={styles.socialList}>
        <li>
          <Link href="#" className={styles.link}>
            <Image
              className={styles.menu}
              src="/sprite/icon_facebook.svg"
              alt="facebook"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link}>
            <Image
              className={styles.menu}
              src="/sprite/icon_instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://t.me/ao_angar" className={styles.link}>
            <Image
              className={styles.menu}
              src="/sprite/icon_telegram.svg"
              alt="telegram"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link
            href="viber://chat?number=%2B380685909988"
            className={styles.link}
          >
            <Image
              className={styles.menu}
              src="/sprite/icon_phone.svg"
              alt="viber"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="mailto:aoandezyan@gmail.com" className={styles.link}>
            <Image
              className={styles.menu}
              src="/sprite/icon_mail.svg"
              alt="mail"
              width={32}
              height={32}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SLButton;
