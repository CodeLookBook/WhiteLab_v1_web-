// @flow
<template lang="pug">

    .TOGGLE-BUTTON-WRAPPER.TABLE
        .ROW
            .CELL
                i.el-icon-menu.TOGGLE-BUTTON(@click="onClick")


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

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {SIDE_NAVBAR_TOGGLE_EVENTS} from "../../../../shared-classes/enums/SIDE_NAVBAR_TOGGLE_EVENTS"

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
            let data = {
                EVENTS_NAMES: Object,
                isClosed: boolean,
            } = {
                EVENT_NAMES: SIDE_NAVBAR_TOGGLE_EVENTS,
                isClosed: true,
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
            onClick(): void {

                //Create event
                if (this.isClosed === true) {
                    this.isClosed = false;
                    this.$bus.$emit(this.EVENT_NAMES.OPENED);
                } else if (this.isClosed === false) {
                    this.isClosed = true;
                    this.$bus.$emit(this.EVENT_NAMES.CLOSED);
                }
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){
            this.$bus.$emit(this.EVENT_NAMES.CLOSED);
        }

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>