import { v4 as uuidv4 } from 'uuid';

import belaya_sto_oksana_min from '/public/angars/belaya_sto_oksana_min.webp';
import house_front_finnish_04 from '/public/houses/house_front_finnish_04.webp';
import beton_vishneve_01 from '/public/beton/beton_vishneve_01.webp';
import shop_maf_grey from '/public/shops/shop_maf_grey.webp';
import asphalt_kopilov_front from '/public/asphalt/asphalt_kopilov_front.webp';
// import certificate_lobas from '/public/certificates/certificate_lobas.webp';

export const imageGroupsData = [
  {
    id: uuidv4(),
    img: house_front_finnish_04,
    title: 'Будинки',
    url: '/gallery/houses',
  },
  {
    id: uuidv4(),
    img: belaya_sto_oksana_min,
    title: 'Ангари',
    url: '/gallery/angars',
  },
  {
    id: uuidv4(),
    img: asphalt_kopilov_front,
    title: 'Асфальтобетонні роботи',
    url: '/gallery/asphalt',
  },
  {
    id: uuidv4(),
    img: beton_vishneve_01,
    title: 'Бетонні роботи',
    url: '/gallery/beton',
  },
  {
    id: uuidv4(),
    img: shop_maf_grey,
    title: 'Магазини',
    url: '/gallery/shops',
  },
  // {
  //   id: uuidv4(),
  //   img: certificate_lobas,
  //   title: 'Проєктування',
  //   url: '/gallery/certificate',
  // },
];
