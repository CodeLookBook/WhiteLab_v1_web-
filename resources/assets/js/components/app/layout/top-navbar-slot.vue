// @flow
<template lang="pug">

    .TOP-NAVBAR-SLOT
        slot

</template>
<style lang="sass">

    @import ../../../../sass/mixins
    @import ../../../../sass/variables

    .TOP-NAVBAR-SLOT
        +position(r, $t:0, $l:0)
        +size    (100%, $top-navbar-slot-height)
        +border(red)

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
             * .TOP-NAVBAR-SLOT element height.
             * @param {Height} newHeight
             */
            height: {
                set: function (newHeight: Height) {

                    const event: EventObject<Height> = new EventObject(
                        newHeight,
                        this
                    );

                    this.$bus.$emit(
                        EVENTS.APP.TOP_NAVBAR_SLOT.HEIGHT_CHANGED,
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

        methods:{
            onWindowResize(): void {

                //Get current '.TOP-NAVBAR-SLOT' element height
                const rectangle: ClientRect    = this.$el.getBoundingClientRect();
                const newHeight: Number|number = rectangle.bottom - rectangle.top;

                //Save height at the component
                this.height = new Height(newHeight, 'px');
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            /**
             * Set .TOP-NAVBAR-SLOT element actual height.
             */
            {
                const rectangle: ClientRect    = this.$el.getBoundingClientRect();
                const newHeight: Number|number = rectangle.bottom - rectangle.top;

                if(this.pHeight !== null) {
                    this.height = this.pHeight;
                } else {
                    this.height = new Height(newHeight, 'px');
                }
            }

            /**
             * Change .TOP-NAVBAR-SLOT height if window 'clientHeight' was
             * changed.
             */
            window.addEventListener('resize', this.onWindowResize);
        }

    }
</script>