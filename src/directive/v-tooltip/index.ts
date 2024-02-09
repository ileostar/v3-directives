import { createApp, DirectiveBinding, VNode, App } from 'vue'
import {
  computePosition,
  autoUpdate,
  offset,
  Placement,
} from '@floating-ui/dom'
import type { Middleware } from '@floating-ui/dom'

import tooltipVue from './components/CustomTooltip.vue'

export type TimeoutHTMLElement = HTMLElement & {
  __hide_timeout__: NodeJS.Timeout
}
export type SpecialHTMLElement =
  | HTMLElement & {
      __float_tooltip__: TimeoutHTMLElement | null
    } & {
      __float_app__: App | null
    } & {
      oldEnable: string | null
    } & {
      oldVNode: string
    }

// tooltip 容器
const __tooltip_el__ = document.createElement('div')
__tooltip_el__.className = '__CUSTOM_TOOLTIP__'
document.body.appendChild(__tooltip_el__)
// 判断是否溢出
function isOverflow(el: SpecialHTMLElement) {
  if (el.scrollWidth > el.offsetWidth || el.scrollHeight > el.clientHeight) {
    return true
  }
  return false
}
// 清除 slot
function emptySlot(el: SpecialHTMLElement) {
  const slot = el.querySelector("[slot='content']")
  if (slot) {
    el.removeChild(slot)
  }
  return slot?.innerHTML
}
// 卸载
function unmounted(el: SpecialHTMLElement) {
  removeEvent(el)
  const tooltip = el?.__float_tooltip__
  if (tooltip) {
    __tooltip_el__.removeChild(tooltip)
    el?.__float_app__?.unmount?.()
    el.__float_app__ = null
    el.__float_tooltip__ = null
  }
}
// 移除事件
function removeEvent(el: SpecialHTMLElement) {
  el?.removeEventListener?.('mouseover', mouseOver)
  el?.removeEventListener?.('mouseleave', mouseLeave)
}
// 添加事件
function attachEvent(el: SpecialHTMLElement) {
  el?.addEventListener?.('mouseover', mouseOver)
  el?.addEventListener?.('mouseleave', mouseLeave)
}
// 鼠标悬浮
function mouseOver(evt: MouseEvent) {
  const el = evt.currentTarget as SpecialHTMLElement
  const tooltip = el?.__float_tooltip__
  clearTimeout(tooltip?.__hide_timeout__)
  if (tooltip) {
    tooltip.style.visibility = 'visible'
    tooltip.setAttribute('data-show', 'true')
    updatePosition(el)
  }
}
// 鼠标移出
function mouseLeave(evt: MouseEvent) {
  const el = evt.currentTarget as SpecialHTMLElement
  const tooltip = el?.__float_tooltip__
  const isShow = tooltip?.getAttribute?.('data-show')
  const delay = el.getAttribute('hide-delay') || 100
  clearTimeout(tooltip?.__hide_timeout__)
  if (tooltip) {
    if (delay) {
      tooltip.__hide_timeout__ = setTimeout(() => {
        if (isShow === 'true') {
          tooltip.style.visibility = 'hidden'
        }
      }, +delay)
    } else {
      if (isShow === 'true') {
        tooltip.style.visibility = 'hidden'
      }
    }
  }
}
// 挂载tooltip
function mounted(
  el: SpecialHTMLElement,
  binding: DirectiveBinding,
  vNode: VNode
) {
  const overflow = isOverflow(el)
	// 手动启用tooltip
  const enable = el.getAttribute('enableTooltip')
  el.oldEnable = enable
  if (binding.value === void 0 && vNode) {
    el.oldVNode = parseSlot(vNode)
  }
  emptySlot(el)
  // 显示延迟
  const delay = el.getAttribute('show-delay') || 100
  if (overflow || enable === 'true') {
    if (delay) {
      setTimeout(() => {
        initTooltip(el, binding)
        attachEvent(el)
      }, +delay)
    } else {
      initTooltip(el, binding)
      attachEvent(el)
    }
  } else {
    unmounted(el)
  }
}
// 更新tooltip 只更新内容
function updated(el: SpecialHTMLElement, binding: DirectiveBinding) {
  el?.__float_app__?.unmount?.()
  el.__float_app__ = null
  createTooltip(el, binding)
}
// 创建元素工厂
function createEle() {
  const tooltip = document.createElement('div')
  tooltip.className = '__CUSTOM_TOOLTIP_ITEM__'
  tooltip.style['zIndex'] = '9999'
  tooltip.style['position'] = 'absolute'
  __tooltip_el__.appendChild(tooltip)
  return tooltip
}
// 初始化tooltip:创建和计算位置
function initTooltip(el: SpecialHTMLElement, binding: DirectiveBinding) {
  const tooltip = createEle()
  el.__float_tooltip__ = tooltip as unknown as TimeoutHTMLElement
  createTooltip(el, binding)
  autoUpdate(el, tooltip, () => updatePosition(el), {
    animationFrame: false,
    ancestorResize: false,
    elementResize: false,
    ancestorScroll: true,
  })
}
// 创建tooltip
function createTooltip(el: SpecialHTMLElement, binding: DirectiveBinding) {
  const tooltip = el.__float_tooltip__ as HTMLElement
  const { width } = el.getBoundingClientRect()
  tooltip.style['minWidth'] = width + 'px'
  const arrow = el.getAttribute('arrow')
  // eslint-disable-next-line vue/one-component-per-file
  const app = createApp(tooltipVue, {
    arrow: arrow,
    content: binding.value !== void 0 ? binding.value : el.oldVNode,
  })
  app.mount(tooltip)
  el.__float_app__ = app
}
// 更新tooltip位置
function updatePosition(el: SpecialHTMLElement) {
  const tooltip = el.__float_tooltip__
  const middlewares: Middleware[] = []
  const visible = tooltip?.style?.visibility
  if (visible !== 'hidden' && visible) {
    const placement = el?.getAttribute('placement') || 'bottom'
    let offsetY =
      el?.getAttribute('offsetY') || el?.getAttribute('offset-y') || 5
    let offsetX = el?.getAttribute('offsetX') || el?.getAttribute('offset-x')
    const offsetXY = el?.getAttribute('offset')
    if (offsetXY !== null) {
      offsetX = offsetXY
      offsetY = offsetXY
    }
    if (offsetX || offsetY) {
      middlewares.push(
        offset({
          mainAxis: Number(offsetY),
          crossAxis: Number(offsetX),
        })
      )
    }

    computePosition(el, tooltip, {
      placement: placement as Placement,
      strategy: 'absolute',
      middleware: middlewares,
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        top: `${y}px`,
        left: `${x}px`,
      })
    })
  }
}
// 解析slot
function parseSlot(vNode: VNode) {
  const content = (vNode.children as VNode[]).find?.((i: VNode) => {
    return i?.props?.slot === 'content'
  })
  // eslint-disable-next-line vue/one-component-per-file
  const app = createApp(
    {
      functional: true,
      props: {
        render: Function,
      },
      render() {
        return this.render()
      },
    },
    // eslint-disable-next-line vue/one-component-per-file
    {
      render: () => {
        return content
      },
    }
  )
  const el = document.createElement('div')
  app.mount(el)
  return el?.innerHTML
}

export default {
  mounted(el: SpecialHTMLElement, binding: DirectiveBinding, vNode: VNode) {
    mounted(el, binding, vNode)
  },
  updated(el: SpecialHTMLElement, binding: DirectiveBinding, vNode: VNode) {
    if (binding.value !== binding.oldValue) {
      updated(el, binding)
    } else {
      const enable = el.getAttribute('enableTooltip')
      if (enable !== el.oldEnable) {
        mounted(el, binding, vNode)
      } else {
        const newVNode = parseSlot(vNode)
        if (el.oldVNode !== newVNode) {
          el.oldVNode = newVNode
          updated(el, binding)
        }
      }
    }
  },
  unmounted(el: SpecialHTMLElement) {
    unmounted(el)
  },
}
