// @flow
<template lang="pug">

    layout

        // SIDE NAVBAR
        //---------------------------------------------------------------------

        el-menu(slot    = "SIDE-NAVBAR-SLOT",
                class   = "SIDE-NAVBAR",
                @select = "onMenuSelect",
                theme   ="dark")
            el-menu-item.CLOSE(:index="EVENTS_ID.CLOSE_SIDEBAR_ITEM_CLICKED")
                | ЗАКРЫТЬ &nbsp &nbsp
                i.el-icon-close
            el-submenu(:index="EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED")
                template(slot="title") Язык
                el-menu-item(:index="EVENTS_ID.RUSSIAN_LANGUAGE_ITEM_CLICKED") Русский
                el-menu-item(:index="EVENTS_ID.ENGLISH_LANGUAGE_ITEM_CLICKED") English
                el-menu-item(:index="EVENTS_ID.SLOVAK_LANGUAGE_ITEM_CLICKED" ) Slovak
            el-menu-item(:index="EVENTS_ID.PRICE_MENU_ITEM_CLICKED"    ) Цены
            el-menu-item(:index="EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED"  ) Адрес
            el-menu-item(:index="EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED") Вакансии
            el-menu-item(:index="EVENTS_ID.ORDER_ITEM_CLICKED")
                el-button.BUTTON Заказать
            el-menu-item(:index="EVENTS_ID.IN_MENU_ITEM_CLICKED", class="ICON")
                img(src="/images/icons/in-white.png")
            el-menu-item(:index="EVENTS_ID.FB_MENU_ITEM_CLICKED", class="ICON")
                img(src="/images/icons/fb-white.png")

        // TOP NAVBAR
        //---------------------------------------------------------------------

        top-navbar-slider(slot="TOP-NAVBAR-SLOT")
            el-menu(mode        ="horizontal",
                    class       ="TOP-NAVBAR",
                    @select     ="onMenuSelect",
                    menu-trigger="click"
                )
                el-menu-item.TOGGLE.ITEM(:index="EVENTS_ID.TOGGLE_ITEM_CLICKED")
                    i.el-icon-menu
                el-menu-item.LOGO(:index="EVENTS_ID.LOGO_ITEM_CLICKED", :route="{name: '/'}")
                    img(src="/images/logos/logo_whitelab_without_border.png")
                el-menu-item.ORDER.ITEM(:index="EVENTS_ID.ORDER_ITEM_CLICKED")
                    el-button.BUTTON Заказать
                el-submenu.LANG.ITEM(:index="EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED")
                    template(slot="title" class="LANG-ITEM") Язык
                    el-menu-item(:index="EVENTS_ID.RUSSIAN_LANGUAGE_ITEM_CLICKED", ) Русский
                    el-menu-item(:index="EVENTS_ID.ENGLISH_LANGUAGE_ITEM_CLICKED", ) English
                    el-menu-item(:index="EVENTS_ID.SLOVAK_LANGUAGE_ITEM_CLICKED" , ) Slovak
                el-menu-item.VACANCIES.ITEM(:index="EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED", :route="{name: 'vacancies'}")
                    | Вакансии
                el-menu-item.ADDRESS.ITEM(:index="EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED")
                    | Адрес
                el-menu-item.PRICE.ITEM(:index="EVENTS_ID.PRICE_MENU_ITEM_CLICKED", :route="{name: 'price'}")
                    | Цены
                el-menu-item.IN.ITEM(:index="EVENTS_ID.IN_MENU_ITEM_CLICKED")
                    //a(href="https://www.instagram.com" target="_blank"):
                    img.ICON(src="/images/icons/in.png")
                el-menu-item.FB.ITEM(:index="EVENTS_ID.FB_MENU_ITEM_CLICKED")
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

        .BUTTON
            background-color: #ff627b
            color           : white
            border          : none
            width: 100%
            &:hover
                color       : white
                border-color: white
                background-color: #f4576e
            &:active
                background-color: #ec576e

        .ICON
            line-height     : 68px         !important
            text-align      : center
            width           : 50%
            float           : left
            img
                display     : inline-block !important
                height      : 1.4em        !important
                opacity     : 0.8
                color       : white

        .CLOSE
            text-align      : right

    .TOP-NAVBAR
        @media(min-width: 850px)
            padding: 0 10% 0 10%           !important
        @media(max-width: 849px)
            padding: 0 5% 0 5%             !important

    .ITEM
        float: right !important

    .TOGGLE
        color       : #95caff
        display     : none
        line-height : 64px !important
        font-size   : 1.7em
        border      : none !important
        &:hover
            border  : none !important
            color   : #8cbdf1
        &:active
            color   : #7eaddf

        @media(max-width: 963px)
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
        @media(max-width: 655px)
            display: none

    .VACANCIES
        @media (max-width: 963px)
            display: none

    .ADDRESS
        @media(max-width: 924px)
            display: none

    .PRICE
        @media (max-width: 736px)
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

    import Layout    from "./layout.vue"
    import TopNavbarSlider from "../shared/top-navbar-slider.vue"
    import {COMPONENTS_EVENTS} from "../../classes/enum/COMPONENTS_EVENTS";

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
                EVENTS_ID: object,
                topNavabr: {
                }
            } = {
                EVENTS_ID: COMPONENTS_EVENTS.APP.NAVIGATION,
                topNavabr: {
                }
            };
            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {
            onMenuSelect(key, keyPath){

                switch (key) {
                    case this.EVENTS_ID.LOGO_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.LOGO_ITEM_CLICKED);;
                        break;

                    case this.EVENTS_ID.FB_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.FB_MENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.IN_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.IN_MENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.PRICE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.PRICE_MENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.RUSSIAN_LANGUAGE_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.RUSSIAN_LANGUAGE_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.ENGLISH_LANGUAGE_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.ENGLISH_LANGUAGE_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.SLOVAK_LANGUAGE_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.SLOVAK_LANGUAGE_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.ORDER_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.ORDER_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.ORDER_BUTTOM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.ORDER_BUTTOM_CLICKED);
                        break;

                    case this.EVENTS_ID.TOGGLE_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.TOGGLE_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.ADDRESS_MENU_ITEM_CLICKED);
                        break;

                    case this.EVENTS_ID.CLOSE_SIDEBAR_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS_ID.CLOSE_SIDEBAR_ITEM_CLICKED);
                        break;

                    default:
                        throw new Error("Wrong event ID number. Click on " +
                            "app top-navigation menu item can't be handled.");
                }

                console.log(key, keyPath);
            },

            onLanguageMenuSelect(languageId: string){


            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted() {
//                this.$bus.$emit(this.EVENTS_ID.LOGO_ITEM_CLICKED);
//                this.$bus.$emit(this.EVENTS_ID.FB_MENU_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.IN_MENU_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.PRICE_MENU_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.VACANCIES_MENU_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.LANGUAGE_SUBMENU_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.RUSSIAN_LANGUAGE_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.ENGLISH_LANGUAGE_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.SLOVAK_LANGUAGE_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.ORDER_ITEM_CLICKED)
//                this.$bus.$emit(this.EVENTS_ID.ORDER_BUTTOM_CLICKED)

//            this.$bus.$on(this.EVENTS_ID.TOGGLE_ITEM_CLICKED, this.onToggleItemClick);
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