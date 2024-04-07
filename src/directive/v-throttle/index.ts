import type { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

function addEventListener(el: Element, binding: DirectiveBinding): void {
  const { arg, value } = binding
  if (!isFunction(value))
    return

  const delay = arg ? Number(arg.split('-')[1]) : 300
  const eventName = arg ? arg.split('-')[0] : 'click'

  let lastExecTime = 0

  const handler = (): void => {
    const currentTime = Date.now()
    if (currentTime - lastExecTime < delay)
      return
    lastExecTime = currentTime
    value()
  }

  const existingHandler = elMapToHandlers.get(el)
  if (existingHandler)
    el.removeEventListener(eventName, existingHandler)

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vThrottle: Directive = {
  beforeUnmount(el: HTMLElement) {
    if (elMapToHandlers.has(el)) {
      const eventName = elMapToEventName.get(el)
      const handler = elMapToHandlers.get(el)
      handler
      && eventName
      && el.removeEventListener(eventName as keyof HTMLElementEventMap, handler)
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }
  },
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const eventName = elMapToEventName.get(el)
      const handler = elMapToHandlers.get(el)
      handler
      && eventName
      && el.removeEventListener(eventName as keyof HTMLElementEventMap, handler)
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }

    addEventListener(el, binding)
  },
}

export default vThrottle
