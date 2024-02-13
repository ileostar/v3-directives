import { Directive } from 'vue'

let style: HTMLStyleElement | null = null

const animationStr = `
@keyframes v-flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

const vFlicker: Directive = {
  mounted(el: HTMLElement) {
    if (style === null) {
      style = document.createElement('style')
      style.innerHTML = animationStr
      document.head.appendChild(style)
    }

    el.style.animation = 'v-flicker 1s infinite'
  }
}
export default vFlicker
