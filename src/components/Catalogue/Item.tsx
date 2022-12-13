import React from 'react';

import * as styles from './Catalogue.module.sass';

import { Button } from 'components/Button';

type Props = {
  description: string;
  image: string;
  price: number;
  title: string;
  type: string;
};

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
});

export const CatalogueItem = ({ title, type, description, price, image }: Props): JSX.Element => {
  const text = `Здравствуйте! Хочу заказать ${type.toLowerCase()} “${title}”`;
  const link = encodeURI(`https://wa.me/79026774977?text=${text}`);

  return (
    <div className={styles.item}>
      <img alt="" src={image} />
      <div className={styles.itemBody}>
        <h3>“{title}”</h3>
        <p className={styles.itemDesc}>{description}</p>
        <p className={styles.itemPrice}>{formatter.format(price)}</p>
      </div>
      <Button customStyles={styles.order} fullWidth href={link}>
        Заказать
      </Button>
    </div>
  );
};
