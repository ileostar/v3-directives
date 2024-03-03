# v-backtop

## 功能介绍

为元素添加返回顶部功能

## 示例

<div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >占位盒子</div>
<button style="display:flex;justify-content:center;align-items:center;border:1px solid #ccc;padding:10px;border-radius:5px" v-backtop>
  点我返回顶部
</button>

## 使用

```typescript {4}
<template>
  <div class="backtop-demo">
    <div>占位盒子</div>
    <button v-backtop>
      点我返回顶部
    </button>
  </div>
</template>
```
