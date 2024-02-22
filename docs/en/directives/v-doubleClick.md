# v-doubleClick

## Function Introduction

Trigger an event on double-click

## Example

<script setup lang="ts">
  const handle = () => {
    window.alert('Triggered an event')
  }
</script>


<button
  v-doubleClick="handle"
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px'
    }">
  Double click me
</button>


## Usage

```typescript {7}
<script setup lang="ts">
  const handle = () => {
    window.alert('Triggered an event')
  }
</script>
<template>
  <button v-doubleClick="handle">Double click me</button>
</template>
```
