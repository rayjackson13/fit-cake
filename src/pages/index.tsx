import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from 'components/Hero';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fit Cake | Главная</title>;
