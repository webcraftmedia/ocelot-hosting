
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Header.vue'
import { describe, expect, it } from 'vitest'

describe('Header', () => {
  it('renders', async () => {
    const html = await renderSuspended(Component, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})