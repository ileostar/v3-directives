// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import VueDirectives from '../../../src'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueDirectives);
  }
} satisfies Theme
