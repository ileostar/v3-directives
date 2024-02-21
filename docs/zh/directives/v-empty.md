# v-empty

## 功能介绍

用于展示空状态

## 示例

<script setup lang="ts">
import { ref,reactive,computed } from 'vue'

const isEmpty = ref(true)
const emptyValue = computed(() => ({
  content: '暂无数据',
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
    }" @click="isEmpty = !isEmpty">切换状态</button>
  <div :style="{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '200px',
    borderRadius: '5px',
    background: 'blue',
  }" v-empty="emptyValue">展示数据</div>

## 使用

```typescript {22}
<script setup lang="ts">
import { ref,computed } from 'vue'

const isEmpty = ref(true)
const emptyValue = computed(() => ({
  content: '暂无数据',
  img: 'https://th.bing.com/th/id/R.63041927f4a82c69be9154fe7be5dcd8?rik=rEmOJUuEAW8hPQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f22%2f1522.jpg&ehk=yPnRjbJRaymFBmY2UhpFn2DPanf0HBpPLctjo3h3vRA%3d&risl=&pid=ImgRaw&r=0',
  visible: isEmpty.value,
}))
</script>

<template>
  <button @click="isEmpty = !isEmpty">切换状态</button>
  <div :style="{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '200px',
    borderRadius: '5px',
    background: 'blue',
  }" v-empty="emptyValue">展示数据</div>
</template>
```

## 规则

v-empty 接收一个对象（接受响应式数据），对象的属性有：
|  参数   | 类型  |   默认   | 说明  |
|  ----  | ----  |  ----  | ----  |
| content  | string |   '暂无数据'   | 内容, 可为空 |
| img  | url |   -   | 图片地址, 可为空  |
| visible  | boolean |   false   | 是否展示，可为空  |

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
