const DOMAIN_EN = process.env.DOMAIN_EN ?? 'https://localhost:3000'
const DOMAIN_DE = process.env.DOMAIN_DE ?? 'https://localhost:3000'

const languageDomains = [
  DOMAIN_EN,
  DOMAIN_DE,
]


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
  ],
  i18n: {
    restructureDir: './',
    defaultLocale: 'en',
    differentDomains: process.env.NODE_ENV === 'production',
    multiDomainLocales: process.env.NODE_ENV === 'production',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', domains: languageDomains, defaultForDomains: [DOMAIN_EN] },
      { code: 'de', name: 'Deutsch', file: 'de.json', domains: languageDomains, defaultForDomains: [DOMAIN_DE] }
    ],
    detectBrowserLanguage: {
      // This doesn't make a difference
      useCookie: false,
      alwaysRedirect: true
    },
    strategy: 'no_prefix',
  }
})
