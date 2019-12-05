<template>
    <section class="card login-form-card">
        <b-field label="Username">
            <b-input v-model="data.username" />
        </b-field>

        <b-field label="Password">
            <b-input v-model="data.password" />
        </b-field>

        <b-button class="is-dark is-fullwidth" @click="$emit('submit')">Submit</b-button>
    </section>
</template>

<script>
export default {
    props: ['data'],
};
</script>

<style>
.login-form-card {
    padding: 10px;
}
</style>
