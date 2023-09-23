import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";


describe('Indecision component', () => {
    let wrapper
    let clgSpy
    let getAnswerSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        jest.clearAllMocks()
    })

    test('snapshot match', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('writing to the input should not write anything (console.log)', async() => {
        const input = wrapper.find('input')
        await input.setValue('test text')

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('when writing the symbol of "?" should fire the getAnswer', async() => {
        const input = wrapper.find('input')
        await input.setValue('test text?')
        
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test("tests in getAnswer() method", async() => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif')
        expect(wrapper.vm.answer).toBe('yes')
    })

    test("test in getAnswer() method - API fail", async() => {
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect( img.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('Cant load the API')
    })
})