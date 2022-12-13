import { Button } from 'components/Button';
import React from 'react';
import * as styles from './Catalogue.module.sass';

type Props = {
  title: string;
  type: string;
  description: string;
  price: number;
  image: string;
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
      <img src={image} alt="" />
      <div className={styles.itemBody}>
        <h3>“{title}”</h3>
        <p className={styles.itemDesc}>{description}</p>
        <p className={styles.itemPrice}>{formatter.format(price)}</p>
      </div>
      <Button href={link} fullWidth customStyles={styles.order}>
        Заказать
      </Button>
    </div>
  );
};
