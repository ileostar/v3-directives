# v-onOnce

## 功能介绍

只触发一次回调

## 示例

<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>

<button v-ononce:click="handler">只触发一次</button>


## 使用

```typescript {8}
<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>
<template>
  <button v-ononce:click="handler">只触发一次</button>
</template>
```
