const DOMAIN_EN = process.env.DOMAIN_EN ?? 'http://localhost:3000'
const DOMAIN_DE = process.env.DOMAIN_DE ?? 'http://localhost:3000'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-svgo',
  ],
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
  i18n: {
    restructureDir: './',
    defaultLocale: 'en',
    differentDomains: process.env.NODE_ENV === 'production',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', domain: DOMAIN_EN },
      { code: 'de', name: 'Deutsch', file: 'de.json', domain: DOMAIN_DE },
    ],
    detectBrowserLanguage: false,
    /* detectBrowserLanguage: {
      // This doesn't make a difference
      useCookie: false,
      alwaysRedirect: true,
    }, */
    strategy: 'no_prefix',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
})
