// @flow

<template lang="pug">

    .ADMIN-APP.TABLE(:class="classes")
        .ROW
            .SIDE-NAVBAR-SLOT.CELL

                slot(name="SIDE-NAVBAR-SLOT")
            .GROUP-WRAPPER-SLOT.CELL
                .GROUP-WRAPPER.TABLE
                    .ROW
                        .SIDE-NAVBAR-TOGGLE-SLOT.CELL
                            slot(name="SIDE-NAVBAR-TOGGLE-SLOT")
                        .CONTENT-SLOT.CELL
                            .SCROLL
                                slot(name="CONTENT-SLOT")

</template>
<style lang="sass" scoped>

    @import "../../../../../sass/shared/mixins"
    @import "../../../../../sass/admin-app/variables"

    .ADMIN-APP
        +size(100%, 100%)
        +position(relative, 0, (-$side-navbar-width))
        +transition(left, 0.2s)

        .SIDE-NAVBAR-SLOT.CELL
            +position(absolute, 0px, 0px)
            width: $side-navbar-width
            height: 100%
            overflow: auto
            background-color: gray

        .GROUP-WRAPPER-SLOT.CELL
            +position(absolute, 0px, $side-navbar-width)
            +size(100%, 100%)
            overflow: hidden

            .GROUP-WRAPPER.TABLE
                table-layout: fixed
                +size(100%, 100%)

                .SIDE-NAVBAR-TOGGLE-SLOT.CELL
                    width: 40px
                    height: 100%
                    vertical-align: top

                .CONTENT-SLOT.CELL
                    height: 100%
                    width: 100%

                    .SCROLL
                        position: absolute
                        display: block
                        +border(red)


    .SIDE-NAVBAR-IS-SHOWED
        +position(relative, 0, 0)
        +transition(left, 0.2s)


</style>
<script>

    // ------------------------------------------------------------------------
    import {SIDE_NAVBAR_TOGGLE_EVENTS} from "../../../classes/enums/events-names/SIDE_NAVBAR_TOGGLE_EVENTS";

    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------


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
                classes: Object
            } = {
                classes: {
                    "SIDE-NAVBAR-IS-SHOWED": false
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
            onToggleClosed(){
                this.classes['SIDE-NAVBAR-IS-SHOWED'] = false;
            },
            onToggleOpened(){
                this.classes['SIDE-NAVBAR-IS-SHOWED'] = true;
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            //SUBSCRIBE on events
            {
                this.$bus.$on(SIDE_NAVBAR_TOGGLE_EVENTS.OPENED, this.onToggleOpened);
                this.$bus.$on(SIDE_NAVBAR_TOGGLE_EVENTS.CLOSED, this.onToggleClosed);
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>