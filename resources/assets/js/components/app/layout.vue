<template lang="pug">

    .APP-LAYOUT(:class="classes")

        side-navbar-slot
            slot(name="SIDE-NAVBAR-SLOT")

        main-content-slot

            .WRAPPER(slot="TOP-NAVBAR-SLOT")
                slot(name="TOP-NAVBAR-SLOT")

            .WRAPPER(slot="CONTENT-SLOT")
                slot(name="CONTENT-SLOT")

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

    .APP-LAYOUT
        +position(r, $t:0, $l:0)
        +size    (100%, 100%)
        overflow: visible
        +transition(left, 0.5s)

        .WRAPPER
            +size(100%, 100%)

    .SHOW-SIDE-NAVBAR
        @media (min-width: 261px)
            left: 260px
        @media (max-width: 260px)
            left: 100%

</style>
<script>

    //-------------------------------------------------------------------------
    // Import child components
    //-------------------------------------------------------------------------

    import MainContentSlot from "./layout/main-content-slot.vue";
    import SideNavbarSlot  from "./layout/side-navbar-slot.vue" ;
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
            return {
                dClasses: {
                    'SHOW-SIDE-NAVBAR': false
                }
            }
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {
            classes: {
                get: function () {
                    return {...this.dClasses};
                },
                set: function (value: object) {
                    this.dClasses = {...value};
                },
            }
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {
            onTopNavbarToggleItemClick(){
                this.dClasses['SHOW-SIDE-NAVBAR'] = true;
            },
            onCloseSidebarItemClick(){
                this.dClasses['SHOW-SIDE-NAVBAR'] = false;
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // SUBSCRIBE on events.
            {
                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.NAVIGATION.TOGGLE_ITEM_CLICKED,
                    this.onTopNavbarToggleItemClick
                );
                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.NAVIGATION.CLOSE_SIDEBAR_ITEM_CLICKED,
                    this.onCloseSidebarItemClick
                )
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            MainContentSlot,
            SideNavbarSlot,
        }

    }

</script>