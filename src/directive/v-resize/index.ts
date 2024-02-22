/**
 * @description: v-resize指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 响应缩放
 */

import type { Directive } from 'vue'

function createYElement(type: 'top' | 'bottom'): HTMLDivElement {
  const Element = document.createElement('div')
  Element.style.position = 'absolute'
  if (type === 'top')
    Element.style.top = '0'
  else
    Element.style.bottom = '0'

  Element.style.left = '0'
  Element.style.right = '0'
  Element.style.height = '5px'
  Element.style.backgroundColor = '#1890ff'
  Element.style.zIndex = '1'
  Element.style.cursor = 'ns-resize'
  Element.style.display = 'none'

  return Element
}

function createXElement(type: 'left' | 'right'): HTMLDivElement {
  const Element = document.createElement('div')
  Element.style.position = 'absolute'
  Element.style.top = '5px'
  if (type === 'left')
    Element.style.left = '0'
  else
    Element.style.right = '0'

  Element.style.bottom = '5px'
  Element.style.width = '5px'
  Element.style.backgroundColor = '#1890ff'
  Element.style.zIndex = '1'
  Element.style.cursor = 'ew-resize'
  Element.style.display = 'none'
  Element.style.transition = 'all 0.3s'

  return Element
}

const vResize: Directive = {
  mounted(el: HTMLElement) {
    const position = el.style.position
    if (position === 'static' || position === '')
      el.style.position = 'relative'

    const topElement = createYElement('top')
    const bottomElement = createYElement('bottom')
    const leftElement = createXElement('left')
    const rightElement = createXElement('right')

    const Y = [topElement, bottomElement]
    const X = [leftElement, rightElement]

    const all = [...Y, ...X]

    Y.forEach((element) => {
      element.addEventListener('mousedown', (e: MouseEvent) => {
        e.stopPropagation()
        const startY = e.clientY

        const style = window.getComputedStyle(el)
        const height = style.height

        const windowMouseMoveHandler = (e: MouseEvent) => {
          const offsetY = e.clientY - startY
          el.style.height = `${Number.parseInt(height, 10) + offsetY}px`
        }

        const windowMouseUpHandler = () => {
          window.removeEventListener('mousemove', windowMouseMoveHandler)
          window.removeEventListener('mouseup', windowMouseUpHandler)
        }

        window.addEventListener('mousemove', windowMouseMoveHandler)

        window.addEventListener('mouseup', windowMouseUpHandler)
      })
    })

    X.forEach((element) => {
      element.addEventListener('mousedown', (e: MouseEvent) => {
        e.stopPropagation()

        const startX = e.clientX

        const style = window.getComputedStyle(el)
        const width = style.width

        const windowMouseMoveHandler = (e: MouseEvent) => {
          const offsetX = e.clientX - startX
          el.style.width = `${Number.parseInt(width, 10) + offsetX}px`
        }

        const windowMouseUpHandler = () => {
          window.removeEventListener('mousemove', windowMouseMoveHandler)
          window.removeEventListener('mouseup', windowMouseUpHandler)
        }

        window.addEventListener('mousemove', windowMouseMoveHandler)

        window.addEventListener('mouseup', windowMouseUpHandler)
      })
    })

    el.addEventListener('click', () => {
      all.forEach((element) => {
        element.style.display = 'block'
      })
    })

    const handler = (e: MouseEvent) => {
      if (el.contains(e.target as Node))
        return

      all.forEach((element) => {
        element.style.display = 'none'
      })
    }
    window.addEventListener('click', handler)

    el.appendChild(topElement)
    el.appendChild(bottomElement)
    el.appendChild(leftElement)
    el.appendChild(rightElement)
  },
}
export default vResize
