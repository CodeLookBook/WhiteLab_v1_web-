// @flow
<template lang="pug">

    .MAIN-CONTENT-SLOT
        top-navbar-slot(ref="topNavbarSlot")
            slot(name="APP-TOP-NAVBAR")

        content-slot(ref="contentSlot")
            slot

</template>
<style lang="sass">

    @import ../../../../sass/mixins
    @import ../../../../sass/variables

    .MAIN-CONTENT-SLOT
        +position(a, $t:0, $l:0)
        +size    (100%, 100%)
        overflow: auto

</style>
<script>

    import {Height      } from "../../../classes/types/Height";
    import {EVENTS      } from "../../../classes/enum/AppEvents";
    import {EventObject } from "../../../classes/types/EventObject";
    import TopNavbarSlot  from "./top-navbar-slot.vue";
    import ContentSlot    from "./content-slot.vue" ;

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    /**
     *  Note:
     * '.MAIN-CONTENT-SLOT' plays roll of mediator for his children's.
     * It handles complex connection between:
     * - .TOP-NAVBAR-SLOT component;
     * - and .CONTENT-SLOT component;
     */
    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------


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
             * .MAIN-CONTENT-SLOT element height.
             * @param {Height} newHeight
             */
            height: {
                set: function (newHeight: Height) {

                    const event: EventObject<Height> = new EventObject(
                        newHeight,
                        this
                    );

                    this.$bus.$emit(
                        EVENTS.APP.MAIN_CONTENT_SLOT.HEIGHT_CHANGED,
                        event
                    );

                    this.dHeight =  newHeight;

                    /**
                     *  Doesn't change .MAIN-CONTENT-SLOT html element height.
                     *  Just stores it inside component.
                     */
                },
                get: function () {
                    return this.dHeight;
                }
            }
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {

            /**
             * On .MAIN-CONTENT-SLOT height 'change', it compute new height
             * for '.CONTENT-SLOT' component. '.MAIN-CONTENT-SLOT' plays roll
             * of mediator for his children's and this method handles complex
             * connections between:
             * - window object (clientHeight);
             * - .TOP-NAVBAR-SLOT component;
             * - and .CONTENT-SLOT component;
             */
            'dHeight': {
                handler: function (newHeight, oldHeight){

                    //Change .MAIN-CONTENT-SLOT element height.
                    this.$refs.contentSlot.height = new Height(
                        newHeight.value - this.$refs.topNavbarSlot.height.value,
                        'px'
                    );
                },
                deep: true,
            }
        },

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods:{
            onWindowResize(e): void {

                const rectangle: ClientRect    = this.$el.getBoundingClientRect();
                const newHeight: Number|number = rectangle.bottom - rectangle.top;

                this.height = new Height(newHeight, 'px');
            },

            onAppTopNavbarSlotHeightChange(e: EventObject<Height>): void {

                const height: Height = e.value;

                //Change .MAIN-CONTENT-SLOT element height.
                this.$refs.contentSlot.height = new Height(
                    this.height.value - height.value,
                    'px'
                );
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            /**
             * Set .MAIN-CONTENT-SLOT element actual height on 'mounted' event.
             */
            {
                const rectangle: ClientRect      = this.$el.getBoundingClientRect();
                const newHeight: Number | number = rectangle.bottom - rectangle.top;

                this.height = new Height(newHeight, 'px');
            }

            /**
             * Change .MAIN-CONTENT-SLOT height if window 'clientHeight' was
             * changed by user.
             */
            window.addEventListener('resize', this.onWindowResize);

            /**
             * Change .MAIN-CONTENT-SLOT height if '.TOP_NAVBAR_SLOT' height was
             * changed programmatically.
             */
            this.$bus.$on(
                EVENTS.APP.TOP_NAVBAR_SLOT.HEIGHT_CHANGED,
                this.onAppTopNavbarSlotHeightChange
            );

        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            TopNavbarSlot,
            ContentSlot,
        }
    }

</script>