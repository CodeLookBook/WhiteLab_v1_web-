// @flow

<script>

    import {Cookie} from "../../shared-classes/facades/Cookie";
    import {LANGUAGES} from "../classes/enums/LANGUAGES";
    import {SIDE_NAVBAR_EVENTS} from "../classes/enums/events-names/SIDE_NAVBAR_EVENTS";

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
                cookies : Object,
                language: string,
            } = {
                cookies : Cookie.getInstance(),
                language: Cookie.getInstance().get('admin-panel.language') ?
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

        methods: {

            // EVENT HANDLERS

            /**
             * Handles click on admin side navbar 'russian' language item.
             */
            onRussianLanguageMenuItemClick(): void {
                this.language = this.cookies.get('admin-panel.language');
            },

            /**
             * Handles click on admin side navbar 'russian' language item.
             */
            onSlovakLanguageMenuItemClick(): void {
                this.language = this.cookies.get('admin-panel.language');
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // SUBSCRIBE on events
            {
                this.$bus.$on(
                    SIDE_NAVBAR_EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onRussianLanguageMenuItemClick
                );
                this.$bus.$on(
                    SIDE_NAVBAR_EVENTS.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onSlovakLanguageMenuItemClick
                );
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>