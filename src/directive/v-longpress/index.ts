import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils'

const elMapToMouseDownHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToMouseUpHandlers: WeakMap<Element, () => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value, arg } = binding
  if (!isFunction(value)) return
  let timer: number | undefined
  const pressHandler = () => {
    timer = window.setTimeout(value, arg ? Number(arg) : 300)
  }
  const clearTimeoutHandler = () => {
    clearTimeout(timer)
  }
  el.addEventListener('mousedown', pressHandler)
  el.addEventListener('mouseup', clearTimeoutHandler)
  elMapToMouseDownHandlers.set(el, pressHandler)
  elMapToMouseUpHandlers.set(el, clearTimeoutHandler)
}

const vLongPress: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToMouseDownHandlers.has(el)) {
      const pressHandler = elMapToMouseDownHandlers.get(el)
      pressHandler && el.removeEventListener('mousedown', pressHandler)
      elMapToMouseDownHandlers.delete(el)
    }
    if (elMapToMouseUpHandlers.has(el)) {
      const pressHandler = elMapToMouseDownHandlers.get(el)
      pressHandler && el.removeEventListener('mouseup', pressHandler)
      elMapToMouseUpHandlers.delete(el)
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el: HTMLElement) {
    elMapToMouseDownHandlers.delete(el)
    elMapToMouseUpHandlers.delete(el)
  }
}
export default vLongPress
