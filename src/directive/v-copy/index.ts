import { Directive, DirectiveBinding } from 'vue'

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value } = binding
  el.setAttribute('data-copy-value', String(value))
  const copyHandler = (): void => {
    navigator.clipboard
      .writeText(el.getAttribute('data-copy-value') || '')
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
    el.setAttribute('data-copy-value', String(value))
  }
}
export default vCopy
