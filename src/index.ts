import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';

Vue.use(VueCompositionApi);
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
