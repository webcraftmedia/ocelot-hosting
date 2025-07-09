import { mockNuxtImport } from '@nuxt/test-utils/runtime';

mockNuxtImport('useI18n', () => () => { return {
    ...useNuxtApp().$i18n,
    locale: 'en',
}});