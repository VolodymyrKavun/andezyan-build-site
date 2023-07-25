import Contacts from '@/components/screens/Contacts/Contacts';
import React from 'react';

export const metadata = {
  title: 'Контактна інформація будівельної компанії Андезян',
  description:
    'Проектування будівельних споруд, Проектування, Моделювання, Візуалізація та Розробка документації',
};

const ContactsPage = () => {
  return (
    <>
      <Contacts />
    </>
  );
};

export default ContactsPage;
