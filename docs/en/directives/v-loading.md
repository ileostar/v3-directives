# v-loading

## Function Introduction

Add loading animation

## Example

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const changeLoading = () => {
  loading.value = !loading.value
}

const style = {
  width: '180px',
  height: '180px',
  backgroundImage: `url("https://avatars.githubusercontent.com/u/108746194?s=96&v=4")`,
  backgroundSize: 'cover',
  borderRadius: '5px'
}

</script>

<div
  v-loading="loading"
  :style="style"
></div>

<button
:style="{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
border: '1px solid #ccc',
padding: '0 5px',
borderRadius: '5px'
}" @click="changeLoading">State switch</button>

## Usage

```javascript {8}
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
</script>
<template>
  <div
    v-loading="loading"
    :style="{
      width: '180px',
      height: '180px',
      backgroundImage: 'url('https://avatars.githubusercontent.com/u/108746194?s=96&v=4')',
      backgroundSize: 'cover',
      borderRadius: '5px'
    }"></div>
  <button @click="loading.value = !loading.value">State switch</button>
</template>
```
