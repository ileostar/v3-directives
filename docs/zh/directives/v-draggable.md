# v-draggable

## 功能介绍

使元素可拖拽

## 示例

<script setup lang="ts"></script>
<div
  v-draggable
  :style="{
    width: '100px',
    height: '100px',
    background: 'blue',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateX(50px)'
  }"
>
  拖拽我
</div>

## 使用

```typescript {4}
<script setup lang="ts"></script>
<template>
  <div
    v-draggable
    :style="{
      width: '100px',
      height: '100px',
      background: 'blue',
      borderRadius: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateX(50px)'
    }"
  >
    拖拽我
  </div>
</template>
```
