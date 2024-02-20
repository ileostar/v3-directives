# v-ellipsis

## 功能介绍

省略超出文本，将多余的文本用省略号代替，完整文本显示在title属性中

## 示例

<div :style="{
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: '10px',
  }">
  <div
    v-ellipsis
    :style="{
      width: '100px',
      height: '100px',
      background: 'blue',
      borderRadius: '5px',
      color: 'white',
    }">
      一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字
    </div>

  <div
    v-ellipsis:4
    :style="{
      width: '100px',
      height: '100px',
      background: 'blue',
      borderRadius: '5px',
      color: 'white',
    }">
      一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字
    </div>
</div>

## 使用

```typescript {3,7}
<template>
  <div>
    <div v-ellipsis>
        一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字
      </div>

    <div v-ellipsis:4>
        一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字一段超长长长的文字
      </div>
  </div>
</template>
```

## 规则

v-ellipsis的arg属性默认空则为单行省略，否则为多行省略，省略的行数为arg属性的值

例如：`v-ellipsis:4`省略行数为4
