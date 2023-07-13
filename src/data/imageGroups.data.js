import { v4 as uuidv4 } from 'uuid';

import belaya_sto_oksana_min from '/public/angars/belaya_sto_oksana_min.jpg';
import house_front_finnish_04 from '/public/houses/house_front_finnish_04.jpg';
import beton_vishneve_01 from '/public/beton/beton_vishneve_01.jpg';
import shop_maf_grey from '/public/shops/shop_maf_grey.jpg';
import asphalt_kopilov_front from '/public/asphalt/asphalt_kopilov_front.jpg';
import certificate_lobas from '/public/certificates/certificate_lobas.jpg';

export const imageGroupsData = [
  {
    id: uuidv4(),
    url: belaya_sto_oksana_min,
    title: 'Ангари',
    // group: '/gallery/angars',
  },
  {
    id: uuidv4(),
    url: house_front_finnish_04,
    title: 'Будинки',
    // group: '/gallery/houses',
  },
  {
    id: uuidv4(),
    url: beton_vishneve_01,
    title: 'Бетонні роботи',
    // group: '/gallery/beton',
  },
  {
    id: uuidv4(),
    url: shop_maf_grey,
    title: 'Магазини',
    // group: '/gallery/shops',
  },
  {
    id: uuidv4(),
    url: asphalt_kopilov_front,
    title: 'Асфальтобетонні роботи',
    // group: '/gallery/asphalt',
  },
  {
    id: uuidv4(),
    url: certificate_lobas,
    title: 'Проєктування',
    // group: '/gallery/certificate',
  },
];
