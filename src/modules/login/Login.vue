<template>
    <div class="hero is-primary is-fullheight is-vcentered">
        <login-form :data="data" class="login-form-container" @submit="submit" />
    </div>
</template>

<script>
import LoginForm from './components/LoginForm';
import { reactive } from '@vue/composition-api';

export default {
    components: { LoginForm },
    setup(_, { root }) {
        const data = reactive({
            username: '',
            password: '',
        });

        const submit = () => {
            root.$router.push('/car');
        };

        return { data, submit };
    },
};
</script>

<style scoped>
.login-form-container {
    max-width: 350px;
}
</style>
