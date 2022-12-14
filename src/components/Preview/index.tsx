import { Button } from 'components/Button';
import { formatPrice } from 'helpers/formatPrice';
import React from 'react';
import { Product } from 'typed';
import * as styles from './Preview.module.sass';

type Props = {
  product: Product;
};

export const Preview = ({ product }: Props): JSX.Element => {
  const { title, type, image, html, price } = product;
  const text = `Здравствуйте! Хочу заказать ${type.toLowerCase()} “${title}”`;
  const link = encodeURI(`https://wa.me/79026774977?text=${text}`);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* <img className={styles.image} src={image.publicURL} alt="" /> */}
          <div className={styles.image} style={{ backgroundImage: `url(${image.publicURL})` }} />

          <div className={styles.content}>
            <h1 className={styles.title}>“{title}”</h1>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>{formatPrice(price)}</p>
            <div className={styles.info} dangerouslySetInnerHTML={{ __html: html }} />
            <Button href={link} customStyles={styles.order}>
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
