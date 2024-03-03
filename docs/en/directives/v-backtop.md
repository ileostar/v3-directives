# v-backtop

## Function Introduction

Add a return to top function for an element

## Example

<div style="height:500px;background:rgba(125,125,125,.5);margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:5px;color: rgba(255,255,255,.5);font-size:30px;" >Placeholder box</div>
<button style="display:flex;justify-content:center;align-items:center;border:1px solid #ccc;padding:10px;border-radius:5px" v-backtop>
  Point me back to top
</button>

## Usage

```typescript {4}
<template>
  <div class="backtop-demo">
    <div>Placeholder box</div>
    <button v-backtop>
      Point me back to top
    </button>
  </div>
</template>
```
