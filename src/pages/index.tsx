import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from 'components/Hero';
import { Catalogue } from 'components/Catalogue';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <Catalogue />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fit Cake | Главная</title>;
