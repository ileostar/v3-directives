# v-slideIn

## Function Introduction

Add entry animation

## Example

<div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >Placeholder box</div>
<div
  :style="{
    display: 'flex',
    gap: '20px',
  }">
  <h1 v-slideIn>Box content</h1>
  <h1 v-slideIn="{ px: 100, time: 1000 }">Box content</h1>
</div>

## Usage

```typescript {}
<template>
  <div>
    <div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >Placeholder box</div>
    <div>
      <h1 v-slideIn>Box content</h1>
      <h1 v-slideIn="{ px: 100, time: 1000 }">Box content</h1>
    </div>
  </div>
</template>
```
