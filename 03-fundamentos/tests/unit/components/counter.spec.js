import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
  // it('snapshot match', () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.html()).toMatchSnapshot
  // })

  test('h2 should have the default value "Counter"', () => {
    const startValue = 1
    const wrapper = shallowMount(Counter, {
      props: {
        start: startValue
      }
    })
    const h2 = wrapper.find('h2')
    console.log(h2.text())
    expect(h2.text()).toBe('Counter')
  })
})