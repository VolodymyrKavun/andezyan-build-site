import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './GallerySlider.module.css';
import { imageGallerySliderData } from '@/data/imageGallerySlider.data';


const getData = (cat) => {
  const data = imageGallerySliderData[cat];

  if (data) {
    return data;
  }

  return notFound();
}


const GallerySlider = ({ params }) => {
  const data = getData(params.category);

  return <div className={styles.container}>
    {data.map(item => (
      <div key={item.id} className={styles.imgContainer}>
        <Image className={styles.img} src={item.url} alt={item.title} width={380}
          height={380} />
      </div>
    ))}
  </div>;
};

export default GallerySlider;
