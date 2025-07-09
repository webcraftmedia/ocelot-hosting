// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default withNuxt(
  // Your custom configs here
  ...vueI18n.configs.recommended,
  {
    rules: {
      // Optional.
      '@intlify/vue-i18n/no-dynamic-keys': 'error',
      '@intlify/vue-i18n/no-unused-keys': [
        'error',
        {
          extensions: ['.ts', '.vue']
        }
      ]
    },
    settings: {
      'vue-i18n': {
        localeDir: './locales/*.{json}', // extension is glob formatting!
        // Specify the version of `vue-i18n` you are using.
        // If not specified, the message will be parsed twice.
        messageSyntaxVersion: '^11.0.0'
      }
    }
  }
)
