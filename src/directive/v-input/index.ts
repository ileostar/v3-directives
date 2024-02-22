/**
 * @description: v-input指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 限制输入类型
 */
import type { Directive } from 'vue'

// 派发自定义事件
function trigger(el: any, type: string) {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const vInput: Directive = {
  mounted(el, binding) {
    const _type = binding.arg
    const restrict = binding.value || 10
    const types = ['number', 'decimal', 'customize']
    if (!_type || !types.includes(_type))
      return console.log(`使用v-input指令需要选择特定功能：v-input:type="restrictValue";  type = ${types.join('/')}.`)
    el.$handler = (el: any) => {
      switch (_type) {
        // 数字
        case 'number':
          el.value = el.value.replace(/[^\d]/, '')
          break
        // 数字+小数
        case 'decimal':
          el.value = el.value.replace(/[^\d.]/g, '') // 清除数字和'.'以外的字符
          el.value = el.value.replace(/\.{2,}/g, '.') // 连续两个'.', 只保留第一个'.'
          el.value = el.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') // 隔着字符, 也保证只有一个'.'
          const regexPattern = new RegExp(`^(-)*(\\d+)\\.(\\d{0,${restrict}}).*$`)
          el.value = el.value.replace(regexPattern, '$1$2.$3') // 只能输入两位小数
          !el.value.includes('.') && el.value != '' && (el.value = Number.parseFloat(el.value)) // 保证不会出现重复的: 00, 01, 02 ...
          el.value.includes('.') && el.value.length === 1 && (el.value = '') // 第一位不能以'.'开头
          break
        // 自定义, 由data-rule提供规则
        case 'customize':
          const rule = restrict && new RegExp(restrict) // 字符串正则转正则表达式
          el.value = el.value.replace(rule, '')
          break
      }
      trigger(el, 'input')
    }
    el.$handler(el)
  },
  updated(el) {
    el.$handler && el.$handler(el)
  },
}

export default vInput
