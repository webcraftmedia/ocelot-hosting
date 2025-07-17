
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Section.vue'
import { describe, expect, it } from 'vitest'

describe('Section', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })
})