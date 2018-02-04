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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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

  plugins: [
    '~plugins/element-ui',
    '~plugins/global-components',
    '~plugins/global-mixin',
  ],

  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
}
