# v-copy

## Function Introduction

Copy the passed value to the clipboard

## Example

<script setup >
import { ref } from 'vue'

const change = ref('Changed value')
const value = ref('Value to be copied')
</script>

<p>Value to be copied:  {{ value }}</p>
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

## Usage

```typescript {9}
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


