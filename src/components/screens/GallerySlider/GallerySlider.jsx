'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './GallerySlider.module.css';
import Slider from '@/components/share/Slider/Slider';
import { imageGallerySliderData } from '@/data/imageGallerySlider.data';
import { createPath } from '@/utils/createPath';
import { getDataByParam } from '@/utils/getDataByParam';

const GallerySlider = ({ params }) => {
  // для кнопки "Повернутися"
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
    <div className={styles.container}>
      <button className={styles.buttonToBack} onClick={() => router.back()}>
        Повернутися
      </button>
      <div className={styles.imagesWrapper}>
        {dataByCategory.map((item, index) => {
          const path = createPath(params.category, item.photo);
          return (
            <div
              key={item.id}
              className={styles.imgContainer}
              onClick={() => setIndex(index)}
            >
              <Image
                className={styles.img}
                src={path}
                alt={item.title}
                width={380}
                height={380}
              />
            </div>
          );
        })}
      </div>
      <Slider index={index} setIndex={setIndex} array={dataForSlider} />
    </div>
  );
};

export default GallerySlider;
