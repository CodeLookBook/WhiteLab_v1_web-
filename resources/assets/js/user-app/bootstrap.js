/**
 * Vue is a progressive framework for building user interfaces.
 */
window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$http = window.axios;

/**
 * Vue-router
 */
import VueRouter from "vue-router";
window.Vue.use(VueRouter);

/**
 * Vuex is a state management pattern + library for Vue.js applications. It
 * serves as a centralized store for all the components in an application,
 * with rules ensuring that the state can only be mutated in a predictable
 * fashion.
 */
import Vuex from 'vuex'
window.Vue.use(Vuex);

/**
 * Element, a Vue 2.0 based component library for developers, designers
 * and product managers.
 */
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-default/index.css';
window.Vue.use(ElementUI, { locale });


/**
 * A Vue.js component for sharing links to social networks, work with
 * Vue.js 1.X or 2.X
 */
const SocialSharing = require('vue-social-sharing');
window.Vue.use(SocialSharing);


/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
