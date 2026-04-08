import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Component from './Button.vue'

describe('Button', () => {
  describe('renders', async () => {
    it('primary', async () => {
      const html = await (
        await renderSuspended(Component, { props: { text: 'Primary Button' } })
      ).html()
      expect(html).toMatchSnapshot()
    })

    it('secondary', async () => {
      const html = await (
        await renderSuspended(Component, { props: { type: 'secondary', text: 'Secondary Button' } })
      ).html()
      expect(html).toMatchSnapshot()
    })
  })
})
