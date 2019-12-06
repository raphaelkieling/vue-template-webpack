<template>
    <b-navbar class="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/home' }"> Terun Test 0.1 </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                Home
                {{routes.length}}
            </b-navbar-item>
            <b-navbar-dropdown label="Entities">
                <b-navbar-item v-for="(route,index) in routes" :key="index" tag="router-link" :to="{ path: route.path }">
                    {{route.meta.navbarName}}
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
    setup(params, { root }){
        const router = root.$router

        const getRoutes = ()=>{
            return router.options.routes[0].children.filter(route=> route.meta && route.meta.entity)
        }

        const routes = ref(getRoutes())

        return { routes }
    }
};
</script>
