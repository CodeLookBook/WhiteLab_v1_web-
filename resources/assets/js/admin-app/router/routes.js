import LoginPage                 from "../components/pages/login/page.vue"
import PanelPage                 from "../components/pages/panel/page.vue"
import HomePageGreetTextSettings from "../components/pages/greet-text-settings/page.vue"
import EditPricePage             from "../components/pages/edit-price/page.vue"
import EditAddressPage           from "../components/pages/edit-address/page.vue"
import EditGreetBlockFonPage     from "../components/pages/edit-greet-block-fon/page.vue"
import EditSocialGroupsPage      from "../components/pages/edit-social-groups-buttons/page.vue"
import EditShareButtons          from "../components/pages/edit-share-buttons/page.vue"
import EditOrderButton           from "../components/pages/edit-order-button/page.vue"
import EditVacancies             from "../components/pages/edit-vacancies/page.vue"

export default [

    { path: '/*',                          component: LoginPage   },
    { path: '/admin',       name: 'app'  , component: LoginPage   },
    { path: '/admin/login', name: 'login', component: LoginPage   },
    {
        path: '/admin/panel', name: 'panel', component: PanelPage, children: [
/*            {
                path     : '/',
                component: HomePageGreetTextSettings,
            },*/
            {
                path     : 'home-page-greet-text-settings',
                name     : 'homePageGreetTextSettings',
                component: HomePageGreetTextSettings,
            },
            {
                path     : 'edit-home-page-greet-fon',
                name     : 'editHomePageGreeBlockFon',
                component: EditGreetBlockFonPage,
            },
            {
                path     : 'edit-price',
                name     : 'editPrice',
                component: EditPricePage,
            },
            {
                path     : 'edit-address',
                name     : 'editAddress',
                component: EditAddressPage,
            },
            {
                path     : 'edit-social-groups-buttons',
                name     : 'editSocialGroupsPage',
                component: EditSocialGroupsPage,
            },
            {
                path: 'edit-share-buttons',
                name: 'editShareButtons',
                component: EditShareButtons,
            },
            {
                path: 'edit-order-button',
                name: 'editOrderButton',
                component: EditOrderButton,
            },
            {
                path: 'edit-vacancies',
                name: 'editVacancies',
                component: EditVacancies,
            }
        ],
    },
];