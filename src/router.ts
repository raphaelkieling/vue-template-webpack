import VueRouter, { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/containers/Home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/containers/Login/Login.vue'),
    },
];

export default new VueRouter({ routes });
