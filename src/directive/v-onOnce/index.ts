import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils/isFunction'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

const addEventListener = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value, arg } = binding
  if (!isFunction(value)) return

  const eventName = arg ? arg : 'click'
  const handler = (): void => {
    value()
    el.removeEventListener(eventName, handler)
  }

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vOnOnce: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const eventName = elMapToEventName.get(el)
      const handler = elMapToHandlers.get(el)
      handler &&
        eventName &&
        el.removeEventListener(eventName as keyof HTMLElementEventMap, handler)
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }

    addEventListener(el, binding)
  },
  beforeUnmount(el: HTMLElement) {
    elMapToHandlers.delete(el)
    elMapToEventName.delete(el)
  }
}
export default vOnOnce
