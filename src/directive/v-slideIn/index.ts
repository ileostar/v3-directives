import type { Directive } from 'vue'

const DISTANCE = 100 // 距离
const ANIMATIONTIME = 500 // 500毫秒
let distance: number | null = null
let animationtime: number | null = null
const map = new WeakMap()

function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top - (distance || DISTANCE) > window.innerHeight
}

function handleScroll() {
  const elements = document.querySelectorAll('[v-slide-in]')
  elements.forEach((el: any) => {
    if (isBelowViewport(el)) return

    const animation = map.get(el)
    if (animation) {
      animation.play()
      el.removeAttribute('v-slide-in')
    }
  })
}

const vSlideIn: Directive = {
  mounted(el: HTMLElement, binding: any) {
    if (binding.value) {
      distance = binding.value.px // 接收指定距离
      animationtime = binding.value.time // 接收指定时间
    }
    if (!isBelowViewport(el))
      return

    const animation = el.animate(
      [
        {
          opacity: 0,
          transform: `translateY(${distance || DISTANCE}px)`,
        },
        {
          opacity: 1,
          transform: `translateY(0px)`,
        },
      ],
      {
        duration: animationtime || ANIMATIONTIME,
        easing: 'ease-in-out',
        fill: 'forwards',
      },
    )
    animation.pause()
    map.set(el, animation)
    el.setAttribute('v-slide-in', '') // 添加标记，表示需要进行动画

    window.addEventListener('scroll', handleScroll)
  },

  unmounted(el: HTMLElement) {
    map.delete(el)
    window.removeEventListener('scroll', handleScroll)
  },
}

export default vSlideIn
