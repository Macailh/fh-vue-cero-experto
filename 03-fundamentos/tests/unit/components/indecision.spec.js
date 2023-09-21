import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";


describe('Indecision component', () => {
    let wrapper
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
    })

    test('snapshot match', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('writing to the input should not write anything (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('test text')

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('when writing the symbol of "?" should fire the fetch', () => {

    })

    test("tests in getAnswer() method", () => {

    })

    test("test in getAnswer() method - API fail", () => {

    })
})