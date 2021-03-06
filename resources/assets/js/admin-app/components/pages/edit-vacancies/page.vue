// @flow

<template lang="pug">

    el-row
        el-col(
        :xs="{span:22, offset: 1}",
        :sm="{span:22, offset: 1}",
        :md="{span:14, offset: 1}",
        :lg="{span:12, offset: 1}",
        )
            el-row
                el-col
                    hr
                    h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") ФОРМА ДЛЯ ДОБАВЛЕНИЯ НОВОЙ ВАКАНСИИ:
                    h3(v-if="ADMIN_APP_LANGUAGES.SLOVAK   === language" ) FORMULÁR PRE PRIDANIE NOVÉHO PRACOVNÉHO MIESTA:
                    hr
                el-col
                    add-vacancy-form
            el-row(v-if="vacancies && vacancies.length > 0")
                el-col
                    hr
                    h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") СПИСОК ОТКРЫТЫХ ВАКАНСИЙ:
                    h3(v-if="ADMIN_APP_LANGUAGES.SLOVAK    === language") ZOZNAM OTVORENÝCH PRACOVNÝCH MIEST
                    hr
                el-col
                    update-vacancy-form(
                        v-for="vacancy in vacancies",
                        :key="vacancy.id",
                        :pId="vacancy.id",
                        :pNameRu="vacancy.nameRu",
                        :pNameEn="vacancy.nameEn",
                        :pNameSl="vacancy.nameSl",
                        :pContacts="vacancy.contacts",
                        :pDescriptionRu="vacancy.descriptionRu",
                        :pDescriptionEn="vacancy.descriptionEn",
                        :pDescriptionSl="vacancy.descriptionSl",
                        :pOpenedAt="vacancy.openedAt"
                    )


</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import TokenGuard       from "../../../mixins/TokenGuard.vue"
    import UpdateVacancyForm      from "./update-vacancy-form.vue"
    import AddVacancyForm   from "./add-vacancy-form.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {Vacancy}        from "../../../../shared-classes/entities/Vacancy";
    import {mapActions, mapGetters} from "vuex";
    import {Token}          from "../../../../shared-classes/facades/Token";

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

        mixins: [
            LanguageSettings,
            TokenGuard,
            UserMessage,
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){

            const data: {
                token   : Token,
            } = {
                token   : Token.getInstance(),
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {
            ...mapGetters('Vacancies',[
                'vacancies'
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------



        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {
            ...mapActions('Vacancies', [
                'loadVacancies',
            ]),
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted() {

            this.loadVacancies().then(
                (success) => {
                    //...
                }, (error) => {

                    if (this.token.isLoaded) {

                        if (this.token.isExpired()) {
                            this.token.del();
                            this.showTokenErrorAlert();
                        } else {
                            this.showDataLoadErrorAlert();
                        }
                    } else {
                        this.showTokenErrorAlert();
                    }
                }
            );
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            UpdateVacancyForm,
            AddVacancyForm,
        }

    };

</script>