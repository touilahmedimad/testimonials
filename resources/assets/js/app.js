
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
import Profile from './components/Profile'
import VeeValidate from 'vee-validate'
import Vue from 'vue';
import test from './components/Example'
import VueMoment from 'vue-moment'
import Auth from './auth'
window.bus = new Vue({})
Vue.use(VeeValidate)
Vue.use(VueMoment)
Auth.checkAuth()
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
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        meta: {requiresAuth: true}
    }
];
window.router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        if(window.authenticated) {
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
