import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import * as styles from './Catalogue.module.sass';
import { CatalogueItem } from './Item';

type Props = {
  category: string;
  title: string;
};

type Product = {
  title: string;
  description: string;
  price: number;
  keywords: string[];
  image: {
    publicURL: string;
  };
};

const filterItems = (nodes: Product[], category: string): Product[] => {
  return nodes.filter((item) => item.keywords.includes(category));
};

export const Catalogue = ({ category, title }: Props): JSX.Element => {
  const { data } = useStaticQuery(graphql`
    query CatalogueData {
      data: allProductsYaml {
        nodes {
          title
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
          {items.map((item: Product) => (
            <CatalogueItem
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image.publicURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
