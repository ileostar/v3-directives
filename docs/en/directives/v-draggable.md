# v-draggable

## Function Introduction

Makes elements draggable

## Example

<script setup lang="ts"></script>
<div
  v-draggable
  :style="{
    width: '100px',
    height: '100px',
    background: 'blue',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateX(50px)',
    color: 'white'
  }"
>
  Drag me
</div>

## Usage

```typescript {4}
<script setup lang="ts"></script>
<template>
  <div
    v-draggable
    :style="{
      width: '100px',
      height: '100px',
      background: 'blue',
      borderRadius: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateX(50px)'
    }"
  >
    Drag me
  </div>
</template>
```
