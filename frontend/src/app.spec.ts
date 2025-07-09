
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from './app.vue'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders default page', async () => {
    const html = await (await renderSuspended(App, { route: '/' })).html()
    expect(html).toMatchSnapshot()
  })
})