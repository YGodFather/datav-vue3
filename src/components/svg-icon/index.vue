<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const svgClass = computed(() =>
  props.className ? `svg-icon ${props.className}` : 'svg-icon'
);
</script>
<style lang="scss">
.svg-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
