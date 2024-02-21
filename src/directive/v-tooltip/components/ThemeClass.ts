import { getThemeClasses } from '../../../utils/config'

// @vue/component
export default (prop = 'theme') => ({
  computed: {
    themeClass () {
      return getThemeClasses(this[prop])
    },
  },
})
