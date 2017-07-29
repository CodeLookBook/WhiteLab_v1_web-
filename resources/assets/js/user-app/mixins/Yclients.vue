// @flow
<template lang="pug">

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {APP_LANGUAGES} from "../classes/enum/APP_LANGUAGES";
    import {mapActions, mapGetters} from "vuex";
    import {Widget} from "../../shared-classes/entities/Widget";

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

            const  data: {
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
                'slovakOrderWidget' ,
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------
/*
        window.document.createElement('script')
        this.setupYclientOrderWidgetScriptProps(newWidgetSettings);
        this.mountYclientOrderWidget();
        this.isYclientsOrderWidgetMounted = false;
*/

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            ...mapActions('OrderWidget', [
                'loadRussianOrderWidget',
                'loadEnglishOrderWidget',
                'loadSlovakOrderWidget',
            ]),

            mountYlientWidget(el: HTMLElement, appLanguage: string){

                let widgetSrc: string = '';

                switch (appLanguage) {
                    case APP_LANGUAGES.RUSSIAN:

                        if(this.russianOrderWidget.src.trim()){
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

                    case APP_LANGUAGES.ENGLISH:

                        if(this.englishOrderWidget.src.trim()){
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

                    case APP_LANGUAGES.SLOVAK:

                        if(this.slovakOrderWidget.src.trim()){
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
                script.setAttribute('class', 'YCLIENT_ORDER_WIGET');
                el.appendChild(script);
            },

            //------------------------------------------------------
            loadYclientWidget(el: HTMLElement, appLanguage: string){

                // DELETE EXISTING SCRIPT
                {
                    const scripts = el.getElementsByClassName('YCLIENT_ORDER_WIGET');
                    if (scripts) {
                        if (scripts[0]) {
                            el.removeChild(scripts[0]);
                        }
                    }
                }

                // LOAD WIDGETS SETTINGS for all kind of languages
                {
                    this.loadRussianOrderWidget().then(
                        (response) => {
                            this.loadEnglishOrderWidget().then(
                                (response) => {
                                    this.loadSlovakOrderWidget().then(
                                        (response) => {
                                            this.mountYlientWidget(el, appLanguage);
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------



        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>