import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/containers/Home.vue';
import About from '@/containers/About.vue';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
];

export default new VueRouter({ routes });
