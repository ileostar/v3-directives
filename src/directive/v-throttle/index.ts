import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding): void => {
  const { value, arg } = binding;
  if (!isFunction(value)) return;

  const delay = arg ? Number(arg.split('-')[1]) : 300;
  const eventName = arg ? arg.split('-')[0] : 'click';

  let timer: number | undefined = undefined;
  let lastExecTime = 0;

  const handler = (): void => {
    const currentTime = Date.now();
    if (currentTime - lastExecTime < delay) return;
    lastExecTime = currentTime;
    value();
  };

  const existingHandler = elMapToHandlers.get(el);
  if (existingHandler) {
    el.removeEventListener(eventName, existingHandler);
  }

  elMapToHandlers.set(el, handler);
  elMapToEventName.set(el, eventName);
  el.addEventListener(eventName, handler);
};

const vThrottle: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const eventName = elMapToEventName.get(el)
      const handler = elMapToHandlers.get(el)
      handler &&
        eventName &&
        el.removeEventListener(eventName as keyof HTMLElementEventMap, handler)
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }

    addEventListener(el, binding)
  },
  beforeUnmount(el: HTMLElement) {
    if (elMapToHandlers.has(el)) {
      const eventName = elMapToEventName.get(el)
      const handler = elMapToHandlers.get(el)
      handler &&
        eventName &&
        el.removeEventListener(eventName as keyof HTMLElementEventMap, handler)
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }
  }
}

export default vThrottle;
