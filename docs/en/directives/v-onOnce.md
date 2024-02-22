# v-onOnce

## Function Introduction

Only one callback is triggered

## Example

<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>

<button :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '5px 8px',
    borderRadius: '5px'
    }" v-onOnce:click="handler">Trigger only once</button>


## Usage

```typescript {7}
<script setup lang="ts">
  const handler = () => {
    window.alert('Hello!')
  }
</script>
<template>
  <button v-onOnce:click="handler">Trigger only once</button>
</template>
```
