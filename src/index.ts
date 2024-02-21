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
import input from './directive/v-input'

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
  input
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
