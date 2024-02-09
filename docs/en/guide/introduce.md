# Introduction

**v3-directives** is a custom directive library based on [Vue3](https://cn.vuejs.org/). It aims to provide rich and powerful directive functionalities to help developers easily extend and customize Vue3 applications.

With **v3-directives**, you can change the behavior and style of elements in a simple and flexible way. It helps enhance user interaction experience and optimize page performance.

## Basic Example

<script setup >
import { ref } from 'vue'

const change = ref('Changed value')
const value = ref('Value to be copied')
</script>

<p>Value to be copied: {{ value }}</p>
<button v-copy="value"
  style="border: 1px solid #ccc;border-radius: 5px;margin: 2px;padding: 0 5px;background-color: #ccc;color:#000;">Click to copy</button>
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
  Change the value to be copied
</button>

```typescripts{9}
<script setup>
import { ref } from 'vue'

const change = ref('Changed value')
const value = ref('Value to be copied')
</script>

<template>
  <button v-copy="value">Click to copy</button>
  <input type="text" v-model="change"/>
  <button @click="() => value = change">
    Change the value to be copied
  </button>
</template>
```
