<template lang="pug">

    //.PAGE-BLOCK.TABLE: .ROW: .CELL
        #mapkit-1595
    .PAGE-BLOCK.TABLE: .ROW: .CELL()
        .MAP-IMG(ref="mapImg")


</template>
<style lang="sass" scoped>

    .PAGE-BLOCK
        width: 100%
        height: 100%

    .MAP-IMG
        width: 100%
        height: 100%
        background-size: cover
        background-repeat: no-repeat
        background-color: #b6b6b6
        background-position: center center
        background-image:  url(/address_map.jpg)

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