// @flow

<template lang="pug">

    layout

        // SIDE NAVBAR
        //---------------------------------------------------------------------

        el-menu(slot    = "SIDE-NAVBAR-SLOT",
                class   = "SIDE-NAVBAR",
                @select = "onMenuSelect",
                theme   ="dark")
            el-menu-item.H-CLOSE(:index="APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED")
                | {{APP_ITEMS_NAMES.CLOSE_SIDEBAR_MENU_ITEM[language]}} &nbsp &nbsp
                i.el-icon-close

            el-submenu.H-LANG(:index="APP_EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED")
                template(slot="title")
                    | {{APP_ITEMS_NAMES.LANGUAGE_SUBMENU_ITEM[language]}}
                el-menu-item(:index="APP_EVENTS_ID.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED")
                    | {{APP_ITEMS_NAMES.RUSSIAN_LANGUAGE_MENU_ITEM[language]}}
                el-menu-item(:index="APP_EVENTS_ID.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED")
                    | {{APP_ITEMS_NAMES.ENGLISH_LANGUAGE_MENU_ITEM[language]}}
                el-menu-item(:index="APP_EVENTS_ID.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED" )
                    | {{APP_ITEMS_NAMES.SLOVAK_LANGUAGE_MENU_ITEM[language]}}

            el-menu-item.H-PRICE(:index="APP_EVENTS_ID.PRICE_MENU_ITEM_CLICKED"    )
                | {{APP_ITEMS_NAMES.PRICE_MENU_ITEM[language]}}
            el-menu-item.H-ADDRESS(:index="APP_EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED"  )
                | {{APP_ITEMS_NAMES.ADDRESS_MENU_ITEM[language]}}
            el-menu-item.H-VACANCIES(:index="APP_EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED")
                | {{APP_ITEMS_NAMES.VACANCIES_MENU_ITEM[language]}}

            el-menu-item.H-ORDER(:index="APP_EVENTS_ID.ORDER_MENU_ITEM_CLICKED"): el-button.H-BUTTON
                | {{APP_ITEMS_NAMES.ORDER_MENU_BUTTON[language]}}
            el-menu-item.H-IN(:index="APP_EVENTS_ID.IN_MENU_ITEM_CLICKED", class="H-ICON")
                img(src="/images/icons/in-white.png")
            el-menu-item.H-FB(:index="APP_EVENTS_ID.FB_MENU_ITEM_CLICKED", class="H-ICON")
                img(src="/images/icons/fb-white.png")

        // TOP NAVBAR
        //---------------------------------------------------------------------

        top-navbar-slider(slot="TOP-NAVBAR-SLOT")
            el-menu(mode        ="horizontal",
                    class       ="TOP-NAVBAR",
                    @select     ="onMenuSelect",
                    menu-trigger="click"
                )
                el-menu-item.TOGGLE.ITEM(:index="APP_EVENTS_ID.TOGGLE_MENU_ITEM_CLICKED")
                    i.el-icon-menu
                el-menu-item.LOGO(:index="APP_EVENTS_ID.LOGO_ITEM_CLICKED", :route="{name: '/'}")
                    img(src="/images/logos/logo_whitelab_without_border.png")
                el-menu-item.ORDER.ITEM(:index="APP_EVENTS_ID.ORDER_MENU_ITEM_CLICKED"): el-button.BUTTON
                    | {{APP_ITEMS_NAMES.ORDER_MENU_BUTTON[language]}}
                el-submenu.LANG.ITEM(:index="APP_EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED")
                    template(slot="title" class="LANG-ITEM")
                        | {{APP_ITEMS_NAMES.LANGUAGE_SUBMENU_ITEM[language]}}
                    el-menu-item(:index="APP_EVENTS_ID.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED", )
                        | {{APP_ITEMS_NAMES.RUSSIAN_LANGUAGE_MENU_ITEM[language]}}
                    el-menu-item(:index="APP_EVENTS_ID.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED", )
                        | {{APP_ITEMS_NAMES.ENGLISH_LANGUAGE_MENU_ITEM[language]}}
                    el-menu-item(:index="APP_EVENTS_ID.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED" , )
                        | {{APP_ITEMS_NAMES.SLOVAK_LANGUAGE_MENU_ITEM[language]}}

                el-menu-item.VACANCIES.ITEM(:index="APP_EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED", :route="{name: 'vacancies'}")
                    | {{APP_ITEMS_NAMES.VACANCIES_MENU_ITEM[language]}}
                el-menu-item.ADDRESS.ITEM(:index="APP_EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED")
                    | {{APP_ITEMS_NAMES.ADDRESS_MENU_ITEM[language]}}
                el-menu-item.PRICE.ITEM(:index="APP_EVENTS_ID.PRICE_MENU_ITEM_CLICKED", :route="{name: 'price'}")
                    | {{APP_ITEMS_NAMES.PRICE_MENU_ITEM[language]}}
                el-menu-item.IN.ITEM(:index="APP_EVENTS_ID.IN_MENU_ITEM_CLICKED")
                    //a(href="https://www.instagram.com" target="_blank"):
                    img.ICON(src="/images/icons/in.png")
                el-menu-item.FB.ITEM(:index="APP_EVENTS_ID.FB_MENU_ITEM_CLICKED")
                    img.ICON(src="/images/icons/fb.png")

        // ROUTER
        //---------------------------------------------------------------------
        router-view(slot="CONTENT-SLOT")


</template>
<style lang="sass" scoped>

    @import ../../../sass/mixins
    @import ../../../sass/variables

    .SIDE-NAVBAR
        min-height: 100%

        .H-LANG
            @media(min-width: 667px)
                display: none

        .H-PRICE
            @media (min-width: 745px)
                display: none

        .H-ADDRESS
            @media(min-width: 950px)
                display: none
        .H-VACANCIES
            @media (min-width: 990px)
                display: none

        .H-ORDER
            cursor          : default
            line-height     : 57px         !important
            @media(min-width: 564px)
                display: none

            .H-BUTTON
                display         : inline-block
                background-color: #ff627b
                color           : white
                border          : none
                width           : 100%
                &:hover
                    color       : white
                    border-color: white
                    background-color: #f4576e
                &:active
                    background-color: #ec576e

        .H-ICON
            line-height     : 68px         !important
            text-align      : center
            width           : 50%
            float           : left
            img
                display     : inline-block !important
                height      : 1.4em        !important
                opacity     : 0.8
                color       : white

        .H-CLOSE
            text-align      : right

        .H-IN, .H-FB
            @media(min-width: 469px)
                display: none

    .TOP-NAVBAR
        @media(min-width: 850px)
            padding: 0 10% 0 10%           !important
        @media(max-width: 849px)
            padding: 0 5% 0 5%             !important

    .ITEM
        float: right !important

    .TOGGLE
        color       : #66a0df
        display     : none
        line-height : 64px !important
        font-size   : 1.7em
        border      : none !important
        &:hover
            border  : none !important
            color   : #66A0DF

        @media(max-width: 990px)
            display : inline-block

    .LOGO
        line-height : 85px !important
        border      : none !important
        opacity     : 0.75

        &:hover
            opacity : 1
            border  : none !important
        &:active
            background-color: #EEF1F6

        img
            display : inline-block
            +size(auto, 2.5em)

    .ORDER
        line-height : 63px !important
        border      : none !important
        cursor      : default !important
        @media(max-width: 564px)
            display: none

        .BUTTON
            background-color: #ff627b
            color           : white
            border          : none

            &:hover
                color       : white
                border-color: white
                background-color: #f4576e

            &:active
                background-color: #ec576e

    .LANG
        @media(max-width: 667px)
            display: none

    .VACANCIES
        @media (max-width: 990px)
            display: none

    .ADDRESS
        @media(max-width: 950px)
            display: none

    .PRICE
        @media (max-width: 745px)
            display: none

    .IN, .FB
        line-height: 72px !important
        &:hover .ICON
            opacity: 1
        @media(max-width: 469px)
            display: none
        .ICON
            height: 1.2em !important
            opacity: 0.50

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import Layout                 from "./layout.vue"
    import TopNavbarSlider        from "../shared/top-navbar-slider.vue"
    import {COMPONENTS_EVENTS   } from "../../classes/enum/COMPONENTS_EVENTS";
    import {APP_LANGUAGES       } from "../../classes/enum/APP_LANGUAGES";
    import {APP_BUTTONS_NAMES   } from "../../classes/enum/APP_BUTTONS_NAMES";
    import {Cookie              } from "../../classes/facades/Cookie";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                APP_EVENTS_ID       : object,
                APP_LANGUAGES       : object,
                APP_ITEMS_NAMES     : object,
                language        : string,
                topNavabr  : {
                }
            } = {
                APP_EVENTS_ID       : COMPONENTS_EVENTS.APP.NAVIGATION,
                APP_LANGUAGES       : APP_LANGUAGES,
                APP_ITEMS_NAMES     : APP_BUTTONS_NAMES.APP_NAVIGATION,
                cookie              : Cookie.getInstance(),
                language            : Cookie.getInstance().get('app.language') ?
                                      Cookie.getInstance().get('app.language') :
                                      APP_LANGUAGES.DEFAULT,
                topNavabr: {
                }
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed:{
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            // Event HANDLERS
            onMenuSelect(key, keyPath){

                switch (key) {
                    case this.APP_EVENTS_ID.LOGO_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.LOGO_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.FB_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.FB_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.IN_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.IN_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.PRICE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.PRICE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.ORDER_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.ORDER_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.ORDER_MENU_BUTTON_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.ORDER_MENU_BUTTON_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.TOGGLE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.TOGGLE_MENU_ITEM_CLICKED);
                        /**Don't generate 'close sidebar' event.*/
                        break;

                    case this.APP_EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    case this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.APP_EVENTS_ID.CLOSE_SIDEBAR_MENU_ITEM_CLICKED);
                        break;

                    default:
                        throw new Error("Wrong event ID number. Click on " +
                            "app top-navigation menu item can't be handled.");
                }
            },
            onLogoItemClick                 (): void {
                this.$router.push({name:'app'})
            },
            onFacebookItemClick             (): void {
                window.location.href = 'https://www.facebook.com';
            },
            onInstagramItemClick            (): void {
                window.location.href = 'https://www.instagram.com';
            },
            onPriceMenuItemClick            (): void {
                this.$router.push({name: 'price'})
            },
            onAddressMenuItemClick          (): void {
                this.$router.push({name: 'contacts'});
            },
            onVacanciesMenuItemClick        (): void {
                this.$router.push({name: 'vacancies'});
            },
            onRussianLanguageMenuItemClick  (): void {
                this.language = this.APP_LANGUAGES.RUSSIAN;
                this.cookie.set('app.language', this.language);
            },
            onEnglishLanguageMenuItemClick  (): void {
                this.language = this.APP_LANGUAGES.ENGLISH;
                this.cookie.set('app.language', this.language);
            },
            onSlovakLanguageMenuItemClick   (): void {
                this.language = this.APP_LANGUAGES.SLOVAK;
                this.cookie.set('app.language', this.language);
            },
            onOrderButtonClick              (): void {

                //TODO: реализовать перереход к систуме он лайн заказа
                throw new Error("Method 'onOrderButtonClick()' can't be invoke " +
                    "it's not implemented.");
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted() {

            // SUBSCRIBE on navigation events
            {
                this.$bus.$on(
                    this.APP_EVENTS_ID.LOGO_ITEM_CLICKED,
                    this.onLogoItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.FB_MENU_ITEM_CLICKED,
                    this.onFacebookItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.IN_MENU_ITEM_CLICKED,
                    this.onInstagramItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.PRICE_MENU_ITEM_CLICKED,
                    this.onPriceMenuItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED,
                    this.onAddressMenuItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED,
                    this.onVacanciesMenuItemClick
                );

                // this.$bus.$emit(this.APP_EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED)
                // May be realazied if it will be need.

                this.$bus.$on(
                    this.APP_EVENTS_ID.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onRussianLanguageMenuItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onEnglishLanguageMenuItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onSlovakLanguageMenuItemClick
                );
                this.$bus.$on(
                    this.APP_EVENTS_ID.ORDER_MENU_BUTTON_CLICKED,
                    this.onOrderButtonClick
                );
            }
//                this.$bus.$emit(this.APP_EVENTS_ID.ORDER_MENU_ITEM_CLICKED)

        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            Layout,
            TopNavbarSlider
        }
    }

</script>