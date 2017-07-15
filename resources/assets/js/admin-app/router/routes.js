import LoginPage from "../components/pages/login/page.vue"
import PanelPage from "../components/pages/panel/page.vue"

export default [
    { path: '/admin',                name: 'app'  ,        component: LoginPage   },
    { path: '/admin/login',           name: 'login',       component: LoginPage   },
    { path: '/admin/panel',           name: 'panel',       component: PanelPage   },
];