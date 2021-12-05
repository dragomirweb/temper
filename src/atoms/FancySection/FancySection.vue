<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {},
  setup() {
    return {}
  },
})
</script>
<template>
  <div class="fancy-section">
    <div class="bg"></div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fancy-section {
  @apply relative w-full;

  .bg {
    background-color: #6357b5;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    @apply w-full;
    height: 25vh;
  }

  .content {
    @apply absolute inset-0;
  }
}
</style>
