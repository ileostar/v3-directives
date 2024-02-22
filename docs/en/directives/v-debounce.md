# v-debounce

## Function Introduction

Anti-shaking function

## Example

<script setup lang="ts">
  const handle = () => {
    window.alert('Triggered an event')
  }
</script>

<button
  v-debounce="handle"
  :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px'
    }">
Quick click me
</button>

## Usage

```typescript {7}
<script setup lang="ts">
  const handle = () => {
    window.alert('Triggered an event')
  }
</script>
<template>
  <button v-debounce="handle">Quick click me</button>
</template>
```

## Rule

| argument    | type                                                                     | acquiesce | Instructions                   |
| ----------- | ------------------------------------------------------------------------ | --------- | ------------------------------ |
| eventType   | [Event modifier](https://vuejs.org/guide/essentials/event-handling.html) | click     | Event type, which can be null  |
| delay       | Time, in milliseconds                                                    | 300       | Delay time, which can be empty |
| handleEvent | -                                                                        | -         | Processing event, required     |

> **Example: v-debounce:click-1000="handle"**
>
> eventType: click
>
> delay: 1000
>
> handleEvent: handle

<style scoped>
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
