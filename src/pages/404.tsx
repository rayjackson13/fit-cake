import { Link, HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

import { Header } from 'components/Header';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage: React.FC<PageProps> = () => (
  <main>
    <Header />

    <h2 style={headingStyles}>Страница не найдена</h2>
    <p style={paragraphStyles}>
      Страница не найдена
      <br />
      <Link to="/">На главную</Link>.
    </p>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
