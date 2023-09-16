import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
  it('snapshot match', () => {
    const wrapper = shallowMount(Counter)
    expect(wrapper.html()).toMatchSnapshot
  })
})