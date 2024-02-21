# v-hover

## 功能介绍

经过元素触发回调

## 示例

<script setup lang="ts">
  const handler = () => {
    window.alert('鼠标经过')
  }
</script>
<div
  v-hover="handler"
  :style="{
    width: '200px',
    height: '200px',
    background: 'blue',
    borderRadius: '5px'
  }"
>
  Hover
</div>

## 使用

```typescript {8}
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
      background: 'blue',
      borderRadius: '5px'
      }"
    >
    Hover
  </div>
</template>
```
