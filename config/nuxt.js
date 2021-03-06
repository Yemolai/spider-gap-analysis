'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SPIDER Gap Analysis',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Programa de Pós-Graduação em Computação Aplicada - PPCA'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  router: {
    linkActiveClass: 'is-active'
  },
  /*
  ** Render
  */
  render: {
    ssr: false
  },
  /*
  ** Global CSS
  */
  css: [
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/axios',
    '~plugins/buefy',
    '~plugins/cleave',
    '~plugins/toast',
    '~plugins/mps'
  ]
}
