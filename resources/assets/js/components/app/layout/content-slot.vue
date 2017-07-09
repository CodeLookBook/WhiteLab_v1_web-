// @flow

<template lang="pug">

    .CONTENT-SLOT(ref="contentSlot")
        slot

</template>
<style lang="sass">

    @import ../../../../sass/mixins
    @import ../../../../sass/variables

    .CONTENT-SLOT
        +position(r, $t:0, $l:0)
        +border(green)

</style>
<script>

    import {Height      } from "../../../classes/types/Height";
    import {EVENTS      } from "../../../classes/enum/AppEvents";
    import {EventObject } from "../../../classes/types/EventObject";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        props: {
            pHeight:{
                type: Height,
                default: function () {
                    return null;
                }
            }
        },

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){

            const data: {
                dHeight: Height,
            } =  {
                dHeight: new Height(0, 'px'),
            };
            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {

            /**
             * .CONTENT-SLOT element htight.
             * @param {Height} newHeight
             */
            height: {
                set: function (newHeight: Height) {

                    const event: EventObject<Height> = new EventObject(
                        newHeight,
                        this
                    );

                    this.$bus.$emit(
                        EVENTS.APP.CONTENT_SLOT.HEIGHT_CHANGED,
                        event
                    );

                    this.dHeight          = newHeight;
                    this.$el.style.height = newHeight.value + newHeight.measure;
                },
                get: function () {
                    return this.dHeight;
                }
            }
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){
        }

    }
</script>