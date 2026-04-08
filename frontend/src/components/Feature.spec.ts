import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Component from './Feature.vue'

describe('Feature', () => {
  it('renders', async () => {
    const html = await (
      await renderSuspended(Component, {
        props: {
          img: 'test.jpg',
          headline: 'Test headline',
          text: 'Test text',
        },
      })
    ).html()
    expect(html).toMatchSnapshot()
  })
})
