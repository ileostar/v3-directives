# v-waterMarker

## 功能介绍

添加自定义水印

## 示例

<div class="watermark" v-waterMarker="{text:'leostar版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>

## 使用

```typescript {3-6}
<template>
  <div
    v-waterMarker="{
      text:'leostar版权所有',
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
