<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'up',
    },
  },
})
</script>
<template>
  <svg
    class="w-6 h-6"
    :class="type === 'up' ? 'rotate-0' : 'rotate-180'"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 15l7-7 7 7"
    ></path>
  </svg>
</template>
