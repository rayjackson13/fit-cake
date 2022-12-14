import React from 'react';

import * as styles from './Header.module.sass';

import { Button } from 'components/Button';
import Logo from 'images/svg/logo.svg';
import Whatsapp from 'images/svg/whatsapp.svg';
import clsx from 'clsx';
import { Link } from 'gatsby';

type Props = {
  shadow?: boolean;
};

const link = encodeURI('https://wa.me/79026774977?text=Здравствуйте! Хочу оформить заказ');

export const Header = ({ shadow = false }: Props): JSX.Element => {
  const rootStyle = clsx(styles.header, shadow && styles.shadow);

  return (
    <header className={rootStyle}>
      <div className="container">
        <div className={styles.nav}>
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>
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
};
