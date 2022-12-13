import React from 'react';
import Logo from 'images/svg/logo.svg';
import CakeImage from 'images/cake.jpg';
import Whatsapp from 'images/svg/whatsapp.svg';
import { Button } from 'components/Button';
import * as styles from './Hero.module.sass';

const link = encodeURI('https://wa.me/79026774977?text=Здравствуйте! Хочу оформить заказ');

export const Hero = (): JSX.Element => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.nav}>
        <Logo className={styles.logo} />
        <Button href={link} customStyles="mobile-hidden">
          Написать в WhatsApp
        </Button>
        <a
          href={link}
          target="_blank"
          className={`desktop-hidden ${styles.whatsapp}`}
          rel="noreferrer"
        >
          <Whatsapp />
        </a>
      </div>

      <div className={styles.body}>
        <div className={styles.content}>
          <h1>
            ПП и веган
            <br />
            торты и десерты
          </h1>
          <p>на заказ в Казани</p>
          <Button>Посмотреть каталог</Button>
        </div>

        <img className={styles.image} src={CakeImage} alt="" />
      </div>
    </div>
  </header>
);
