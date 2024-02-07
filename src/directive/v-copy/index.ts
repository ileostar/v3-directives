/**
 * @description: v-copy指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 实现文本复制到剪贴板功能
 */
import { Directive, DirectiveBinding } from 'vue'

const addEventListener = (el: Element, binding: DirectiveBinding) => {

  const { value } = binding

  el.setAttribute('copyValue', String(value))

  const copyHandler = (): void => {
    navigator.clipboard
      .writeText(el.getAttribute('copyValue') || '')
      .then(() => {
        window.alert('Copy successful')
      })
      .catch(() => {
        window.alert('Copy failed')
      })
  }

  el.addEventListener('click', copyHandler)
}

const vCopy: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    const { value } = binding
    el.setAttribute('copyValue', String(value))
  }
}

export default vCopy
