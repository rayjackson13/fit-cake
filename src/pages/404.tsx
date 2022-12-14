import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

import { Header } from 'components/Header';
import { Button } from 'components/Button';

const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  textAlign: 'center',
};

const NotFoundPage: React.FC<PageProps> = () => (
  <main>
    <Header />

    <div className="page404-block">
      <div className="container">
        <h2 style={headingStyles}>Страница не найдена</h2>
        <Button href="/">На главную</Button>
      </div>
    </div>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Страница не найдена | Fit Cake</title>;
