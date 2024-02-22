# v-throttle

## Function Introduction

Throttling function

## Example

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const onSubmit = () => {
  count.value++;
}
</script>

<div :style="{
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '10px'
}">
<button :style="{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px'
      }"
      v-once v-throttle:click-2000="onSubmit">Click on me quickly</button>
  <span>Number of execution: {{ count }}</span>
</div>

## Usage

```typescript {11}
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const onSubmit = () => {
  count.value++;
}
</script>
<tempalte>
  <div>
    <button v-once v-throttle:click-2000="onSubmit">Click on me quickly</button>
    <span>Number of execution:{{ count }}</span>
  </div>
</tempalte>
```

## Rule

| Parameter   | Type                                                                     | Default | Description                |
| ----------- | ------------------------------------------------------------------------ | ------- | -------------------------- |
| EventType   | [Event modifier](https://vuejs.org/guide/essentials/event-handling.html) | click   | Event type, can be empty   |
| Delay       | Time in milliseconds                                                     | 300     | Event type, can be empty   |
| HandleEvent | -                                                                        | -       | Processing event, required |

> **Example: v-throttle:click-1000="handle"**
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

:::tip
If there is responsive data, the [v-once](https://vuejs.org/api/built-in-directives.html) instruction needs to be used, otherwise it will trigger multiple responsive data updates, causing DOM to re render and rendering throttling ineffective
:::
