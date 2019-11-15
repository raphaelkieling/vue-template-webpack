<template>
    <div class="hero is-dark is-fullheight is-vcentered">
        <login-form :data="data" class="login-form-container" />
    </div>
</template>

<script>
import LoginForm from './components/LoginForm';
import { reactive } from '@vue/composition-api';

export default {
    components: { LoginForm },
    setup() {
        const data = reactive({
            username: '',
            password: '',
        });

        return { data };
    },
};
</script>

<style scoped>
.login-form-container {
    max-width: 350px;
}
</style>
