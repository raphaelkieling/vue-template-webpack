import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
    it('should render', () => {
        const title = 'World';

        const wrapper = mount(HelloWorld, {
            propsData: {
                title,
            },
        });
        expect(wrapper.find('h1').text()).toBe('Hello World');
    });
});
