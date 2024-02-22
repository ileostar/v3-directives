# v-waterMarker

## Function Introduction

Add custom watermark

## Example

<div class="watermark" v-waterMarker="{text:'Leostar copyright',textColor:'rgba(180, 180, 180, 0.4)'}"></div>

## Usage

```typescript {3-6}
<template>
  <div
    v-waterMarker="{
      text:'Leostar copyright',
      textColor:'rgba(180, 180, 180, 0.4)'
    }"
  ></div>
</template>
```

<style scoped>
.watermark {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background: rgba(125, 125, 125, 0.35);
}
</style>
