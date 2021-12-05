<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
<template>
  <div class="post-item">
    <span>{{ title }}</span>
    <div class="actions">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post-item {
  @apply flex justify-between items-center px-4  w-full rounded-md shadow-md bg-white;
  min-height: 100px;

  .actions {
    @apply flex flex-col justify-between;
  }
}
</style>
