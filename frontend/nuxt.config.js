export default {

  head: {
    title: 'Crowdfund',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  loading: {
    color: '#3CB3AB',
    height: '5px'
  },

  css: ['@/assets/scss/style.scss'],

  plugins: ['~plugins/micromodal.client.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    jit: true
  },

  axios: {
    proxy: true,
    retry: {
      retries: 5
    }
  },

  proxy: [
    // Proxies /graphql to http://localhost:1337/graphql
    'http://localhost:1337/graphql'
  ],

  googleFonts: {
    families: {
      Commissioner: [400, 500, 700]
    },
    display: 'swap'
  },

  publicRuntimeConfig: {
    proxy: [
      // Proxies /graphql to http://localhost:1337/graphql
      `${process.env.API_URL}/graphql`
    ]
  },

  build: {}
}
