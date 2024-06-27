:::tip
请使用 [**Vue3.0**](https://cn.vuejs.org/) 以上的版本作为应用框架
:::

## 安装

```bash
pnpm add @ileostar/v3-directives
# 或者使用 npm
npm install @ileostar/v3-directives --save
```

## 注册指令

```typescript {1,5}
import LeoDirectives from '@ileostar/v3-directives'

const app = createApp(App)
app.use(router).mount('#app')
app.use(LeoDirectives)
```

当然你也可以按需引入

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
// 根据需求引入vDebounce
import { vDebounce } from '@ileostar/v3-directives'

app.directives('vDebounce', vDebounce)
```
