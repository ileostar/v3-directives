import { App, Directive } from 'vue'
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
// import permisson from './directive/v-permisson'
import resize from './directive/v-resize'
// import scroll from './directive/v-scroll'
// import scrollLoading from './directive/v-scrollLoading'
// import sensor from './directive/v-sensor'
// import slideIn from './directive/v-slideIn'
// import throttle from './directive/v-throttle'
// import tooltip from './directive/v-tooltip'
// import waterMarker from './directive/v-waterMarker'

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
  resize
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
