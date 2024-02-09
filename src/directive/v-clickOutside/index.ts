/**
 * @description: v-clickOutside指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 窗口点击外部事件
 */
import { Directive, DirectiveBinding } from 'vue'

const elMapToHandlers: WeakMap<Element, (e: MouseEvent) => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const handler = (e: MouseEvent) => {
    if (el.contains(e.target as Node)) {
      return
    }
    const { value } = binding
    value()
  }
  window.addEventListener('click', handler)
  elMapToHandlers.set(el, handler)
}

const vClickOut: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const handler = elMapToHandlers.get(el)
      handler && window.removeEventListener('click', handler)
      elMapToHandlers.delete(el)
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el) {
    if (elMapToHandlers.has(el)) {
      const handler = elMapToHandlers.get(el)

      handler && window.removeEventListener('click', handler)
      elMapToHandlers.delete(el)
    }
  }
}
export default vClickOut
