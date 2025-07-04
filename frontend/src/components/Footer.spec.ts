
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Footer.vue'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders', async () => {
    const html = await renderSuspended(Component, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})