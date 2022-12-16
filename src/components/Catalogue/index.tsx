import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Product, ProductFile } from 'typed';

import * as styles from './Catalogue.module.sass';
import { CatalogueItem } from './Item';

type Props = {
  category: string;
  title: string;
  subtitle?: string;
  maxItems?: number;
  excludeId?: string;
};

const getProductsFromQuery = (nodes: ProductFile[]): Product[] => {
  return nodes.map(({ name, relativeDirectory, childMarkdownRemark }) => {
    const { frontmatter, html, id } = childMarkdownRemark;
    return {
      ...frontmatter,
      slug: `/products/${relativeDirectory}/${name}`,
      html,
      id,
    };
  });
};

const filterProducts = (nodes: Product[], category: string): Product[] =>
  nodes.filter(({ keywords }) => keywords.includes(category));

const sortProducts = (nodes: Product[]): Product[] => {
  return nodes.sort((a, b): number => {
    // If item has the keyword, it will be higher in the list.
    if (a.keywords.includes('popular') && !b.keywords.includes('popular')) {
      return -1;
    }
    if (!a.keywords.includes('popular') && b.keywords.includes('popular')) {
      return 1;
    }

    // Otherwise sort by price.
    return a.price - b.price;
  });
};

export const Catalogue = ({ category, excludeId, title, subtitle, maxItems }: Props) => {
  const { data } = useStaticQuery(graphql`
    query CatalogueData {
      data: allFile(
        filter: { sourceInstanceName: { eq: "products" }, extension: { eq: "md" } }
        sort: { childMarkdownRemark: { frontmatter: { title: ASC } } }
      ) {
        nodes {
          relativeDirectory
          name
          childMarkdownRemark {
            frontmatter {
              title
              type
              description
              price
              keywords
              image {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 580)
                }
              }
            }
            id
            html
          }
        }
      }
    }
  `);

  const products = getProductsFromQuery(data.nodes);
  // In case currently viewed product is in the suggestions, remove it.
  const excluded = products.filter((item) => item.id !== excludeId);
  // Filter products by category.
  const filtered = filterProducts(excluded, category);
  // Limit the amount of items displayed.
  const sorted = sortProducts(filtered);
  const items = sorted.slice(0, maxItems);

  if (!items.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>{title}</h2>
          {!!subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <CatalogueItem
              description={item.description}
              image={item.image}
              key={idx}
              price={item.price}
              slug={item.slug}
              title={item.title}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
