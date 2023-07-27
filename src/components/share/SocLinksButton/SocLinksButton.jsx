// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './SocLinksButton.module.css';


// const SocLinksButton = () => {
//   return (
//     <div className={styles.dropdown}>
//       <span className={styles.label}>
//         <Image
//           className={styles.menu}
//           src="/sprite/icon_message-circle.svg"
//           alt="menu-circle"
//           width={32}
//           height={32}
//         />
//       </span>
//       <ul className={styles.socialList}>
//         <li>
//           <Link href="#" className={styles.link}>
//             <Image
//               className={styles.menu}
//               src="/sprite/icon_facebook.svg"
//               alt="facebook"
//               width={32}
//               height={32}
//             />
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className={styles.link}>
//             <Image
//               className={styles.menu}
//               src="/sprite/icon_instagram.svg"
//               alt="instagram"
//               width={32}
//               height={32}
//             />
//           </Link>
//         </li>
//         <li>
//           <Link href="https://t.me/ao_angar" className={styles.link}>
//             <Image
//               className={styles.menu}
//               src="/sprite/icon_telegram.svg"
//               alt="telegram"
//               width={32}
//               height={32}
//             />
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="viber://chat?number=%2B380685909988"
//             className={styles.link}
//           >
//             <Image
//               className={styles.menu}
//               src="/sprite/icon_phone.svg"
//               alt="viber"
//               width={32}
//               height={32}
//             />
//           </Link>
//         </li>
//         <li>
//           <Link href="mailto:aoandezyan@gmail.com" className={styles.link}>
//             <Image
//               className={styles.menu}
//               src="/sprite/icon_mail.svg"
//               alt="mail"
//               width={32}
//               height={32}
//             />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SocLinksButton;









import styles from './SocLinksButton.module.css';
import { socialData } from '@/data/social.data';
import { createArrOfNeededObjProperties } from '@/utils/createArrOfNeededObjProperties';


const SocLinksButton = () => {

  const neededArr = ["phone", "email", "telegram", "viber", "physicalAddress"];

  const neededData = createArrOfNeededObjProperties(socialData, neededArr);


  return (
    <div className={styles.container}>
      <div className={styles.circleWrapper}>
        <svg className={styles.circle}>
          <use href="/sprite.svg#icon_message_circle" className={styles.iconCircle}></use>
        </svg>
      </div>

      <ul className={styles.socialList}>
        {neededData.map((item, index) => (
          <a key={index} href={`${item.path}`} className={styles.socLink}>
            <svg className={styles.socSvg}>
              <use href={item.icon} className={`${styles.socIcon} ${styles[item.name]}`}  ></use>
            </svg>
          </a>
        ))}
      </ul>
    </div>
  );
};


export default SocLinksButton;