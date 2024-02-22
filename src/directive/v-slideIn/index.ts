import type { Directive } from 'vue'

const DISTANCE = 100 // 距离
const ANIMATIONTIME = 500 // 500毫秒
let distance: number | null = null
let animationtime: number | null = null
const map = new WeakMap()
const ob = new IntersectionObserver((entries) => {
  for (const entrie of entries) {
    if (entrie.isIntersecting) {
      const animation = map.get(entrie.target)
      if (animation) {
        animation.play()
        ob.unobserve(entrie.target)
      }
    }
  }
})
function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top - (distance || DISTANCE) > window.innerHeight
}

const vSlideIn: Directive = {
  mounted(el: HTMLElement, binding: any) {
    if (binding.value) { // 传值？
      console.log(binding.value)// 打印
      distance = binding.value.px// 接收指定距离
      animationtime = binding.value.time// 接收指定时间
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
    ob.observe(el)
  },

  unmounted(el: HTMLElement) {
    ob.unobserve(el)
  },
}

export default vSlideIn
