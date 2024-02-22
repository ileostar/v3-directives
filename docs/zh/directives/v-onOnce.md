# v-onOnce

## 功能介绍

只触发一次回调

## 示例

<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>

<button :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '5px 8px',
    borderRadius: '5px'
    }" v-onOnce:click="handler">只触发一次</button>

## 使用

```typescript {7}
<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>
<template>
  <button v-onOnce:click="handler">只触发一次</button>
</template>
```
