module.exports = {
  siteMetadata: {
    title: 'Tachyons gatsyby starter',
    author: 'Der Dooley',
    description: 'starter gatsby using tachyosn CSS system',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tachyons-gatsyby-starter',
        short_name: 'TachyonsGatsbyStarter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
