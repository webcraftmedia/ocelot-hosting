import { renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent } from '@testing-library/vue'
import Component from './Header.vue'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders', async () => {
    const html = await (await renderSuspended(Component)).html()
    expect(html).toMatchSnapshot()
  })

  describe('scroll behavior', () => {
    it('hides header when scrolling down', async () => {
      const wrapper = await renderSuspended(Component)
      const nav = wrapper.container.querySelector('nav')

      // Scroll down
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      await fireEvent.scroll(window)

      expect(nav?.className).toContain('-translate-y-full')
    })

    it('shows header when scrolling up', async () => {
      const wrapper = await renderSuspended(Component)
      const nav = wrapper.container.querySelector('nav')

      // Scroll down first
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      await fireEvent.scroll(window)

      // Then scroll up
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      await fireEvent.scroll(window)

      expect(nav?.className).not.toContain('-translate-y-full')
    })

    it('shows header when near top of page', async () => {
      const wrapper = await renderSuspended(Component)
      const nav = wrapper.container.querySelector('nav')

      // Scroll to near top
      Object.defineProperty(window, 'scrollY', { value: 30, writable: true })
      await fireEvent.scroll(window)

      expect(nav?.className).not.toContain('-translate-y-full')
    })
  })

  describe('mobile menu', () => {
    it('toggles menu when button is clicked', async () => {
      const wrapper = await renderSuspended(Component)
      const button = wrapper.container.querySelector('button')
      const menu = wrapper.container.querySelector('#navbar-default')

      expect(menu?.className).toContain('hidden')

      await fireEvent.click(button!)

      expect(menu?.className).not.toContain('hidden')
    })

    it('keeps header visible when menu is open', async () => {
      const wrapper = await renderSuspended(Component)
      const button = wrapper.container.querySelector('button')
      const nav = wrapper.container.querySelector('nav')

      // Open menu
      await fireEvent.click(button!)

      // Scroll down
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      await fireEvent.scroll(window)

      expect(nav?.className).not.toContain('-translate-y-full')
    })
  })

  describe('language switch', () => {
    it('renders language switch links', async () => {
      const wrapper = await renderSuspended(Component)
      const langLink = wrapper.container.querySelector('a.cursor-pointer')
      expect(langLink).not.toBeNull()
    })
  })

  describe('active section detection', () => {
    it('sets active section when scrolling to a section', async () => {
      const mockElement = {
        getBoundingClientRect: () => ({ top: 50, bottom: 500 }),
      }
      vi.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'features') return mockElement as unknown as HTMLElement
        return null
      })

      const wrapper = await renderSuspended(Component)

      Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
      await fireEvent.scroll(window)

      const featuresLink = wrapper.container.querySelector('a[href="/#features"]')
      expect(featuresLink?.className).toContain('text-teal-700')
    })

    it('sets activeSection to null when no section is in view', async () => {
      vi.spyOn(document, 'getElementById').mockReturnValue(null)

      const wrapper = await renderSuspended(Component)

      Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
      await fireEvent.scroll(window)

      const featuresLink = wrapper.container.querySelector('a[href="/#features"]')
      // When not active, it should have text-gray-900 class
      expect(featuresLink?.className).toContain('text-gray-900')
    })

    it('does not set section as active when outside viewport', async () => {
      const mockElement = {
        getBoundingClientRect: () => ({ top: 200, bottom: 500 }),
      }
      vi.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'features') return mockElement as unknown as HTMLElement
        return null
      })

      const wrapper = await renderSuspended(Component)

      Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
      await fireEvent.scroll(window)

      const featuresLink = wrapper.container.querySelector('a[href="/#features"]')
      // When not active, it should have text-gray-900 class
      expect(featuresLink?.className).toContain('text-gray-900')
    })
  })

  describe('menu link clicks', () => {
    it('closes menu when clicking a nav link', async () => {
      const wrapper = await renderSuspended(Component)
      const button = wrapper.container.querySelector('button')
      const menu = wrapper.container.querySelector('#navbar-default')

      // Open menu
      await fireEvent.click(button!)
      expect(menu?.className).not.toContain('hidden')

      // Click a nav link
      const featuresLink = wrapper.container.querySelector('a[href="/#features"]')
      await fireEvent.click(featuresLink!)

      expect(menu?.className).toContain('hidden')
    })

    it('closes menu when clicking pricing link', async () => {
      const wrapper = await renderSuspended(Component)
      const button = wrapper.container.querySelector('button')
      const menu = wrapper.container.querySelector('#navbar-default')

      // Open menu
      await fireEvent.click(button!)
      expect(menu?.className).not.toContain('hidden')

      // Click pricing link
      const pricingLink = wrapper.container.querySelector('a[href="/pricing"]')
      await fireEvent.click(pricingLink!)

      expect(menu?.className).toContain('hidden')
    })

    it('closes menu when clicking community link', async () => {
      const wrapper = await renderSuspended(Component)
      const button = wrapper.container.querySelector('button')
      const menu = wrapper.container.querySelector('#navbar-default')

      // Open menu
      await fireEvent.click(button!)
      expect(menu?.className).not.toContain('hidden')

      // Click community link
      const communityLink = wrapper.container.querySelector('a[href="/#community"]')
      await fireEvent.click(communityLink!)

      expect(menu?.className).toContain('hidden')
    })
  })
})
