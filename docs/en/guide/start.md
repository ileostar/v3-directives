:::tip
Please use [**Vue3.0**](https://cn.vuejs.org/) or above as the application framework.
:::

## Installation

```bash
pnpm add @ileostar/v3-directives
# Or use npm
npm install @ileostar/v3-directives --save
```

## Registration Directives

```typescript{1,5}
import LeoDirectives from "@ileostar/v3-directives";

const app = createApp(App);
app.use(router).mount("#app");
app.use(LeoDirectives);
```

You can also introduce it on demand

```typescript
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
  waterMarker as vWaterMarker
}
```

例子：

```typescript
// Introduce vDebounce as required
import { vDebounce } from '@ileostar/v3-directives'

app.directives('vDebounce', vDebounce)
```

<style scoped>
span {
  color: #4DFFA8;
  font-weight: bold;
}
</style>
