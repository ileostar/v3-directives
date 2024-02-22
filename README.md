# v3-directives

☠Vue3 directives 自定义指令库 <a href="https://v3-directives.netlify.app/">📖 在线文档</a>

## Usage

1. Install package （安装依赖）

```bash
npm install @ileostar/v3-directives --save
```

1. Registration Directive （注册指令）

```typescript
import VueDirectives from "@ileostar/v3-directives";
const app = createApp(App);
app.use(router).mount("#app");
app.use(VueDirectives);
```

## Directives

| Directive                                                                           | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| [v-backtop](https://v3-directives.netlify.app/zh/directives/v-backtop.md)           | Add a return to top function for an element       |
| [v-clickOutside](https://v3-directives.netlify.app/zh/directives/v-clickOutside.md) | Event when clicking outside the element triggers  |
| [v-copy](https://v3-directives.netlify.app/zh/directives/v-copy.md)                 | Copy the passed value to the clipboard            |
| [v-debounce](https://v3-directives.netlify.app/zh/directives/v-debounce.md)         | Anti-shaking function                             |
| [v-doubleClick](https://v3-directives.netlify.app/zh/directives/v-doubleClick.md)   | Trigger an event on double-click                  |
| [v-draggable](https://v3-directives.netlify.app/zh/directives/v-draggable.md)       | Makes elements draggable                          |
| [v-ellipsis](https://v3-directives.netlify.app/zh/directives/v-ellipsis.md)         | Omit excess text                                  |
| [v-emoji](https://v3-directives.netlify.app/zh/directives/v-emoji.md)               | Prohibit emoji input                              |
| [v-empty](https://v3-directives.netlify.app/zh/directives/v-empty.md)               | Used to display empty status                      |
| [v-flicker](https://v3-directives.netlify.app/zh/directives/v-flicker.md)           | Element flicker                                   |
| [v-focus](https://v3-directives.netlify.app/zh/directives/v-focus.md)               | Input box autofocus                               |
| [v-highlight](https://v3-directives.netlify.app/zh/directives/v-highlight.md)       | Text highlighting                                 |
| [v-hover](https://v3-directives.netlify.app/zh/directives/v-hover.md)               | Triggers a callback after the element             |
| [v-input](https://v3-directives.netlify.app/zh/directives/v-input.md)               | Input formatting                                  |
| [v-lazyImg](https://v3-directives.netlify.app/zh/directives/v-lazyImg.md)           | Lazy image loading                                |
| [v-loading](https://v3-directives.netlify.app/zh/directives/v-loading.md)           | Add loading animation                             |
| [v-longpress](https://v3-directives.netlify.app/zh/directives/v-longpress.md)       | Trigger event when long pressing an element       |
| [v-money](https://v3-directives.netlify.app/zh/directives/v-money.md)               | Format numbers into money format                  |
| [v-onOnce](https://v3-directives.netlify.app/zh/directives/v-onOnce.md)             | Only one callback is triggered                    |
| [v-permission](https://v3-directives.netlify.app/zh/directives/v-permission.md)     | Rapid realization of authentication               |
| [v-resize](https://v3-directives.netlify.app/zh/directives/v-resize.md)             | Response to resize the element                    |
| [v-ripple](https://v3-directives.netlify.app/zh/directives/v-ripple.md)             | Add ripple dynamic effects to the clicked element |
| [v-slideIn](https://v3-directives.netlify.app/zh/directives/v-slideIn.md)           | Add entry animation                               |
| [v-throttle](https://v3-directives.netlify.app/zh/directives/v-throttle.md)         | Throttling function                               |
| [v-waterMarker](https://v3-directives.netlify.app/zh/directives/v-waterMarker.md)   | Add custom watermark                              |
