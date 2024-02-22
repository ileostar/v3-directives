# v-lazyImg

## Function Introduction

Lazy image loading

## Example

<script setup lang="ts">
  const list = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    img: 'https://avatars.githubusercontent.com/u/108746194?s=96&v=4'
  }))
</script>

<img
  v-for="item in list"
  :key="item.id"
  v-lazyImg="item.img"
  :style="{ width: '100px', height: '100px', display: 'block' }"
/>

## Usage

```typescript {11}
<script setup lang="ts">
  const list = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    img: 'https://avatars.githubusercontent.com/u/65016011?v=4'
  }))
</script>
<template>
  <img
    v-for="item in list"
    :key="item.id"
    v-lazyImg="item.img"
    :style="{ width: '100px', height: '100px', display: 'block' }"
  />
</template>
```
