# v-ripple

## 功能介绍

给点击的元素添加波纹动效

## 示例

<button v-ripple >默认</button>
<button v-ripple.mouseover >鼠标经过触发</button>
<button v-ripple.mouseout >鼠标离开触发</button>
<button v-ripple="'rgba(255, 255, 255, 0.35)'" >自定义颜色</button>

<style scoped>
button {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin: .5rem;
    background: rgba(125, 125, 125, 0.35);
}
</style>

## 使用

```typescript {2-5}
<template>
  <button v-ripple >默认</button>
  <button v-ripple.mouseover >鼠标经过触发</button>
  <button v-ripple.mouseout >鼠标离开触发</button>
  <button v-ripple="'rgba(255, 255, 255, 0.35)'" >自定义颜色</button>
</template>
```
