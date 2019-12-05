import VueRouter, { RouteConfig } from 'vue-router';
import { Module } from 'webpack';

const cache: { [key: string]: Module } = {};

function loadAllModules(r: any) {
    r.keys().forEach((key: string) => {
        cache[key] = r(key);
    });
}

loadAllModules(require.context('./modules/', true, /index.ts$/));

const modules = Object.keys(cache).reduce((acc, next) => {
    return acc.concat((cache[next] as any).default.router);
}, []);

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/pages/Layout.vue'),
        children: modules,
    },
];

export default new VueRouter({ routes });
