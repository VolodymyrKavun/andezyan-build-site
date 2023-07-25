'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DesignCategory.module.css';
import { designCategory } from '@/data/designCategory.data';
import { useRouter } from 'next/navigation';
import { getDataByParam } from '@/utils/getDataByParam';
import Slider from '@/components/share/Slider/Slider';

const DesignCategory = ({ params }) => {
  const router = useRouter();
  const [index, setIndex] = useState(-1);

  const designDataByCategory = getDataByParam(params.category, designCategory);

  const designDataForSlider = designDataByCategory.map(item => {
    const changeItem = {};
    changeItem.id = item.id;
    changeItem.src = item.src;
    return changeItem;
  });
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.titleHidden}>
          Проектна документація та Візуалізація
        </h1>
        <button className={styles.buttonToBack} onClick={() => router.back()}>
          <div className={styles.iconBackWrapper}>
            <Image
              src="/sprite/icon_arrow-down-circle.svg"
              alt="Кнопка повернення"
              fill={true}
              className={styles.iconBack}
            />
          </div>
        </button>
        <ul className={styles.list}>
          {designDataByCategory.map((item, index) => (
            <li key={item.id}>
              <div
                className={styles.imgWrapper}
                onClick={() => setIndex(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill={true}
                  className={styles.img}
                />
              </div>
            </li>
          ))}
        </ul>
        <Slider index={index} setIndex={setIndex} array={designDataForSlider} />
      </section>
    </>
  );
};

export default DesignCategory;
