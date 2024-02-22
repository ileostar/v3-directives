:::tip
请使用 [**Vue3.0**](https://cn.vuejs.org/) 以上的版本作为应用框架
:::

## 安装

```bash
pnpm install @ileostar/v3-directives --save
# 或者使用 npm
npm install @ileostar/v3-directives --save
```

## 注册指令

```typescript {1,5}
import LeoDirectives from "@ileostar/v3-directives";

const app = createApp(App);
app.use(router).mount("#app");
app.use(LeoDirectives);
```
