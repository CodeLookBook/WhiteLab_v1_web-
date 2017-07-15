
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./admin-bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import AdminApp    from "./components/admin/admin.vue";
import {router}    from "./router/router";

/**
 * Event bus object.
 */
const EventBus: Vue =  new window.Vue();

Object.defineProperties( window.Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    },
});

/**
 * App view.
 */
new window.Vue({
    el: '#admin-app',
    template: '<admin-app></admin-app>',
    router,
    components: {
        AdminApp,
    }
});