/**
 * @description: v-ellipsis指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 省略超出文本
 */
import { Directive, DirectiveBinding } from 'vue'

const handler = (el: HTMLElement, binding: DirectiveBinding) => {
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
  const { arg } = binding
  if (arg) {
    el.style.display = '-webkit-box'
    el.style.webkitLineClamp = String(Number(arg))
    el.style.webkitBoxOrient = 'vertical'
  } else {
    el.style.whiteSpace = 'nowrap'
  }
  el.setAttribute('title', el.textContent as string);
}

const vEllipsis: Directive = {
  mounted(el: HTMLElement, binding) {
    handler(el, binding)
  },
  updated(el: HTMLElement, binding) {
    handler(el, binding)
  }
}
export default vEllipsis
