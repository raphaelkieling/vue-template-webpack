import VueRouter, { RouteConfig } from 'vue-router';
import { Module } from 'webpack';

const cache: { [key: string]: Module } = {};

function loadAllModules(r: any) {
    r.keys().forEach((key: string) => {
        cache[key] = r(key);
    });
}

loadAllModules(require.context('./modules/', true, /index.ts$/));

console.log(Object.entries(cache)[0][1]);

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue'),
        children: [],
    },
    {
        path: '/about',
        component: () => import('@/pages/About.vue'),
    },
];

export default new VueRouter({ routes });
