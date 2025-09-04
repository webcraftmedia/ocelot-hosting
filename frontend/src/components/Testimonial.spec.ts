import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Testimonial.vue'
import { describe, expect, it } from 'vitest'

describe('Testimonial', () => {
  it('renders', async () => {
    const html = await (
      await renderSuspended(Component, {
        props: {
          quote: 'test-quote',
          image: 'test-image',
          name: 'test-name',
          position: 'test-postion',
        },
      })
    ).html()
    expect(html).toMatchSnapshot()
  })
})
