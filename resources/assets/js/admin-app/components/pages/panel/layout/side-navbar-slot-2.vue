// @flow

<template lang="pug">

    .SLOT
        slot
        DIV
            .SCROLL
                slot
            .TOGGLE
                el-row
                    el-col(xs="24", sm="24", md="24", lg="24")
                        i.el-icon-menu(@click="onToggleClick")

</template>
<style lang="sass" scoped>

    @import "../../../../../../sass/shared/_mixins"

    .SLOT
        +position(absolute, 0, 0)
        +size($h:100%, $w:260px)
        z-index: 50000
        //+border(grey)

        DIV
            +size(100%, 100%)

            .SCROLL
                width: 220px
                float: left
                background-color: #f1f1f1

            .TOGGLE
                +size(40px, 100%)
                background-color: #f1f1f1
                float: left
                text-align: center

                .el-icon-menu
                    display: inline-block
                    font-size: 1.85em
                    line-height: 2.2em
                    color: #53bdff !important



</style>
<script>

    // ------------------------------------------------------------------------
    import {SIDE_NAVBAR_EVENTS} from "../../../../../shared-classes/enums/SIDE_NAVBAR_EVENTS";

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
                EVENT_NAMES: Object
            } = {
                EVENT_NAMES: SIDE_NAVBAR_EVENTS
            }

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
            onToggleClick(): void {
                this.$bus.$emit(this.EVENT_NAMES.TOGGLE_MENU_ITEM_CLICKED)
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>