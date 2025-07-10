const languageDomains = {
  en: process.env.DOMAIN_EN,
  de: process.env.DOMAIN_DE,
}


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
    locales: [
      { code: 'en', name: 'English', file: 'en.json', domain: languageDomains.en, domainDefault: true },
      { code: 'de', name: 'Deutsch', file: 'de.json', domain: languageDomains.de, domainDefault: true }
    ]
  }
})

console.log(process.env.NODE_ENV)