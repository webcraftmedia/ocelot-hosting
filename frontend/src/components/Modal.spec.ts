import { renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent } from '@testing-library/vue'
import { nextTick } from 'vue'
import Component from './Modal.vue'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('Modal', () => {
  beforeEach(() => {
    document.body.style.overflow = ''
    // Clean up teleported elements from previous tests
    document.querySelectorAll('.modal-overlay').forEach((el) => el.remove())
  })

  afterEach(() => {
    document.body.style.overflow = ''
    // Clean up teleported elements
    document.querySelectorAll('.modal-overlay').forEach((el) => el.remove())
  })

  describe('renders', () => {
    it('closed', async () => {
      const html = await (await renderSuspended(Component, { props: { open: false } })).html()
      expect(html).toMatchSnapshot()
    })

    it('open', async () => {
      const html = await (
        await renderSuspended(Component, {
          props: { open: true },
          slots: { default: () => '<img src="/test.jpg" alt="Test" />' },
        })
      ).html()
      expect(html).toMatchSnapshot()
    })
  })

  describe('emit close', () => {
    it('emits close when close button is clicked', async () => {
      const component = await renderSuspended(Component, {
        props: { open: true },
      })

      const closeButton = document.querySelector('.modal-close')
      expect(closeButton).not.toBeNull()
      await fireEvent.click(closeButton!)

      expect(component.emitted('close')).toHaveLength(1)
    })

    it('emits close when overlay is clicked', async () => {
      const component = await renderSuspended(Component, {
        props: { open: true },
      })

      const overlay = document.querySelector('.modal-overlay')
      expect(overlay).not.toBeNull()
      await fireEvent.click(overlay!)

      expect(component.emitted('close')).toHaveLength(1)
    })

    it('does not emit close when modal container is clicked', async () => {
      const component = await renderSuspended(Component, {
        props: { open: true },
      })

      const container = document.querySelector('.modal-container')
      expect(container).not.toBeNull()
      await fireEvent.click(container!)

      expect(component.emitted('close')).toBeUndefined()
    })
  })

  describe('body overflow', () => {
    it('sets body overflow to hidden when opened', async () => {
      expect(document.body.style.overflow).toBe('')

      await renderSuspended(Component, {
        props: { open: true },
      })

      expect(document.body.style.overflow).toBe('hidden')
    })

    it('does not set body overflow when initially closed', async () => {
      expect(document.body.style.overflow).toBe('')

      await renderSuspended(Component, {
        props: { open: false },
      })

      expect(document.body.style.overflow).toBe('')
    })

    it('resets body overflow on unmount', async () => {
      const component = await renderSuspended(Component, {
        props: { open: true },
      })

      expect(document.body.style.overflow).toBe('hidden')

      component.unmount()

      expect(document.body.style.overflow).toBe('')
    })
  })
})
