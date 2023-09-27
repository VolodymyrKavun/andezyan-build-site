'use client';
import { lazy, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './GallerySlider.module.css';
// import Slider from '@/components/share/Slider/Slider';
import ButtonToBack from '@/components/share/ButtonToBack/ButtonToBack';
import { imageGallerySliderData } from '@/data/imageGallerySlider.data';
import { createPath } from '@/utils/createPath';
import { getDataByParam } from '@/utils/getDataByParam';
import dynamic from 'next/dynamic';

const DynamicSlider = dynamic(() => import('@/components/share/Slider/Slider'));

const GallerySlider = ({ params }) => {
  // для кнопки "ButtonToBack"
  const router = useRouter();
  // для Lightbox
  const [index, setIndex] = useState(-1);

  const dataByCategory = getDataByParam(
    params.category,
    imageGallerySliderData
  );

  const dataForSlider = dataByCategory.map(item => {
    const changedItem = {};
    changedItem.id = item.id;
    changedItem.src = createPath(params.category, item.photo);
    return changedItem;
  });

  return (
    <section className={styles.container}>
      <h1 className={styles.titleHidden}>
        Галерея будівельної компанії Андезян
      </h1>
      <ButtonToBack onClick={() => router.back()} />
      <ul className={styles.list}>
        {dataByCategory.map((item, index) => {
          const path = createPath(params.category, item.photo);
          return (
            <li
              key={item.id}
              className={styles.imgContainer}
              onClick={() => setIndex(index)}
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.img}
                  src={path}
                  alt={item.title}
                  // width={380}
                  // height={380}
                  fill={true}
                  loading="lazy"
                  sizes="(min-width: 420px ) 50vw,
                (min-width: 768px) 33vw,
                (min-width: 976px) 25vw,
                100vw"
                />
              </div>
            </li>
          );
        })}
      </ul>
      {/* <Slider index={index} setIndex={setIndex} array={dataForSlider} /> */}
      <DynamicSlider index={index} setIndex={setIndex} array={dataForSlider} />
    </section>
  );
};

export default GallerySlider;
