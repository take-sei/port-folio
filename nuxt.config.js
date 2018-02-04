const { resolve } = require("path");
const portfolio = require("./portfolio.config.json");

module.exports = {
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My portfolio' },
      { name: "theme-color", content: "#efa4fc" }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' }
    ],
  },

  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  plugins: [
    '~plugins/element-ui',
    '~plugins/global-components',
    '~plugins/global-mixin',
  ],

  loading: { color: '#3B8070' },

  build: {
    vendor: [
      'element-ui',
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },


}
