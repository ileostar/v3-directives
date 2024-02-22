# v-input

## Function Introduction

Input formatting

## Example

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
  <div><label>Limited to numbers: </label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:number v-model="inputValue" /></div>
  <div><label>Limited to decimal points: </label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:decimal="3" v-model="inputValue2" /></div>
  <div><label>Custom restrictions: </label><input :style="{
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '5px'
    }" type="text" v-input:customize="/[^\d]/" v-model="inputValue3" /></div>
</div>

## Usage

```typescript {4,8,12}
<template>
  <div>
    <label>Limited to numbers: </label>
    <input type="text" v-input:number />
  </div>
  <div>
    <label>Limited to decimal points:</label>
    <input type="text" v-input:decimal="3" />
  </div>
  <div>
    <label>Custom restrictions:</label>
    <input type="text" v-input:customize="/[^\d]/"/>
  </div>
</template>
```

## Rule

**v-input:`type`="`restrict`"**

v-input `type` rule:

|  parameters | default （restrict）  | description  |
|  ----    | ----  | ----  |
| number | - | is limited to the number |
| decimal | 10 | The value is limited to decimals and restrict the number that indicates the next few decimals |
| customize | - | Customize the regular expression, restrict enter the regular expression |

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

