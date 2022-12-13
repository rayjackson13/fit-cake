import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from 'components/Hero';
import { Catalogue } from 'components/Catalogue';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <div>
        <Catalogue category="popular" title="Популярные десерты" />
        <Catalogue category="cashew cake" title="Кешью-кейки" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fit Cake | Главная</title>;
