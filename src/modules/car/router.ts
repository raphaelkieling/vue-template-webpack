export default [
    {
        path: '/car',
        component: () => import('./Index.vue'),
        children: [
            {
                path: 'list',
                component: () => import('./List.vue'),
            },
            {
                path: '/',
                redirect: '/car/list',
            },
        ],
    },
];
