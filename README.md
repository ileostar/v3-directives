# v3-directives

![](/screenshot.png)

☠Vue3 directives 自定义指令库: <a href="https://v3-directives.netlify.app/">📖 在线文档</a>

![Static Badge](https://img.shields.io/npm/v/@ileostar/v3-directives?color=409eff)
![Static Badge](https://img.shields.io/github/stars/ileostar/v3-directives?style=social)

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
| [v-backtop](https://v3-directives.netlify.app/zh/directives/v-backtop.html)           | Add a return to top function for an element       |
| [v-clickOutside](https://v3-directives.netlify.app/zh/directives/v-clickOutside.html) | Event when clicking outside the element triggers  |
| [v-copy](https://v3-directives.netlify.app/zh/directives/v-copy.html)                 | Copy the passed value to the clipboard            |
| [v-debounce](https://v3-directives.netlify.app/zh/directives/v-debounce.html)         | Anti-shaking function                             |
| [v-doubleClick](https://v3-directives.netlify.app/zh/directives/v-doubleClick.html)   | Trigger an event on double-click                  |
| [v-draggable](https://v3-directives.netlify.app/zh/directives/v-draggable.html)       | Makes elements draggable                          |
| [v-ellipsis](https://v3-directives.netlify.app/zh/directives/v-ellipsis.html)         | Omit excess text                                  |
| [v-emoji](https://v3-directives.netlify.app/zh/directives/v-emoji.html)               | Prohibit emoji input                              |
| [v-empty](https://v3-directives.netlify.app/zh/directives/v-empty.html)               | Used to display empty status                      |
| [v-flicker](https://v3-directives.netlify.app/zh/directives/v-flicker.html)           | Element flicker                                   |
| [v-focus](https://v3-directives.netlify.app/zh/directives/v-focus.html)               | Input box autofocus                               |
| [v-highlight](https://v3-directives.netlify.app/zh/directives/v-highlight.html)       | Text highlighting                                 |
| [v-hover](https://v3-directives.netlify.app/zh/directives/v-hover.html)               | Triggers a callback after the element             |
| [v-input](https://v3-directives.netlify.app/zh/directives/v-input.html)               | Input formatting                                  |
| [v-lazyImg](https://v3-directives.netlify.app/zh/directives/v-lazyImg.html)           | Lazy image loading                                |
| [v-loading](https://v3-directives.netlify.app/zh/directives/v-loading.html)           | Add loading animation                             |
| [v-longpress](https://v3-directives.netlify.app/zh/directives/v-longpress.html)       | Trigger event when long pressing an element       |
| [v-money](https://v3-directives.netlify.app/zh/directives/v-money.html)               | Format numbers into money format                  |
| [v-onOnce](https://v3-directives.netlify.app/zh/directives/v-onOnce.html)             | Only one callback is triggered                    |
| [v-permission](https://v3-directives.netlify.app/zh/directives/v-permission.html)     | Rapid realization of authentication               |
| [v-resize](https://v3-directives.netlify.app/zh/directives/v-resize.html)             | Response to resize the element                    |
| [v-ripple](https://v3-directives.netlify.app/zh/directives/v-ripple.html)             | Add ripple dynamic effects to the clicked element |
| [v-slideIn](https://v3-directives.netlify.app/zh/directives/v-slideIn.html)           | Add entry animation                               |
| [v-throttle](https://v3-directives.netlify.app/zh/directives/v-throttle.html)         | Throttling function                               |
| [v-waterMarker](https://v3-directives.netlify.app/zh/directives/v-waterMarker.html)   | Add custom watermark                              |

## Contributors

Contributions are welcome, PR is welcome
