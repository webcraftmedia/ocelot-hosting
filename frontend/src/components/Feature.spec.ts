import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './Feature.vue'
import { describe, expect, it } from 'vitest'

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
