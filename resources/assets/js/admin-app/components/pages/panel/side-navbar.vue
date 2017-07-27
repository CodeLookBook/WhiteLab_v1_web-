// @flow

<template lang="pug">

    el-menu(
        class   = "SIDE-NAVBAR",
        @select = "onMenuSelect",
        theme   = "dark"
    )
        // HOME PAGE SETTINGS
        el-submenu(:index="EVENTS.HOME_PAGE_SETTINGS_ITEM_CLICKED")
            template(slot="title")
                |{{BUTTONS.HOME_PAGE_SETTINGS_ITEM[language]}}
            el-menu-item(:index="EVENTS.CHANG_GREET_TEXT_ITEM_CLICKED")
                |{{BUTTONS.CHANG_GREET_TEXT_ITEM[language]}}
            el-menu-item(:index="EVENTS.CHANG_FB_SHARE_BUTTON_SETTINGS_ITEM_CLICKED")
                |{{BUTTONS.CHANG_FB_SHARE_BUTTON_SETTINGS_ITEM[language]}}
            el-menu-item(:index="EVENTS.CHANGE_GREET_BLOCK_FON_ITEM_CLICKED")
                |{{BUTTONS.CHANGE_GREET_BLOCK_FON_ITEM[language]}}

        // SOCIAL GROUPS REFERENCES
        el-menu-item(:index="EVENTS.EDIT_SOCIAL_GROUPS_REFS_ITEM_CLICKED")
            |{{BUTTONS.EDIT_SOCIAL_GROUPS_REFS_ITEM[language]}}

        // VACANCES PAGE SETTINGS
        el-menu-item(:index="EVENTS.EDIT_VACANCIES_LIST_ITEM_CLICKED")
            |{{BUTTONS.EDIT_VACANCIES_LIST_ITEM[language]}}

        // DOWNLOADS PRICE ON SERVER
        el-menu-item(:index="EVENTS.EDIT_PRICE_LIST_ITEM_CLICKED")
            |{{BUTTONS.EDIT_PRICE_LIST_ITEM[language]}}

        // DOWNLOADS IMAGE WITH MAP ON SERVER
        el-menu-item(:index="EVENTS.EDIT_ADDRESS_ITEM_CLICKED")
            |{{BUTTONS.EDIT_ADDRESS_ITEM[language]}}

        // LANGUAGES
        el-submenu(:index="EVENTS.LANGUAGE_SUBMENU_ITEM_CLICKED")
            template(slot="title")
                | {{BUTTONS.LANGUAGE_SUBMENU_ITEM[language]}}
            el-menu-item(:index="EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED")
                | {{BUTTONS.RUSSIAN_LANGUAGE_MENU_ITEM[language]}}
            el-menu-item(:index="EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED" )
                | {{BUTTONS.SLOVAK_LANGUAGE_MENU_ITEM[language]}}


</template>
<style lang="sass" scoped>

    .SIDE-NAVBAR
        min-height: 100%

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {SIDE_NAVBAR_EVENTS       } from "../../../classes/enums/events-names/SIDE_NAVBAR_EVENTS"
    import {SIDE_NAVBAR_TOGGLE_EVENTS} from "../../../classes/enums/events-names/SIDE_NAVBAR_TOGGLE_EVENTS";
    import {SIDE_NAVBAR_BUTTONS      } from "../../../classes/enums/buttons-names/SIDE_NAVBAR_BUTTONS";
    import {Cookie} from "../../../../shared-classes/facades/Cookie";
    import {LANGUAGES} from "../../../classes/enums/LANGUAGES";

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
                EVENTS          : Object,
                TOGGLE_EVENTS   : Object,
                BUTTONS         : Object,
                LANGUAGES       : Object,
                cookie          : Object,
                language        : string,
            } = {
                EVENTS          : SIDE_NAVBAR_EVENTS,
                TOGGLE_EVENTS   : SIDE_NAVBAR_TOGGLE_EVENTS,
                BUTTONS         : SIDE_NAVBAR_BUTTONS,
                LANGUAGES       : LANGUAGES,
                cookie          : Cookie.getInstance(),
                language        : Cookie.getInstance().get('admin-panel.language') ?
                                  Cookie.getInstance().get('admin-panel.language') :
                                  LANGUAGES.DEFAULT,
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

        methods:{
            onMenuSelect (key: string, keyPath) {

                console.log()
                switch (key){

                    // HOME PAGE SETTINGS
                    case this.EVENTS.HOME_PAGE_SETTINGS_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.HOME_PAGE_SETTINGS_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;
                    case this.EVENTS.CHANG_GREET_TEXT_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.CHANG_GREET_TEXT_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        this.$router.push({name: 'homePageGreetTextSettings'});
                        break;
                    case this.EVENTS.CHANG_FB_SHARE_BUTTON_SETTINGS_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.CHANG_FB_SHARE_BUTTON_SETTINGS_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;
                    case this.EVENTS.CHANGE_GREET_BLOCK_FON_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.CHANGE_GREET_BLOCK_FON_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        this.$router.push({name: 'editHomePageGreeBlockFon'});
                        break;

                    // SOCIAL GROUPS SETTINGS
                    case this.EVENTS.EDIT_SOCIAL_GROUPS_REFS_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.EDIT_SOCIAL_GROUPS_REFS_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        this.$router.push({name: 'editSocialGroupsPage'});
                        break;

                    // VACANCIES SETTINGS
                    case this.EVENTS.EDIT_VACANCIES_LIST_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.EDIT_VACANCIES_LIST_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;

                    // PRICE SETTINGS
                    case this.EVENTS.EDIT_PRICE_LIST_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.EDIT_PRICE_LIST_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        this.$router.push({name: 'editPrice'});
                        break;

                    //ADDRESS MAP SETTINGS
                    case this.EVENTS.EDIT_ADDRESS_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.EDIT_ADDRESS_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        this.$router.push({name: 'editAddress'});
                        break;


                    // LANGUAGES SETTINGS
                    case this.EVENTS.LANGUAGE_SUBMENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.LANGUAGE_SUBMENU_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;
                    case this.EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;
                    case this.EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED:
                        this.$bus.$emit(this.EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED);
                        this.$bus.$emit(this.TOGGLE_EVENTS.CLOSED);
                        break;

                    // ERROR MESSAGE
                    default:
                        throw new Error("Wrong event ID number. Click on " +
                            "admin panel side-navbar menu item can't be handled.");
                }
            },

            onRussianLanguageMenuItemClick  (): void {
                this.language = this.LANGUAGES.RUSSIAN;
                this.cookie.set('admin-panel.language', this.language);
            },
            onSlovakLanguageMenuItemClick   (): void {
                this.language = this.LANGUAGES.SLOVAK;
                this.cookie.set('admin-panel.language', this.language);
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){


            // this.$bus.$emit(this.EVENTS.LANGUAGE_SUBMENU_ITEM_CLICKED)
            // May be realized if it will be needed.

            this.$bus.$on(
                this.EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                this.onRussianLanguageMenuItemClick
            );
            this.$bus.$on(
                this.EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                this.onSlovakLanguageMenuItemClick
            );
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>