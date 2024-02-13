/**
 * @description: v-ellipsis指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 省略超出文本
 */
import { Directive, DirectiveBinding } from "vue"

interface TextElement extends HTMLElement {
  [index: string]: any
}

let findEle = (parent: { tagName: string; querySelector: (arg0: any) => any }, type: any) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el: HTMLElement, type: string) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const vEllipsis: Directive = {
  mounted: function (el: TextElement, binding: DirectiveBinding) {
    // 正则规则可根据需求自定义
    var regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g
    let $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      let val = $inp.value
      $inp.value = val.replace(regRule, '')

      trigger($inp, 'input')
    }
    $inp.addEventListener('keyup', $inp.handle)
  },
  unmounted: function (el: TextElement) {
    el.$inp.removeEventListener('keyup', el.$inp.handle)
  },
}

export default vEllipsis

