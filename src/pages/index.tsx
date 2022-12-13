import type { HeadFC, PageProps } from 'gatsby';
import React, { useRef } from 'react';

import { Catalogue } from 'components/Catalogue';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';

const IndexPage: React.FC<PageProps> = () => {
  const catalogueRef = useRef<HTMLDivElement>(null);

  const scrollToCatalogue = (): void => {
    const catalogue = catalogueRef.current;
    if (!catalogue) return;

    catalogue.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main>
      <Header />
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
