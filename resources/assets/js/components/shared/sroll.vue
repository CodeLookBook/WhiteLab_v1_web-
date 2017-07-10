// @flow

<template lang="pug">

    .SCROLL
        slot

</template>
<style lang="sass">

    @import "../../../sass/_mixins"
    @import "../../../sass/_variables"

    .SCROLL
        +size    (100%, 100%)
        overflow: auto

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
            pScrolled: {
                type: String,
                required: true,
            },
            pScrolledUp: {
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


                // Create "SCROLLED" event on every custom scroll in browser.
                {
                    const newPosition: number = this.$el.scrollTop;
                    let newState: Size = new Scroll(newPosition, 'px');
                    let event: EventObject = EventFactory.create(
                        EVENTS.SCROLLED,
                        newState,
                        this
                    );

                    this.$bus.$emit(this.pScrolled, event);
                }

                if(!this._timer) {

                    // Create "SCROLL STARTED" event.
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

                            //UPDATE 'dEndPosition' PROPERTY
                        } else {

                            //If user didn't stop scrolling then update 'dEndPosition'.
                            this.dEndPosition = new Scroll(this.$el.scrollTop, "px");
                        }

                    }).bind(this), 200);
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