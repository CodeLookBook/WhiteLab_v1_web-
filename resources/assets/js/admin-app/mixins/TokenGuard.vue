<template lang="pug">

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {Token} from "../../shared-classes/facades/Token";

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
                token  : Token.getInstance(),
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


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        beforeCreate(){

            // CHECK user TOKEN
            {
                const token = Token.getInstance();

                if(token.isLoaded){
                    if(token.isExpired()){
                        token.del();
                        this.$router.push({name: 'login'});
                    }
                } else {
                    token.del();
                    this.$router.push({name: 'login'});
                }
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>