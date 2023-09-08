import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter.vue"


describe('Counter Component', () => {
    test('match with snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    })
})