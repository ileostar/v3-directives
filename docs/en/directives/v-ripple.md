# v-ripple

## Function Introduction

Add ripple dynamic effects to the clicked element

## Example

<button v-ripple >Default</button>
<button v-ripple.mouseover >MouseOver</button>
<button v-ripple.mouseout >MouseOut</button>
<button v-ripple="'rgba(255, 255, 255, 0.35)'" >Custom color</button>

<style scoped>
button {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin: .5rem;
    background: rgba(125, 125, 125, 0.35);
}
</style>

## Usage

```typescript {2-5}
<template>
  <button v-ripple >Default</button>
  <button v-ripple.mouseover >MouseOver</button>
  <button v-ripple.mouseout >MouseOut</button>
  <button v-ripple="'rgba(255, 255, 255, 0.35)'" >Custom color</button>
</template>
```
