import VueRouter, { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/containers/Home.vue'),
    },
    {
        path: '/about',
        component: () => import('@/containers/About.vue'),
    },
];

export default new VueRouter({ routes });
