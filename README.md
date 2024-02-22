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
