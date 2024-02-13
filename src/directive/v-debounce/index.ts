/**
 * @description: v-debounce指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 防抖功能
 */
import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '@/utils'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding): void => {
  const { value, arg } = binding
  if (!isFunction(value)) return

  const delay = arg ? Number(arg.split('-')[1]) : 300

  const eventName = arg ? arg.split('-')[0] : 'click'

  let timer: undefined | number = undefined

  const handler = (): void => {
    if (timer === undefined) {
      timer = window.setTimeout(() => {
        value()
        timer = undefined
      }, delay)
    } else {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        value()
        timer = undefined
      }, delay)
    }
  }

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vDebounce: Directive = {
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

export default vDebounce
