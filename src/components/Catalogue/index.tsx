import React from 'react';
import * as styles from './Catalogue.module.sass';
import { CatalogueItem } from './Item';

export const Catalogue = (): JSX.Element => (
  <section className={styles.section}>
    <div className="container">
      <h2 className={styles.title}>Популярные десерты</h2>
      <div className={styles.grid}>
        <CatalogueItem />
        <CatalogueItem />
        <CatalogueItem />
        <CatalogueItem />
        <CatalogueItem />
      </div>
    </div>
  </section>
);
