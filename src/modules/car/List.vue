<template>
    <div>
        <b-button class="is-primary">Cadastrar</b-button>
        <b-table :data="data" :columns="columns" :loading="isLoading" />
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import api from './api';

export default {
    setup() {
        const data = ref([]);
        const isLoading = ref(false);

        const getAll = async () =>{
            isLoading.value = true;
            data.value = await api.getAll();
            isLoading.value = false;
        }

        getAll();

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

        return { data, isLoading, columns };
    },
};
</script>