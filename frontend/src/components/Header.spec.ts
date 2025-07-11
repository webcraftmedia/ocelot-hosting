
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Header.vue'
import { describe, expect, it } from 'vitest'

describe('Header', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })
})