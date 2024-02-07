import { App, Directive } from 'vue'
import vCopy from './directive/v-copy'

interface DirectiveCollection {
  [key: string]: Directive
}

const directives: DirectiveCollection = {
  vCopy,
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
