import { Directive } from 'vue'

const vDraggable: Directive = {
  mounted(el: HTMLElement) {
    let startX = 0
    let startY = 0

    let offsetXX = 0
    let offsetYY = 0

    let endX = 0
    let endY = 0

    el.style.cursor = 'move'

    const transformValue = window
      .getComputedStyle(el)
      .transform.split(',')
      .map((item) => parseInt(item))
      .slice(4, 6)

    if (transformValue.length > 1) {
      endX = transformValue[0]
      endY = transformValue[1]
    }

    const handler = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const offsetX = clientX - startX + endX
      const offsetY = clientY - startY + endY
      offsetXX = offsetX
      offsetYY = offsetY
      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    el.addEventListener('mousedown', (e: MouseEvent) => {
      const { clientX, clientY } = e
      startX = clientX
      startY = clientY

      window.addEventListener('mousemove', handler)
    })
    el.addEventListener('mouseup', () => {
      endX = offsetXX
      endY = offsetYY
      window.removeEventListener('mousemove', handler)
    })
  }
}
export default vDraggable
