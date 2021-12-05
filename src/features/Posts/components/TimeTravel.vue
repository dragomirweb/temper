<script>
import { computed, defineComponent } from 'vue'
import { PostItem, CustomHeading, Button } from '@atoms'

import { usePosts } from '../hooks/use-posts-hook'

export default defineComponent({
  components: { PostItem, CustomHeading, Button },
  props: {},
  setup() {
    const { history, travel } = usePosts()

    const userHistory = computed(() => history.value)

    return {
      userHistory,
      travel,
    }
  },
})
</script>
<template>
  <div class="time-travel">
    <div class="header">
      <CustomHeading variant="secondary"
        >List of actions commited</CustomHeading
      >
    </div>
    <div class="actions divide-y-2">
      <div class="no-points" v-if="!userHistory.length">
        <span>No actions commited</span>
      </div>
      <transition-group v-else name="switch" tag="div">
        <PostItem
          class="point"
          v-for="action in userHistory"
          :key="action.id"
          :title="action.title"
        >
          <Button @click="() => travel(action)">Time Travel</Button></PostItem
        >
      </transition-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.time-travel {
  @apply flex flex-col rounded-md shadow-md;
  background-color: #f6f6f6;

  .header {
    @apply px-4 py-6 rounded-md bg-white;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .no-points {
    @apply flex p-5 m-auto;
  }

  .switch-move {
    transition: transform 0.4s ease;
  }

  .actions {
    @apply flex flex-col m-4;

    .point {
      @apply shadow-none rounded-none;

      &:first-child {
        @apply rounded-md;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        @apply rounded-md;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
}
</style>
