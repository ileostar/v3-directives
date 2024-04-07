// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
export type FloatingVueConfig = any // @TODO

export const config: FloatingVueConfig = {
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  // Arrow padding (px)
  arrowPadding: 0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: false,
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Default container where the tooltip will be appended
  container: 'body',
  // Disable popper components
  disabled: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Default position offset along main axis (px)
  distance: 5,
  // Flip to the opposite placement if needed
  flip: true,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Overflow padding (px)
  overflowPadding: 0,
  // Triggers on the popper itself
  popperTriggers: [],
  // Prevent overflow
  preventOverflow: true,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: true,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Positioning strategy
  strategy: 'absolute',
  // Themes
  themes: {
    tooltip: {
      // Delay (ms)
      delay: {
        hide: 0,
        show: 200,
      },
      // Update popper on content resize
      handleResize: false,
      // Close tooltip on click on tooltip target
      hideTriggers: events => [...events, 'click'],
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...',
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
    },
  },
}

/**
 * Get default config value depending on theme
 */
export function getDefaultConfig(theme: string, key: string): any {
  let themeConfig = config.themes[theme] || {}
  let value
  do {
    value = themeConfig[key]
    if (typeof value === 'undefined') {
      // Support theme extend
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {}
      }
      else {
        // Base config
        themeConfig = null
        value = config[key]
      }
    }
    else {
      themeConfig = null
    }
  } while (themeConfig)
  return value
}

/**
 * Theme CSS inheritance
 */
export function getThemeClasses(theme: string): string[] {
  const result = [theme]
  let themeConfig = config.themes[theme] || {}
  do {
    // Support theme extend
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend)
      themeConfig = config.themes[themeConfig.$extend] || {}
    }
    else {
      themeConfig = null
    }
  } while (themeConfig)
  return result.map(c => `v-popper--theme-${c}`)
}

export function getAllParentThemes(theme: string): string[] {
  const result = [theme]
  let themeConfig = config.themes[theme] || {}
  do {
    // Support theme extend
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend)
      themeConfig = config.themes[themeConfig.$extend] || {}
    }
    else {
      themeConfig = null
    }
  } while (themeConfig)
  return result
}
