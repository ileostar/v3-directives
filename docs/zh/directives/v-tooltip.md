# v-tooltip

## 功能介绍

为元素添加工具提示

## 示例

<script setup lang="ts">
import { ref } from 'vue'

const show = ref('提示信息2')
const count = ref(0)
</script>

<div :style="{
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    gap: '10px'
}">
<span class="demo" v-tooltip="'提示信息1'">
  tooltip1
</span>
<span class="demo" v-tooltip.bottom-start="show">
  tooltip2
</span>
<span class="demo" v-tooltip="{ content: 'You have ' + count + ' new messages.' }" >tooltip3</span>
<span class="demo" v-tooltip="{ content: '<b>Bold</b>', html: true }" >tooltip4</span>
<span class="demo"
  v-tooltip="{
    content: () => asyncMethod('foo', 'bar'),
    loadingContent: 'Please wait...',
  }"
>Hover me!</span>
</div>

## 使用

```typescript {9-12,14-17}
<script setup lang="ts">
import { ref } from 'vue'

const show = ref('提示信息2')
const count = ref(0)
</script>

<template>
  <div>
    <span v-tooltip="'提示信息1'">tooltip1</span>
    <span v-tooltip.button-start="show">tooltip2</span>
    <span v-tooltip="{ content: 'You have ' + count + ' new messages.' }" >tooltip3</span>
    <span v-tooltip="{ content: '<b>Bold</b>', html: true }" >tooltip4</span>
    <span
      v-tooltip="{
        content: () => asyncMethod('foo', 'bar'),
        loadingContent: 'Please wait...',
      }"
    >Hover me!</span>
  </div>
</template>
```

## 规则

**v-tooltip.`position`="`message`"**

以下两个参数的类型：

**position**: `auto` | `auto-start` | `auto-end` | `top` | `top-start` | `top-end` | `right` | `right-start` | `right-end` | `bottom` | `bottom-start` | `bottom-end` | `left` | `left-start` | `left-end` 

**message**: `string` | `object`

---

其中 **object** 参数说明：

```typescript
interface TooltipOptions {
  content: string | (() => Promise<string>);
  html: boolean;
  loadingContent: string;
  onShow: () => void;
  onHide: () => void;
  triggers: Array<string>;
  disabled: boolean;
}
```


<style scoped>
.demo {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
table {
  display: table;
  width: 100%;
  border-collapse: collapse;
}
td {
  width: 25%;

}
th {
  width: 25%;
}
</style>
