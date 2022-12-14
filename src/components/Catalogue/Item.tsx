import React from 'react';

import * as styles from './Catalogue.module.sass';

import { Button } from 'components/Button';
import { Link } from 'gatsby';
import { formatPrice } from 'helpers/formatPrice';
import { Image } from 'typed';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type Props = {
  description: string;
  image: Image;
  price: number;
  slug: string;
  title: string;
  type: string;
};

export const CatalogueItem = ({
  title,
  type,
  slug,
  description,
  price,
  image,
}: Props): JSX.Element | null => {
  if (!slug) {
    return null;
  }
  const picture = getImage(image);
  return (
    <Link className={styles.item} to={slug}>
      {picture && (
        <GatsbyImage image={picture} className={styles.image} alt={`${type} “${title}”`} />
      )}
      <div className={styles.itemBody}>
        <h3>“{title}”</h3>
        <p className={styles.itemDesc}>{description}</p>
        <p className={styles.itemPrice}>{formatPrice(price)}</p>
      </div>
      <Button customStyles={styles.order} fullWidth>
        Заказать
      </Button>
    </Link>
  );
};
