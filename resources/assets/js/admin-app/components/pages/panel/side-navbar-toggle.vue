// @flow

<template lang="pug">

    .TOGGLE-BUTTON-WRAPPER.TABLE
        .ROW
            .CELL
                i.el-icon-menu.TOGGLE-BUTTON(@click="onClick()")


</template>
<style lang="sass" scoped>

    @import "../../../../../sass/shared/mixins"

    .TOGGLE-BUTTON-WRAPPER
        height: 100%
        width: 100%

        &>.ROW>.CELL
            +size(100%, 100%)
            background-color: #f1f1f1
            text-align: center

    .el-icon-menu
        display: inline-block
        font-size: 1.85em
        line-height: 2.2em
        color: #53bdff !important
        &:hover
            cursor: pointer

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {SIDE_NAVBAR_TOGGLE_EVENTS} from "../../../classes/enums/events-names/SIDE_NAVBAR_TOGGLE_EVENTS"

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
                EVENTS: SIDE_NAVBAR_TOGGLE_EVENTS,
                isClosed: true,
            };
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
            onClick(): void {

                //Create event
                if (this.isClosed === true) {

                    // OPENED
                    this.isClosed = false;
                    this.$bus.$emit(this.EVENTS.OPENED);
                } else if (this.isClosed === false) {

                    // CLOSED
                    this.isClosed = true;
                    this.$bus.$emit(this.EVENTS.CLOSED);
                }
            },

            onClosedEvent(){

                if (this.isClosed === false) {

                    // CLOSED
                    this.isClosed = true;

                    // You Don't have to fire 'CLOSED' event here.
                }
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // SUBSCRIBE on events
            {
                this.$bus.$emit(this.EVENTS.CLOSED);

                // Events that are produced by side-navbar menu items.
                this.$bus.$on(this.EVENTS.CLOSED, this.onClosedEvent);
            }
        }

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>