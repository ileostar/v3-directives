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

<style scoped>
span {
  color: #4DFFA8;
  font-weight: bold;
}
</style>
