import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
    it('should render', () => {
        const wrapper = mount(HelloWorld, {
            propsData: {
                title: '',
            },
        });
        expect(wrapper).toBeTruthy();
    });

    it('should render with title', () => {
        const title = 'World';

        const wrapper = mount(HelloWorld, {
            propsData: {
                title,
            },
        });
        expect(wrapper.find('h1').text()).toBe(title);
    });

    it('should throw error if doesnt receive a title', () => {
        const spy = spyOn(console, 'error');

        const component = mount<any>(HelloWorld, {
            propsData: {
                title: null,
            },
        });

        const errorMessage: string = spy.calls.mostRecent().args[0];
        const pass = errorMessage.includes(
            `[Vue warn]: Invalid prop: type check failed for prop "title". Expected String with value "null", got Null \n`,
        );

        expect(pass).toBeTruthy();
    });
});
