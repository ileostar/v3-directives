# 简介

<span>v3-directives</span> 是一套基于[Vue3](https://cn.vuejs.org/)的自定义指令库，旨在提供丰富而强大的指令功能，帮助开发者更轻松地扩展和定制 Vue3 应用程序。

通过 **v3-directives**，您可以用一种简单、灵活的方式改变元素的行为和样式。帮助您增强用户交互体验，优化页面性能。

## 基础示例

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

```typescript{9}
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

<style scoped>
span {
  color: #4DFFA8;
  font-weight: bold;
}
</style>
