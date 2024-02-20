import { createApp } from 'vue'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import TooltipDirective from '..'
import { createTooltip, destroyTooltip } from '..'

describe('Tooltip Directive', () => {
  let app
  let el

  beforeEach(() => {
    app = createApp({})
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(() => {
    app.unmount()
    document.body.removeChild(el)
  })

  it('should create a tooltip', () => {
    createTooltip(el, 'Tooltip content', {})
    app.directive('tooltip', TooltipDirective)
    app.mount(el)

    // Assert that tooltip component is rendered
    expect(el.querySelector('.tooltip')).toBeTruthy()
  })

  it('should destroy a tooltip', () => {
    createTooltip(el, 'Tooltip content', {})
    app.directive('tooltip', TooltipDirective)
    app.mount(el)

    // Destroy the tooltip
    destroyTooltip(el)

    // Assert that tooltip component is removed
    expect(el.querySelector('.tooltip')).toBeFalsy()
  })

  // Add more test cases to cover other functionality

})
