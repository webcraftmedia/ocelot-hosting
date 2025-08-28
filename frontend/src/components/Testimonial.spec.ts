
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Testimonial.vue'
import { describe, expect, it } from 'vitest'

describe('Testimonial', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })
})