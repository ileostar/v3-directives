# v-longpress

## 功能介绍

长按元素时触发事件

## 示例

<script setup lang="ts">
  const handle = () => {
    window.alert('长按触发')
  }
</script>

<button
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '5px 8px',
    borderRadius: '5px'
    }" v-longpress:1000="handle">长按一段时间</button>

## 使用

```typescript {8}
<script setup lang="ts">
  const handle = () => {
    window.alert('长按触发')
  }
</script>

<template>
  <button v-longpress:1000="handle">长按一段时间</button>
</template>
```
