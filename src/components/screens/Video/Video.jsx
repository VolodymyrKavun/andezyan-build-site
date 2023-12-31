import React from 'react';
import styles from './Video.module.css';
import { videosData } from '@/data/videos.data';
import seoStyles from '@/app/seoStyles.module.css';

const Video = () => {
  return (
    <>
      <section className={styles.containerVideo}>
        <h1 className={seoStyles.titleHidden}>
          Відеоматеріали будівельної компанії Андезян
        </h1>
        <ul className={styles.listVideo}>
          {videosData.map(el => {
            return (
              <li className={styles.itemVideo} key={el.id}>
                <iframe
                  className={styles.imgVideo}
                  width="100%"
                  height="100%"
                  src={el.src}
                  title={el.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <p className={styles.titleVideo}>{el.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Video;
