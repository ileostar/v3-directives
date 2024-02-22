# v-debounce

## 功能介绍

防抖功能

## 示例

<script setup lang="ts">
  const handle = () => {
    window.alert('触发了事件')
  }
</script>

<button
  v-debounce="handle"
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px'
    }">
快速点击我
</button>

## 使用

```typescript {7}
<script setup lang="ts">
  const handle = () => {
    window.alert('触发了事件')
  }
</script>
<template>
  <button v-debounce="handle">快速点击我</button>
</template>
```

## 规则

| 参数        | 类型                                                                                    | 默认  | 说明             |
| ----------- | --------------------------------------------------------------------------------------- | ----- | ---------------- |
| eventType   | [事件修饰符](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers) | click | 事件类型，可为空 |
| delay       | 时间，毫秒为单位                                                                        | 300   | 延迟时间，可为空 |
| handleEvent | -                                                                                       | -     | 处理事件，必填   |

> **举例: v-debounce:click-1000="handle"**
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
