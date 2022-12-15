import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Fit Cake',
    siteUrl: 'https://fitcake.vercel.app',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            weights: ['400', '500'],
          },
          {
            family: 'Tenor Sans',
            weights: ['400'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fit Cake',
        short_name: 'Fit Cake',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f1f5e2',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data/products',
        name: 'products',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images\/svg/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ru',
      },
    },
  ],
};

export default config;
