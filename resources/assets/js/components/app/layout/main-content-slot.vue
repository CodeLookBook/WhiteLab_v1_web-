// @flow
<template lang="pug">

    .MAIN-CONTENT-SLOT
        scroll(
            :pScrolling     = "dEventNames.SCROLLING"     ,
            :pScrollingUp   = "dEventNames.SCROLLING_UP"  ,
            :pScrolledUp    = "dEventNames.SCROLLED_UP"   ,
            :pScrollingDown = "dEventNames.SCROLLING_DOWN",
            :pScrolledDown  = "dEventNames.SCROLLED_DOWN" ,
            :pScrollStarted = "dEventNames.SCROLL_STARTED",
            :pScrollStopped = "dEventNames.SCROLL_STOPPED", )

            top-navbar-slot(ref="topNavbarSlot")
                slot(name="TOP-NAVBAR-SLOT")

            content-slot(ref="contentSlot")
                slot(name="CONTENT-SLOT")

</template>
<style lang="sass">

    @import ../../../../sass/mixins
    @import ../../../../sass/variables

    .MAIN-CONTENT-SLOT
        +position(a, $t:0, $l:0)
        +size    (100%, 100%)
        overflow: hidden


</style>
<script>

    import Scroll              from "../../shared/sroll.vue"
    import {Height           } from "../../../classes/types/Height";
    import {COMPONENTS_EVENTS} from "../../../classes/enum/COMPONENTS_EVENTS";
    import {EVENTS           } from "../../../classes/enum/EVENTS";
    import {EventObject      } from "../../../classes/events/EventObject";
    import TopNavbarSlot       from "./top-navbar-slot.vue";
    import ContentSlot         from "./content-slot.vue" ;
    import {HeightChanged    } from "../../../classes/events/HeightChanged";
    import {EventFactory     } from "../../../classes/factories/EventFactory";

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
                dEventNames: object,
            } =  {
                dHeight: new Height(0, 'px'),
                dEventNames: COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT,
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

                    this.dHeight =  newHeight;

                    const event: EventObject = EventFactory.create(
                        EVENTS.HEIGHT_CHANGED,
                        newHeight,
                        this
                    );

                    this.$bus.$emit(
                        COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT.HEIGHT_CHANGED,
                        event
                    );

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

                const rectangle: ClientRect = this.$el.getBoundingClientRect();
                const newHeight: number     = rectangle.bottom - rectangle.top;

                this.height = new Height(newHeight, 'px');
            },

            onAppTopNavbarSlotHeightChange(e: HeightChanged): void {

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
                const rectangle: ClientRect = this.$el.getBoundingClientRect();
                const newHeight: number = rectangle.bottom - rectangle.top;

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
                COMPONENTS_EVENTS.APP.TOP_NAVBAR_SLOT.HEIGHT_CHANGED,
                this.onAppTopNavbarSlotHeightChange
            );

        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            TopNavbarSlot,
            ContentSlot,
            Scroll,
        }
    }

</script>