import { App, Directive } from 'vue'
import copy from './directive/v-copy'

interface DirectiveCollection {
  [key: string]: Directive
}

const directives: DirectiveCollection = {
  copy,
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
