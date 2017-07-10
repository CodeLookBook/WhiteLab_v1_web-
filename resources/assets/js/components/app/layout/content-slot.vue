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

    import {Height           } from "../../../classes/types/Height";
    import {COMPONENTS_EVENTS} from "../../../classes/enum/COMPONENTS_EVENTS";
    import {EVENTS           } from "../../../classes/enum/EVENTS";
    import {EventFactory     } from "../../../classes/factories/EventFactory";
    import {EventObject      } from "../../../classes/events/EventObject";

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

                    const event: EventObject = EventFactory.create(
                        EVENTS.HEIGHT_CHANGED,
                        newHeight,
                        this
                    );

                    this.$bus.$emit(
                        COMPONENTS_EVENTS.APP.CONTENT_SLOT.HEIGHT_CHANGED,
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