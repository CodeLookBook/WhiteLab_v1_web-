// @flow

<template lang="pug">

    transition(
        appear,
        appear-class        = "PAGE-BLOCK-appear-class",
        appear-to-class     = "PAGE-BLOCK-appear-to-class",
    )
        .PAGE-BLOCK.TABLE: .ROW: .CELL

            // Page block fon image
            .DIV-IMG.TABLE: .ROW: .CELL
                transition(
                    appear,
                    appear-class    = "CONTENT-appear-class",
                    appear-to-class = "CONTENT-appear-to-class"
                )
                    .CONTENT.TABLE: .ROW: .CELL
                        div
                            img.BIG-LOGO(src="/images/logos/logo_whitelab_without_border_white.png")
                            p(v-if="language === APP_LANGUAGES.RUSSIAN") {{greetTextRu}}
                            p(v-if="language === APP_LANGUAGES.ENGLISH") {{greetTextEn}}
                            p(v-if="language === APP_LANGUAGES.SLOVAK ") {{greetTextSl}}

                            el-button.ORDER {{BUTTONS_NAMES.ORDER_BUTTON[language]}}

                            social-sharing.SOCIAL-SHARE(
                                title             = 'БЕЛЫЙ САД - городской формат центра красоты.',
                                description       = "Здесь вы найдете все к чему привыкла самая взыскательная аудитория, " +
                                                    "здесь все делается быстро и с искренней доброжелательностью " +
                                                    "гостеприимного дома.",
                                quote             = "БЕЛЫЙ САД - центр красоты.",
                                hashtags          = "БелыйСад, ЦентрКрасоты",
                                fbButtonName     = "GGG",
                                v-cloak,
                                inline-template
                            )
                                network(network="facebook")
                                    el-button.FB-SHARE(
                                        type="primary",
                                        icon="share",
                                        style="width: 80%; margin: 0 10% 0 10%",
                                    ) Facebook

</template>
<style lang="sass" scoped>

    @import "../../../../../sass/shared/_mixins"

    .PAGE-BLOCK
        background-color: black

        .DIV-IMG
            width:  100%
            height: 100%
            background-size: cover
            background: #b6b6b6 url("/images/GREET-SLIDE-FON_BLACK.jpg") center center

            .CONTENT
                position: relative
                width: 100%
                height: 100%
                color: white

                .ROW>.CELL
                    vertical-align: middle
                    text-align: justify

                    div
                        margin: auto auto
                        width: 17em

                        .BIG-LOGO
                            width: 100%
                            //width: 80%
                            //margin: 0 10% 0 10%
                            padding-top: 2em
                            height: auto
                        p
                            width: 80%
                            margin: 2.5em 10% 1em 10%
                            text-align: justify
                            font-size: 0.85em

                        .ORDER
                            width: 80%
                            margin: 0 10% 1em 10%
                            background-color: #ff627b
                            color           : white
                            border          : none
                            &:hover
                                color       : white
                                border-color: white
                                background-color: #f4576e
                            &:active
                                background-color: #ec576e

                        .SOCIAL-SHARE
                            display : block !important
                            width   : 100%  !important

                            .FB-SHARE


    //Transitions classes:

    .PAGE-BLOCK-appear-class
        opacity: 0
    .PAGE-BLOCK-appear-to-class
        opacity: 1
        transition: opacity, 0.3s

    .CONTENT-appear-class
        opacity: 0
    .CONTENT-appear-to-class
        opacity: 1
        +transition-property(opacity)
        +transition-duration(200ms)
        +transition-timing-function(ease)
        +transition-delay(500ms)

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {APP_LANGUAGES    } from "../../../classes/enum/APP_LANGUAGES";
    import {APP_BUTTONS_NAMES} from "../../../classes/enum/APP_BUTTONS_NAMES";
    import {COMPONENTS_EVENTS} from "../../../classes/enum/COMPONENTS_EVENTS";
    import {Cookie           } from "../../../../shared-classes/facades/Cookie";
    import {mapActions, mapGetters} from "vuex";

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
                BUTTONS_NAMES       : object,
                SHARED_ITEMS_NAMES  : object,
                APP_LANGUAGES       : object,
                cookie              : Cookie,
                language            : string | null
            } = {
                BUTTONS_NAMES       : APP_BUTTONS_NAMES.HOME_PAGE,
                SHARED_ITEMS_NAMES  : APP_BUTTONS_NAMES.SHARED,
                APP_LANGUAGES       : APP_LANGUAGES,
                cookie              : Cookie.getInstance(),
                language            : Cookie.getInstance().get('app.language') ?
                                      Cookie.getInstance().get('app.language') :
                                      APP_LANGUAGES.DEFAULT,
            };
            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {

            //STORAGE METHODS

            ...mapGetters('HomePageGreet',[
                'greetTextRu',
                'greetTextEn',
                'greetTextSl',
            ]),
        },
        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            // STORAGE METHODS

            ...mapActions('HomePageGreet', [
                'downloadGreet' ,
            ]),

            // EVENT HANDLERS

            onAppLanguageChangedOnRussian(){
                this.language = this.APP_LANGUAGES.RUSSIAN;
            },
            onAppLanguageChangedOnEnglish(){
                this.language = this.APP_LANGUAGES.ENGLISH;
            },
            onAppLanguageChangedOnSlovak(){
                this.language = this.APP_LANGUAGES.SLOVAK;
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            this.$bus.$on(
                COMPONENTS_EVENTS.APP.NAVIGATION.RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED,
                this.onAppLanguageChangedOnRussian
            );
            this.$bus.$on(
                COMPONENTS_EVENTS.APP.NAVIGATION.ENGLISH_LANGUAGE_MENU_ITEM_CLICKED,
                this.onAppLanguageChangedOnEnglish
            );
            this.$bus.$on(
                COMPONENTS_EVENTS.APP.NAVIGATION.SLOVAK_LANGUAGE_MENU_ITEM_CLICKED,
                this.onAppLanguageChangedOnSlovak
            );

            //DOWNLOAD malty-language GREET texts from server
            this.downloadGreet();
        }

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>