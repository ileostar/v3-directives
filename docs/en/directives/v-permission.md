# v-permission

## Function Introduction

Rapid realization of authentication

## Example

<script setup lang="ts">
import { ref } from 'vue'

// Ordinary user rights, obtained from the background
const normal = ref(['update','query']);
// Administrator permissions, obtained from the background
const admin = ref(['add', 'del', 'update', 'query']);
const adminString = ref('add;del;update;query'); // String format
</script>

<button v-permission="normal">Special function 1</button>
<button v-permission="admin">Special function 2</button>
<button v-permission="adminString">Special function 3</button>

## Usage

```javascript {11-13}
<script setup lang="ts">
import { ref } from 'vue'

// Ordinary user rights, obtained from the background
const normal = ref(['update','query']);
// Administrator permissions, obtained from the background
const admin = ref(['add', 'del', 'update', 'query']);
const adminString = ref('add;del;update;query'); // String format
</script>
<template>
  <button v-permission="normal">Special function 1</button>
  <button v-permission="admin">Special function 2</button>
  <button v-permission="adminString">Special function 3</button>
</template>
```

## Rule

v-permission="`permissionList`"

**permissionList** type: `Array <string>` or `string`(separated by semicolons).

Permission list: `['add',' del']`, one of which is displayed, otherwise the element is hidden

<style scoped>
button {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin: .5rem;
    background: rgba(125, 125, 125, 0.35);
}
</style>
