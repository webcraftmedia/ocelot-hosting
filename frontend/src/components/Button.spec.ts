import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Button.vue'
import { describe, expect, it } from 'vitest'

describe('Button', () => {
  describe('renders', async () => {
    it('primary', async () => {
      const html = await (
        await renderSuspended(Component, { props: { text: 'Primary Button' } })
      ).html()
      expect(html).toMatchSnapshot()
    })
    it('primary', async () => {
      const html = await (
        await renderSuspended(Component, { props: { type: 'secondary', text: 'Secondary Button' } })
      ).html()
      expect(html).toMatchSnapshot()
    })
  })
})
