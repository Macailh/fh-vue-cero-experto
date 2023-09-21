import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
  let wrapper

  beforeEach(() => {
    const startValue = 1
    wrapper = shallowMount(Counter, {
      props: {
        start: startValue
      }
    })
  })
  // it('snapshot match', () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('h2 should have the default value "Counter"', () => {
    const h2 = wrapper.find('h2')
    console.log(h2.text())
    expect(h2.text()).toBe('Counter')
  })

  test('the value should be 1', () => {
    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-test-id="counter"]').text()
    
    expect(value).toBe('1')
  })

  test('should increment and decrement the counter', async() => {
    const [decreaseBtn,increaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-test-id="counter"]').text()

    expect(value).toBe('1')
  })

  test('should set the initial value', () => {
    const {start} = wrapper.props()
    const value = wrapper.find('[data-test-id="counter"]').text()

    expect(Number(value)).toBe(start)
  })

  test('should show the title prop', () => {
    const title = 'Test title'
    const wrapper = shallowMount(Counter, {
      props: {
        title,
        start: 4
      }
    })

    expect(wrapper.find('h2').text()).toBe(title)
  })
})