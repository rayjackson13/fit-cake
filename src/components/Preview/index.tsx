import { Button } from 'components/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { formatPrice } from 'helpers/formatPrice';
import React from 'react';
import { Product } from 'typed';
import * as styles from './Preview.module.sass';

type Props = {
  product: Product;
};

export const Preview = ({ product }: Props): JSX.Element => {
  const { description, title, type, image, html, price } = product;
  const text = `Здравствуйте! Хочу заказать ${type.toLowerCase()} “${title}”`;
  const link = encodeURI(`https://wa.me/79026774977?text=${text}`);
  const picture = getImage(image);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* <img className={styles.image} src={image.publicURL} alt="" /> */}
          {picture && (
            <GatsbyImage image={picture} className={styles.image} alt={`${type} “${title}”`} />
          )}

          <div className={styles.content}>
            <h1 className={styles.title}>“{title}”</h1>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>{formatPrice(price)}</p>
            <Button href={link} customStyles={styles.order}>
              Заказать
            </Button>
            {!!description && <p className={styles.description}>{description}</p>}
            <div className={styles.info} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </section>
  );
};
