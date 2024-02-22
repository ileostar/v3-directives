# v-empty

## Function Introduction

Used to display empty status

## Example

<script setup lang="ts">
import { ref,reactive,computed } from 'vue'

const isEmpty = ref(true)
const emptyValue = computed(() => ({
  content: 'No data available',
  img: 'https://th.bing.com/th/id/R.63041927f4a82c69be9154fe7be5dcd8?rik=rEmOJUuEAW8hPQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f22%2f1522.jpg&ehk=yPnRjbJRaymFBmY2UhpFn2DPanf0HBpPLctjo3h3vRA%3d&risl=&pid=ImgRaw&r=0',
  visible: isEmpty.value,
}))
</script>

<button
:style="{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
border: '1px solid #ccc',
padding: '10px',
borderRadius: '5px'
}" @click="isEmpty = !isEmpty">Switching state</button>

<div :style="{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
  width: '200px',
  borderRadius: '5px',
  background: 'blue',
}" v-empty="emptyValue">Presentation data</div>

## Usage

```typescript {22}
<script setup lang="ts">
import { ref,computed } from 'vue'

const isEmpty = ref(true)
const emptyValue = computed(() => ({
  content: 'No data available',
  img: 'https://th.bing.com/th/id/R.63041927f4a82c69be9154fe7be5dcd8?rik=rEmOJUuEAW8hPQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f22%2f1522.jpg&ehk=yPnRjbJRaymFBmY2UhpFn2DPanf0HBpPLctjo3h3vRA%3d&risl=&pid=ImgRaw&r=0',
  visible: isEmpty.value,
}))
</script>

<template>
  <button @click="isEmpty = !isEmpty">Switching state</button>
  <div :style="{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '200px',
    borderRadius: '5px',
    background: 'blue',
  }" v-empty="emptyValue">Presentation data</div>
</template>
```

## Rule

v-empty receives an object (accepting reactive data) with the following properties:
| | Type | The default | Description |
| ---- | ---- | ---- | ---- |
| content | string | '暂无数据' | can be empty |
| img | url | - | Image address. The value can be empty |
| visible | boolean | false | Whether to display. The value can be empty |

<style scoped>
  table {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
  td {
    width: 25%;

  }
  th {
    width: 25%;
  }
</style>
