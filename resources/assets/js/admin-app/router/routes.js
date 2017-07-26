import LoginPage                 from "../components/pages/login/page.vue"
import PanelPage                 from "../components/pages/panel/page.vue"
import HomePageGreetTextSettings from "../components/pages/greet-text-settings/page.vue"
import EditPricePage             from "../components/pages/edit-price/page.vue"
import EditAddressPage           from "../components/pages/edit-address/page.vue"

export default [
    { path: '/admin',       name: 'app'  , component: LoginPage   },
    { path: '/admin/login', name: 'login', component: LoginPage   },
    {
        path: '/admin/panel', name: 'panel', component: PanelPage, children: [
            {
                path: 'home-page-greet-text-settings',
                name     : 'homePageGreetTextSettings',
                component: HomePageGreetTextSettings,
            },
            {
                path: 'edit-price',
                name     : 'editPrice',
                component: EditPricePage,
            },
            {
                path: 'edit-address',
                name     : 'editAddress',
                component: EditAddressPage,
            }
        ],
    },
];