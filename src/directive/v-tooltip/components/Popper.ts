import { defineComponent } from 'vue'
import {
  arrow,
  autoPlacement,
  computePosition,
  flip,
  getOverflowAncestors,
  offset,
  shift,
  size,
} from '@floating-ui/dom'
import { isIOS, supportsPassive } from '../../../utils/env'
import type { Placement } from '../../../utils/popper'
import { placements } from '../../../utils/popper'
import { HIDE_EVENT_MAP, SHOW_EVENT_MAP } from '../../../utils/events'
import { removeFromArray } from '../../../utils/lang'
import { nextFrame } from '../../../utils/frame'
import { config, getAllParentThemes, getDefaultConfig } from '../../../utils/config'

export type ComputePositionConfig = Parameters<typeof computePosition>[2]

interface PopperEvent extends Event {
  usedByTooltip?: boolean
  closeAllPopover?: boolean
  closePopover?: boolean
}

const shownPoppers: PopperInstance[] = []
let hidingPopper = null

const shownPoppersByTheme: Record<string, PopperInstance[]> = {}
function getShownPoppersByTheme(theme: string) {
  let list = shownPoppersByTheme[theme]
  if (!list)
    list = shownPoppersByTheme[theme] = []

  return list
}

let Element: any = function () {}
if (typeof window !== 'undefined')
  Element = window.Element

function defaultPropFactory(prop: string) {
  return function (props) {
    return getDefaultConfig(props.theme, prop)
  }
}

const PROVIDE_KEY = '__floating-vue__popper'

function createPopper() {
  return defineComponent({
    activated() {
      this.$_autoShowHide()
    },

    beforeUnmount() {
      this.dispose()
    },

    computed: {
      hasPopperShowTriggerHover() {
        return this.popperTriggers?.includes('hover') || this.popperShowTriggers?.includes('hover')
      },

      parentPopper() {
        return this[PROVIDE_KEY]?.parentPopper
      },

      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId
      },

      shouldMountContent() {
        return this.eagerMount || this.isMounted
      },

      slotData() {
        return {
          attrs: this.$attrs,
          autoHide: typeof this.autoHide === 'function' ? this.lastAutoHide : this.autoHide,
          classes: {
            ...this.classes,
            popperClass: this.popperClass,
          },
          handleResize: this.handleResize,
          hide: this.hide,
          isShown: this.isShown,
          onResize: this.onResize,
          popperId: this.popperId,
          result: this.positioningDisabled ? null : this.result,
          shouldMountContent: this.shouldMountContent,
          show: this.show,
          skipTransition: this.skipTransition,
        }
      },
    },

    created() {
      if (this.autoMinSize)
        console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.')

      if (this.autoMaxSize)
        console.warn('[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.')
    },

    data() {
      return {
        classes: {
          hideFrom: false,
          hideTo: true,
          showFrom: false,
          showTo: false,
        },
        containsGlobalTarget: false,
        isDisposed: true,
        isMounted: false,
        isShown: false,
        lastAutoHide: true,
        mouseDownContains: false,
        pendingHide: false,
        randomId: `popper_${[Math.random(), Date.now()].map(n => n.toString(36).substring(2, 10)).join('_')}`,
        result: {
          arrow: {
            centerOffset: 0,
            x: 0,
            y: 0,
          },
          placement: '',
          strategy: this.strategy,
          transformOrigin: null,
          x: 0,
          y: 0,
        },
        shownChildren: new Set(),
        skipTransition: false,
      }
    },

    deactivated() {
      this.hide()
    },

    emits: {
      'apply-hide': () => true,
      'apply-show': () => true,
      'auto-hide': () => true,
      'close-directive': () => true,
      'close-group': () => true,
      'hide': () => true,
      'resize': () => true,
      'show': () => true,
      'update:shown': (shown: boolean) => true,
    },

    inject: {
      [PROVIDE_KEY]: { default: null },
    },

    methods: {
      $_addEventListeners() {
      // Add trigger show events

        const handleShow = (event: PopperEvent) => {
          if (this.isShown && !this.$_hideInProgress)
            return

          event.usedByTooltip = true
          // Prevent open on mobile touch in global close
          !this.$_preventShow && this.show({ event })
        }

        this.$_registerTriggerListeners(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow)
        this.$_registerTriggerListeners([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow)

        // Add trigger hide events

        const handleHide = (event: PopperEvent) => {
          if (event.usedByTooltip)
            return

          this.hide({ event })
        }

        this.$_registerTriggerListeners(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide)
        this.$_registerTriggerListeners([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide)
      },

      $_applyAttrsToTarget(attrs) {
        for (const el of this.$_targetNodes) {
          for (const n in attrs) {
            const value = attrs[n]
            if (value == null)
              el.removeAttribute(n)
            else
              el.setAttribute(n, value)
          }
        }
      },

      async $_applyHide(skipTransition = false) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          this.$_hideInProgress = false
          return
        }
        clearTimeout(this.$_scheduleTimer)

        // Already hidden
        if (!this.isShown)
          return

        this.skipTransition = skipTransition
        removeFromArray(shownPoppers, this)
        if (shownPoppers.length === 0)
          document.body.classList.remove('v-popper--some-open')

        for (const theme of getAllParentThemes(this.theme)) {
          const list = getShownPoppersByTheme(theme)
          removeFromArray(list, this)
          if (list.length === 0)
            document.body.classList.remove(`v-popper--some-open--${theme}`)
        }

        if (hidingPopper === this)
          hidingPopper = null

        this.isShown = false

        this.$_applyAttrsToTarget({
          'aria-describedby': undefined,
          'data-popper-shown': undefined,
        })

        clearTimeout(this.$_disposeTimer)
        const disposeTime = this.disposeTimeout
        if (disposeTime !== null) {
          this.$_disposeTimer = setTimeout(() => {
            if (this.$_popperNode) {
            // Don't remove popper instance, just the HTML element
              this.$_detachPopperNode()
              this.isMounted = false
            }
          }, disposeTime)
        }

        this.$_removeEventListeners('scroll')

        this.$emit('apply-hide')

        // Advanced classes
        this.classes.showFrom = false
        this.classes.showTo = false
        this.classes.hideFrom = true
        this.classes.hideTo = false
        await nextFrame()
        this.classes.hideFrom = false
        this.classes.hideTo = true
      },

      async $_applyShow(skipTransition = false) {
        clearTimeout(this.$_disposeTimer)
        clearTimeout(this.$_scheduleTimer)
        this.skipTransition = skipTransition

        // Already shown
        if (this.isShown)
          return

        this.$_ensureTeleport()
        await nextFrame()
        await this.$_computePosition()
        await this.$_applyShowEffect()

        // Scroll
        if (!this.positioningDisabled) {
          this.$_registerEventListeners([
            ...getOverflowAncestors(this.$_referenceNode),
            ...getOverflowAncestors(this.$_popperNode),
          ], 'scroll', () => {
            this.$_computePosition()
          })
        }
      },

      async $_applyShowEffect() {
        if (this.$_hideInProgress)
          return

        // Advanced animations
        if (this.computeTransformOrigin) {
          const bounds = this.$_referenceNode.getBoundingClientRect()
          const popperWrapper = this.$_popperNode.querySelector('.v-popper__wrapper')
          const parentBounds = popperWrapper.parentNode.getBoundingClientRect()
          const x = (bounds.x + bounds.width / 2) - (parentBounds.left + popperWrapper.offsetLeft)
          const y = (bounds.y + bounds.height / 2) - (parentBounds.top + popperWrapper.offsetTop)
          this.result.transformOrigin = `${x}px ${y}px`
        }

        this.isShown = true

        this.$_applyAttrsToTarget({
          'aria-describedby': this.popperId,
          'data-popper-shown': '',
        })

        const showGroup = this.showGroup
        if (showGroup) {
          let popover
          for (let i = 0; i < shownPoppers.length; i++) {
            popover = shownPoppers[i]
            if (popover.showGroup !== showGroup) {
              popover.hide()
              popover.$emit('close-group')
            }
          }
        }

        shownPoppers.push(this)
        document.body.classList.add('v-popper--some-open')
        for (const theme of getAllParentThemes(this.theme)) {
          getShownPoppersByTheme(theme).push(this)
          document.body.classList.add(`v-popper--some-open--${theme}`)
        }

        this.$emit('apply-show')

        // Advanced classes
        this.classes.showFrom = true
        this.classes.showTo = false
        this.classes.hideFrom = false
        this.classes.hideTo = false
        await nextFrame()
        this.classes.showFrom = false
        this.classes.showTo = true
        if (!this.noAutoFocus)
          this.$_popperNode.focus()
      },

      $_autoShowHide() {
        if (this.shown)
          this.show()
        else
          this.hide()
      },

      $_computeDelay(type: 'show' | 'hide') {
        const delay = this.delay
        return Number.parseInt((delay && delay[type]) || delay || 0)
      },

      async $_computePosition() {
        if (this.isDisposed || this.positioningDisabled)
          return

        const options: ComputePositionConfig = {
          middleware: [],
          strategy: this.strategy,
        }

        // Offset
        if (this.distance || this.skidding) {
          options.middleware.push(offset({
            crossAxis: this.skidding,
            mainAxis: this.distance,
          }))
        }

        // Placement
        const isPlacementAuto = this.placement.startsWith('auto')
        if (isPlacementAuto) {
          options.middleware.push(autoPlacement({
            alignment: this.placement.split('-')[1] ?? '',
          }))
        }
        else {
          options.placement = this.placement
        }

        if (this.preventOverflow) {
        // Shift
          if (this.shift) {
            options.middleware.push(shift({
              boundary: this.boundary,
              crossAxis: this.shiftCrossAxis,
              padding: this.overflowPadding,
            }))
          }

          // Flip
          if (!isPlacementAuto && this.flip) {
            options.middleware.push(flip({
              boundary: this.boundary,
              padding: this.overflowPadding,
            }))
          }
        }

        // Arrow
        options.middleware.push(arrow({
          element: this.$_arrowNode,
          padding: this.arrowPadding,
        }))

        // Arrow overflow
        if (this.arrowOverflow) {
          options.middleware.push({
            fn: ({ middlewareData, placement, rects }) => {
              let overflow: boolean
              const { centerOffset } = middlewareData.arrow
              if (placement.startsWith('top') || placement.startsWith('bottom'))
                overflow = Math.abs(centerOffset) > rects.reference.width / 2
              else
                overflow = Math.abs(centerOffset) > rects.reference.height / 2

              return {
                data: {
                  overflow,
                },
              }
            },
            name: 'arrowOverflow',
          })
        }

        // Auto min size for the popper inner
        if (this.autoMinSize || this.autoSize) {
          const autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? 'min' : null
          options.middleware.push({
            fn: ({ middlewareData, placement, rects }) => {
              if (middlewareData.autoSize?.skip)
                return {}

              let width: number
              let height: number
              if (placement.startsWith('top') || placement.startsWith('bottom'))
                width = rects.reference.width
              else
                height = rects.reference.height

              // Apply and re-compute
              this.$_innerNode.style[autoSize === 'min' ? 'minWidth' : autoSize === 'max' ? 'maxWidth' : 'width'] = width != null ? `${width}px` : null
              this.$_innerNode.style[autoSize === 'min' ? 'minHeight' : autoSize === 'max' ? 'maxHeight' : 'height'] = height != null ? `${height}px` : null
              return {
                data: {
                  skip: true,
                },
                reset: {
                  rects: true,
                },
              }
            },
            name: 'autoSize',
          })
        }

        // Auto max size for the popper inner
        if (this.autoMaxSize || this.autoBoundaryMaxSize) {
        // Reset size to bestFit strategy can apply
          this.$_innerNode.style.maxWidth = null
          this.$_innerNode.style.maxHeight = null

          options.middleware.push(size({
            apply: ({ availableHeight, availableWidth }) => {
            // Apply and re-compute
              this.$_innerNode.style.maxWidth = availableWidth != null ? `${availableWidth}px` : null
              this.$_innerNode.style.maxHeight = availableHeight != null ? `${availableHeight}px` : null
            },
            boundary: this.boundary,
            padding: this.overflowPadding,
          }))
        }

        const data = await computePosition(this.$_referenceNode, this.$_popperNode, options)

        Object.assign(this.result, {
          arrow: {
            ...data.middlewareData.arrow,
            ...data.middlewareData.arrowOverflow,
          },
          placement: data.placement,
          strategy: data.strategy,
          x: data.x,
          y: data.y,
        })
      },

      $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
      },

      $_ensureTeleport() {
        if (this.isDisposed)
          return

        let container = this.container
        // if container is a query, get the relative element
        if (typeof container === 'string') {
          container = window.document.querySelector(container)
        }
        else if (container === false) {
        // if container is `false`, set it to reference parent
          container = this.$_targetNodes[0].parentNode
        }

        if (!container)
          throw new Error(`No container for popover: ${this.container}`)

        container.appendChild(this.$_popperNode)
        this.isMounted = true
      },

      $_handleGlobalClose(event, touch = false) {
        if (this.$_showFrameLocked)
          return

        this.hide({ event })

        if (event.closePopover)
          this.$emit('close-directive')
        else
          this.$emit('auto-hide')

        if (touch) {
          this.$_preventShow = true
          setTimeout(() => {
            this.$_preventShow = false
          }, 300)
        }
      },

      $_isAimingPopper() {
        const referenceBounds: DOMRect = this.$_referenceNode.getBoundingClientRect()
        if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
          const popperBounds: DOMRect = this.$_popperNode.getBoundingClientRect()
          const vectorX = mouseX - mousePreviousX
          const vectorY = mouseY - mousePreviousY
          const distance = (popperBounds.left + popperBounds.width / 2) - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY
          // Make the vector long enough to be sure that it can intersect with the popper
          const newVectorLength = distance + popperBounds.width + popperBounds.height
          const edgeX = mousePreviousX + vectorX * newVectorLength
          const edgeY = mousePreviousY + vectorY * newVectorLength
          // Check for collision between the vector and the popper bounds
          return (
            lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) // Left edge
            || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) // Top edge
            || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) // Right edge
            || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom) // Bottom edge
          )
        }
        return false
      },

      $_refreshListeners() {
        if (!this.isDisposed) {
          this.$_removeEventListeners()
          this.$_addEventListeners()
        }
      },

      $_registerEventListeners(targetNodes: Element[], eventType: string, handler: (event: Event) => void) {
        this.$_events.push({ eventType, handler, targetNodes })
        targetNodes.forEach(node => node.addEventListener(eventType, handler, supportsPassive
          ? {
              passive: true,
            }
          : undefined))
      },

      $_registerTriggerListeners(targetNodes: Element[], eventMap: Record<string, string>, commonTriggers, customTrigger, handler: (event: Event) => void) {
        let triggers = commonTriggers

        if (customTrigger != null)
          triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger

        triggers.forEach((trigger) => {
          const eventType = eventMap[trigger]
          if (eventType)
            this.$_registerEventListeners(targetNodes, eventType, handler)
        })
      },

      $_removeEventListeners(filterEventType?: string) {
        const newList = []
        this.$_events.forEach((listener) => {
          const { eventType, handler, targetNodes } = listener
          if (!filterEventType || filterEventType === eventType)
            targetNodes.forEach(node => node.removeEventListener(eventType, handler))
          else
            newList.push(listener)
        })
        this.$_events = newList
      },

      $_scheduleHide(_event, skipDelay = false) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          return
        }
        this.$_updateParentShownChildren(false)
        this.$_hideInProgress = true
        clearTimeout(this.$_scheduleTimer)

        if (this.isShown) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
          hidingPopper = this
        }

        if (skipDelay)
          this.$_applyHide()
        else
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'))
      },

      $_scheduleShow(_event, skipDelay = false) {
        this.$_updateParentShownChildren(true)
        this.$_hideInProgress = false
        clearTimeout(this.$_scheduleTimer)

        if (hidingPopper && this.instantMove && hidingPopper.instantMove && hidingPopper !== this.parentPopper) {
          hidingPopper.$_applyHide(true)
          this.$_applyShow(true)
          return
        }

        if (skipDelay)
          this.$_applyShow()
        else
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'))
      },

      $_swapTargetAttrs(attrFrom, attrTo) {
        for (const el of this.$_targetNodes) {
          const value = el.getAttribute(attrFrom)
          if (value) {
            el.removeAttribute(attrFrom)
            el.setAttribute(attrTo, value)
          }
        }
      },

      $_updateParentShownChildren(value) {
        let parent = this.parentPopper
        while (parent) {
          if (value) {
            parent.shownChildren.add(this.randomId)
          }
          else {
            parent.shownChildren.delete(this.randomId)

            if (parent.pendingHide)
              parent.hide()
          }
          parent = parent.parentPopper
        }
      },

      dispose() {
        if (this.isDisposed)
          return
        this.isDisposed = true
        this.$_removeEventListeners()
        this.hide({ skipDelay: true })
        this.$_detachPopperNode()

        this.isMounted = false
        this.isShown = false

        this.$_updateParentShownChildren(false)

        this.$_swapTargetAttrs('data-original-title', 'title')
      },

      hide({ event = null, skipDelay = false } = {}) {
        if (this.$_hideInProgress)
          return

        // Abort if child is shown
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          return
        }

        // Abort if aiming for the popper
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          if (this.parentPopper) {
            this.parentPopper.lockedChild = this
            clearTimeout(this.parentPopper.lockedChildTimer)
            this.parentPopper.lockedChildTimer = setTimeout(() => {
              if (this.parentPopper.lockedChild === this) {
                this.parentPopper.lockedChild.hide({ skipDelay })
                this.parentPopper.lockedChild = null
              }
            }, 1000)
          }
          return
        }
        if (this.parentPopper?.lockedChild === this)
          this.parentPopper.lockedChild = null

        this.pendingHide = false
        this.$_scheduleHide(event, skipDelay)

        this.$emit('hide')
        this.$emit('update:shown', false)
      },

      init() {
        if (!this.isDisposed)
          return
        this.isDisposed = false
        this.isMounted = false
        this.$_events = []
        this.$_preventShow = false

        // Nodes
        this.$_referenceNode = this.referenceNode?.() ?? this.$el
        this.$_targetNodes = this.targetNodes().filter(e => e.nodeType === e.ELEMENT_NODE)
        this.$_popperNode = this.popperNode()
        this.$_innerNode = this.$_popperNode.querySelector('.v-popper__inner')
        this.$_arrowNode = this.$_popperNode.querySelector('.v-popper__arrow-container')

        this.$_swapTargetAttrs('title', 'data-original-title')

        this.$_detachPopperNode()

        if (this.triggers.length)
          this.$_addEventListeners()

        if (this.shown)
          this.show()
      },

      async onResize() {
        if (this.isShown) {
          await this.$_computePosition()
          this.$emit('resize')
        }
      },

      show({ event = null, force = false, skipDelay = false } = {}) {
        if (this.parentPopper?.lockedChild && this.parentPopper.lockedChild !== this)
          return

        this.pendingHide = false
        if (force || !this.disabled) {
          if (this.parentPopper?.lockedChild === this)
            this.parentPopper.lockedChild = null

          this.$_scheduleShow(event, skipDelay)
          this.$emit('show')

          // Prevent hiding with global handler
          this.$_showFrameLocked = true
          requestAnimationFrame(() => {
            this.$_showFrameLocked = false
          })
        }
        this.$emit('update:shown', true)
      },
    },

    mounted() {
      this.init()
      this.$_detachPopperNode()
    },

    name: 'VPopper',

    props: {

      ariaId: {
        default: null,
      },

      arrowOverflow: {
        default: defaultPropFactory('arrowOverflow'),
        type: Boolean,
      },

      arrowPadding: {
        default: defaultPropFactory('arrowPadding'),
        type: [Number, String],
      },

      autoBoundaryMaxSize: {
        default: defaultPropFactory('autoBoundaryMaxSize'),
        type: Boolean,
      },

      autoHide: {
        default: defaultPropFactory('autoHide'),
        type: [Boolean, Function],
      },

      /**
       * @deprecated
       */
      autoMaxSize: {
        default: defaultPropFactory('autoMaxSize'),
        type: Boolean,
      },

      /**
       * @deprecated
       */
      autoMinSize: {
        default: defaultPropFactory('autoMinSize'),
        type: Boolean,
      },

      autoSize: {
        default: defaultPropFactory('autoSize'),
        type: [Boolean, String],
      },

      boundary: {
        default: defaultPropFactory('boundary'),
        type: [String, Element],
      },

      computeTransformOrigin: {
        default: defaultPropFactory('computeTransformOrigin'),
        type: Boolean,
      },

      container: {
        default: defaultPropFactory('container'),
        type: [String, Object, Element, Boolean],
      },

      delay: {
        default: defaultPropFactory('delay'),
        type: [String, Number, Object],
      },

      disabled: {
        default: defaultPropFactory('disabled'),
        type: Boolean,
      },

      disposeTimeout: {
        default: defaultPropFactory('disposeTimeout'),
        type: Number,
      },

      distance: {
        default: defaultPropFactory('distance'),
        type: [Number, String],
      },

      eagerMount: {
        default: defaultPropFactory('eagerMount'),
        type: Boolean,
      },

      flip: {
        default: defaultPropFactory('flip'),
        type: Boolean,
      },

      handleResize: {
        default: defaultPropFactory('handleResize'),
        type: Boolean,
      },

      hideTriggers: {
        default: defaultPropFactory('hideTriggers'),
        type: [Array, Function],
      },

      instantMove: {
        default: defaultPropFactory('instantMove'),
        type: Boolean,
      },

      noAutoFocus: {
        default: defaultPropFactory('noAutoFocus'),
        type: Boolean,
      },

      overflowPadding: {
        default: defaultPropFactory('overflowPadding'),
        type: [Number, String],
      },

      placement: {
        default: defaultPropFactory('placement'),
        type: String,
        validator: (value: Placement) => placements.includes(value),
      },

      popperClass: {
        default: defaultPropFactory('popperClass'),
        type: [String, Array, Object],
      },

      popperHideTriggers: {
        default: defaultPropFactory('popperHideTriggers'),
        type: [Array, Function],
      },

      popperNode: {
        required: true,
        type: Function,
      },

      popperShowTriggers: {
        default: defaultPropFactory('popperShowTriggers'),
        type: [Array, Function],
      },

      popperTriggers: {
        default: defaultPropFactory('popperTriggers'),
        type: Array,
      },

      positioningDisabled: {
        default: defaultPropFactory('positioningDisabled'),
        type: Boolean,
      },

      preventOverflow: {
        default: defaultPropFactory('preventOverflow'),
        type: Boolean,
      },

      referenceNode: {
        default: null,
        type: Function,
      },

      shift: {
        default: defaultPropFactory('shift'),
        type: Boolean,
      },

      shiftCrossAxis: {
        default: defaultPropFactory('shiftCrossAxis'),
        type: Boolean,
      },

      showGroup: {
        default: null,
        type: String,
      },

      shown: {
        default: false,
        type: Boolean,
      },

      showTriggers: {
        default: defaultPropFactory('showTriggers'),
        type: [Array, Function],
      },

      skidding: {
        default: defaultPropFactory('skidding'),
        type: [Number, String],
      },

      strategy: {
        default: defaultPropFactory('strategy'),
        type: String,
        validator: (value: string) => ['absolute', 'fixed'].includes(value),
      },

      targetNodes: {
        required: true,
        type: Function,
      },

      theme: {
        required: true,
        type: String,
      },

      triggers: {
        default: defaultPropFactory('triggers'),
        type: Array,
      },
    },

    provide() {
      return {
        [PROVIDE_KEY]: {
          parentPopper: this,
        },
      }
    },

    render() {
      return this.$slots.default(this.slotData)
    },

    watch: {
      async container() {
        if (this.isShown) {
          this.$_ensureTeleport()
          await this.$_computePosition()
        }
      },

      disabled(value) {
        if (value)
          this.dispose()
        else
          this.init()
      },

      positioningDisabled: '$_refreshListeners',

      shown: '$_autoShowHide',

      triggers: {
        deep: true,
        handler: '$_refreshListeners',
      },

      ...[
        'placement',
        'distance',
        'skidding',
        'boundary',
        'strategy',
        'overflowPadding',
        'arrowPadding',
        'preventOverflow',
        'shift',
        'shiftCrossAxis',
        'flip',
      ].reduce((acc, prop) => {
        acc[prop] = '$_computePosition'
        return acc
      }, {}),
    },
  })
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    const options = supportsPassive
      ? {
          capture: true,
          passive: true,
        }
      : true
    document.addEventListener('touchstart', event => handleGlobalPointerDown(event, true), options)
    document.addEventListener('touchend', event => handleGlobalPointerUp(event, true), options)
  }
  else {
    window.addEventListener('mousedown', event => handleGlobalPointerDown(event, false), true)
    window.addEventListener('click', event => handleGlobalPointerUp(event, false), true)
  }
  window.addEventListener('resize', recomputeAllPoppers)
}

function handleGlobalPointerDown(event: PopperEvent, touch: boolean) {
  if (config.autoHideOnMousedown) {
    handleGlobalClose(event, touch)
  }
  else {
    // Compute contains only
    for (let i = 0; i < shownPoppers.length; i++) {
      const popper = shownPoppers[i]
      try {
        popper.mouseDownContains = popper.popperNode().contains(event.target)
      }
      catch (e) {
        // noop
      }
    }
  }
}

function handleGlobalPointerUp(event: PopperEvent, touch: boolean) {
  if (!config.autoHideOnMousedown)
    handleGlobalClose(event, touch)
}

function handleGlobalClose(event: PopperEvent, touch: boolean) {
  const preventClose: Record<string, true> = {}

  for (let i = shownPoppers.length - 1; i >= 0; i--) {
    const popper = shownPoppers[i]
    try {
      const contains = popper.containsGlobalTarget = popper.mouseDownContains || popper.popperNode().contains(event.target)
      popper.pendingHide = false

      // Delay so that close directive has time to set values (closeAllPopover, closePopover)
      requestAnimationFrame(() => {
        popper.pendingHide = false
        if (preventClose[popper.randomId])
          return

        if (shouldAutoHide(popper, contains, event)) {
          popper.$_handleGlobalClose(event, touch)

          // Only close child popper
          if (!event.closeAllPopover && event.closePopover && contains) {
            let parent = popper.parentPopper
            while (parent) {
              preventClose[parent.randomId] = true
              parent = parent.parentPopper
            }
            return
          }

          // Auto hide parents
          let parent = popper.parentPopper as PopperInstance
          while (parent) {
            if (shouldAutoHide(parent, parent.containsGlobalTarget, event))
              parent.$_handleGlobalClose(event, touch)
            else
              break

            parent = parent.parentPopper
          }
        }
      })
    }
    catch (e) {
      // noop
    }
  }
}

function shouldAutoHide(popper: PopperInstance, contains, event: PopperEvent): boolean {
  return event.closeAllPopover || (event.closePopover && contains) || (getAutoHideResult(popper, event) && !contains)
}

function getAutoHideResult(popper: PopperInstance, event: Event) {
  if (typeof popper.autoHide === 'function') {
    const result = popper.autoHide(event)
    popper.lastAutoHide = result
    return result
  }
  return popper.autoHide
}

export function recomputeAllPoppers() {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.$_computePosition()
  }
}

export function hideAllPoppers() {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.hide()
  }
}

// Track mouse movement to detect aiming at the popper

let mousePreviousX = 0
let mousePreviousY = 0
let mouseX = 0
let mouseY = 0

if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (event) => {
    mousePreviousX = mouseX
    mousePreviousY = mouseY
    mouseX = event.clientX
    mouseY = event.clientY
  }, supportsPassive
    ? {
        passive: true,
      }
    : undefined)
}

function lineIntersectsLine(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  return (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
}

export default createPopper

export type PopperInstance = ReturnType<typeof createPopper> extends { new (): infer T } ? T : never
