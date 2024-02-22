# v-hover

## Function Introduction

Triggers a callback after the element

## Example

<script setup lang="ts">
  const handler = () => {
    window.alert('Mouse over')
  }
</script>
<div
  v-hover="handler"
  :style="{
    width: '200px',
    height: '200px',
    background: 'blue',
    borderRadius: '5px'
  }"
>
  Hover
</div>

## Usage

```typescript {8}
<script setup lang="ts">
  const handler = () => {
    window.alert('Mouse over')
  }
</script>
<template>
  <div
    v-hover="handler"
    :style="{
      width: '200px',
      height: '200px',
      background: 'blue',
      borderRadius: '5px'
      }"
    >
    Hover
  </div>
</template>
```
