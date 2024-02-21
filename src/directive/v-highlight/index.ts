/**
 * @description: v-highlight指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 元素闪烁
 */
import { Directive } from 'vue'

const vHighlight: Directive = {
  mounted(el: HTMLElement,binding) {
    const { arg } = binding
    el.style.backgroundColor = arg ? arg: 'rgba(255, 255, 0, .8)';
  }
}

export default vHighlight
