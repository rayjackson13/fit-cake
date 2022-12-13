import { Button } from 'components/Button';
import React from 'react';
import * as styles from './Catalogue.module.sass';

type Props = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export const CatalogueItem = ({ title, description, price, image }: Props): JSX.Element => (
  <div className={styles.item}>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className={styles.itemPrice}>{price} ₽</p>
    <Button outline fullWidth>
      Заказать
    </Button>
  </div>
);
