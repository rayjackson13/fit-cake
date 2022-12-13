import React, { useRef } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from 'components/Hero';
import { Catalogue } from 'components/Catalogue';

const IndexPage: React.FC<PageProps> = () => {
  const catalogueRef = useRef<HTMLDivElement>(null);

  const scrollToCatalogue = () => {
    const catalogue = catalogueRef.current;
    if (!catalogue) return;

    catalogue.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main>
      <Hero {...{ scrollToCatalogue }} />
      <div ref={catalogueRef}>
        <Catalogue category="popular" title="Популярные десерты" />
        <Catalogue category="cashew cake" title="Кешью-кейки" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fit Cake | Главная</title>;
