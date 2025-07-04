
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Page from './pricing.vue'
import { describe, expect, it } from 'vitest'

describe('Page: Pricing', () => {
  it('renders', async () => {
    const html = await renderSuspended(Page, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})