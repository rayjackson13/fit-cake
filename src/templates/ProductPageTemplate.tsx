import { PageProps } from 'gatsby';
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
