import { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { Catalogue } from 'components/Catalogue';
import { Header } from 'components/Header';
import { Product } from 'typed';
import { Preview } from 'components/Preview';

const ProductPageTemplate = ({ pageContext }: PageProps) => {
  const { product } = pageContext as { product: Product };

  return (
    <main>
      <Header shadow />
      <div>
        <Preview product={product} />
        <Catalogue category="popular" title="Вам понравится:" maxItems={4} excludeId={product.id} />
      </div>
    </main>
  );
};

export default ProductPageTemplate;

export const Head: HeadFC = ({ pageContext, ...props }) => {
  const { product } = pageContext as { product: Product };
  const pageTitle = `${product.type} “${product.title}” | Fit Cake`;
  const { publicURL } = (product.image || {}) as { publicURL: '' };
  const imageURL = `${process.env.GATSBY_PUBLIC_URL}${publicURL}`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={product.description} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={product.description} />
      <meta name="og:image" content={imageURL} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${process.env.GATSBY_PUBLIC_URL}/`} />
    </>
  );
};
