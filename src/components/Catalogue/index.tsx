import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as styles from './Catalogue.module.sass';
import { CatalogueItem } from './Item';

type Props = {
  category: string;
  title: string;
};

type Product = {
  description: string;
  id: string;
  image: {
    publicURL: string;
  };
  keywords: string[];
  price: number;
  title: string;
  type: string;
};

const filterItems = (nodes: Product[], category: string): Product[] =>
  nodes.filter((item) => item.keywords.includes(category));

export const Catalogue = ({ category, title }: Props): JSX.Element => {
  const { data } = useStaticQuery(graphql`
    query CatalogueData {
      data: allProductsYaml {
        nodes {
          id
          title
          type
          description
          price
          keywords
          image {
            publicURL
          }
        }
      }
    }
  `);

  const items = filterItems(data.nodes, category);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item: Product, idx) => (
            <CatalogueItem
              description={item.description}
              image={item.image.publicURL}
              key={idx}
              price={item.price}
              title={item.title}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
