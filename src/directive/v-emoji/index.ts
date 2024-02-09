import { DirectiveBinding } from "vue"

let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}
 
const trigger = (el: HTMLElement, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}
 
export default {
  mounted: function (el: HTMLElement, binding: DirectiveBinding, vnode) {
    // 正则规则可根据需求自定义
    const regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g

    el.handle = function () {
      const val = binding.value
      el.target.value = val.replace(regRule, '')
    }
    el.addEventListener('input', el.handle)
  },
  unmounted: function (el) {
    el.removeEventListener('input', el.handle)
  },
}
