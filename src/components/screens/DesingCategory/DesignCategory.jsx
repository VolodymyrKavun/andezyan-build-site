'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DesignCategory.module.css';
import { designCategory } from '@/data/designCategory.data';
import { useRouter } from 'next/navigation';
import { getDataByParam } from '@/utils/getDataByParam';
// import Slider from '@/components/share/Slider/Slider';
import ButtonToBack from '@/components/share/ButtonToBack/ButtonToBack';
import dynamic from 'next/dynamic';
import seoStyles from '@/app/seoStyles.module.css';

const DynamicSlider = dynamic(() => import('@/components/share/Slider/Slider'));

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
        <h1 className={seoStyles.titleHidden}>
          Проектна документація та Візуалізація
        </h1>
        <ButtonToBack onClick={() => router.back()} />
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
                  sizes="(min-width: 1440px) 380px, 328px"
                />
              </div>
            </li>
          ))}
        </ul>
        {/* <Slider index={index} setIndex={setIndex} array={designDataForSlider} /> */}
        <DynamicSlider
          index={index}
          setIndex={setIndex}
          array={designDataForSlider}
        />
      </section>
    </>
  );
};

export default DesignCategory;
