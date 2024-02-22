import type { Directive } from 'vue'
import { isBoolean, loadingSvg } from '../../utils'

const elMapToMaskElement: WeakMap<Element, HTMLDivElement> = new WeakMap()

const elMapToHasChangedPosition: WeakMap<Element, boolean> = new WeakMap()

function appendChild(el: HTMLElement): void {
  const loadingWrapper = document.createElement('div')
  const maskElement = document.createElement('div')
  maskElement.style.position = 'absolute'
  maskElement.style.top = '0'
  maskElement.style.left = '0'
  maskElement.style.right = '0'
  maskElement.style.bottom = '0'
  maskElement.style.zIndex = '9999'
  maskElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  maskElement.style.pointerEvents = 'none'

  loadingWrapper.style.position = 'absolute'
  loadingWrapper.style.top = '50%'
  loadingWrapper.style.left = '50%'
  loadingWrapper.style.transform = 'translate(-50%, -50%)'
  loadingWrapper.style.pointerEvents = 'none'
  loadingWrapper.innerHTML = loadingSvg
  if (el.style.position === 'static' || el.style.position === '') {
    elMapToHasChangedPosition.set(el, true)
    el.style.position = 'relative'
  }
  maskElement.appendChild(loadingWrapper)
  elMapToMaskElement.set(el, maskElement)
  el.appendChild(maskElement)
}

const vLoading: Directive = {
  beforeUnmount(el: HTMLElement) {
    elMapToMaskElement.delete(el)
    elMapToHasChangedPosition.delete(el)
  },
  mounted(el: HTMLElement, binding) {
    const { value } = binding
    if (!isBoolean(value))
      return
    if (!value)
      return
    appendChild(el)
  },
  updated(el: HTMLElement, binding) {
    const { value } = binding
    const hasMaskElement = elMapToMaskElement.has(el)
    const hasChangedPosition = elMapToHasChangedPosition.has(el)
    if (value && hasMaskElement)
      return
    if (value && !hasMaskElement)
      appendChild(el)

    if ((!value || !isBoolean(value)) && !hasMaskElement)
      return
    if ((!value || !isBoolean(value)) && hasMaskElement) {
      if (hasChangedPosition) {
        el.style.position = 'static'
        elMapToHasChangedPosition.delete(el)
      }
      const maskElement = elMapToMaskElement.get(el)
      maskElement && el.removeChild(maskElement)
      elMapToMaskElement.delete(el)
    }
  },
}
export default vLoading
