# v-hover

## 功能介绍

经过元素触发回调

## 示例

<script setup lang="ts">
  const handler = () => {
    window.alert('hover')
  }
</script>
<div
  v-hover="handler"
  :style="{
    width: '200px',
    height: '200px',
    border: '1px solid #ccc'
  }"
>
  Hover
</div>

## 使用

```typescript {2-4}
<script setup lang="ts">
  const handler = () => {
    window.alert('hover')
  }
</script>
<template>
  <div
    v-hover="handler"
    :style="{
      width: '200px',
      height: '200px',
      border: '1px solid #ccc'
    }"
  >
    Hover
  </div>
</template>
```
