# v-permission

## 功能介绍

快速实现鉴权

## 示例

<script setup lang="ts">
import { ref } from 'vue'

// 普通用户权限，从后台获取
const normal = ref(['update','query']);
// 管理员权限，从后台获取
const admin = ref(['add', 'del', 'update', 'query']);
const adminString = ref('add;del;update;query'); // String格式
</script>

<button v-permission="normal">特殊功能1</button>
<button v-permission="admin">特殊功能2</button>
<button v-permission="adminString">特殊功能3</button>

## 使用

```typescript {11-13}
<script setup lang="ts">
import { ref } from 'vue'

// 普通用户权限，从后台获取
const normal = ref(['update','query']);
// 管理员权限，从后台获取
const admin = ref(['add', 'del', 'update', 'query']);
const adminString = ref('add;del;update;query'); // String格式
</script>
<template>
  <button v-permission="normal">特殊功能1</button>
  <button v-permission="admin">特殊功能2</button>
  <button v-permission="adminString">特殊功能3</button>
</template>
```

## 规则

v-permission="`permissionList`"

**permissionList**类型：`Array<string>` 或 `string`（以分号相隔）

权限列表：`['add', 'del']`，存在其一则显示，否则隐藏元素

<style scoped>
button {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin: .5rem;
    background: rgba(125, 125, 125, 0.35);
}
</style>
