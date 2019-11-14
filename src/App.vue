<template>
    <div>
        <hello-world :title="title" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
import { ref } from '@vue/composition-api';

export default {
    components: {
        HelloWorld,
    },
    setup() {
        const title = ref('World');
        return { title };
    },
};
</script>
