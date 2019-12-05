<template>
    <b-navbar class="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/home' }"> Terun Test 0.1 </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Entities">
                <b-navbar-item tag="router-link" :to="{ path: '/car' }">
                    Car
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {};
</script>
