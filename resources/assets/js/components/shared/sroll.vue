// @flow

<template lang="pug">

    .SCROLL
        slot

</template>
<style lang="sass">

    @import "../../../sass/_mixins"
    @import "../../../sass/_variables"

    .SCROLL
        height: 100%
        overflow-y: scroll

</style>
<script>

    import {Scroll           } from "../../classes/types/Scroll";
    import {Config as boolean} from "vue";
    import {EventObject      } from "../../classes/events/EventObject";
    import {EventFactory     } from "../../classes/factories/EventFactory";
    import {EVENTS           } from "../../classes/enum/EVENTS";
    import {Size             } from "../../classes/types/Size";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        props:{
            pScrolling: {
                type: String,
                required: true,
            },
            pScrollingUp: {
                type: String,
                required: true,
            },
            pScrolledUp: {
                type: String,
                required: true,
            },
            pScrollingDown: {
                type: String,
                required: true,
            },
            pScrolledDown: {
                type: String,
                required: true,
            },
            pScrollStarted: {
                type: String,
                required: true,
            },
            pScrollStopped: {
                type: String,
                required: true,
            }
        },

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                dStartPosition: Scroll,
                dEndPosition  : Scroll,
                dTimer        : number,
            } = {
                dStartPosition: new Scroll(0, 'px'),
                dEndPosition  : new Scroll(0, 'px'),
                dTimer        : 0,
            };
            return data;
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
            _onScroll(e){

                let newPosition: number = 0;
                let newState: Size;

                // Get NEW scroll POSITION
                {
                    newPosition = this.$el.scrollTop;
                    newState    = new Scroll(newPosition, 'px');
                }

                // CREATE "SCROLLING" event on every custom scroll in browser.
                {
                    let event: EventObject = EventFactory.create(
                        EVENTS.SCROLLING,
                        newState,
                        this
                    );

                    this.$bus.$emit(this.pScrolling, event);
                }

                // CREATE "SCROLLING UP" event on every custom scroll in browser.
                {
                    if(this.dStartPosition.value > this.dEndPosition.value) {

                        let event: EventObject = EventFactory.create(
                            EVENTS.SCROLLING_UP,
                            newState,
                            this
                        );

                        this.$bus.$emit(this.pScrollingUp, event);
                    }
                }

                // CREATE "SCROLLING DOWN" event on every custom scroll in browser.
                {
                    if(this.dStartPosition.value < this.dEndPosition.value) {

                        let event: EventObject = EventFactory.create(
                            EVENTS.SCROLLING_DOWN,
                            newState,
                            this
                        );

                        this.$bus.$emit(this.pScrollingDown, event);
                    }
                }

                if(!this._timer) {

                    // CREATE "SCROLL STARTED" event.
                    {
                        const newPosition: number = this.$el.scrollTop;
                        let   newState   : Size   = new Scroll(newPosition, 'px');
                        let event: EventObject = EventFactory.create(
                            EVENTS.SCROLL_STARTED,
                            newState,
                            this
                        );

                        this.dStartPosition = newState;

                        this.$bus.$emit(this.pScrollStarted, event);
                    }

                    // Set interval that will check did user stop scrolling.
                    this._timer = setInterval((function () {

                        let   oldPosition: number = this.dEndPosition.value;
                        const newPosition: number = this.$el.scrollTop;

                        // CREATE "SCROLL STOPPED" event
                        if (oldPosition === newPosition) {

                            let newState: Size = new Scroll(newPosition, 'px');
                            let event: EventObject  = EventFactory.create(
                                EVENTS.SCROLL_STOPPED,
                                newState,
                                this
                            );
                            this.dEndPosition = newState;

                            this.$bus.$emit(this.pScrollStopped, event);

                            // CREATE "SCROLLED UP" event
                            if (this.dStartPosition.value > newPosition) {

                                let event: EventObject  = EventFactory.create(
                                    EVENTS.SCROLLED_UP,
                                    newState,
                                    this
                                );

                                this.$bus.$emit(this.pScrolledUp, event);

                                // CREATE "SCROLLED DOWN" event
                            } else if (this.dStartPosition.value < newPosition) {

                                let event: EventObject  = EventFactory.create(
                                    EVENTS.SCROLLED_DOWN,
                                    newState,
                                    this
                                );

                                this.$bus.$emit(this.pScrolledDown, event);
                            }

                            //If user stopped scrolling then CLEAR TIMER.
                            if(this._timer){
                                clearInterval(this._timer);
                                this._timer = 0;
                            }

                        } else {

                            // UPDATE - 'dEndPosition' property value. If user
                            // didn't stop scrolling .
                            this.dEndPosition = new Scroll(this.$el.scrollTop, "px");
                        }

                    }).bind(this), 25);
                }
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){
            this.$el.addEventListener('scroll', this._onScroll);
        },

        beforeDestroy(){
            if(typeof this._timer !== 'undefined'){
                this.clearInterval(this._timer);
            }
        },
    };

</script>