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
})
