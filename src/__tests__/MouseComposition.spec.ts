import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { mount } from '@vue/test-utils';
import { ref } from '@vue/composition-api';
import mousePositions, { eventMouseMove } from 'compositions/mousePositions';

describe('Mouse positions', () => {
    beforeAll(() => {
        Vue.use(VueCompositionApi);
    });

    it('should exec function with success', () => {
        const wrapper = mount<any>({
            setup() {
                return mousePositions();
            },
            render: h => h(''),
        });

        const currentValues = {
            x: wrapper.vm.x,
            y: wrapper.vm.y,
        };

        expect(currentValues).toEqual({ x: 0, y: 0 });
    });

    it('should exec function with success', () => {
        const wrapper = mount<any>({
            setup() {
                const x = ref(0);
                const y = ref(0);
                eventMouseMove(x, y)({ clientX: 1, clientY: 1 });

                return { x, y };
            },
            render: h => h(''),
        });

        const currentValues = {
            x: wrapper.vm.x,
            y: wrapper.vm.y,
        };

        expect(currentValues).toEqual({ x: 1, y: 1 });
    });
});
