import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Header.vue'
import { describe, expect, it, vi, beforeEach } from 'vitest'

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })
})
