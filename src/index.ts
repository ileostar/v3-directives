import type { App, Directive } from 'vue'
import backtop from './directive/v-backtop'
import clickOutside from './directive/v-clickOutside'
import copy from './directive/v-copy'
import debounce from './directive/v-debounce'
import doubleClick from './directive/v-doubleClick'
import draggable from './directive/v-draggable'
import ellipsis from './directive/v-ellipsis'
import emoji from './directive/v-emoji'
import empty from './directive/v-empty'
import flicker from './directive/v-flicker'
import focus from './directive/v-focus'
import highlight from './directive/v-highlight'
import hover from './directive/v-hover'
import input from './directive/v-input'
import lazyImg from './directive/v-lazyImg'
import loading from './directive/v-loading'
import longpress from './directive/v-longpress'
import money from './directive/v-money'
import onOnce from './directive/v-onOnce'
import permission from './directive/v-permission'
import resize from './directive/v-resize'
import ripple from './directive/v-ripple'
import slideIn from './directive/v-slideIn'
import throttle from './directive/v-throttle'
import waterMarker from './directive/v-waterMarker'

export {
  backtop as vBacktop,
  clickOutside as vClickOutside,
  copy as vCopy,
  debounce as vDebounce,
  doubleClick as vDoubleClick,
  draggable as vDraggable,
  ellipsis as vEllipsis,
  emoji as vEmoji,
  empty as vEmpty,
  flicker as vFlicker,
  focus as vFocus,
  highlight as vHighlight,
  hover as vHover,
  input as vInput,
  lazyImg as vLazyImg,
  loading as vLoading,
  longpress as vLongpress,
  money as vMoney,
  onOnce as vOnOnce,
  permission as vPermission,
  resize as vResize,
  ripple as vRipple,
  slideIn as vSlideIn,
  throttle as vThrottle,
  waterMarker as vWaterMarker,
}

interface DirectiveCollection {
  [key: string]: Directive
}

const directives: DirectiveCollection = {
  backtop,
  clickOutside,
  copy,
  debounce,
  doubleClick,
  draggable,
  ellipsis,
  emoji,
  empty,
  flicker,
  focus,
  highlight,
  hover,
  input,
  lazyImg,
  loading,
  longpress,
  money,
  onOnce,
  permission,
  resize,
  ripple,
  slideIn,
  throttle,
  waterMarker,
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}
