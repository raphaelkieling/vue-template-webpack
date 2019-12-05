<template>
    <div>
        <h1>List</h1>
        <b-table :data="data" :loading="isLoading"> </b-table>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    setup() {
        const data = ref([
            {
                id: 1,
                first_name: 'Raphael',
            },
        ]);
        const isLoading = ref(false);

        return { data, isLoading };
    },
};
</script>

<style></style>
