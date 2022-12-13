import { GatsbyNode } from 'gatsby';

const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/*`,
    toPath: `/`,
  });
};

exports.createPages = createPages;
