/**
 * @description: v-focus指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 自动聚焦
 */
import { Directive } from 'vue'

const vFocus: Directive = {
  mounted(el: HTMLElement) {
    el.focus && el.focus()
  },
  updated(el: HTMLElement) {
    el.focus && el.focus()
  }
}
export default vFocus
