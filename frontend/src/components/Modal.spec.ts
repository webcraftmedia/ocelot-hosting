import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Modal.vue'
import { describe, expect, it } from 'vitest'

describe('Modal', () => {
  describe('renders', () => {
    it('closed', async () => {
      const html = await (await renderSuspended(Component, { props: { open: false } })).html()
      expect(html).toMatchSnapshot()
    })

    it('open', async () => {
      const html = await (
        await renderSuspended(Component, {
          props: { open: true },
          slots: { default: () => '<img src="/test.jpg" alt="Test" />' },
        })
      ).html()
      expect(html).toMatchSnapshot()
    })
  })
})
