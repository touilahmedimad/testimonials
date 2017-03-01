
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import master from './master'
import { store } from './store/store.js'
import VueRouter from 'vue-router'
import Home from './components/Home'
import DashboardPage from './components/Dashboard'
import VeeValidate from 'vee-validate'
import Vue from 'vue';
import test from './components/Example'
Vue.use(VeeValidate)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {requiresAuth: false}
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        name: 'Dashboard',
        meta: {requiresAuth: true}
    },
    {
        path: '/test',
        component: test,
        name: 'test',
        meta: {requiresAuth: true}
    }
];
window.router = new VueRouter({
    routes
})
var vm =this
router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        if(localStorage.getItem('authtoken')) {
            next()
        }
        else {
            next('/')
        }
    }
    else {
        next()
    }

})
Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<master/>',
    components: { master }
});
