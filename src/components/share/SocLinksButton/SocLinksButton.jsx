import styles from './SocLinksButton.module.css';
import { socialData } from '@/data/social.data';
import { createArrOfNeededObjProperties } from '@/utils/createArrOfNeededObjProperties';

const SocLinksButton = () => {
  const neededArr = ['phone', 'email', 'telegram', 'viber', 'physicalAddress'];

  const neededData = createArrOfNeededObjProperties(socialData, neededArr);

  return (
    <div className={styles.container}>
      <div className={styles.circleWrapper}>
        <svg className={styles.circle}>
          <use
            href="/sprite.svg#icon_message_circle"
            className={styles.iconCircle}
          ></use>
        </svg>
      </div>

      <ul className={styles.socialList}>
        {neededData.map((item, index) => (
          <li key={index}>
            <a
              href={`${item.path}`}
              className={styles.socLink}
              aria-label={item.name}
            >
              <svg className={styles.socSvg}>
                <use
                  href={item.icon}
                  className={`${styles.socIcon} ${styles[item.name]}`}
                ></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocLinksButton;
