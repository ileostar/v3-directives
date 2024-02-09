<template>
  <div
    ref="tooltipRef"
    class="__CUSTOM_TOOLTIP_ITEM_CONTENT__"
    :class="arrow"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    v-html="content"
  ></div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
import type { TimeoutHTMLElement } from '..'
  defineProps({
    content: {
      type: String,
      default: '',
    },
    arrow: {
      type: String,
      default: '',
    },
  })
  const tooltipRef = ref()
  let parent: TimeoutHTMLElement
  onMounted(() => {
    parent = tooltipRef.value.parentElement
  })
  function mouseOver() {
    clearTimeout(parent.__hide_timeout__)
    parent.setAttribute('data-show', 'true')
    parent.style.visibility = 'visible'
  }
  function mouseLeave() {
    parent.setAttribute('data-show', 'false')
    parent.style.visibility = 'hidden'
  }
</script>
<style scoped lang="scss">
$radius: 8px;
@mixin arrow {
  position: absolute;
  border-style: solid;
  border-width: 8px;
  width: 0;
  height: 0;
  content: '';
}

.__CUSTOM_TOOLTIP_ITEM_CONTENT__ {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  max-width: 260px;
  font-size: 12px;
  color: #fff;
  background: rgb(45 46 50 / 80%);
  line-height: 18px;

  &.top::before {
    @include arrow;

    top: $radius * (-2);
    left: calc(50% - #{$radius});
    border-color: transparent transparent rgb(45 46 50 / 80%) transparent;
  }

  &.top-start::before .top-start::before {
    @include arrow;

    top: $radius * (-2);
    left: $radius;
    border-color: transparent transparent rgb(45 46 50 / 80%) transparent;
  }

  &.top-end::before &.top-end::before {
    @include arrow;

    top: $radius * (-2);
    left: calc(100% - #{$radius * 3});
    border-color: transparent transparent rgb(45 46 50 / 80%) transparent;
  }
}
</style>
