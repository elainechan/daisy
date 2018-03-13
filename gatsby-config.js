module.exports = {
  siteMetadata: {
    title: 'Daisy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src'
      }
    },
    `gatsby-transformer-remark`
  ],
};
