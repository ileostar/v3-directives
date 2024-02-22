/**
 * @description: v-onOnce指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/21 18:12:16
 * @description: 只触发一次回调
 */
import type { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils/index'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

function addEventListener(el: HTMLElement, binding: DirectiveBinding) {
  const { arg, value } = binding
  if (!isFunction(value))
    return

  const eventName = arg || 'click'
  const handler = (): void => {
    value()
    el.removeEventListener(eventName, handler)
  }

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vOnOnce: Directive = {
  beforeUnmount(el: HTMLElement) {
    elMapToHandlers.delete(el)
    elMapToEventName.delete(el)
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
export default vOnOnce
