import type { HeadFC, PageProps } from 'gatsby';
import React, { useRef } from 'react';

import { Catalogue } from 'components/Catalogue';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';

import ProfileImage from 'images/profile.jpg';

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
      <Header isHomePage />
      <Hero {...{ scrollToCatalogue }} />
      <div ref={catalogueRef}>
        <Catalogue category="popular" title="Популярные десерты" />
        <Catalogue category="cashew cake" title="Кешью-кейки" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ pageContext, ...props }) => {
  const pageTitle = 'Главная | Fit Cake';
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content="ПП и веган десерты на заказ в Казани" />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content="ПП и веган десерты на заказ в Казани" />
      <meta name="og:image" content={ProfileImage} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${process.env.GATSBY_PUBLIC_URL}/`} />
    </>
  );
};
