export default {

  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  css: ['@/assets/scss/style.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  tailwindcss: {
    jit: true
  },

  googleFonts: {
    families: {
      Commissioner: [400, 500, 700]
    },
    display: 'swap'
  },

  build: {}
}
