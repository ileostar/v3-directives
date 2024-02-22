/**
 * @description: v-emoji指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 禁止输入emoji
 */
import type { Directive } from 'vue'

const vEmoji: Directive = {
  mounted(el, binding, vnode) {
    const handleInput = (event: Event) => {
      const inputElement = event.target as HTMLInputElement
      const value = inputElement.value
      const newValue = value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|[\u2600-\u27FF]/g, '')
      if (newValue !== value) {
        inputElement.value = newValue
        inputElement.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }

    el.addEventListener('input', handleInput)

    el.$destroy = () => {
      el.removeEventListener('input', handleInput)
      delete el.$destroy
    }
  },
  unmounted(el) {
    if (el.$destroy)
      el.$destroy()
  },
}

export default vEmoji
