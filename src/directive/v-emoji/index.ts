/**
 * @description: v-emoji指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 禁止输入emoji
 */
import { Directive, DirectiveBinding } from "vue"

interface TextElement extends HTMLElement {
  [index: string]: any
}

let findEle = (parent: { tagName: string; querySelector: any }, type: string) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el: HTMLElement, type: string) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}



const vEmoji: Directive = {
  mounted(el){
    let reg = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g;
    let $inp = findEle(el, 'input');
    el.$inp = $inp;
    $inp.handle = () => {
      let val = $inp.value;
      $inp.value=val.replace(reg, '');
      trigger($inp, 'input');
    };
  },
  unmounted(el){
    el.$inp.removeEventListener('keyup', el.$inp.handle);
  }
}

export default vEmoji

