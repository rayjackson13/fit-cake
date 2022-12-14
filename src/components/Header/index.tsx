import React from 'react';

import * as styles from './Header.module.sass';

import { Button } from 'components/Button';
import Logo from 'images/svg/logo.svg';
import Chevron from 'images/svg/chevron.svg';
import Whatsapp from 'images/svg/whatsapp.svg';
import clsx from 'clsx';
import { navigate } from 'gatsby';

type Props = {
  shadow?: boolean;
  isHomePage?: boolean;
};

const link = encodeURI('https://wa.me/79026774977?text=Здравствуйте! Хочу оформить заказ');

export const Header = ({ isHomePage = false, shadow = false }: Props): JSX.Element => {
  const rootStyle = clsx(styles.header, shadow && styles.shadow);

  const onBackPressed = () => {
    if (isHomePage) return;

    navigate('/');
  };

  return (
    <header className={rootStyle}>
      <div className="container">
        <div className={styles.nav}>
          <button disabled={isHomePage} onClick={onBackPressed} className={styles.logoLink}>
            {!isHomePage && <Chevron className={styles.chevron} />}
            <Logo className={styles.logo} />
          </button>

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
