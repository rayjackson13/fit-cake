import React from 'react';
import LogoImage from 'images/logo.svg';
import CakeImage from 'images/cake.jpg';
import { Button } from 'components/Button';
import * as styles from './Hero.module.sass';

const link = encodeURI('https://wa.me/79026774977?text=Здравствуйте! Хочу оформить заказ');

export const Hero = (): JSX.Element => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.nav}>
        <img className={styles.logo} src={LogoImage} alt="Fit Cake Logo" />
        <Button href={link}>
          <span className={styles.xsHidden}>Написать в </span>WhatsApp
        </Button>
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
