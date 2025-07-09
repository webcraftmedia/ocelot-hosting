
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Page from './pricing.vue'
import { describe, expect, it } from 'vitest'

describe('Page: Pricing', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Page, { route: '/' })).html()
    expect(html).toMatchSnapshot()
  })
})