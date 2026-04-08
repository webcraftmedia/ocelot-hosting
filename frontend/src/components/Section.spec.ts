import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Component from './Section.vue'

describe('Section', () => {
  it('renders', async () => {
    const html = await (await renderSuspended(Component, { props: { id: 'test-section' } })).html()
    expect(html).toMatchSnapshot()
  })
})
