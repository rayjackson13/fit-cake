export type Product = {
  description: string;
  id: string;
  image: {
    publicURL: string;
  };
  keywords: string[];
  price: number;
  slug: string;
  title: string;
  type: string;
  html: string;
};

export type ProductFile = {
  name: string;
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
