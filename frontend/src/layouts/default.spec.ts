
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Layout from './default.vue'
import { describe, expect, it } from 'vitest'

describe('Layout: Default', () => {
  it('renders', async () => {
    const html = await renderSuspended(Layout, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})