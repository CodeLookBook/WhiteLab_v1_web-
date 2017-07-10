// @flow

<template lang="pug">

        nav.TOP-NAVBAR.SHOWN.TABLE(:class="dClasses")
            .ROW
                .CELL
                    .CONTENT-WRAPPER.TABLE
                        .ROW
                            .CELL
                                | BRAND
                            .CELL
                                | MANU
                            .CELL
                                | MANU SWITCHER

</template>
<style lang="sass" scoped>

    @import ../../../sass/mixins
    @import ../../../sass/variables

    .TOP-NAVBAR
        +size($w:100%, $h:$top-navbar-height)
        padding: 0 10%
        +border(#ffdb53)

        &.SHOWN
            position: fixed
            top: 0px
            left: 0px
            -webkit-transition: top, 0.5s
            -moz-transition   : top, 0.5s
            -ms-transition    : top, 0.5s
            -o-transition     : top, 0.5s
            transition        : top, 0.5s

        &.HIDDEN
            top: -$top-navbar-height

        &>.ROW
            .CELL
                +border(#76d4ff)

            .CONTENT-WRAPPER
                +size($w:100%, $h:100%)

                .ROW
                    .CELL

</style>
<script>

    import {Height           } from "../../classes/types/Height";
    import {COMPONENTS_EVENTS} from "../../classes/enum/COMPONENTS_EVENTS";
    import {Config as string } from "vue";
    import {ScrolledDown     } from "../../classes/events/ScrolledDown";
    import {ScrolledUp       } from "../../classes/events/ScrolledUp";
    import {Scroll           } from "../../classes/types/Scroll";
    import {Scrolled         } from "../../classes/events/Scrolled";
    import {HeightChanged    } from "../../classes/events/HeightChanged";

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
                dHeight : Height,
                dClasses: {
                    HIDDEN: boolean,
                },
            } = {
                dHeight : new Height(0, 'px'),
                dClasses: {
                    HIDDEN  : false, // css class
                }
            };
            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed:{
            height:{
                set: function (value: Height) {
                    this.dHeight = value;
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

            onScrolled    (e: Scrolled     ): void{

                const scrollTop: Scroll = e.value;

                // Show '.TOP-NAVBAR' HTML element.
                if(scrollTop.value <= this.height.value){
                    this.dClasses = {
                        HIDDEN  : false,
                    }
                }
            },
            onScrolledDown(e:ScrolledDown  ): void{

                const scrollTop: Scroll = e.value;

                // Hide '.TOP-NAVBAR' HTML element.
                {
                    if(scrollTop.value > this.height.value){
                        this.dClasses = {
                            HIDDEN  : true,
                        }
                    }
                }
            },
            onScrolledUp  (e: ScrolledUp   ): void{

                const scrollTop: Scroll = e.value;

                // Show '.TOP-NAVBAR' HTML element.
                {
                    if(scrollTop.value > this.height.value){
                        this.dClasses = {
                            HIDDEN  : false,
                        }
                    } else if(scrollTop.value <= this.height.value){
                        this.dClasses = {
                            HIDDEN  : false,
                        }
                    }
                }
            },
            onWindowResize(e: HeightChanged): void{
                this.dHeight = this.getComputedHTMLElementHeight();
            },

            getComputedHTMLElementHeight(): Height{
                const rectangle: ClientRect = this.$el.getBoundingClientRect();
                const height   : number     = rectangle.bottom -rectangle.top ;

                return new Height(height, 'px')
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // Set Default height value
            {
                this.dHeight = this.getComputedHTMLElementHeight();
            }

            // Subscribe on events.
            {

                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT.SCROLLED,
                    this.onScrolled
                );

                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT.SCROLLED_DOWN,
                    this.onScrolledDown
                );

                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT.SCROLLED_UP,
                    this.onScrolledUp
                );

                // Window resize
                window.addEventListener(
                    'resize',
                    this.onWindowResize
                );

            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>