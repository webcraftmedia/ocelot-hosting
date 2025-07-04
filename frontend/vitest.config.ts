import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        "100": true,
      },
      reportsDirectory: '../coverage',
    },
  },
})
