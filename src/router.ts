import VueRouter, { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/containers/Home.vue'),
    },
];

export default new VueRouter({ routes });
