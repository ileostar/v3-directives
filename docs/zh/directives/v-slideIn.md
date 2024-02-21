# v-slideIn

## 功能介绍

入场动画

## 示例

<div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >占位盒子</div>
<div
  :style="{
    display: 'flex',
    gap: '20px',
  }">
  <h1 v-slideIn>盒子内容</h1>
  <h1 v-slideIn="{ px: 100, time: 1000 }">盒子内容</h1>
</div>

## 使用

```typescript {}
<template>
  <div>
    <div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >占位盒子</div>
    <div>
      <h1 v-slideIn>盒子内容</h1>
      <h1 v-slideIn="{ px: 100, time: 1000 }">盒子内容</h1>
    </div>
  </div>
</template>
```
