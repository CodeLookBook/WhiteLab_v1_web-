<template lang="pug">

    //.PAGE-BLOCK.TABLE: .ROW: .CELL
        #mapkit-1595
    .PAGE-BLOCK.TABLE: .ROW: .CELL
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
        //background: #b6b6b6 url("/api/admin/panel/address_map") center center
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
          return {
              styles: {
                  'background-size': 'cover',
                  'background': '#b6b6b6 url("/images/GREET-SLIDE-FON_BLACK.jpg") center center',
              }
          }
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
            /*uploadGoogleMap(){
                init();
            }*/
        },


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){
            //this.uploadGoogleMap();

            // Load font image.
            {
                this.$http.post("/api/admin/panel/address_map").then(
                    (response) => {
                        console.log("response: ");
                        console.log(response);
                    }
                ).catch(
                    (error) => {
                        console.log("error: ");
                        console.log(error);
                    }
                );
            }
            const mapImg = new Image();
            mapImg.src = ''
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {

        }

    };

</script>