import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { expect } from 'vitest'

mockNuxtImport('useI18n', () => () => {
  return {
    ...useNuxtApp().$i18n,
    locale: 'en',
  }
})

expect.addSnapshotSerializer({
  test: (val) => typeof val === 'string' && val.includes('/@fs'),
  print: (val) => '"' + (val as string).replaceAll(/\/@fs(.*)\/frontend\//g, '') + '"',
})
