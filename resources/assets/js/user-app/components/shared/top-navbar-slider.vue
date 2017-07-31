// @flow

<template lang="pug">

        nav.TOP-NAVBAR-SLIDER.SHOWN(:class="dClasses")
            slot

</template>
<style lang="sass" scoped>

    @import "../../../../sass/shared/_mixins"
    @import "../../../../sass/user-app/_variables"

    .TOP-NAVBAR-SLIDER
        +size($w:100%, $h: auto)
        z-index: 50000

        &.SHOWN
            +position  (fixed, $t: 0)
            +transition(top  , 0.5s )

        &.HIDDEN
            top: -4em

</style>
<script>

    import {Height           } from "../../classes/types/Height";
    import {COMPONENTS_EVENTS} from "../../classes/enum/COMPONENTS_EVENTS";
    import {Config as string } from "vue";
    import {ScrolledDown    } from "../../classes/events/ScrolledDown";
    import {ScrolledUp      } from "../../classes/events/ScrolledUp";
    import {Scroll           } from "../../classes/types/Scroll";
    import {Scrolling        } from "../../classes/events/Scrolling";
    import {HeightChanged    } from "../../classes/events/HeightChanged";
    import {Width            } from "../../classes/types/Width";
    import {Size             } from "../../classes/types/Size";
    import {ScrollingUp} from "../../classes/events/ScrollingUp";

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
                dHeight      : Height,// px
                dWidth       : Width, // px
                dScrollYWidth: Width, // px
                dClasses: {
                    HIDDEN: boolean,
                },
            } = {
                dHeight      : new Height(0, 'px'), // .TOP-NAVBAR HTML el. height
                dWidth       : new Width (0, 'px'), // .TOP-NAVBAR HTML el. width
                dScrollYWidth: new Width (0, 'px'), // Browser scroll width
                dClasses: {                        // .TOP-NAVBAR HTML el. classes
                    HIDDEN   : false,               // css class
                }
            };
            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed:{
            height      : {
                set: function (value: Height) {
                    this.dHeight = value;
                },
                get: function () {
                    return this.dHeight;
                }
            },
            width       : {
                set: function (value: Width) {
                    this.dWidth = value;
                },
                get: function () {
                    return this.dWidth;
                }
            },
            scrollYWidth: {
                set: function (value: Width) {
                    this.dScrollYWidth = value;
                },
                get: function () {
                    return this.dScrollYWidth;
                }
            }
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch:{
            dWidth(newWidth: Width, oldWidth: Width){

                // SET .TOP-NAVBAR HTML el. new css HEIGHT
                this.$el.style.width = newWidth.value + newWidth.measure;
            }
        },

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods:{

            // Event HANDLERS
            onScrolling   (e: Scrolling    ): void{

                const scrollTop: Scroll = e.value;

                // Show '.TOP-NAVBAR' HTML element.
                if(scrollTop.value <= this.height.value){
                    this.dClasses = {HIDDEN: false}
                }
            },
            onScrolledDown(e: ScrolledDown ): void{

                const scrollTop: Scroll = e.value;

                // Hide '.TOP-NAVBAR' HTML element.

                if (scrollTop.value > this.height.value) {
                    this.dClasses = {HIDDEN: true};
                }
            },
            onScrolledUp  (e: ScrolledUp   ): void{

                const scrollTop: Scroll = e.value;

                // Show '.TOP-NAVBAR' HTML element.
                if (scrollTop.value > this.height.value) {
                    this.dClasses = {HIDDEN: false,};
                }
            },
            onWindowResize(e               ): void{
                this.height = this.getComputedHTMLElementHeight();
                this.width  = this.getComputedWidthWithoutScroll();
            },

            // HELPERS
            getComputedHTMLElementHeight (): Height {

                const rectangle: ClientRect = this.$el.getBoundingClientRect();
                const height   : number     = rectangle.bottom -rectangle.top ;

                return new Height(height, 'px')
            },
            getComputedHTMLElementWidth  (): Width  {

                const rectangle: ClientRect = this.$parent.$el.getBoundingClientRect();
                const width    : number     = rectangle.right - rectangle.left;

                return new Width(width, 'px')
            },
            getComputedLeftBorderWidth   (): Width  {

                const style  = window.getComputedStyle(this.$el);
                const width: number  = parseFloat(style.borderLeftWidth);

                return new Width(width, 'px');
            },
            getComputedRightBorderWidth  (): Width  {

                const style  = window.getComputedStyle(this.$el);
                const width  = parseFloat(style.borderRightWidth);

                return new Width(width, 'px');
            },
            getComputedScrollYWidth      (): Width  {

                let displayCSSValue  : string; // CSS value
                let overflowYCSSValue: string; // CSS value
                let scrollWidth      : number;

                // SAVE current original STYLES values
                {
                    displayCSSValue   = this.$el.style.display;
                    overflowYCSSValue = this.$el.style.overflowY;
                }

                // SET TEMPORALLY styles values
                {
                    this.$el.style.display = 'block';
                    this.$el.style.overflowY = 'scroll';
                }

                // COMPUTE scroll width
                {
                    const leftBorderWidth : Width  = this.getComputedLeftBorderWidth();
                    const rightBorderWidth: Width  = this.getComputedRightBorderWidth();
                    const offsetWidth     : number = this.$el.offsetWidth;
                    const clientWidth     : number = this.$el.clientWidth;

                    scrollWidth = offsetWidth - clientWidth -
                        leftBorderWidth.value - rightBorderWidth.value;
                }

                // REPLACE temporally STYLES values by original
                {
                    this.$el.style.display   = displayCSSValue;
                    this.$el.style.overflowY = overflowYCSSValue;
                }

                return  new Width(scrollWidth, 'px');
            },
            getComputedWidthWithoutScroll(): Width  {

                //TODO: Check this function one more

                const currentWidth: number = parseInt(this.$el.style.width);
                this.$el.style.width = '100%';

                const newWidth: number = (this.$el.clientWidth -
                    this.scrollYWidth.value) / this.$el.clientWidth * 100;

                this.$el.style.width = currentWidth;

                return new Width(newWidth, '%');
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // Set DEFAULT properties values
            {
                this.height       = this.getComputedHTMLElementHeight();
                this.scrollYWidth = this.getComputedScrollYWidth();
                this.width        = this.getComputedWidthWithoutScroll();
            }

            // SUBSCRIBE on events.
            {
                this.$bus.$on(
                    COMPONENTS_EVENTS.APP.MAIN_CONTENT_SLOT.SCROLLING,
                    this.onScrolling
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
                window.addEventListener('resize', this.onWindowResize);
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>