import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Page from './index.vue'

describe('Page: Index', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Page, { route: '/' })).html()
    expect(html).toMatchSnapshot()
  })
})
