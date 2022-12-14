import React from 'react';

import * as styles from './Catalogue.module.sass';

import { Button } from 'components/Button';
import { Link } from 'gatsby';
import { formatPrice } from 'helpers/formatPrice';

type Props = {
  description: string;
  image: string;
  price: number;
  slug: string;
  title: string;
  type: string;
};

export const CatalogueItem = ({
  title,
  slug,
  type,
  description,
  price,
  image,
}: Props): JSX.Element | null => {
  if (!slug) {
    return null;
  }

  return (
    <Link className={styles.item} to={slug}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
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
