import { ImageDataLike } from 'gatsby-plugin-image';

export type Product = {
  description: string;
  id: string;
  image: Image;
  keywords: string[];
  price: number;
  slug: string;
  title: string;
  type: string;
  html: string;
};

export type ProductFile = {
  name: string;
  relativeDirectory: string;
  childMarkdownRemark: {
    frontmatter: Omit<Product, 'html'>;
    html: string;
    id: string;
  };
};

export type ProductQueryResult = {
  allFile: {
    nodes: ProductFile[];
  };
};

export type Image = ImageDataLike;
