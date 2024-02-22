/**
 * @description: v-doubleClick指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 双击触发事件
 */
import type { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

function addEventListener(el: Element, binding: DirectiveBinding): void {
  const { arg, value } = binding
  if (!isFunction(value))
    return
  let clickCount = 0
  let time = 0

  const handler = () => {
    clickCount++
    const now = new Date().getTime()

    if (clickCount === 1) {
      time = now
      setTimeout(
        () => {
          clickCount = 0
          time = 0
        },
        arg ? Number(arg) : 300,
      )
    }

    if (clickCount === 2) {
      if (now - time < (arg ? Number(arg) : 300))
        value()

      clickCount = 0
      time = 0
    }
  }
  elMapToHandlers.set(el, handler)
  el.addEventListener('click', handler)
}

const vDoubleClick: Directive = {
  beforeUnmount(el) {
    elMapToHandlers.delete(el)
  },
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const handler = elMapToHandlers.get(el)
      handler && el.removeEventListener('click', handler)
      elMapToHandlers.delete(el)
    }

    addEventListener(el, binding)
  },
}
export default vDoubleClick
