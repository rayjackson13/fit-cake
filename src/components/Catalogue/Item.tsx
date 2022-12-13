import { Button } from 'components/Button';
import React from 'react';
import * as styles from './Catalogue.module.sass';

type Props = {
  title: string;
  category: string;
  price: number;
  image: string;
};

export const CatalogueItem = (): JSX.Element => (
  <div className={styles.item}>
    <img alt="" />
    <h3>“Клубника-Черника”</h3>
    <p>Кешью-кейк</p>
    <p className={styles.itemPrice}>2500 ₽</p>
    <Button outline fullWidth>
      Заказать
    </Button>
  </div>
);
