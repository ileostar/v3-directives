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
}

const vTextEllipsis: Directive = {
  mounted(el: HTMLElement, binding) {
    handler(el, binding)
  },
  updated(el: HTMLElement, binding) {
    handler(el, binding)
  }
}
export default vTextEllipsis
