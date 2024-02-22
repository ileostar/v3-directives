# v-input

## 功能介绍

输入格式化

## 示例

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
</script>

<div :style="{
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}">
  <div><label>限制为数字：</label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:number v-model="inputValue" /></div>
  <div><label>限制为小数点：</label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:decimal="3" v-model="inputValue2" /></div>
  <div><label>自定义限制：</label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:customize="/[^\d]/" v-model="inputValue3" /></div>
</div>

## 使用

```typescript {4,8,12}
<template>
  <div>
    <label>限制为数字：</label>
    <input type="text" v-input:number />
  </div>
  <div>
    <label>限制为小数点：</label>
    <input type="text" v-input:decimal="3" />
  </div>
  <div>
    <label>自定义限制：</label>
    <input type="text" v-input:customize="/[^\d]/"/>
  </div>
</template>
```

## 规则

**v-input:`type`="`restrict`"**

v-input的`type`规则:

| 参数      | 默认（restrict） | 说明                                           |
| --------- | ---------------- | ---------------------------------------------- |
| number    | -                | 限制为数字                                     |
| decimal   | 10               | 限制为小数，restrict填数字，表示限制后几位小数 |
| customize | -                | 自定义正则限制, restrict填写正则表达式         |

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
