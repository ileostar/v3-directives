# v-throttle

## 功能介绍

节流功能

## 示例

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const onSubmit = () => {
  count.value++;
}
</script>

<div :style="{
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '10px'
}">
<button :style="{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px'
      }"
      v-once v-throttle:click-2000="onSubmit">快速点击我</button>
  <span>执行次数: {{ count }}</span>
</div>

## 使用

```typescript {11}
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const onSubmit = () => {
  count.value++;
}
</script>
<tempalte>
  <div>
    <button v-once v-throttle:click-2000="onSubmit">快速点击我</button>
    <span>执行次数: {{ count }}</span>
  </div>
</tempalte>
```

## 规则

|  参数   | 类型  |   默认   | 说明  |
|  ----  | ----  |  ----  | ----  |
| eventType  | [事件修饰符](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers) |   click   | 事件类型，可为空 |
| delay  | 时间，毫秒为单位 |   300   | 事件类型，可为空  |
| handleEvent  | - |   -   | 处理事件，必填  |

> **举例: v-throttle:click-1000="handle"**
> 
> eventType: click
> 
> delay: 1000
> 
> handleEvent: handle

<style scoped>
  table {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
  td {
    width: 25%;

  }
  th {
    width: 25%;
  }
</style>


:::tip
如果存在响应式数据，需要使用[v-once](https://cn.vuejs.org/api/built-in-directives.html#v-once)指令，否则会触发多次响应式数据更新，导致DOM重新渲染，使节流失效
:::
