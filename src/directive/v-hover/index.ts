/**
 * @description: v-hover指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 鼠标经过触发事件
 */
import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils/index'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding): void => {
  const { value } = binding
  if (isFunction(value)) {
    el.addEventListener('mouseenter', value)
    elMapToHandlers.set(el, value)
  }
}

const vHover: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const handler = elMapToHandlers.get(el)
      handler && el.removeEventListener('mouseenter', handler)
      elMapToHandlers.delete(el)
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el: HTMLElement) {
    elMapToHandlers.delete(el)
  }
}
export default vHover
