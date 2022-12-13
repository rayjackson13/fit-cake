import React from 'react';

import * as styles from './Header.module.sass';

import { Button } from 'components/Button';
import Logo from 'images/svg/logo.svg';
import Whatsapp from 'images/svg/whatsapp.svg';

const link = encodeURI(
  'https://wa.me/79026774977?text=Здравствуйте! Хочу оформить заказ'
);

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.nav}>
        <Logo className={styles.logo} />
        <Button customStyles="mobile-hidden" href={link}>
          Написать в WhatsApp
        </Button>
        <a
          className={`desktop-hidden ${styles.whatsapp}`}
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          <Whatsapp />
        </a>
      </div>
    </div>
  </header>
);
