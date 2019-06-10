const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool　〜' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"}  
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f00', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://pages-views-06-finished.firebaseio.com'
  },
  // router: {
  //   linkActiveClass: 'active'
  // }
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
