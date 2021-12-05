import { mount } from '@vue/test-utils'

import Posts from '../../src/features/Posts/Posts.vue'

describe('CompositionApi', () => {
  it('renders a message', () => {
    const wrapper = mount(Posts)

    expect(wrapper.exists()).toBe(true)
  })
})
