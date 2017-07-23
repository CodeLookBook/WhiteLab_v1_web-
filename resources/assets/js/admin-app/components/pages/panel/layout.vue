<template lang="pug">

    .ADMIN-APP.TABLE
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


        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>