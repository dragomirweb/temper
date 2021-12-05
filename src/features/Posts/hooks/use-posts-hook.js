import { defineComponent, provide, readonly, inject, ref } from 'vue'
import { useAsyncState, whenever } from '@vueuse/core'
import {
  cloneDeep as _cloneDeep,
  uniqueId as _uniqueId,
  findIndex as _findIndex,
} from 'lodash'

export const PostsSymbol = Symbol('Posts')
export const SortPostsSymbol = Symbol('SortPosts')
export const SortHistorySymbol = Symbol('SortHistory')
export const TimeTravelSymbol = Symbol('TimeTravel')

export const PostsProvider = defineComponent({
  setup(_, { slots }) {
    const posts = ref([])
    const history = ref([])

    const { state, isReady } = useAsyncState(
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
      [],
      {
        onError: () => console.error('Error while fetching posts'),
      }
    )

    const onSort = (dir, idx) => {
      const postsSnapshot = _cloneDeep(posts.value)
      const newIdx = dir === 'asc' ? idx - 1 : idx + 1
      const curPost = posts.value[idx]
      const oldPost = posts.value[newIdx]

      posts.value[idx] = oldPost
      posts.value[newIdx] = curPost

      history.value = [
        {
          id: _uniqueId(),
          posts: postsSnapshot,
          title: `Moved Post ${curPost.id} from index ${idx} to index ${newIdx}`,
        },
        ...history.value,
      ]
    }

    const onTimeTravel = (timePoint) => {
      const currIdx = _findIndex(history.value, (h) => h.id === timePoint.id)
      history.value.splice(0, currIdx + 1)
      posts.value = timePoint.posts
    }

    whenever(isReady, () => {
      posts.value = state.value.slice(0, 5).map((p) => ({
        ...p,
        title: `Post ${p.id}`,
      }))
    })

    provide(PostsSymbol, readonly(posts))
    provide(SortHistorySymbol, readonly(history))
    provide(SortPostsSymbol, onSort)
    provide(TimeTravelSymbol, onTimeTravel)

    return () => slots.default?.() || []
  },
})

export const usePosts = () => {
  const posts = inject(PostsSymbol)
  const history = inject(SortHistorySymbol)
  const sortPosts = inject(SortPostsSymbol)
  const travel = inject(TimeTravelSymbol)

  return {
    posts,
    sortPosts,
    history,
    travel,
  }
}
