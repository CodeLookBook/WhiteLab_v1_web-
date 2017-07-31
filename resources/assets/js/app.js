
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App    from "./components/app/app.vue"
import {router} from "./router/router"


new Vue({
    el: '#app',
    router: router,
    template: '<app></app>',
    components: {
        App,
    }
});