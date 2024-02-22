# v-ellipsis

## Function Introduction

Omit excess text, replace excess text with ellipses, and display the complete text in the title attribute

## Example

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
      A very long piece of text
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
      A super long, super long, super long, super long, super long, super long, super long text
    </div>
</div>

## Usage

```typescript {3,7}
<template>
  <div>
    <div v-ellipsis>
        A very long piece of text
      </div>

    <div v-ellipsis:4>
        A super long, super long, super long, super long, super long, super long, super long text
      </div>
  </div>
</template>
```

## Rule

If the arg attribute of v-ellipsis is empty by default, a single line is omitted. Otherwise, multiple lines are omitted. The number of lines omitted is the value of the arg attribute

For example, 'v-ellipsis:4' omits 4 lines
