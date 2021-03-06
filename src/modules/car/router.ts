export default [
    {
        path: '/car',
        component: () => import('./Index.vue'),
        meta: {
            entity: true,
            navbarName: 'Car'
        },
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
