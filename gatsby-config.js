/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Derek Lam | Frontend Developer Portfolio',
      description: "Derek Lam is a frontend developer who enjoys bringing concepts to life with responsive websites and web apps.",
      keywords: ['Frontend Developer', 'Portfolio']
  },
  plugins: [
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'projects',
              path: `${__dirname}/src/content/projects`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'work',
              path: `${__dirname}/src/content/work`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'media',
              path: `${__dirname}/src/media`
          }
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-sass',
      'gatsby-plugin-svgr',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
          options: {
              devMode: true
          }
      },
      {
          resolve: 'gatsby-plugin-postcss',
          options: {
              postCssPlugins: [require('autoprefixer')]
          }
      }
  ],
}
