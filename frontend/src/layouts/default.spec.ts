import { renderSuspended } from '@nuxt/test-utils/runtime'
import Layout from './default.vue'
import { describe, expect, it } from 'vitest'

describe('Layout: Default', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Layout, { route: '/' })).html()
    expect(html).toMatchSnapshot()
  })
})
