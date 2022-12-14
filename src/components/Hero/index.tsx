import React from 'react';

import * as styles from './Hero.module.sass';

import { Button } from 'components/Button';
import { StaticImage } from 'gatsby-plugin-image';

type Props = {
  scrollToCatalogue: () => void;
};

export const Hero = ({ scrollToCatalogue }: Props): JSX.Element => (
  <div className={styles.root}>
    <div className="container">
      <div className={styles.body}>
        <div className={styles.content}>
          <h1>
            ПП и веган
            <br />
            торты и десерты
          </h1>
          <p>на заказ в Казани</p>
          <Button onClick={scrollToCatalogue}>Посмотреть каталог</Button>
        </div>

        <StaticImage
          src="../../images/cake.jpg"
          alt="Fit Cake"
          className={styles.image}
          width={517}
          height={514}
          placeholder="none"
          loading="eager"
        />
      </div>
    </div>
  </div>
);
