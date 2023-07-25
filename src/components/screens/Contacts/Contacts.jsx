"use client";
import React from 'react';
import Map from '@/components/share/GoogleMap/Map.jsx';

import styles from './Contacts.module.css';
import { contactsData } from '@/data/contacts.data';
import { socialMaxData } from '@/data/socialMax.data';
import { createArrOfNeededObjProperties } from '@/utils/createArrOfNeededObjProperties';


const Contacts = () => {
  const neededPhoneProperties = ["telFirst", "telSecond", "telThird", "telFourth"];

  const phonesArr = createArrOfNeededObjProperties(contactsData, neededPhoneProperties);

  const neededAdressesProperties = ["physicalAddress", "registrationAddress"];
  const adressesArr = createArrOfNeededObjProperties(contactsData, neededAdressesProperties);

  const physAddress = adressesArr[0].address.split(':')[0];
  const registrAddress = adressesArr[1].address.split(':')[0];

  const neededSocLinksProperties = ["viber", "telegram"];
  const socLinksArr = createArrOfNeededObjProperties(socialMaxData, neededSocLinksProperties);


  return <section className={styles.container}>
    <div className={styles.mapWrapper} >
      <Map />
    </div>
    <div className={styles.dataWrapper}>
      <div className={styles.phoneNumbersWrapper}>
        {phonesArr.map((item, index) => (
          <a key={index} href={`tel:${item.number}`} className={styles.phoneContact}>
            <svg className={styles.phoneSvg}>
              <use href="/sprite.svg#icon_phone" className={styles.phoneIcon}></use>
            </svg>
            <p className={styles.phoneNumber}>{item.number}</p>
            <p className={styles.phoneOwner}>{item.owner}</p>
          </a>
        ))
        }
      </div>

      <div className={styles.emailsWrapper}>
        {contactsData.emails.map((item, index) => (
          <a key={index} href={`mailto:${item}`} className={styles.emailContact}>
            <svg className={styles.emailSvg}>
              <use href="/sprite.svg#icon_envelope" className={styles.emailIcon}></use>
            </svg>
            <p className={styles.email}>{item}</p>
          </a>
        ))}
      </div>

      <div className={styles.addressesWrapper}>
        <a href={adressesArr[0].googleLink} target="_blank" rel="noopener noreferrer nofollow" className={styles.addressContact}>
          <svg className={styles.addressSvg}>
            <use href="/sprite.svg#icon_navigation" className={styles.addressIcon}></use>
          </svg>
          <p className={styles.address}>{physAddress}</p>
        </a>
        <a href={adressesArr[1].googleLink} target="_blank" rel="noopener noreferrer nofollow" className={styles.addressContact}>
          <svg className={styles.addressSvg}>
            <use href="/sprite.svg#icon_navigation" className={styles.addressIcon}></use>
          </svg>
          <p className={styles.address}>{registrAddress}</p>
        </a>
      </div>

      <div className={styles.socLinksWrapper}>
        {socLinksArr.map((item, index) => (
          <a key={index} href={`${item.path}`} className={styles.socContact}>
            <svg className={`${styles.socSvg} ${styles[item.name]}`}>
              <use href={item.icon} className={`${styles.socIcon} ${styles[item.name]}`}></use>
            </svg>
          </a>
        ))}

      </div>
    </div>
  </section >
};


export default Contacts;