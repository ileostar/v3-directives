:::tip
Please use [**Vue3.0**](https://cn.vuejs.org/) or above as the application framework.
:::

## Installation

```bash
pnpm install @ileostar/v3-directives --save
# Or use npm
npm install @ileostar/v3-directives --save
```

## Registration Directives

```typescript{1,5}
import VueDirectives from "v3-directives";

const app = createApp(App);
app.use(router).mount("#app");
app.use(VueDirectives);
```


