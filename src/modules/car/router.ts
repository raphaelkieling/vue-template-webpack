export default [
    {
        path: '/car',
        component: () => import('./Index.vue'),
        children:[
            {
                path:'/',
                component:()=>import('./List.vue')
            }
        ]
    }
]