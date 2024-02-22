/**
 * @description: v-backtop指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/13 14:05:16
 * @description: 为元素添加返回顶部功能
 */
import type { Directive, DirectiveBinding } from 'vue'

interface BackTopElement extends HTMLElement {
  style: CSSStyleDeclaration
}

// 定义通用的滚动元素接口
interface ScrollableElement extends HTMLElement {
  scrollTop: number
}

const vBackTop: Directive = {
  mounted(el: BackTopElement, binding: DirectiveBinding<number | undefined>) {
    const target = binding.arg ? document.getElementById(binding.arg) as (Window | HTMLElement) : window
    el.addEventListener('click', () => {
      target.scrollTo({
        behavior: 'smooth',
        top: 0,
      })
    })
    const handleScroll = () => {
      const isScrolledUp = (target as ScrollableElement).scrollTop < (binding.value as number)
      el.style.visibility = isScrolledUp ? 'hidden' : 'unset'
    }
    if ((target as ScrollableElement).scrollTop < (binding.value as number))
      el.style.visibility = 'hidden';

    (target as ScrollableElement).addEventListener('scroll', handleScroll)
  },
  unmounted(el: BackTopElement, binding: DirectiveBinding<number | undefined>) {
    const target = binding.arg ? document.getElementById(binding.arg) as (Window | HTMLElement) : window
    const handleScroll = () => {
      const isScrolledUp = (target as ScrollableElement).scrollTop < (binding.value as number)
      el.style.visibility = isScrolledUp ? 'hidden' : 'unset'
    };

    (target as ScrollableElement).removeEventListener('scroll', handleScroll)
    el.removeEventListener('click', handleScroll)
  },
  updated(el: BackTopElement, binding: DirectiveBinding<number | undefined>) {
    const target = binding.arg ? document.getElementById(binding.arg) as (Window | HTMLElement) : window
    const handleScroll = () => {
      const isScrolledUp = (target as ScrollableElement).scrollTop < (binding.value as number)
      el.style.visibility = isScrolledUp ? 'hidden' : 'unset'
    }

    if (binding.value !== undefined)
      (target as ScrollableElement).addEventListener('scroll', handleScroll)
    else
      (target as ScrollableElement).removeEventListener('scroll', handleScroll)
  },
}

export default vBackTop
