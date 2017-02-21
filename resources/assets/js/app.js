
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import master from './master'
import VueResource from 'vue-resource'
import { store } from './store/store.js'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import Home from './components/Home'
Vue.use(VeeValidate)
Vue.use(VueResource)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
let routes = [
    {
        path: '/',
        component: Home
    },
];

Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router: new VueRouter({
        routes
    }),
    store,
    template: '<master/>',
    components: { master }
});
