# v-clickOutside

## Function Introduction

Event when clicking outside the element triggers

## Example

<script setup>
import { ref } from 'vue'

const visible = ref(true)
const handleClickOutside = () => visible.value = !visible.value
</script>

<strong>Click outside the box to show/hide</strong>

<div style="height:300px;">
  <div v-show="visible" style="height:300px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" v-clickOutside="handleClickOutside">Show/hide</div>
</div>

## Usage

```typescript {10}
<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const handleClickOutside = () => visible.value = !visible.value
</script>

<template>
  <strong>Click outside the box to show/hide</strong>
  <div v-show="visible" v-clickOutside="handleClickOutside">Show/hide</div>
</template>
```
