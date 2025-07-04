
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Page from './try.vue'
import { describe, expect, it } from 'vitest'

describe('Page: Try', () => {
  it('renders', async () => {
    const html = await renderSuspended(Page, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})