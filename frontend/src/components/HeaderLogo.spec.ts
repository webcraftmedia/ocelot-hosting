
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Component from './HeaderLogo.vue'
import { describe, expect, it } from 'vitest'

describe('Headerlogo', () => {
  it('renders', async () => {
    const html = await renderSuspended(Component, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})