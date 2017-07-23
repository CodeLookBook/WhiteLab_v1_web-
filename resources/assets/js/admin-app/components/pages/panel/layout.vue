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
        +position(relative, 0, (-260px))

        .SIDE-NAVBAR-SLOT.CELL
            +position(absolute, 0px, 0px)
            width: $side-navbar-width
            height: 100%
            background-color: gray
            //+border(yellow)

        .GROUP-WRAPPER-SLOT.CELL
            +position(absolute, 0px, $side-navbar-width)
            +size(100%, 100%)
            +border(red)
            overflow: hidden

            .GROUP-WRAPPER.TABLE
                table-layout: fixed
                +size(100%, 100%)
                +border(blue)

                .SIDE-NAVBAR-TOGGLE-SLOT.CELL
                    width: 40px
                    height: 100%
                    vertical-align: top
                    +border(#0ce12d)

                .CONTENT-SLOT.CELL
                    height: 100%
                    width: 100%
                    +border(red)

                    .SCROLL
                        +border(black)


    .SIDE-NAVBAR-IS-SHOWED
        +position(relative, 0, 0)
        +transition(left, 0.2)


</style>
<script>

    // ------------------------------------------------------------------------
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
                    "SIDE-NAVBAR-IS-SHOWED": true
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
                alert('OPENED')
                this.classes['SIDE-NAVBAR-IS-SHOWED'] = true;
            },
            onToggleOpened(){
                alert('CLOSED')
                this.classes['SIDE-NAVBAR-IS-SHOWED'] = false;
            }
        }

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>