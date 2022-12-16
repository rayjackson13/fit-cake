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
        {/* <Catalogue
          category="popular"
          title="Популярные десерты"
          subtitle="Ира лалка хахахахахахахахахаххаха лалка да ахах Ира лалка хахахахахахахахахаххаха лалка да ахах"
        /> */}
        <Catalogue category="sponge cake" title="Бисквитные торты от 1кг" />
        <Catalogue
          category="bento cake"
          title="Бенто торты"
          subtitle="Маленький тортик-открытка весом 450г на 2-3 человек, состоит из двух слоев бисквита, начинки и крема, надпись и несложный рисунок входят в стоимость"
        />
        <Catalogue category="sweet roll" title="Рулеты" />
        <Catalogue category="mini dessert" title="Мини-десерты" />
        <Catalogue category="trifle" title="Трайфлы" />
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
