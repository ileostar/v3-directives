# v-doubleClick

## 功能介绍

双击触发事件

## 示例

<script setup lang="ts">
  const handle = () => {
    window.alert('触发了事件')
  }
</script>


<button
  v-doubleClick="handle"
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px'
    }">
  双击我
</button>


## 使用

```typescript {7}
<script setup lang="ts">
  const handle = () => {
    window.alert('触发了事件')
  }
</script>
<template>
  <button v-doubleClick="handle">双击我</button>
</template>
```
