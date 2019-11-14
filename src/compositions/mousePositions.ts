import { ref, onUnmounted, Ref } from '@vue/composition-api';

export const eventMouseMove = (x: Ref<number>, y: Ref<number>) => {
    return ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        x.value = clientX;
        y.value = clientY;
    };
};

export default () => {
    const x = ref(0);
    const y = ref(0);
    const handleEvent = eventMouseMove(x, y);

    window.addEventListener('mousemove', handleEvent);

    onUnmounted(() => {
        window.removeEventListener('mousemove', handleEvent);
    });

    return {
        x,
        y,
    };
};
