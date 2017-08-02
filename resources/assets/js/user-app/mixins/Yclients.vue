// @flow
<template lang="pug">

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {mapActions, mapGetters} from "vuex";
    import {Widget}                 from "../../shared-classes/entities/Widget";
    import LanguageSettings         from "./LanguageSettings.vue";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // MIXINS
        // --------------------------------------------------------------------

        mixins:[
            LanguageSettings,
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data() {

            const data: {
                isOrderWidgetExists: boolean,
            } = {
                isOrderWidgetExists: false,
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {
            ...mapGetters('OrderWidget', [
                'russianOrderWidget',
                'englishOrderWidget',
                'slovakOrderWidget',
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            ...mapActions('OrderWidget', [
                'loadRussianOrderWidget',
                'loadEnglishOrderWidget',
                'loadSlovakOrderWidget',
            ]),

            mountYlientWidget() {

                let widgetSrc: string = '';

                switch (this.language) {
                    case this.APP_LANGUAGES.RUSSIAN:

                        if (this.russianOrderWidget.src.trim()) {
                            widgetSrc = this.russianOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.englishOrderWidget.src.trim()) {
                            widgetSrc = this.englishOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.slovakOrderWidget.src.trim()) {
                            widgetSrc = this.slovakOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else {
                            this.isOrderWidgetExists = false;
                        }
                        break;

                    case this.APP_LANGUAGES.ENGLISH:

                        if (this.englishOrderWidget.src.trim()) {
                            widgetSrc = this.englishOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.russianOrderWidget.src.trim()) {
                            widgetSrc = this.russianOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.slovakOrderWidget.src.trim()) {
                            widgetSrc = this.slovakOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else {
                            this.isOrderWidgetExists = false;
                        }
                        break;

                    case this.APP_LANGUAGES.SLOVAK:

                        if (this.slovakOrderWidget.src.trim()) {
                            widgetSrc = this.slovakOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.russianOrderWidget.src.trim()) {
                            widgetSrc = this.russianOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else if (this.englishOrderWidget.src.trim()) {
                            widgetSrc = this.englishOrderWidget.src.trim();
                            this.isOrderWidgetExists = true;
                        } else {
                            this.isOrderWidgetExists = false;
                        }
                        break;
                    default:
                        throw new Error("'Yclient' order widget can't be load." +
                            "Unknown language Id.");
                }

                const script = window.document.createElement('script');
                script.src = widgetSrc;
                script.type = "text/javascript";
                script.setAttribute('class', 'YCLIENT_ORDER_WIDGET');
                this.$el.appendChild(script);
            },

            loadYclientWidget() {

                // DELETE EXISTING WIDGET SCRIPTS AND ELEMENTS
                {
                    const scripts       = document.getElementsByClassName('YCLIENT_ORDER_WIDGET');
                    const yCloseIcons   = document.getElementsByClassName('yCloseIcon');
                    const yWidgetCovers = document.getElementsByClassName('yWidgetCover');
                    const yWidgetBlocks = document.getElementsByClassName('yWidgetBlock');
                    const yStyles       = document.querySelectorAll('link[href*="yclients.com/css/ywidget/newweb.css"]')

                    if (scripts !== null) {
                        if(typeof scripts !== "undefined") {

                            // Warning: You mustn't you 'this.$el' as parent.
                            // In same situations it will acause Error. You
                            // must fined it with plain JS.
                            for (let i = 0; i < scripts.length; ++i) {
                                const parent = scripts[i].parentElement;
                                parent.removeChild(scripts[i]);
                            }
                        }
                    }

                    if (yCloseIcons !== null) {
                        if(typeof yCloseIcons !== "undefined") {

                            // Warning: You mustn't you 'this.$el' as parent.
                            // In same situations it will acause Error. You
                            // must fined it with plain JS.
                            for (let i = 0; i < yCloseIcons.length; ++i) {
                                const parent = yCloseIcons[i].parentElement;
                                parent.removeChild(yCloseIcons[i]);
                            }
                        }
                    }

                    if (yWidgetCovers !== null) {
                        if(typeof yWidgetCovers !== "undefined") {

                            for (let i = 0; i < yWidgetCovers.length; ++i) {
                                const parent = yWidgetCovers[i].parentElement;
                                parent.removeChild(yWidgetCovers[i]);
                            }
                        }
                    }

                    if (yWidgetBlocks !== null) {
                        if(typeof yWidgetBlocks !== "undefined") {

                            for (let i = 0; i < yWidgetBlocks.length; ++i) {
                                const parent = yWidgetBlocks[i].parentElement;
                                parent.removeChild(yWidgetBlocks[i]);
                            }
                        }
                    }

                    if (yStyles !== null) {
                        if(typeof yStyles !== "undefined") {

                            for (let i = 0; i < yStyles.length; ++i) {
                                const parent = yStyles[i].parentElement;
                                parent.removeChild(yStyles[i]);
                            }
                        }
                    }
                }

                // LOAD WIDGETS SETTINGS for all kind of languages
                {
                    // IF REFS on widgets WASN't LOADED yet then load them
                    if( !(!!this.russianOrderWidget.src &&
                          !!this.englishOrderWidget.src &&
                          !!this.slovakOrderWidget.src)
                    ){

                        // DOWNLOAD
                        this.loadRussianOrderWidget().then(
                            (response) => {
                                this.loadEnglishOrderWidget().then(
                                    (response) => {
                                        this.loadSlovakOrderWidget().then(
                                            (response) => {

                                                //MOUNT SCRIPT
                                                this.mountYlientWidget();
                                            }
                                        );
                                    }
                                );
                            }
                        );

                    } else {

                        //If refs were loaded, then - MOUNT SCRIPT
                        this.mountYlientWidget();
                    }
                }
            },

            // EVENT HANDLERS

            onAppLanguageChangedOnRussian(){
                this.loadYclientWidget();
            },
            onAppLanguageChangedOnEnglish(){
                this.loadYclientWidget();
            },
            onAppLanguageChangedOnSlovak(){
                this.loadYclientWidget();
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            this.loadYclientWidget();

            // SUBSCRIBE ON EVENTS
            {
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.NAVIGATION.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnRussian
                );
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.NAVIGATION.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnEnglish
                );
                this.$bus.$on(
                    this.APP_COMPONENTS_EVENTS.NAVIGATION.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnSlovak
                );
            }
        },

        beforeDestroy(){

            // UNSUBSCRIBE OF EVENTS
            {
                this.$bus.$off(
                    this.APP_COMPONENTS_EVENTS.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnRussian
                );
                this.$bus.$off(
                    this.APP_COMPONENTS_EVENTS.NAVIGATION.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnEnglish
                );
                this.$bus.$off(
                    this.APP_COMPONENTS_EVENTS.NAVIGATION.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                    this.onAppLanguageChangedOnSlovak
                );
            }

        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>