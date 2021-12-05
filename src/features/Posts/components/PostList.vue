<script>
import { defineComponent } from 'vue'
import { PostItem, ChevronIcon, Button } from '@atoms'
import { usePosts } from '../hooks/use-posts-hook'

export default defineComponent({
  components: { PostItem, ChevronIcon, Button },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { sortPosts } = usePosts()
    return { sortPosts }
  },
})
</script>
<template>
  <transition-group class="post-list" name="switch" tag="div">
    <PostItem v-for="(post, idx) in posts" :key="post.id" :title="post.title">
      <Button
        @click="() => sortPosts('asc', idx)"
        v-if="idx !== 0"
        variant="quiet"
        ><ChevronIcon type="up"
      /></Button>
      <Button
        @click="() => sortPosts('desc', idx)"
        v-if="idx !== posts.length - 1"
        variant="quiet"
        ><ChevronIcon type="down"
      /></Button>
    </PostItem>
  </transition-group>
</template>
<style lang="scss" scoped>
.switch-move {
  transition: transform 0.8s ease;
}

.post-list {
  @apply grid gap-4;
}
</style>
