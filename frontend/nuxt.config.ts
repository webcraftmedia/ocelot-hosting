const isProd = process.env.NODE_ENV === 'production'
const DOMAIN_EN = process.env.DOMAIN_EN
const DOMAIN_DE = process.env.DOMAIN_DE

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: './src',
  features: {
    inlineStyles: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: [
    ['@nuxt/eslint', { config: { typescript: { tsconfigPath: 'tsconfig.json' } } }],
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxt/fonts',
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeHiddenElems: false,
              removeUselessStrokeAndFill: false,
              inlineStyles: false,
            },
          },
        },
      ],
    },
  },
  css: ['~/../assets/css/main.css'],
  tailwindcss: {
    cssPath: false,
  },
  i18n: {
    restructureDir: './',
    defaultLocale: 'en',
    differentDomains: isProd,
    locales: isProd
      ? [
          { code: 'en', name: 'English', file: 'en.json', domain: DOMAIN_EN },
          { code: 'de', name: 'Deutsch', file: 'de.json', domain: DOMAIN_DE },
        ]
      : [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'de', name: 'Deutsch', file: 'de.json' },
        ],
    detectBrowserLanguage: false,
    /* detectBrowserLanguage: {
      // This doesn't make a difference
      useCookie: false,
      alwaysRedirect: true,
    }, */
    strategy: 'no_prefix',
  },
})
