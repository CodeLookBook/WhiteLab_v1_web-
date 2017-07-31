<template lang="pug">

</template>
<style lang="sass">

</style>
<script>
    import {Cookie} from "../../shared-classes/facades/Cookie";
    import {APP_LANGUAGES} from "../classes/enum/APP_LANGUAGES";
    import {COMPONENTS_EVENTS} from "../classes/enum/COMPONENTS_EVENTS";

    // ------------------------------------------------------------------------
    // MIXIN
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
                APP_LANGUAGES: Object,
                APP_COMPONENTS_EVENTS: Object,
                cookies : Object,
                language: string,
            } = {
                APP_LANGUAGES: APP_LANGUAGES,
                APP_COMPONENTS_EVENTS: COMPONENTS_EVENTS,
                cookies : Cookie.getInstance(),
                language: Cookie.getInstance().get('app.language') ?
                          Cookie.getInstance().get('app.language') :
                          APP_LANGUAGES.DEFAULT,
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

            // EVENT HANDLERS

            /**
             * Handles click on admin side navbar 'russian' language item.
             */
            onRussianLanguageMenuItemClick(): void {
                this.language = this.cookies.get('app.language');
            },

            /**
             * Handles click on admin side navbar 'english' language item.
             */
            onEnglishLanguageMenuItemClick(): void {
                this.language = this.cookies.get('app.language');
            },

            /**
             * Handles click on admin side navbar 'russian' language item.
             */
            onSlovakLanguageMenuItemClick(): void {
                this.language = this.cookies.get('app.language');
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // SUBSCRIBE on events
            {
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onRussianLanguageMenuItemClick
                );
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onEnglishLanguageMenuItemClick
                );
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onSlovakLanguageMenuItemClick
                );
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>