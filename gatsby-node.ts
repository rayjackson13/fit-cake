import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Product, ProductQueryResult } from 'typed';

const productPageTemplate = path.resolve(__dirname, './src/templates/ProductPageTemplate.tsx');

const graphqlQuery = `
{
  allFile (
    filter: { sourceInstanceName: { eq: "products" }, extension: { eq: "md" } }
    sort: { childMarkdownRemark: { frontmatter: { title: ASC } } }
  ) {
    nodes {
      name
      childMarkdownRemark {
        frontmatter {
          title
          type
          description
          price
          keywords
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
        html
        id
      }
    }
  }
}
`;

const createPages: GatsbyNode['createPages'] = async ({ reporter, graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<ProductQueryResult>(graphqlQuery);

  if (result.errors || !result.data) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const { nodes } = result.data.allFile;
  nodes.forEach(({ name, childMarkdownRemark }) => {
    const { frontmatter, html, id } = childMarkdownRemark;
    const product: Product = {
      ...frontmatter,
      html,
      id,
      slug: `/products/${name}`,
    };

    createPage({
      path: product.slug,
      component: productPageTemplate,
      context: {
        product,
      },
    });
  });
};

exports.createPages = createPages;
