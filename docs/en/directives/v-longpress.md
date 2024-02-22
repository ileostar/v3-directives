# v-longpress

## Function Introduction

Trigger event when long pressing an element

## Example

<script setup lang="ts">
  const handle = () => {
    window.alert('Long-press trigger')
  }
</script>

<button
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '5px 8px',
    borderRadius: '5px'
    }" v-longpress:1000="handle">Press for a long time</button>

## Usage

```typescript {8}
<script setup lang="ts">
  const handle = () => {
    window.alert('Long-press trigger')
  }
</script>

<template>
  <button v-longpress:1000="handle">Press for a long time</button>
</template>
```
