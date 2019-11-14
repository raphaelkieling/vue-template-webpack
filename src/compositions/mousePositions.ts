import { ref, onUnmounted } from '@vue/composition-api';

export default () => {
    const x = ref(0);
    const y = ref(0);

    const listenMouseMove = (event: MouseEvent) => {
        x.value = event.clientX;
        y.value = event.clientY;
    };

    window.addEventListener('mousemove', listenMouseMove);

    onUnmounted(() => {
        window.removeEventListener('mousemove', listenMouseMove);
    });

    return {
        x,
        y,
    };
};
