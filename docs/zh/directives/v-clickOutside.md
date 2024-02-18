# v-clickOutside

## 功能介绍

点击元素外部触发时事件

## 示例

<script setup>
import { ref } from 'vue'

const visible = ref(true)
const handleClickOutside = () => visible.value = !visible.value
</script>

<strong>点击盒子外部显示/隐藏</strong>
<div style="height:300px;">
  <div v-show="visible" style="height:300px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" v-clickOutside="handleClickOutside">显示/隐藏</div>
</div>


## 使用

```typescript {10}
<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const handleClickOutside = () => visible.value = !visible.value
</script>

<template>
  <strong>点击显示/隐藏</strong>
  <div v-show="visible" v-clickOutside="handleClickOutside">点击外部: 显示/隐藏</div>
</template>
```
