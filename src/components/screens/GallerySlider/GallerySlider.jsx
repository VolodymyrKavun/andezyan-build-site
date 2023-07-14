"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './GallerySlider.module.css';
import { imageGallerySliderData } from '@/data/imageGallerySlider.data';


const getDataByParam = (parameter, obj) => {
  const data = obj[parameter];

  if (data) {
    return data;
  }

  return notFound();
}


const GallerySlider = ({ params }) => {
  const router = useRouter();

  const data = getDataByParam(params.category, imageGallerySliderData);

  return <div className={styles.container}>
    <button className={styles.buttonToBack} onClick={() => router.back()}>Повернутися</button>
    {data.map(item => (
      <div key={item.id} className={styles.imgContainer}>
        <Image className={styles.img} src={item.url} alt={item.title} width={380}
          height={380} />
      </div>
    ))}
  </div>;
};

export default GallerySlider;
