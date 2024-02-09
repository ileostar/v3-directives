import { DirectiveBinding } from "vue";

const vColor = {
  mounted(el: HTMLElement, binding: DirectiveBinding){
    el.style.color = binding.value;
  },
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // 获取传递的参数
    const arg = binding.arg //从这里获取参数名，也就是第一个color
    const value = binding.value //从这里获取参数值，也就是第二个color
    // 将参数保存在指令上下文中
    el._directiveContext = { arg, value }
    el.style.color = value || '#000' //DOM操作，设置背景颜色
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    // 获取更新后的参数
    const value = binding.value //更新后的参数值
    el.style.color = value //更新DOM
 
    // 从指令上下文中获取之前保存的参数
    // const { arg } = el._directiveContext
    // console.log('参数:', arg, '值:', value)
  }
}

export default vColor;
