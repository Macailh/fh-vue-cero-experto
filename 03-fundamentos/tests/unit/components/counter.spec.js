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

  test('the value should be 1', () => {
    const startValue = 1
    const wrapper = shallowMount(Counter, {
      props: {
        start: startValue
      }
    })
    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-test-id="counter"]').text()
    
    expect(value).toBe('1')
  })

  test('should increment by 1 the counter', async() => {
    const startValue = 1
    const wrapper = shallowMount(Counter, {
      props: {
        start: startValue
      }
    })
    const increaseBtn = wrapper.findAll('button')

    await increaseBtn[1].trigger('click')
    const value = wrapper.find('[data-test-id="counter"]').text()

    expect(value).toBe('2')
  })

  test('should descrease by 1 the counter', async() => {
    const startValue = 1
    const wrapper = shallowMount(Counter, {
      props: {
        start: startValue
      }
    })
    const decreaseBtn = wrapper.find('button')

    await decreaseBtn.trigger('click')
    const value = wrapper.find('[data-test-id="counter"]').text()

    expect(value).toBe('0')
  })
})