<template>
    <div>
        <app-navbar />
        <router-view />
    </div>
</template>

<script>
import AppNavbar from '../components/Navbar';

export default {
    components: {
        AppNavbar,
    },
};
</script>
