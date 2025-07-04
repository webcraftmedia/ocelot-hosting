
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from './app.vue'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders default page', async () => {
    const html = await renderSuspended(App, { route: '/' })
    expect(html).toMatchSnapshot()
  })
})