# v-copy

## 功能介绍

复制传入的值到剪贴板

## 示例

<script setup >
  import { ref } from 'vue'

  const change = ref('更改的值')
  const value = ref('你将复制这个值')
</script>

<p>将要复制的值: {{ value }}</p>
<button v-copy="value"
  style="border: 1px solid #ccc;border-radius: 5px;margin: 2px;padding: 0 5px;background-color: #ccc;color:#000;">点击我复制</button>
<input type="text" v-model="change"
  style="border: 1px solid #ccc;border-radius: 5px;margin: 2px;padding: 0 5px;" />
<button
  @click="
    () => {
      value = change
    }
  "
  style="border: 1px solid #ccc;border-radius: 5px;margin: 2px;padding: 0 5px;"
>
  改变将要复制的值
</button>

## 使用

```typescript {9}
<script setup>
import { ref } from 'vue'

const change = ref('更改的值')
const value = ref('你将复制这个值')
</script>

<template>
  <button v-copy="value">点击我复制</button>
  <input type="text" v-model="change"/>
  <button @click="() => value = change">
    改变将要复制的值
  </button>
</template>
```
