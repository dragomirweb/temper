<script>
import { defineComponent } from 'vue'
import { FancySection } from '@atoms'
import { Posts } from '@features'

import { PostsProvider } from '@features/Posts'

export default defineComponent({
  components: { FancySection, Posts, PostsProvider },
  setup() {
    return {}
  },
})
</script>
<template>
  <PostsProvider>
    <div class="default-layout">
      <FancySection>
        <div class="container mx-auto px-4 py-10">
          <Posts />
        </div>
      </FancySection>
    </div>
  </PostsProvider>
</template>
<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  background-color: #f6f6f6;
}
</style>
