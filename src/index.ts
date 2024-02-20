import { App, Directive } from 'vue'
import backtop from './directive/v-backtop'
import clickOutside from './directive/v-clickOutside'
import copy from './directive/v-copy'
import debounce from './directive/v-debounce'
import doubleClick from './directive/v-doubleClick'
import draggable from './directive/v-draggable'
import ellipsis from './directive/v-ellipsis'

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
  ellipsis
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
