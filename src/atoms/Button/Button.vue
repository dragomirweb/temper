<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'brand',
    },
  },
  emits: ['click'],
})
</script>
<template>
  <button class="t-btn" :class="[`${variant}`]" @click="() => $emit('click')">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.t-btn {
  @apply flex px-5 py-3 rounded-md text-base leading-none;

  &.quiet {
    @apply p-1 rounded-none;
  }

  &.brand {
    background-color: #00ff86;
    color: #425c50;
    font-weight: 600;

    &:hover {
      background-color: darken(#00ff86, 1%);
      color: darken(#425c50, 10%);
    }
  }
}
</style>
