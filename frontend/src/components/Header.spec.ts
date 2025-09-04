
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { mount } from '@vue/test-utils'
import Component from './Header.vue'
import { describe, expect, it, vi, beforeEach } from 'vitest'

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })

  it('executes development mode language switch logic', async () => {
    // Set development environment
    vi.stubEnv('NODE_ENV', 'development')
    
    const wrapper = mount(Component, {
      global: {
        mocks: {
          $t: (key: string) => key
        },
        stubs: {
          NuxtLink: { template: '<a><slot /></a>' },
          Button: { template: '<button><slot /></button>' }
        }
      }
    })

    // Find language switch links
    const languageLinks = wrapper.findAll('a').filter(link => 
      link.text().includes('English') || link.text().includes('Deutsch')
    )
    
    // Find and click the German language link
    const germanLink = languageLinks.find(link => link.text().includes('Deutsch'))
    expect(germanLink).toBeDefined()
    
    if (germanLink) {
      await germanLink.trigger('click')
    }
  })

  it.skip('contains language switching elements', async () => {
    const html = await (await renderSuspended(Component)).html()
    
    // Verify that both language options are present in the DOM
    expect(html).toContain('English')
    expect(html).toContain('Deutsch')
    
    // Verify that flag SVGs are present
    expect(html).toContain('viewBox="0 0 3900 3900"') // US flag
    expect(html).toContain('viewBox="0 0 512 512"')   // German flag
  })
})