<script>
import { defineComponent, h, toRefs } from 'vue'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, { slots }) {
    const { tag, variant } = toRefs(props)

    return () =>
      h(
        tag.value,
        {
          class: ['custom-heading', `${variant.value}`],
        },
        slots.default?.() || []
      )
  },
})
</script>

<style scoped lang="scss">
.custom-heading {
  @apply text-4xl;

  &.primary {
    @apply text-white;
  }

  &.secondary {
    @apply text-gray-600;
  }
}
</style>
