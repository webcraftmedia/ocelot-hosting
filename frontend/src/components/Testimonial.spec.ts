import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Component from './Testimonial.vue'

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
