import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
    it('should render', () => {
        const wrapper = mount(HelloWorld, {
            propsData: {
                description: '',
            },
        });
        expect(wrapper).toBeTruthy();
    });

    it('should render with description', () => {
        const description = 'World';

        const wrapper = mount(HelloWorld, {
            propsData: {
                description,
            },
        });
        expect(wrapper.find('h1').text()).toBe(description);
    });

    it('should throw error if doesnt receive a description', () => {
        const spy = spyOn(console, 'error');

        mount<any>(HelloWorld, {
            propsData: {
                description: null,
            },
        });

        const errorMessage: string = spy.calls.mostRecent().args[0];
        const pass = errorMessage.includes(
            `[Vue warn]: Invalid prop: type check failed for prop "description". Expected String with value "null", got Null \n`,
        );

        expect(pass).toBeTruthy();
    });
});
