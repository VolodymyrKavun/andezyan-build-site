import { v4 as uuidv4 } from 'uuid';

export const navigationData = [
  {
    id: uuidv4(),
    title: 'Головна',
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'About Us',
    path: '/aboutUs',
  },
  {
    id: uuidv4(),
    title: 'Планування',
    path: '/design',
  },
  {
    id: uuidv4(),
    title: 'Галерея',
    path: '/gallery',
  },
  {
    id: uuidv4(),
    title: 'Відео',
    path: '/video',
  },
  {
    id: uuidv4(),
    title: 'Контакти',
    path: '/contacts',
  },
];
