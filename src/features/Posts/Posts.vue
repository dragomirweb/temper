<script>
import { defineComponent, computed } from 'vue'
import { CustomHeading } from '@atoms'

import PostList from './components/PostList.vue'
import TimeTravel from './components/TimeTravel.vue'
import { usePosts } from './hooks/use-posts-hook'

export default defineComponent({
  components: { CustomHeading, PostList, TimeTravel },
  setup() {
    const { posts } = usePosts()

    const userPosts = computed(() => posts.value)

    return {
      userPosts,
    }
  },
})
</script>
<template>
  <div class="posts">
    <div>
      <CustomHeading class="mb-4" variant="primary"
        >Sortable post List</CustomHeading
      >
      <PostList :posts="userPosts" />
    </div>
    <div><TimeTravel /></div>
  </div>
</template>
<style lang="scss" scoped>
.posts {
  @apply grid grid-cols-1 gap-4;

  @screen lg {
    @apply grid-cols-2 gap-10;
  }
}
</style>
