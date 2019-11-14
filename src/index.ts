import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router';
import VueTilt from 'vue-tilt.js';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@/assets/css/global.css';

import App from './App.vue';
import router from './router';

Vue.use(VueTilt);
Vue.use(VueCompositionApi);
Vue.use(VueRouter);
Vue.use(Buefy);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
