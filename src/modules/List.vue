<template>
    <div>
        <b-button class="is-primary">Cadastrar</b-button>
        <b-table :data="data" :columns="columns" :loading="isLoading" />
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    setup() {
        const data = ref([
            {
                id: 1,
                model: 'Civic',
            },
        ]);

        const columns = ref([
            {
                field: 'id',
                label: 'ID',
                numeric: true,
            },
            {
                field: 'model',
                label: 'Model',
                searchable: true,
            },
        ]);
        const isLoading = ref(false);

        return { data, isLoading, columns };
    },
};
</script>